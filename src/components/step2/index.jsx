import React from "react";

export default function Step2({
  JsonData,
  setStepIndex,
  setSelectedCategories,
  selectedCategories,
}) {
  const handleFunctionalArea = (data) => {
    const exists = selectedCategories.some(
      (item) => item?.Category === data?.Category
    );

    if (exists) {
      setSelectedCategories(
        selectedCategories.filter((item) => item?.Category !== data?.Category)
      );
    } else {
      let data1 = {
        Prozessreife: 0,
        Digitalisierungsgrad: 0,
        Priorität: 0,
        comment: [],
      };
      let newDummyArray = data;
      newDummyArray.question.forEach((question, index) => {
        data.question[index] = { ...question, answer: data1 };
      });

      setSelectedCategories((pre) => [...pre, newDummyArray]);
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
          <div className=" w-[100%] m-auto 2xl:py-[38px] py-[18px] md:px-[37px] px-[15px]">
            <p className="uppercase text-[18px] font-[400] text-[#F2E9D8] text-center">
              Progress
            </p>
            <div className="rounded-[30px] h-[15px] bg-[#000000CC] p-[3px] mt-[15px]">
              <div
                className="h-[100%] w-[10%] rounded-[30px]"
                style={{
                  background:
                    "linear-gradient(90deg, #D54A1A 0%, #E8B33B 100%)",
                }}
              ></div>
            </div>
            <div className="2xl:max-w-[1248px] max-w-[1048px] w-[100%] m-auto">
              <p className="2xl:text-[44px] lg:text-[25px] text-[20px]   uppercase text-center 2xl:mt-[120px]  mt-[20px]">
                Wählen Sie Die In Ihrem Unternehmen Relevanten Funktionsbereiche
              </p>
              <div className="flex justify-center flex-wrap 2xl:gap-[20px] lg:gap-[12px] gap-[10px]  2xl:mt-[50px] mt-[30px]">
                {JsonData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleFunctionalArea(item)}
                    style={{
                      background: selectedCategories.some(
                        (item1) => item1?.Category === item?.Category
                      )
                        ? "linear-gradient(91.09deg, #D54A1A 0.94%, #E8B33B 203.21%)"
                        : "#000000",
                    }}
                    className="px-[40px] py-[15px] flex items-center  rounded-[30px]  cursor-pointer hover-color"
                  >
                    {selectedCategories.some(
                      (item1) => item1?.Category === item?.Category
                    ) ? (
                      <img src="/check.svg" alt="" />
                    ) : (
                      <img src="/circle.svg" alt="" />
                    )}

                    <p className="text-[#F2E9D8] font-[700] ml-[10px]">
                      {item?.Category}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center 2xl:mt-[130px] lg:mt-[40px] mt-[60px]">
                <button
                  onClick={() => {
                    setStepIndex(0);
                    window.scrollTo(0, 0);
                  }}
                  className="rounded-full flex items-center justify-center group border border-[#282623] hover-color  w-[44px] h-[44px] uppercase text-[#F2E9D8] font-[700] "
                >
                  <img
                    src="/arrow-right.svg"
                    alt=""
                    className="opacity-50 group-hover:opacity-100"
                  />
                </button>
                <button
                  onClick={() => {
                    setStepIndex(2);
                    window.scrollTo(0, 0);
                  }}
                  disabled={selectedCategories?.length <= 0}
                  className={`${
                    selectedCategories.length <= 0 && "cursor-not-allowed"
                  } rounded-full ml-[46px] flex items-center justify-center group border border-[#282623] hover-color  w-[44px] h-[44px] uppercase text-[#F2E9D8] font-[700] `}
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
        <div className="2xl:py-[52px] py-[32px] 2xl:mx-[110px] lg:mx-[60px] mx-[20px]">
          <div className="w-[100%] flex lg:flex-row flex-col items-center gap-4 justify-between">
            <p className="text-[#F2E9D8] font-[500] uppercase">
              Visus Advisory
            </p>
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
