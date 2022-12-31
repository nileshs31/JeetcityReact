import React from "react";
import logo from "../Images/logo.png";
import Ausbg from "../Images/Ausbg.png";
import aushome from "../Images/aushome.png";
import coin from "../Images/coin.png";
import gift from "../Images/gift.png";
const Australianopen = () => {
  return (
    <div className="text-white">
      <p>check </p>
      <header className="flex justify-between items-center p-3">
        <img src={logo} alt="logo" className="w-[132px] h-[34px]" />
        <button className="bg-[#48b415] p-2 px-4 rounded-3xl font-medium text-center">
          Sign Up
        </button>
      </header>

      {/* home section  */}
      <div className=" px-10 bgg flex flex-col-reverse items-center justify-center sm:grid grid-cols-2 gap-3 place-items-center  w-full  h-[500px] object-cover no-repeat bg-center">
        <div className="">
          <p className=" text-[20px] sm:text-[32px]">AUSTRALIAN OPEN 2022</p>
          <h2 className="eastman text-[30px] sm:text-[40px]">
            20% ONLY WIN FREE BET + 20% COMBOBOOST
          </h2>
        </div>
        <img
          src={aushome}
          className="w-[184px] h-[185px] sm:h-auto sm:w-auto object-cover"
        />
      </div>
      {/* bet section */}
      <div className="max-w-[94%] my-5 mx-auto bg-[#1F222E] p-6 rounded-[48px]">
        <p className="text-[32px] eastman text-center ">What should I do?</p>
        <div>
          <p className="text-[24px] normal text-center mt-8  ">
            Совершай депозит от <span className="text-[#48B415]">30 евро с 16 по 29 января,</span>  получай <span className="text-[#48B415]"> 20% Onlywin
            фрибет + Комбобуст 20% </span>на матчи АО2022. Когда турнир подойдет к
            самому интересному (1/8 финала), то у тебя будет возможность
            выиграть<span className="text-[#48B415]">iPhone 14 Pro MAX</span>  оставив свои прогнозы у нас.
          </p>
        </div>

        <p className="text-[28px] mt-8 eastman text-center ">
          What can i win ?
        </p>
        {/* prize section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4">
            <img src={coin} alt="coin" />
            <p className="text-[22px] eastman">1 FREEBET</p>
            <p className="normal">5 euro</p>
            <div className="text-[18px] flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4">
            <img src={coin} alt="coin" />
            <p className="text-[22px] eastman">2 FREEBET</p>
            <p className="normal">5 euro</p>
            <div className="text-[18px] flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4">
            <img src={coin} alt="coin" />
            <p className="text-[22px] eastman">3 FREEBET</p>
            <p className="normal">5 euro</p>
            <div className="text-[18px] flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4">
            <img src={coin} alt="coin" />
            <p className="text-[22px] eastman">4 FREEBET</p>
            <p className="normal">10 euro</p>
            <div className="text-[18px] flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4">
            <img src={gift} alt="coin" />
            <p className="text-[22px] eastman">GRAND PRIZE</p>
            <p className="normal">iphone 14 max pro</p>
            <div className="text-[18px] flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-5">
          To participate in the promo, make a qualifying bet of 5+ euros on any
          tennis match.
        </p>
      </div>
    </div>
  );
};

export default Australianopen;