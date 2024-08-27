import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Step1({ setStepIndex }) {
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
        <div className="2xl:pt-[57px] lg:pt-[37px] pt-[27px]">
          <img
            src="/Logo1.svg"
            alt=""
            className="m-auto 2xl:h-auto 2xl:w-auto lg:h-[30px] h-[40px] w-auto"
          />
        </div>
        <div className="2xl:mx-[110px] lg:mx-[60px] mx-[20px] px-[20px] bg-[#000000CC] text-[#F2E9D8CC] rounded-[30px] border border-[#585650] 2xl:mt-[48px] mt-[28px]">
          <div className="2xl:max-w-[1084px] max-w-[884px] w-[100%] m-auto 2xl:py-[82px] lg:py-[40px] py-[30px]">
            <p className="uppercase 2xl:text-[64px] lg:text-[44px] text-[24px] font-[400] text-[#F2E9D8] text-center">
              VISUS Process Excellence Index
            </p>
            <p className="2xl:text-[28px] lg:text-[18px] text-[14px] mt-[15px] uppercase text-center ">
              Unlock Your Company's Potential
            </p>
            <p className="2xl:text-[28px] lg:text-[18px] text-[14px] leading-[38px] uppercase text-center 2xl:mt-[50px] mt-[20px]">
              Es fehlt oft an Orientierung, um Prozessoptimierungen erfolgreich
              zu starten. Mit unserem Tool, dem VISUS Process Excellence Index,
              erhalten Sie eine klare Übersicht. Folgen Sie einfach den
              Schritt-für-Schritt-Anweisungen und erhalten Sie eine
              maßgeschneiderte Scorecard zur Bewertung Ihrer Prozesse.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  setStepIndex(1);
                  window.scrollTo(0, 0);
                }}
                className="rounded-[30px] border border-[#c8945d]  w-[272px] 2xl:h-[65px] h-[55px] uppercase text-[#F2E9D8] font-[700] 2xl:mt-[130px] lg:mt-[50px] mt-[50px]"
                style={{
                  background:
                    "linear-gradient(93.18deg, #D54A1A 0%, #E8B33B 151.73%)",
                }}
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
        <div className="2xl:py-[52px] py-[32px] 2xl:mx-[110px] lg:mx-[60px] mx-[20px]">
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
