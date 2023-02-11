import React, { useState } from "react";
import logo from "../Images/logo.png";
import check from "../Images/check.png";
import jeetlogo from "../Images/jeetlogo.png";
import bg1 from "../Images/bg1.png";
import bg2 from "../Images/bg2.png";
import bg3 from "../Images/bg3.png";

import mbg1 from "../Images/mbg1.png";
import mbg2 from "../Images/mbg2.png";
import mbg3 from "../Images/mbg3.png";

import { NetBanking, UPI, Paytm , Neteller, BitCoin, Eth, Visa, Skrill, LiteCoin, Tron, USDT, BNB, Cardano} from "./svgs";


const Home = () => {
  return (
    <>
    <div className=" text-white BGimage">
      {/* Header section */}
      <header className="p-4 pt-8 px-8 flex justify-between  lg:ml-32 mt-7 lg:mt-5">
        <img
          src={logo}
          alt="logo"
          className="w-[170px] h-[45px] lg:w-[134px] lg:h-[35px] object-cover m-auto lg:m-0"
        />
      </header>

      {/*Home section  */}
      <div className="">
        <div className="flex flex-col item-center gap-5 lg:ml-28 lg:mt-5 px-8 ">
          <div className=" text-[30px] pt-5 sm:text-[30px] lg:text-[40px] font-bold eastman pl-1 ">
            <h2 className=" text-center lg:text-start mt-10">
              Activate your <span className="text-[#f67409]">promocode</span> 
            </h2>
            <h2 className="lg:-mt-3 text-center lg:text-start">
              IC1 and get
              <span className="text-[#48b415] pl-2">100 Free Spins</span>
            </h2>
          </div>

          <div>
            <img  
            //src={}
            className=" sm:hidden  " />
            <img
              // src={home766}
              className=" hidden sm:flex lg:hidden object-cover"
            />
          </div>

          <div className="flex flex-col text-gray-400 gap-3 items-center lg:items-start  lg:-mt-43">
            <div className="p-2 flex flex-col gap-3 w-full em">
              <div className="flex justify-start sm:justify-center lg:justify-start pt-3">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="">Rapid Cashouts processing in 3 hours</p>
              </div>
              <div className="flex justify-start sm:justify-center lg:justify-start pt-3">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="">
                  Popular Paymnet methods: UPI, PAYTM, IMPS and more
                </p>
              </div>
              <div className="flex justify-start sm:justify-center lg:justify-start pt-3">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="">
                  Live games and Dealers: Roulette, Andar Bahar, Teen Patti
                </p>
              </div>
              <div className="flex justify-start sm:justify-center lg:justify-start pt-3">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="">
                  Crypto Friendly: 12 crypto coins available for deposit
                </p>
              </div>
              <div className="flex justify-start sm:justify-center lg:justify-start pt-3">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="  ">Regular Tournaments and Drops</p>
              </div>

              {/* btn */}
              <button className="rounded-xl text-white p-3 em hidden lg:inline text-center bg-[#48b415] w-[220px]  mt-5">
                Play
              </button>

                 <button className=" b rounded-xl text-white em p-3   text-center bg-[#48b415] w-full lg:hidden  mt-3">
                Play
              </button>
            </div>

            {/* features */}
            <div className="em w-auto grid text-white  lg:grid-cols-3 gap-2 lg:gap-0 z-10 my-1 mt-3 xl:mt-5">
              <div className="relative">
                <img 
                src={bg1} 
                className="hidden lg:flex" />
                <img src={mbg1} className="lg:hidden" />

                <div className="flex items-center absolute buttonsText">
                  <p className="text-[#48B415] font-normal font-[500] pr-1">
                    Sign Up at
                  </p>
                  <div className="flex items-center pl-2 ">
                    <img src={jeetlogo} className="w-[20px] h-[20px]" />
                    <p className="font-normal font-[500] pl-1">JeetCity</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                src={bg2} 
                className="hidden lg:flex" />
                <img src={mbg2} className="lg:hidden " />

                <div className="flex items-center absolute buttonsText">
                  <p className="font-normal font-[500]">
                    Use <span className="text-[#f67409] ">IC1</span> code
                  </p>
                </div>
              </div>

              <div className=" relative">
                <img src={bg3} className="hidden lg:flex " />
                <img src={mbg3} className="lg:hidden" />

                <div className="flex items-center absolute buttonsText">
                  <p className="font-normal font-[500] ">
                    <span className="text-[#48B415] ">Start</span> Winning!
                  </p>
                </div>
              </div>
              <button className=" b2 rounded-xl em p-3 lg:hidden  text-center bg-[#48b415] w-full lg:hidden  mt-3">
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* footer */}
    <footer className="flex items-center gap-4 p-6 lg:gap-6 lg: p-4 lg:pl-60 lg:pr-60 2xl:gap-8  2xl:p-4 bg-[#1F222E] justify-center flex-wrap">
        <NetBanking/>
        <UPI/>
        <Paytm/>
        <Neteller/>
        <BitCoin/>
        <Eth/>
        <Visa/>
        <Skrill/>
        <LiteCoin/>
        <Tron/>
        <USDT/>
        <BNB/>
        <Cardano/>
      </footer>
    </>
  );
};

export default Home;