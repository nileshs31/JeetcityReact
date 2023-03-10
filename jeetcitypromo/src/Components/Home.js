import React, { useState } from "react";
import logo from "../Images/logo.png";
import homeImage from "../Images/homeImg.png";
import check from "../Images/check.png";
import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";
import home765 from "../Images/home765.png";
import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import p4 from "../Images/p4.png";
import p5 from "../Images/p5.png";
import p6 from "../Images/p6.png";
import p7 from "../Images/p7.png";
import p8 from "../Images/p8.png";
import p9 from "../Images/p9.png";
import p13 from "../Images/p13.png";
import homephone from "../Images/homephone.png";
import fm1 from "../Images/fm1.png";
import fm2 from "../Images/fm2.png";
import fm3 from "../Images/fm3.png";
import one from "../Images/one.png";
import two from "../Images/two.png";
import three from "../Images/three.png";
import jeetlogo from "../Images/jeetlogo.png";
import himg from "../Images/himg.png";
import homeBg from "../Images/homeBg.png";
import { Link } from "react-router-dom";

import bg1 from "../Images/bg1.png";
import bg2 from "../Images/bg2.png";
import bg3 from "../Images/bg3.png";

import mbg1 from "../Images/mbg1.png";
import mbg2 from "../Images/mbg2.png";
import mbg3 from "../Images/mbg3.png";
import newbg from "../Images/newbg.png";


