import React, { useEffect, useRef, useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

export default function Step3({
  setStepIndex,
  selectedCategories,
  setSelectedCategories,
  dataIndex,
  setDataInex,
  currentOuterIndex,
  currentInnderIndex,
  setCurrentInnerIndex,
  setCurrentOuterIndex,
  totalSteps,
}) {
  const handleProzessreife = (data) => {
    let dummyArray = [...selectedCategories];
    let outerObject = { ...dummyArray[currentOuterIndex] };
    outerObject.question = [...outerObject.question];
    let innerObject = { ...outerObject.question[currentInnderIndex] };
    innerObject.answer = { ...innerObject.answer };
    innerObject.answer.Prozessreife = data;
    outerObject.question[currentInnderIndex] = innerObject;
    dummyArray[currentOuterIndex] = outerObject;
    console.log("dummyArray", dummyArray);
    setSelectedCategories(dummyArray);
  };

  const handleDigitalisierungsgrad = (data) => {
    let dummyArray = [...selectedCategories];
    let outerObject = { ...dummyArray[currentOuterIndex] };
    outerObject.question = [...outerObject?.question];
    let innerObject = { ...outerObject.question[currentInnderIndex] };
    innerObject.answer = { ...innerObject.answer };
    innerObject.answer.Digitalisierungsgrad = data;
    outerObject.question[currentInnderIndex] = innerObject;
    dummyArray[currentOuterIndex] = outerObject;
    console.log("dummyArray", dummyArray);
    setSelectedCategories(dummyArray);
  };

  const handlePriorität = (data) => {
    let dummyArray = [...selectedCategories];
    let outerObject = { ...dummyArray[currentOuterIndex] };
    outerObject.question = [...outerObject.question];
    let innerObject = { ...outerObject.question[currentInnderIndex] };
    innerObject.answer = { ...innerObject.answer };
    innerObject.answer.Priorität = data;
    outerObject.question[currentInnderIndex] = innerObject;
    dummyArray[currentOuterIndex] = outerObject;
    console.log("dummyArray", dummyArray);
    setSelectedCategories(dummyArray);
  };

  const handleNext = () => {
    if (
      selectedCategories.length === currentOuterIndex + 1 &&
      selectedCategories[currentOuterIndex]?.question.length ===
        currentInnderIndex + 1
    ) {
      setStepIndex(3);
    } else {
      if (
        selectedCategories[currentOuterIndex]?.question.length >
        currentInnderIndex + 1
      ) {
        setCurrentInnerIndex(currentInnderIndex + 1);
      } else {
        setCurrentOuterIndex(currentOuterIndex + 1);
        setCurrentInnerIndex(0);
      }
    }
  };
  const handlePrevious = () => {
    if (currentOuterIndex === 0 && currentInnderIndex === 0) {
      setStepIndex(1);
    } else {
      if (currentInnderIndex > 0) {
        setCurrentInnerIndex(currentInnderIndex - 1);
      } else {
        setCurrentOuterIndex(currentOuterIndex - 1);
        setCurrentInnerIndex(
          selectedCategories[currentOuterIndex - 1]?.question.length - 1
        );
      }
    }
  };
  const headline =
    selectedCategories[currentOuterIndex]?.question[currentInnderIndex]
      ?.Headline || "";

  const scrollContainerRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const scrollContainer = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setIsScrollable(scrollWidth > clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, [selectedCategories]);
  const [isModal, setIsModal] = useState(false);
  const [messageArray, setMessageArray] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleComment = () => {
    let data = {
      commentText: messageText,
      date: new Date(), // Use `new Date()` for proper date format
    };

    // Create a copy of the selectedCategories array
    let dummyArray = [...selectedCategories];

    // Access the specific outer object using currentOuterIndex
    let outerObject = { ...dummyArray[currentOuterIndex] };

    // Access the specific question array within the outer object
    outerObject.question = [...outerObject.question];

    // Access the specific inner object using currentInnerIndex
    let innerObject = { ...outerObject.question[currentInnderIndex] };

    // Access and modify the answer object within the inner object
    innerObject.answer = { ...innerObject.answer };

    // Push the new comment to the comment array of the answer object
    innerObject.answer.comment = [...innerObject.answer.comment, data];

    // Update the inner object in the question array
    outerObject.question[currentInnderIndex] = innerObject;

    // Update the outer object in the dummyArray
    dummyArray[currentOuterIndex] = outerObject;

    // Log the updated dummyArray for debugging
    console.log("dummyArray", dummyArray);

    // Update the state with the new dummyArray
    setSelectedCategories(dummyArray);
    setMessageText("");
  };

  const handleDeleteComment = (commentIndex) => {
    // Create a copy of the selectedCategories array
    let dummyArray = [...selectedCategories];

    // Access the specific outer object using currentOuterIndex
    let outerObject = { ...dummyArray[currentOuterIndex] };

    // Access the specific question array within the outer object
    outerObject.question = [...outerObject.question];

    // Access the specific inner object using currentInnerIndex
    let innerObject = { ...outerObject.question[currentInnderIndex] };

    // Access and modify the answer object within the inner object
    innerObject.answer = { ...innerObject.answer };

    // Remove the comment at the specified index
    innerObject.answer.comment = innerObject.answer.comment.filter(
      (_, index) => index !== commentIndex
    );

    // Update the inner object in the question array
    outerObject.question[currentInnderIndex] = innerObject;

    // Update the outer object in the dummyArray
    dummyArray[currentOuterIndex] = outerObject;

    // Log the updated dummyArray for debugging
    console.log("dummyArray", dummyArray);

    // Update the state with the new dummyArray
    setSelectedCategories(dummyArray);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleComment();
    }
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
          <div className=" w-[100%] m-auto 2xl:py-[38px] py-[13px] xl:px-[37px] px-[15px]">
            <p className="uppercase text-[18px] font-[400] text-[#F2E9D8] text-center">
              Progress
            </p>
            <div className="rounded-[30px] h-[15px] bg-[#000000CC] p-[3px] 2xl:mt-[15px] mt-[10px]">
              <div
                className="h-[100%] rounded-[30px]"
                style={{
                  width: `calc(${
                    15 +
                    ((currentOuterIndex *
                      selectedCategories[currentOuterIndex]?.question?.length +
                      currentInnderIndex) /
                      totalSteps) *
                      75
                  }%)`,
                  background:
                    "linear-gradient(90deg, #D54A1A 0%, #E8B33B 100%)",
                }}
              ></div>
            </div>
            <div className="relative">
              {isScrollable && (
                <button
                  className="scroll-button "
                  onClick={() => scrollContainer(-100)}
                >
                  &lt;
                </button>
              )}
              <div
                className={`scroll-container 2xl:max-w-[957px] px-[50px] max-w-[857px] 2xl:text-[32px] lg:text-[20px] text-[15px] font-[700] m-auto w-[100%] gap-10 my-scrollar overflow-auto flex ${
                  selectedCategories.length <= 2 && "justify-center"
                } items-center 2xl:mt-[40px] mt-[8px]`}
                ref={scrollContainerRef}
              >
                {selectedCategories?.map((item, index) => (
                  <p
                    key={index}
                    className={`uppercase cursor-pointer whitespace-nowrap ${
                      currentOuterIndex === index
                        ? "gradient-text"
                        : "text-[#F2E9D8CC]"
                    } `}
                  >
                    {item?.Category}
                  </p>
                ))}
              </div>
              {isScrollable && (
                <button
                  className="scroll-button right-0"
                  onClick={() => scrollContainer(100)}
                >
                  &gt;
                </button>
              )}
            </div>
            <div className="flex items-center justify-center 2xl:mt-[25px] mt-[15px]">
              <div className="px-[28px] py-[7px] gradient-border flex items-center justify-center rounded-[30px]">
                <span className="text-[#F2E9D899] font-bold text-[18px]">
                  {selectedCategories?.map(
                    (item, index) =>
                      currentOuterIndex === index && (
                        <p
                          key={index}
                          className="capitalize cursor-pointer whitespace-nowrap text-[#F2E9D8]"
                        >
                          {item.Category}:
                        </p>
                      )
                  )}
                </span>
                <span className="text-[20px] font-[700]">
                  &nbsp;{currentInnderIndex + 1}/
                  {selectedCategories[currentOuterIndex]?.question?.length}
                </span>
              </div>
            </div>

            <div
              className="text-[#F2E9D8] md:text-[22px] text-[14px] uppercase text-center mt-[15px]"
              dangerouslySetInnerHTML={{
                __html: `<p >
              ${headline}
            </p>`,
              }}
            ></div>

            <div className="max-w-[930px] w-[100%] m-auto 2xl:mt-[30px] mt-[15px]">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-[10px]">
                {selectedCategories[currentOuterIndex]?.question[
                  currentInnderIndex
                ]?.Description?.map((item) => (
                  <div className="flex items-center">
                    <div
                      className="w-[14px] h-[14px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, #D54A1A 0%, #E8B33B 100%)",
                      }}
                    />
                    <p className="text-[#F2E9D8] font-[500] ml-[10px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[1430px] w-[100%] m-auto mt-[24px] flex md:flex-nowrap flex-wrap 2xl:gap-[20px] gap-[10px]  lg:justify-between items-center">
              <div className=" lg:px-[45px] px-[25px] py-[11px] gradient-border flex items-center justify-center flex-col rounded-[20px] sm:w-fit w-[100%]">
                <div className="flex items-center justify-center">
                  <p className="font-[700] lg:text-[20px] text-[12px] text-[#F2E9D8]">
                    Prozessreife
                  </p>

                  <img
                    src="/info.svg"
                    alt="Info"
                    className="ml-[9px] cursor-pointer relative"
                    data-tooltip-id="my-tooltip-1"
                  />
                  <Tooltip id="my-tooltip-1" className="z-50 ">
                    <div className="w-[250px] text-xs">
                      Prozessreife beschreibt den Entwicklungsstand und die
                      Qualität Ihrer Geschäftsprozesse.
                    </div>
                  </Tooltip>
                </div>

                <div className="mt-[20px] flex items-center 2xl:gap-[15px]  gap-[7px]">
                  <div
                    onClick={() => handleProzessreife(1)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ]?.answer?.Prozessreife >= 1
                        ? "border-2 border-white cursor-pointer"
                        : "opacity-30"
                    }  2xl:w-[50px]  w-[30px] z-20 2xl:h-[50px] lg:w-[40px] lg:h-[40px] h-[30px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF3434]`}
                  >
                    <img src="/1.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleProzessreife(2)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ]?.answer?.Prozessreife >= 2
                        ? "opacity-100 border-2 border-white cursor-pointer"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF6644]`}
                  >
                    <img src="/2.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleProzessreife(3)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ]?.answer?.Prozessreife >= 3
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF902A]`}
                  >
                    <img src="/3.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleProzessreife(4)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Prozessreife >= 4
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FCFF59] `}
                  >
                    <img src="/4.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleProzessreife(5)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Prozessreife >= 5
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#27FF23]`}
                  >
                    <img src="/5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="lg:px-[45px] px-[25px] py-[11px] gradient-border flex items-center justify-center flex-col rounded-[20px] sm:w-fit w-[100%]">
                <div className="flex items-center justify-center">
                  <p className="font-[700] lg:text-[20px] text-[12px] text-[#F2E9D8]">
                    Digitalisierungsgrad
                  </p>

                  <img
                    src="/info.svg"
                    alt="Info"
                    className="ml-[9px] cursor-pointer relative"
                    data-tooltip-id="my-tooltip-2"
                  />
                  <Tooltip id="my-tooltip-2" className="z-50 ">
                    <div className="w-[250px] text-xs">
                      Digitalisierungsgrad beschreibt das Ausmaß, in dem Ihre
                      Geschäftsprozesse
                    </div>
                  </Tooltip>
                </div>
                <div className="mt-[20px] flex items-center 2xl:gap-[15px] gap-[7px]">
                  <div
                    onClick={() => handleDigitalisierungsgrad(1)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Digitalisierungsgrad >= 1
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px]  lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF3434]`}
                  >
                    <img src="/1.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleDigitalisierungsgrad(2)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Digitalisierungsgrad >= 2
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF6644]`}
                  >
                    <img src="/2.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleDigitalisierungsgrad(3)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Digitalisierungsgrad >= 3
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    } 2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF902A] `}
                  >
                    <img src="/3.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleDigitalisierungsgrad(4)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Digitalisierungsgrad >= 4
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px]  cursor-pointer rounded-full flex items-center justify-center bg-[#FCFF59] `}
                  >
                    <img src="/4.png" alt="" />
                  </div>
                  <div
                    onClick={() => handleDigitalisierungsgrad(5)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Digitalisierungsgrad >= 5
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#27FF23]`}
                  >
                    <img src="/5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="lg:px-[45px] px-[25px] py-[11px] gradient-border flex items-center justify-center flex-col rounded-[20px] sm:w-fit w-[100%]">
                <div className="flex relative items-center justify-center">
                  <p className="font-[700] lg:text-[20px] text-[12px] text-[#F2E9D8]">
                    Priorität
                  </p>

                  <img
                    src="/info.svg"
                    alt="Info"
                    className="ml-[9px] cursor-pointer relative"
                    data-tooltip-id="my-tooltip"
                  />
                  <Tooltip id="my-tooltip" className="z-50 ">
                    <div className="w-[200px] text-xs">
                      Priorität in Bezug auf Ihre Unternehmensprozesse
                      beschreibt
                    </div>
                  </Tooltip>
                </div>

                <div className="mt-[20px] flex items-center 2xl:gap-[15px] gap-[7px]">
                  <div
                    onClick={() => handlePriorität(1)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Priorität >= 1
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF3434]`}
                  >
                    <img src="/1.png" alt="" />
                  </div>
                  <div
                    onClick={() => handlePriorität(2)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Priorität >= 2
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF6644]`}
                  >
                    <img src="/2.png" alt="" />
                  </div>
                  <div
                    onClick={() => handlePriorität(3)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Priorität >= 3
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FF902A]`}
                  >
                    <img src="/3.png" alt="" />
                  </div>
                  <div
                    onClick={() => handlePriorität(4)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Priorität >= 4
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#FCFF59] `}
                  >
                    <img src="/4.png" alt="" />
                  </div>
                  <div
                    onClick={() => handlePriorität(5)}
                    className={`${
                      selectedCategories[currentOuterIndex]?.question[
                        currentInnderIndex
                      ].answer?.Priorität >= 5
                        ? "opacity-100 border-2 border-white"
                        : "opacity-30"
                    }  2xl:w-[50px] w-[30px] z-20 2xl:h-[50px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer rounded-full flex items-center justify-center bg-[#27FF23] `}
                  >
                    <img src="/5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="relative sm:w-fit w-[100%]">
                <div
                  onClick={() => setIsModal(!isModal)}
                  className="lg:px-[30px] px-[21px] py-[9px] gradient-border1 h-fit sm:w-fit w-[100%]  cursor-pointer "
                >
                  <img src="/message-text.svg" alt="" className="m-auto" />
                  <p className="text-center font-[700] text-[#F2E9D8]">
                    Kommentar <br /> hinzufügen
                  </p>
                </div>

                {isModal && (
                  <div>
                    <div
                      onClick={() => setIsModal(false)}
                      className=" z-30 fixed top-0 left-0 right-0 bottom-0 "
                    />
                    <div className="p-[20px] absolute border-2  border-[#4E584866] 2xl:w-[555px] sm:w-[355px] w-[300px] h-[341px] rounded-[30px] bg-[#000000] bottom-0 sm:right-[90px] right-[-10%] z-50">
                      <p className="text-center text-[#F2E9D8] 2xl:text-[20p] text-[16px]">
                        Kommentare
                      </p>
                      <div className="h-[200px] overflow-auto scrollbar-none">
                        {selectedCategories[currentOuterIndex]?.question[
                          currentInnderIndex
                        ]?.answer?.comment?.map((item, index3) => (
                          <div
                            key={index3}
                            className="2xl:p-[20px] p-[15px] gradient-border 2xl:mt-[20px] mt-[10px]"
                          >
                            <p className="2xl:text-[16px] text-[13px]">
                              {item?.commentText}
                            </p>
                            <div className="flex items-center justify-between mt-[10px]">
                              <p className="text-[#F2E9D880] 2xl:text-base text-[13px]">
                                {new Date().toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                                <span className="px-1">at 14:56</span>
                              </p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 z-30 text-white hover:text-red-500 cursor-pointer"
                                onClick={() => handleDeleteComment(index3)}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="gradient-border2 relative mt-1">
                        <input
                          onChange={(event) =>
                            setMessageText(event.target.value)
                          }
                          value={messageText}
                          placeholder="Write comment here..."
                          onKeyPress={handleKeyPress}
                          className="flex items-center sm:indent-4 indent-8 pr-[50px]  justify-between focus-visible:outline-none w-[100%] bg-black z-50 h-[67px]"
                        />
                        <img
                          onClick={handleComment}
                          src="/send.svg"
                          alt=""
                          className="absolute top-[20px] cursor-pointer right-[20px] z-30"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="2xl:max-w-[1248px] max-w-[1048px] w-[100%] m-auto 2xl:mt-[130px] mt-[20px]">
              <div className="flex items-center justify-center gap-[14px]">
                <button
                  onClick={handlePrevious}
                  className="rounded-full flex items-center justify-center bg-[#000000] group border border-[#282623] hover-color w-[44px]  h-[44px] uppercase text-[#F2E9D8] font-[700"
                >
                  <img
                    src="/arrow-right.svg"
                    alt=""
                    className="opacity-50 group-hover:opacity-100 select-none"
                  />
                </button>
                <button
                  onClick={handleNext}
                  className="sm:w-[245px] w-[145px] h-[47px] rounded-[30px] font-[700] sm:text-base text-[12px] text-[#F2E9D8] uppercase select-none"
                  style={{
                    background:
                      "linear-gradient(93.18deg, #D54A1A 0%, #E8B33B 151.73%)",
                  }}
                >
                  Überspringen
                </button>
                <button
                  onClick={handleNext}
                  disabled={
                    selectedCategories[currentOuterIndex]?.question[
                      currentInnderIndex
                    ].answer?.Priorität === 0 ||
                    selectedCategories[currentOuterIndex]?.question[
                      currentInnderIndex
                    ].answer?.Digitalisierungsgrad === 0 ||
                    selectedCategories[currentOuterIndex]?.question[
                      currentInnderIndex
                    ].answer?.Prozessreife === 0
                  }
                  className={`rounded-full ${
                    selectedCategories[currentOuterIndex]?.question[
                      currentInnderIndex
                    ].answer?.Priorität === 0 ||
                    selectedCategories[currentOuterIndex]?.question[
                      currentInnderIndex
                    ].answer?.Digitalisierungsgrad === 0 ||
                    selectedCategories[currentOuterIndex]?.question[
                      currentInnderIndex
                    ].answer?.Prozessreife === 0
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }   flex items-center justify-center group border border-[#282623] hover-color   w-[44px]  h-[44px] uppercase text-[#F2E9D8] font-[700]`}
                  style={{
                    background:
                      "linear-gradient(91.09deg, #D54A1A 0.94%, #E8B33B 203.21%)",
                  }}
                >
                  <img
                    src="/arrow-left.svg"
                    alt=""
                    className="opacity-50 group-hover:opacity-100 select-none"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:py-[52px] py-[25px] 2xl:mx-[110px] lg:mx-[60px] mx-[20px]">
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
