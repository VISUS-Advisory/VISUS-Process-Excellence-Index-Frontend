import React, { useEffect, useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

export default function Step4({ setStepIndex, selectedCategories }) {
  const newArray = [
    {
      category: "Controlling",
      id: 1,
      question: [
        {
          Headline:
            "Wie bewerten Sie Ihren internen Prozess zur <b>Kundenprofitabilität</b>?",
          Process: "Kundenprofitabilität",
          answer: {
            Digitalisierungsgrad: 2,
            Priorität: 3,
            Prozessreife: 4,
          },
        },
        {
          Headline:
            "Wie bewerten Sie Ihren internen Prozess zur <b>Prozessoptimierung</b>?",
          Process: "Prozessoptimierung",
          answer: {
            Digitalisierungsgrad: 4,
            Priorität: 1,
            Prozessreife: 2,
          },
        },
      ],
    },
    {
      category: "Einkauf",
      id: 2,
      question: [
        {
          Headline:
            "Wie bewerten Sie Ihren internen Prozess zum <b>Lieferantenmanagement</b>?",
          Process: "Lieferantenmanagement",
          answer: {
            Digitalisierungsgrad: 4,
            Priorität: 4,
            Prozessreife: 3,
          },
        },
        {
          Headline:
            "Wie bewerten Sie Ihren internen Prozess zur <b>Bedarfsermittlung</b>?",
          Process: "Bedarfsermittlung",
          answer: {
            Digitalisierungsgrad: 1,
            Priorität: 1,
            Prozessreife: 1,
          },
        },
        {
          Headline:
            "Wie bewerten Sie Ihren internen Prozess zur <b>Bedarfsermittlung</b>?",
          Process: "Bedarfsermittlung",
          answer: {
            Digitalisierungsgrad: 1,
            Priorität: 1,
            Prozessreife: 1,
          },
        },
      ],
    },
  ];
  const [isEmail, setIsEmail] = useState("");
  const [scoresArray, setScoresArray] = useState([]);
  // const scoresArray = [];
  useEffect(() => {
    // Log entry into the useEffect hook
    console.log("hello boy");

    // Initialize an empty array to collect new scores
    let newScoresArray = [];

    // Iterate through each category and its questions
    for (let i = 0; i < selectedCategories.length; i++) {
      const category = selectedCategories[i];
      for (let j = 0; j < category.question.length; j++) {
        const q = category.question[j];
        const answer = q.answer;

        // Calculate score. Rate 0 if skipped
        const score = (() => {
          if (
            answer.Prozessreife *
              answer.Digitalisierungsgrad *
              answer.Priorität >
            0
          ) {
            return (
              5 -
              answer.Prozessreife +
              (5 - answer.Digitalisierungsgrad) +
              answer.Priorität
            );
          } else {
            return 0;
          }
        })();
        console.log("score:", score); // Log score to verify calculations

        // Ensure comment is an array and not null/undefined
        const comments = Array.isArray(answer.comment)
          ? JSON.stringify(answer.comment.map((item) => item?.commentText))
          : JSON.stringify([]);

        // Create new object with relevant properties
        const newObj = {
          Process: q.Process,
          score,
          reife: answer.Prozessreife,
          digitalisierungsstand: answer.Digitalisierungsgrad,
          priorität: answer.Priorität,
          comments: comments, // Assign comments directly
          Category: category?.Category,
          Description:
            q.Description.length > 0 ? q.Description.join(". ") + "." : "",
        };

        // Push new object to the new scores array
        newScoresArray.push(newObj);

        // Log newObj for debugging
        console.log("newObj", newObj);
      }
    }

    // Update the state with the new array
    setScoresArray(newScoresArray);
  }, [selectedCategories]); // Added dependency on selectedCategories to re-run when it changes

  // Sort the array by score in descending order
  scoresArray.sort((a, b) => b.score - a.score);

  // Get the top 5 scores
  const top5Scores = scoresArray.slice(0, 5);

  // Sort scores in descending order
  const sortedScores = [...top5Scores].sort((a, b) => b.score - a.score);

  // Function to calculate padding based on score position in sorted list
  const calculatePadding = (uniqueScores) => {
    const basePadding = 50;
    const step = 10; // Adjust this step value as needed to control the decrement
    const paddingMap = new Map();

    uniqueScores.forEach((score, index) => {
      paddingMap.set(score, basePadding - index * step);
    });

    return paddingMap;
  };

  // Get unique scores
  const uniqueScores = [...new Set(sortedScores.map((item) => item.score))];
  const paddingMap = calculatePadding(uniqueScores);

  // Define colors for top 5 ranks
  const rankBackgroundColors = [
    "#FF343433",
    "#FF664433",
    "#FF902A33",
    "#FFFFFF33",
    "#FFFFFF33",
  ];

  // Define text colors for top 5 ranks
  const rankTextColors = [
    "#FF3434",
    "#FF6644",
    "#FF902A",
    "#FFFFFF",
    "#FFFFFF",
  ];
  console.log("scoresArray", scoresArray);

  const handleSubmit = () => {
    // Validate email
    const isEmailValid = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const email = isEmail; // Assuming isEmail is the email string

    if (!isEmailValid(email)) {
      toast.error("Invalid email address");
      console.log("Invalid email address");
      return;
    }

    // Assuming scoresArray is populated as per your logic
    let calcularion = {
      email: email,
      evaluations: { evaluations: scoresArray },
    };
    console.log("calcularion", calcularion);

    const apiUrl =
      // "http://127.0.0.1:8000/send-email"
      "https://visus-process-excellence-index-backend.azurewebsites.net/send-email"; // Replace with your API endpoint
    toast.success(`Sending data to API:, ${apiUrl}!`);
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        X_API_Key: "1234",
      },
      body: JSON.stringify(calcularion), // Convert scoresArray to JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Assuming API returns JSON response
      })
      .then((data) => {
        console.log("API response:", data); // Handle API response
        toast.success(data);
      })
      .catch((error) => {
        console.error("Error sending data to API:", error); // Handle fetch errors
      });
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="min-h-[100vh]"
      >
        <div className="2xl:pt-[57px] pt-[27px]">
          <img
            src="/Logo1.svg"
            alt=""
            className="m-auto 2xl:h-auto 2xl:w-auto h-[30px] w-auto"
          />
        </div>
        <div className="2xl:mx-[110px] lg:mx-[60px] mx-[20px] bg-[#000000CC] text-[#F2E9D8CC] rounded-[30px] border border-[#585650] 2xl:mt-[48px] mt-[18px]">
          <div className=" w-[100%] m-auto 2xl:py-[38px] py-[18px] xl:px-[37px] px-[15px]">
            <p className="uppercase text-[18px] font-[400] text-[#F2E9D8] text-center">
              Progress
            </p>
            <div className="rounded-[30px] h-[15px] bg-[#000000CC] p-[3px] mt-[8px]">
              <div
                className="h-[100%] w-[100%] rounded-[30px]"
                style={{
                  background:
                    "linear-gradient(90deg, #D54A1A 0%, #E8B33B 100%)",
                }}
              ></div>
            </div>
            <div className="flex items-center justify-between 2xl:mt-[60px] mt-[10px]">
              <p className="sm:text-[18px] text-[#F2E9D8] text-base ">
                Geschäftsprozess
              </p>
              <p className=" text-[14px] font-medium text-[#F2E9D8] ">
                Results
              </p>
            </div>
            <div className="2xl:mt-[20px] mt-[10px]">
              {sortedScores
                .filter((item) => item.score > 0)
                .map((item, index) => (
                  <div
                    key={item.Process}
                    className="p-[3px] rounded-full w-[100%] bg-[black] gradient-border2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center sm:pl-[28px] pl-[10px]">
                        <div
                          className="w-[14px] h-[14px] rounded-full"
                          style={{ backgroundColor: rankTextColors[index] }}
                        />
                        <p className="text-[#F2E9D8] font-medium sm:text-base text-[10px] sm:ml-[14px] ml-[5px]">
                          {item.Process}
                        </p>
                      </div>
                      <div
                        className="py-[5px] rounded-full"
                        style={{
                          paddingLeft: `${paddingMap.get(item.score)}px`,
                          paddingRight: `${paddingMap.get(item.score)}px`,
                          backgroundColor: rankBackgroundColors[index],
                          color: rankTextColors[index],
                        }}
                      >
                        {item.score}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-[10px]">
              <div className="p-[5px] rounded-full w-[100%] sm:text-base text-[10px] bg-black gradient-border2 font-[500] text-[#F2E9D8CC] text-center py-[10px]">
                {/* Get &nbsp;+
                {scoresArray.length < 10
                  ? scoresArray.length
                  : Math.floor(scoresArray.length / 10) * 10}
                &nbsp; Remaining Prozess via Email */}
                Erhalten Sie weitere Informationen zu den Prozessen via Emai
              </div>
            </div>
            <div className="sm:flex items-center mt-[18px]">
              <p className="sm:text-[20px] text-[14px] text-[#F2E9D8] uppercase">
                Ergebnisse
              </p>
              <div class="gradient-border2 relative sm:ml-[28px] sm:mt-0 mt-4">
                <input
                  onChange={(event) => setIsEmail(event.target.value)}
                  value={isEmail}
                  placeholder="Report per Email erhalten"
                  class="flex items-center sm:indent-16 indent-8   justify-between focus-visible:outline-none w-[100%] bg-black z-50 h-[57px] "
                />
                <img
                  src="/Vector.svg"
                  alt=""
                  className="absolute top-[20px] sm:left-[30px] left-[10px]"
                />
                <button
                  onClick={handleSubmit}
                  className="rounded-full absolute top-[7px] right-[10px]  flex items-center justify-center group border border-[#282623] hover-color  w-[41px]  h-[41px]  uppercase text-[#F2E9D8] font-[700] "
                  style={{
                    background:
                      "linear-gradient(91.09deg, #D54A1A 0.94%, #E8B33B 203.21%)",
                  }}
                >
                  <img
                    src="/arrow-left.svg"
                    alt=""
                    className="opacity-50 group-hover:opacity-100"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:py-[52px] py-[22px]  2xl:mx-[110px] lg:mx-[60px] mx-[20px]">
          <div className="w-[100%] flex lg:flex-row flex-col items-center gap-4 justify-between">
            <p className="text-[#F2E9D8] font-[500] uppercase">
              Visus Advisory
            </p>
            <a
              href="https://www.visusadvisory.com/impressum"
              className="flex items-center"
            >
              <FaEarthAmericas className="text-[#F2E9D8CC] text-xl" />
              <p className="text-[#F2E9D8CC] text-[14px] font-[500] ml-[10px]">
                Impressum
              </p>
            </a>
            <div className="2xl:max-w-[984px] max-w-[784px] w-[100%] flex lg:flex-row flex-col items-center justify-between gap-[20px]">
              <div className="flex items-center">
                <img src="/call.svg" alt="" />
                <p className="text-[#F2E9D8CC] text-[14px] font-[500] ml-[10px]">
                  +49 (0) 211 17835846
                </p>
              </div>
              <div className="flex items-center">
                <img src="/sms.svg" alt="" />
                <p className="text-[#F2E9D8CC] text-[14px] font-[500] ml-[10px]">
                  info@visusadvisory.com
                </p>
              </div>
              <div className="flex items-center">
                <img src="/location.svg" alt="" />
                <p className="text-[#F2E9D8CC] text-[14px] font-[500] ml-[10px]">
                  Kennedydamm 5 40476 Düsseldorf
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