const Home = () => {
  return (
    <>
      <div className=" text-white">
        {/* Header section */}
        <header className="p-4 px-8 flex justify-between  2xl:ml-32 2xl:mt-5">
          <img
            src={logo}
            alt="logo"
            className="w-[134px] h-[35px] object-cover "
          />
          <Link to="/Australianopen">
            {" "}
            <p className="  font-medium text-center border-b-2">
              Australianopen
            </p>
          </Link>
        </header>

<<<<<<< HEAD
        {/*Home section  */}
        <div className="  lg:grid grid-cols-2 pb-5 h-auto ">
          <div className="flex flex-col item-center gap-5 2xl:ml-28 2xl:mt-5 px-8 ">
            <div className=" text-[24px] sm:text-[30px] lg:text-[40px] font-bold eastman  ">
              <h2 className=" text-center lg:text-start mt-10">
                Activate Your
                <span className="text-[#f67409] pl-2">Promocode</span>
              </h2>
              <h2 className="lg:-mt-3 text-center lg:text-start">
                Test and get
                <span className="text-[#48b415] pl-2">100 Free spins</span>
              </h2>
            </div>
=======
      {/*Home section  */}
      <div className="  lg:grid grid-cols-2  ">
        <div className="flex flex-col item-center gap-5 2xl:ml-28 2xl:mt-5 px-8 ">
          <div className=" text-[24px] sm:text-[30px] lg:text-[40px] font-bold eastman  ">
            <h2 className=" text-center lg:text-start mt-10">
              Activate Your
              <span className="text-[#f67409] pl-2">IC1</span>
            </h2>
            <h2 className="lg:-mt-3 text-center lg:text-start">
              Promocode and get up to 
              <span className="text-[#48b415] pl-2">???20,000</span>
            </h2>
          </div>
>>>>>>> b50a221d34ba09ddbdf8de57435e7c72e0d1a3f7

            <div>
              <img src={homephone} className=" sm:hidden  " />
              <img
                src={home765}
                className=" hidden sm:flex lg:hidden object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 items-center lg:items-start  lg:-mt-4">
              <div className="p-2 flex flex-col gap-3 w-full">
              <div className="flex justify-start sm:justify-center lg:justify-start ">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal">
                  Rapid Cashouts processing in 3 hours
                </p>
              </div>
              <div className="flex  justify-start sm:justify-center lg:justify-start  ">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal">
                  Popular Paymnet methods: UPI, PAYTM, IMPS and more
                </p>
              </div>
              <div className="flex  justify-start sm:justify-center lg:justify-start ">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal sm:text-center">
                Live games and Dealers: Roulette, Andar Bahar, Teen Patti 

                </p>
              </div>
              <div className="flex  justify-start sm:justify-center lg:justify-start ">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal">
                  Crypto Friendly: 12 crypto coins available for deposit
                </p>
              </div>
              <div className="flex  justify-start sm:justify-center lg:justify-start ">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal  ">
                  Regular Tournaments and Drops 
                </p>
              </div>

              </div>

<<<<<<< HEAD

              {/* btn */}
              <button className="hidden lg:inline rounded-xl p-3  text-center bg-[#48b415] w-[220px]  mt-5">
                Play
              </button>

              {/* features */}
              <div className=" lg:w-[950px] w-auto grid lg:grid-cols-3 gap-2 lg:gap-6 z-10 my-1 xl:mt-10  ">
                <div className="relative">
                  <img src={bg1} className="hidden lg:flex" />
                  <img src={mbg1} className="lg:hidden" />

                  <div className="flex items-center absolute top-5 left-20 lg:top-[15px] lg:left-16">
                    <p className="text-[#48B415] font-normal font-[500] pr-1">
                      Resistrate on
                    </p>
                    <div className="flex items-center pl-2 ">
                      <img src={jeetlogo} className="w-[20px] h-[20px]" />
                      <p className="font-normal font-[500] pl-1">Jeetlogo</p>
=======
            {/* features */}
            <div className=" lg:w-[950px] w-auto grid lg:grid-cols-3  gap-6 z-10 mt-5 ">
                   
                <div className=" bg-[#1F222E] p-3 flex gap-3 items-center">
                  <img src={one} />
                  <div className="flex">
                    <p className="text-[#48B415] font-normal font-[500] pr-1">Sign Up at</p>
                    <div className="flex items-center pl-2 ">
                      <img src={jeetlogo} className="w-[20px] h-[20px]"/> 
                      <p className="font-normal font-[500] pl-1">JeetCity</p>
<<<<<<< Updated upstream
=======
>>>>>>> b50a221d34ba09ddbdf8de57435e7c72e0d1a3f7
>>>>>>> Stashed changes
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img src={bg2} className="hidden lg:flex" />
                  <img src={mbg2} className="lg:hidden " />

<<<<<<< HEAD
                  <div className="flex items-center absolute top-5 left-20 lg:top-[15px] lg:left-16 ">
                    <p className="font-normal font-[500]">
                      Use <span className="text-[#f67409] ">BONUS100</span> code
                    </p>
=======
  <div className=" bg-[#1F222E] flex p-3 gap-3 items-center w-full">
                  <img src={two} />
                  <div className="flex ">
                  <p className="font-normal font-[500]">Use <span className="text-[#f67409] ">IC1</span> code</p>
<<<<<<< Updated upstream
=======
>>>>>>> b50a221d34ba09ddbdf8de57435e7c72e0d1a3f7
>>>>>>> Stashed changes
                  </div>
                </div>

              <div className=" relative">
                  <img src={bg3} className="hidden lg:flex " />
                  <img src={mbg3} className="lg:hidden" />

                <div className="flex items-center absolute top-5 left-20 lg:top-[15px] lg:left-16">
                    <p className="font-normal font-[500] ">
                      <span className="text-[#48B415] ">Start</span> Winning!
                    </p>
                  </div>
                </div>
                <button className="rounded-xl p-3 lg:hidden  text-center bg-[#48b415] w-full lg:hidden  mt-5">
              Play
            </button>

              </div>

            </div>

            
          </div>

          <img
            src={newbg}
            className=" hidden lg:flex h-full mt-5 object-cover "
          />
        </div>

        {/* footer */}
      </div>

<<<<<<< Updated upstream
      {/* footer */}
      <footer className="flex items-center mt-7 gap-2 p-4 bg-[#1F222E] justify-center flex-wrap">
        <img src={p1} className="w-[60px] h-[25px]" />
        <img src={p2} className="w-[62px] h-[25px]" />
        <img src={p3}  className="w-[74px] h-[25px]"/>
        <img src={p4}  className="w-[88px] h-[25px]"/>
        <img src={p5}  className="w-[80px] h-[25px]"/>
        <img src={p6}  className="w-[70px] h-[25px]"/>
        <img src={p7}  className="w-[144px] h-[25px]"/>
        <img src={p8}  className="w-[81px] h-[25px]"/>
        {/* <img src={p8} /> */}
=======
<<<<<<< HEAD
      <footer className=" flex items-center w-full h-auto gap-2 p-4 bg-[#1F222E] justify-center flex-wrap">
        <img src={p1} className="w-[54px] h-[30px]" />
        <img src={p2} className="w-[82px] h-[30px]" />
        <img src={p3} className="w-[90px] h-[30px]" />
        <img src={p8} className="w-[112px] h-[30px]" />
        <img src={p4} className="w-[94px] h-[30px]" />
        <img src={p5} className="w-[100px] h-[30px]" />
        <img src={p6} className="w-[134px] h-[30px]" />
        <img src={p7} className="w-[82px] h-[30px]" />
        {/* <img src={p8} /> */}
        <img src={p9} className="w-[102px] h-[30px]" />
        <img src={p10} className="w-[86px] h-[30px]" />
        <img src={p11} className="w-[86px] h-[30px]" />
        <img src={p12} />
        <img src={p13} className="w-[104px] h-[30px]" />
=======
      {/* footer */}
      <footer className="flex items-center mt-7 gap-2 p-4 bg-[#1F222E] justify-center flex-wrap">
        <img src={p1} className="w-[60px] h-[25px]" />
        <img src={p2} className="w-[62px] h-[25px]" />
        <img src={p3}  className="w-[74px] h-[25px]"/>
        <img src={p4}  className="w-[88px] h-[25px]"/>
        <img src={p5}  className="w-[80px] h-[25px]"/>
        <img src={p6}  className="w-[70px] h-[25px]"/>
        <img src={p7}  className="w-[144px] h-[25px]"/>
        <img src={p8}  className="w-[81px] h-[25px]"/>
        {/* <img src={p8} /> */}
>>>>>>> Stashed changes
        <img src={p9}  className="w-[86px] h-[25px]"/>
        <img src={p13} className="w-[72px] h-[25px]" />
      

>>>>>>> b50a221d34ba09ddbdf8de57435e7c72e0d1a3f7
      </footer>
    </>
  );
};

export default Home;