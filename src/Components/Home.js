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
import p10 from "../Images/p10.png";
import p11 from "../Images/p11.png";
import p12 from "../Images/p12.png";
import p13 from "../Images/p13.png";
import homephone from "../Images/homephone.png";
import fm1 from "../Images/fm1.png";
import fm2 from "../Images/fm2.png";
import fm3 from "../Images/fm3.png";

const Home = () => {

  return (
    <div className=" text-white h-full   h-screen ">
      {/* Header section */}
      <header className="p-4 flex lg:justify-start justify-center">
        <img src={logo} alt="logo" className="w-[134px] h-[35px] " />
      </header>

      {/*Home section  */}
      <div className="  lg:grid grid-cols-2 ">
        <div className="flex flex-col item-center gap-5 px-8  ">
          <div className=" text-[24px] sm:text-[30px] lg:text-[40px] font-bold eastman  ">
            <h2 className=" text-center lg:text-start">
              Activate Your
              <span className="text-[#f67409] pl-2">Promocode</span>
            </h2>
            <h2 className="lg:-mt-3 text-center lg:text-start">
              Test and get
              <span className="text-[#48b415] pl-2">100 Free spins</span>
            </h2>
          </div>

          <div>
            <img src={homephone} className=" sm:hidden  " />
            <img
              src={home765}
              className=" hidden sm:flex lg:hidden object-cover"
            />
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start  lg:-mt-4">
           
              <div className="flex">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal">
                  Rapid Cashouts Processed in 48-72 hours
                </p>
              </div>
              <div className="flex ">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal">
                  Low Risk: Play as little as 1c per spin
                </p>
              </div>
              <div className="flex">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal sm:text-center">
                  Reliable Odds:Our games are independently audited
                </p>
              </div>
              <div className="flex">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal">
                  SSL Security:On all credit card payments
                </p>
              </div>
              <div className="flex ">
                <img
                  src={check}
                  className="sm:w-[24px] sm:h-[24px] w-[22px] h-[22px]"
                />
                <p className="normal  ">New,text & new title</p>
              </div>
       

            {/* btn */}
            <button className="rounded-xl p-3  text-center bg-[#48b415] w-[220px]  mt-5">
              Play
            </button>

            {/* features */}
            <div className="hidden sm:flex lg:flex-row flex-col gap-3 z-10 mt-5">
              <img src={f1} className="lg:w-[340px]  h-[72px]" />
              <img src={f2} className="lg:w-[340px]   h-[62px]" />
              <img src={f3} className="lg:w-[340px]   h-[62px]" />
            </div>
            <div className=" inline sm:hidden ">
              <img src={fm1} className="w-[340px] h-[72px]" />
              <img src={fm2} className="w-[340px] h-[72px]" />
              <img src={fm3} className="w-[340px] h-[72px]" />
            </div>
          </div>
        </div>
        <div>
          <img
            src={homeImage}
            className=" hidden lg:flex h-full object-cover"
          />
        </div>
      </div>

      {/* footer */}
      <footer className="flex items-center mt-7 p-4 bg-[#1F222E] justify-center flex-wrap">
        <img src={p1} />
        <img src={p2} />
        <img src={p3} />
        <img src={p4} />
        <img src={p5} />
        <img src={p6} />
        <img src={p7} />
        <img src={p8} />
        <img src={p9} />
        <img src={p10} />
        <img src={p11} />
        <img src={p12} />
        <img src={p13} />
      </footer>
    </div>
  );
};

export default Home;
