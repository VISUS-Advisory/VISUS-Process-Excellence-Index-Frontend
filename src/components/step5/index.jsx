import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Step5({ setStepIndex }) {
  const array1 = [
    "Identifikation von profitablen Kunden, Analyse von",
    "Kunden- und Verkaufsdaten, Entwicklung von",
    "Kundenprofitabilitätsstrategien, Überwachung und",
    "Anpassung der Kundenprofitabilität",
  ];
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
        <div className="pt-[57px]">
          <img src="/Logo1.svg" alt="" className="m-auto" />
        </div>
        <div className="2xl:mx-[110px] lg:mx-[60px] mx-[20px] bg-[#000000CC] text-[#F2E9D8CC] rounded-[30px] border border-[#585650] mt-[48px]">
          <div className=" w-[100%] m-auto py-[38px] xl:px-[37px] px-[15px]">
            <p className="uppercase text-[18px] font-[400] text-[#F2E9D8] text-center">
              Progress
            </p>
            <div className="rounded-[30px] h-[20px] bg-[#000000CC] p-[3px] mt-[15px]">
              <div
                className="h-[100%] w-[75%] rounded-[30px]"
                style={{
                  background:
                    "linear-gradient(90deg, #D54A1A 0%, #E8B33B 100%)",
                }}
              ></div>
            </div>
            <div className="2xl:max-w-[957px] max-w-[857px] 2xl:text-[32px] lg:text-[25px] text-[15px] font-[700] m-auto w-[100%] flex md:flex-row flex-col items-center justify-between mt-[40px]">
              <p className="uppercase text-[#F2E9D8CC]  cursor-pointer ">
                Controlling
              </p>
              <p className="uppercase cursor-pointer text-[#F2E9D8CC]">
                Einkauf
              </p>
              <p className="uppercase cursor-pointer  gradient-text">
                Human Resources
              </p>
              <p className="uppercase cursor-pointer text-[#F2E9D8CC]">
                Strategie
              </p>
            </div>
            <div className="flex items-center justify-center mt-[25px]">
              <div className="px-[28px] py-[11px] gradient-border flex items-center justify-center rounded-[30px]">
                <span className="text-[#F2E9D899] font-bold text-[18px]">
                  Controlling:
                </span>
                <span className="text-[20px] font-[700]">&nbsp;13/13</span>
              </div>
            </div>
            <p className="text-[#F2E9D8] md:text-[22px] text-[14px] uppercase text-center mt-[25px]">
              Wie bewerten Sie Ihren internen Prozess zur Berechnung der
              <span className="font-[700]"> Risikomanagement</span>
            </p>
            <div className="max-w-[830px] w-[100%] m-auto mt-[30px]">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-[15px]">
                {array1.map((item) => (
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
            <div className="max-w-[1430px] w-[100%] m-auto mt-[44px] flex flex-wrap gap-[20px]  xl:justify-between items-center">
              <div className="2xl:px-[45px] px-[20px] py-[21px] gradient-border flex  items-center justify-center flex-col rounded-[30px] sm:w-fit w-[100%]">
                <div className="flex items-center justify-center">
                  <p className="font-[700] text-[20px] text-[#F2E9D8]">
                    Prozessreife
                  </p>
                  <img
                    src="/info.svg"
                    alt=""
                    className="ml-[9px] cursor-pointer"
                  />
                </div>
                <div className="mt-[20px] flex items-center 2xl:gap-[15px] gap-[7px]">
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF3434]">
                    <img src="/😔.png" alt="" />
                  </div>
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF6644]">
                    <img src="/😕.png" alt="" />
                  </div>
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF902A] border-2 border-white">
                    <img src="/😐.png" alt="" />
                  </div>
                  <div className=" opacity-30 sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FCFF59] border-2 border-white">
                    <img src="/🙂.png" alt="" />
                  </div>
                  <div className="opacity-30 sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#27FF23] border-2 border-white">
                    <img src="/😃.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="2xl:px-[45px] px-[20px] py-[21px] gradient-border flex items-center justify-center flex-col rounded-[30px] sm:w-fit w-[100%]">
                <div className="flex items-center justify-center">
                  <p className="font-[700] text-[20px] text-[#F2E9D8]">
                    Digitalisierungsgrad
                  </p>
                  <img
                    src="/info.svg"
                    alt=""
                    className="ml-[9px] cursor-pointer"
                  />
                </div>
                <div className="mt-[20px] flex items-center 2xl:gap-[15px] gap-[7px]">
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF3434]">
                    <img src="/😔.png" alt="" />
                  </div>
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF6644]">
                    <img src="/😕.png" alt="" />
                  </div>
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF902A] border-2 border-white">
                    <img src="/😐.png" alt="" />
                  </div>
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FCFF59] border-2 border-white">
                    <img src="/🙂.png" alt="" />
                  </div>
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#27FF23] border-2 border-white">
                    <img src="/😃.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="2xl:px-[45px] px-[20px] py-[21px] gradient-border flex items-center justify-center flex-col rounded-[30px] sm:w-fit w-[100%]">
                <div className="flex items-center justify-center">
                  <p className="font-[700] text-[20px] text-[#F2E9D8]">
                    Priorität
                  </p>
                  <img
                    src="/info.svg"
                    alt=""
                    className="ml-[9px] cursor-pointer"
                  />
                </div>
                <div className="mt-[20px] flex items-center 2xl:gap-[15px] gap-[7px]">
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF3434]">
                    <img src="/😔.png" alt="" />
                  </div>
                  <div className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF6644]">
                    <img src="/😕.png" alt="" />
                  </div>
                  <div className="opacity-30 sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FF902A] border-2 border-white">
                    <img src="/😐.png" alt="" />
                  </div>
                  <div className="opacity-30 sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#FCFF59] border-2 border-white">
                    <img src="/🙂.png" alt="" />
                  </div>
                  <div className="opacity-30 sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] rounded-full flex items-center justify-center bg-[#27FF23] border-2 border-white">
                    <img src="/😃.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="px-[21px] py-[18px] gradient-border1 h-fit sm:w-fit w-[100%] ">
                <img src="/message-text.svg" alt="" className="m-auto" />
                <p className="text-center font-[700] text-[#F2E9D8]">
                  Kommentar <br /> hinzufügen
                </p>
              </div>
            </div>
            <div className="2xl:max-w-[1248px] max-w-[1048px] w-[100%] m-auto sm:mt-[130px] mt-[60px]">
              <div className="flex items-center justify-center gap-[14px]">
                <button
                  onClick={() => {
                    setStepIndex(3);
                    window.scrollTo(0, 0);
                  }}
                  className="rounded-full flex items-center justify-center bg-[#000000] group border border-[#282623] hover-color  sm:w-[64px] w-[44px] sm:h-[64px] h-[44px] uppercase text-[#F2E9D8] font-[700]"
                >
                  <img
                    src="/arrow-right.svg"
                    alt=""
                    className="opacity-50 group-hover:opacity-100"
                  />
                </button>
                <button
                  className="sm:w-[245px] w-[145px] sm:h-[67px] h-[47px] rounded-[30px] font-[700] sm:text-base text-[12px] text-[#F2E9D8] uppercase"
                  style={{
                    background:
                      "linear-gradient(93.18deg, #D54A1A 0%, #E8B33B 151.73%)",
                  }}
                >
                  Überspringen
                </button>
                <button
                  onClick={() => {
                    setStepIndex(0);
                    window.scrollTo(0, 0);
                  }}
                  className="rounded-full  flex items-center justify-center group border border-[#282623] hover-color  sm:w-[64px] w-[44px] sm:h-[64px] h-[44px] uppercase text-[#F2E9D8] font-[700] "
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
        <div className="py-[52px] 2xl:mx-[110px] lg:mx-[60px] mx-[20px]">
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
