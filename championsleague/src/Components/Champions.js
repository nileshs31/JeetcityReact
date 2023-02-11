import React, { useState } from "react";
import axios from "axios";
import logo from "../Images/logo.png";
import background from "../Images/background.png";
import home from "../Images/home.png";
import psg from "../Images/psg.png";
import spurs from "../Images/spurs.png";
import bayern from "../Images/bayern.png";
import acmilan from "../Images/acmilan.png";
import benfica from "../Images/benfica.png";
import chelsea from "../Images/chelsea.png";
import brugge from "../Images/brugge.png";
import bvb from "../Images/bvb.png";
import coin from "../Images/coin.png";
import gift from "../Images/gift.png";
import i from "../Images/i.png";
import down from "../Images/down.png";
import popUp from "../Images/popUp.png";
import close from "../Images/close.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Champions = () => {
  const [modal, setModal] = useState(false);
  const [selected1, setSelected1] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [selected3, setSelected3] = useState(null);
  const [selected4, setSelected4] = useState(null);

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");

  const [email, setemail] = useState("");
  // const [modal,setmodal] = useState(false)

  const [isOpen, setIsOpen] = useState(false);
  const round = isOpen === true ? "rounded-t-[16px]" : "rounded-[16px]";
  const marGin = isOpen ? "0px" : "25px";

  function selection1(btn) {
    if (selected1 === btn) {
      setSelected1(null);
      setName1(null);
    } else {
      setSelected1(btn);

      if (btn === "psg") {
        setName1("psg");
      }
      if (btn === "draw") {
        setName1("draw");
      }
      if (btn === "bayern") {
        setName1("bayern");
      }
    }
  }
  // s2

  function selection2(btn) {
    if (selected2 === btn) {
      setSelected2(null);
      setName2(null);
    } else {
      setSelected2(btn);

      if (btn === "acmilan") {
        setName2("Ac milan");
      }
      if (btn === "draw") {
        setName2("draw");
      }
      if (btn === "tottenham") {
        setName2("Tottenham");
      }
    }
  }

  //s3
  function selection3(btn) {
    if (selected3 === btn) {
      setSelected3(null);
      setName3(null);
    } else {
      setSelected3(btn);

      if (btn === "Borussia") {
        setName3("borussia dortmund");
      }
      if (btn === "draw") {
        setName3("draw");
      }
      if (btn === "chelsea") {
        setName3("chelsea");
      }
    }
  }

  //s4
  function selection4(btn) {
    if (selected4 === btn) {
      setSelected4(null);
      setName4(null);
    } else {
      setSelected4(btn);

      if (btn === "Club brugge") {
        setName4("Club brugge");
      }
      if (btn === "draw") {
        setName4("draw");
      }
      if (btn === "benfica") {
        setName4("benfica");
      }
    }
  }

  console.log(email);
  // handlesubmit
  const handleSubmit = (e) => {
    // e.preventDefault();

    if (!email || !name1 || !name2 || !name3 || !name4) {
      alert(
        "Please make sure to enter your email and make all the player predictions!"
      );
      return;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    const data = {
      email: email,
      match1: name1,
      match2: name2,
      match3: name3,
      match4: name4,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/20d0e331-93cc-4c2d-9a35-a83064dd9d3b",
        data
      )
      .then((response) => {
        console.log(response);

        window.location.href = "https://www.google.co.in/";
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred, please try again later.");
      });
  };

  return (
    <div className="text-white em">
      <header className="flex bg-[#1F222E] justify-between items-center p-3">
        <img src={logo} alt="logo" className="w-[132px]" />
        <div className="flex gap-5 items-center">
          <button className="bg-[#48b415] em p-2 px-4 rounded-3xl font-medium text-center">
            Sign Up
          </button>
        </div>
      </header>

      {/*home section  */}
     
   <section className="bgg w-full  h-[500px] object-cover no-repeat bg-center">
        <div className=" 2xl:max-w-[85%] max-w-[95%] mx-auto lg:gap-10 px-[24px] lg:px-10 py-10 sm:py-0  flex flex-col-reverse items-center justify-center sm:flex-row xl:gap-5 lg:gap-2 place-items-center  ">
          <div className="w-full">
            <p className=" text-[20px]  md:text-[24px] text-center sm:text-start">
              CHAMPIONS LEAGUE
            </p>
            <h2 className=" eastman text-[28px] sm:text-start text-center sm:text-[30px] md:text-[35px] lg:text-[40px]">
              Predict the result and get a chance to win an{" "}
              <span className="text-[#48b415]">iPhone 14 Pro MAX</span>
            </h2>
          </div>
          <img
            src={home}
            className=" xl:w-[462px] xl:h-[448px] md:w-[395px] md:h-[382px] sm:w-[316px] sm:h-[306px] w-[184px] h-[178px] "
          />
        </div>
      </section>
    
   

      {/* bet section */}
      <div className="  m 2xl:max-w-[85%] max-w-[95%]  mx-auto">
        <p className="text-[22px] eastman text-center ">What should I do?</p>
        <p className="text-center text-[#CED2E0] er text-[16px]">
          Для прогноза необходимо нажать на одну из команд, или на Draw
        </p>
        {/*options  */}
        <div className="my-10 flex flex-col gap-4">
          {/* match1 */}
          <div className={`bg-[#1F222E] rounded-[32px]  flex w-full p-4 gap-2`}>
            <div
              onClick={() => {
                selection1("psg");
              }}
              className={
                selected1 === "psg"
                  ? ` bg-[#48B415] cursor-pointer border-2 flex sm:flex-row flex-col w-full items-center justify-center p-2 gap-2 border-[1px] rounded-l-2xl border-[#34384D]`
                  : " cursor-pointer border-2 flex sm:flex-row flex-col w-full items-center justify-center p-2 gap-2 border-[1px] rounded-l-2xl border-[#34384D]"
              }
            >
              <img src={psg} className="w-[36px] h-[36px]" />
              <p className="text-[16px] font-medium text-center">PSG</p>
            </div>
            <div
              onClick={() => {
                selection1("draw");
              }}
              className={
                selected1 === "draw"
                  ? ` bg-[#48B415] cursor-pointer border-[1px] w-[300px] border-[#34384D] flex items-center justify-center p-2`
                  : "border-[1px] w-[300px] border-[#34384D] flex items-center justify-center p-2 cursor-pointer"
              }
            >
              <p>Draw</p>
            </div>
            <div
              onClick={() => {
                selection1("bayern");
              }}
              className={
                selected1 === "bayern"
                  ? ` bg-[#48B415] cursor-pointer border-2 flex sm:flex-row flex-col w-full items-center justify-center p-2 gap-2 border-[1px] rounded-r-2xl border-[#34384D]`
                  : " cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-r-2xl border-[#34384D]"
              }
            >
              <img src={bayern} className="w-[36px] h-[36px]" />
              <p className="text-[16px] font-medium text-center">Bayern</p>
            </div>
          </div>

          {/* match 2 */}
          <div className="bg-[#1F222E] rounded-xl  flex w-full p-4 gap-2">
            <div
              onClick={() => {
                selection2("acmilan");
              }}
              className={
                selected2 === "acmilan"
                  ? ` bg-[#48B415] cursor-pointer border-2 flex sm:flex-row flex-col w-full items-center justify-center p-2 gap-2 border-[1px] rounded-l-2xl border-[#34384D]`
                  : " cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-l-2xl border-[#34384D]"
              }
            >
              <img src={acmilan} className="w-[36px] h-[36px]" />
              <p className="text-[16px] font-medium text-center">Ac milan</p>
            </div>
            <div
              onClick={() => {
                selection2("draw");
              }}
              className={
                selected2 === "draw"
                  ? ` bg-[#48B415] cursor-pointer border-[1px] w-[300px] border-[#34384D] flex items-center justify-center p-2`
                  : "border-[1px] w-[300px] border-[#34384D] flex items-center justify-center p-2 cursor-pointer"
              }
            >
              <p>Draw</p>
            </div>
            <div
              onClick={() => {
                selection2("tottenham");
              }}
              className={
                selected2 === "tottenham"
                  ? ` bg-[#48B415] cursor-pointer border-2 flex sm:flex-row flex-col w-full items-center justify-center p-2 gap-2 border-[1px] rounded-r-2xl border-[#34384D]`
                  : " cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-r-2xl border-[#34384D]"
              }
            >
              <img src={spurs} className="w-[36px] h-[36px] " />
              <p className="text-[16px] font-medium text-center">Tottenham</p>
            </div>
          </div>

          {/* match3 */}
          <div className="bg-[#1F222E] rounded-xl  flex w-full p-4 gap-2">
            <div
              onClick={() => {
                selection3("Borussia");
              }}
              className={
                selected3 === "Borussia"
                  ? ` bg-[#48B415] cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-l-2xl border-[#34384D]`
                  : " cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-l-2xl border-[#34384D]"
              }
            >
              <img src={bvb} className="w-[36px] h-[36px]" />
              <p className="text-[16px] font-medium text-center">Borussia D</p>
            </div>
            <div
              onClick={() => {
                selection3("draw");
              }}
              className={
                selected3 === "draw"
                  ? ` bg-[#48B415] cursor-pointer border-[1px] w-[300px] border-[#34384D] flex items-center justify-center p-2`
                  : "border-[1px] w-[300px] border-[#34384D] flex items-center justify-center p-2 cursor-pointer"
              }
            >
              <p>Draw</p>
            </div>
            <div
              onClick={() => {
                selection3("chelsea");
              }}
              className={
                selected3 === "chelsea"
                  ? ` bg-[#48B415] cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-r-2xl border-[#34384D]`
                  : " cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-r-2xl border-[#34384D]"
              }
            >
              <img src={chelsea} className="w-[36px] h-[36px]" />
              <p className="text-[16px] font-medium text-center">Chelsea</p>
            </div>
          </div>

          {/* match4 */}
          <div className="bg-[#1F222E] rounded-xl  flex w-full p-4 gap-2">
            <div
              onClick={() => {
                selection4("Club brugge");
              }}
              className={
                selected4 === "Club brugge"
                  ? ` bg-[#48B415] cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-l-2xl border-[#34384D]`
                  : " cursor-pointer border-2 flex sm:flex-row flex-col w-full items-center justify-center p-2 gap-2 border-[1px] rounded-l-2xl border-[#34384D]"
              }
            >
              <img src={brugge} className="w-[36px] h-[36px]" />
              <p className="text-[16px] font-medium text-center">Club brugge</p>
            </div>
            <div
              onClick={() => {
                selection4("draw");
              }}
              className={
                selected4 === "draw"
                  ? ` bg-[#48B415] cursor-pointer border-[1px] w-[300px] border-[#34384D] flex items-center justify-center p-2`
                  : "border-[1px] w-[300px] border-[#34384D] flex items-center justify-center p-2 cursor-pointer"
              }
            >
              <p>Draw</p>
            </div>
            <div
              onClick={() => {
                selection4("benfica");
              }}
              className={
                selected4 === "benfica"
                  ? ` bg-[#48B415] cursor-pointer border-2 flex sm:flex-row flex-col w-full items-center justify-center p-2 gap-2 border-[1px] rounded-r-2xl border-[#34384D]`
                  : " cursor-pointer border-2 flex sm:flex-row flex-col  w-full items-center justify-center p-2 gap-2 border-[1px] rounded-r-2xl border-[#34384D]"
              }
            >
              <img src={benfica} className="w-[36px] h-[36px] " />
              <p className="text-[16px] font-medium text-center">Benfica</p>
            </div>
          </div>
          {/* submit  */}
          <div className="flex items-center justify-center ">
            <button
              onClick={() => {
                setModal(true);
              }}
              className="bg-[#48B415] mt-6 text-center em p-3 px-6 rounded-xl"
            >
              {" "}
              Confirm Prediction{" "}
            </button>
          </div>
        </div>
      </div>

      {/* features */}

      <div className=" 2xl:max-w-[85%] max-w-[95%] p-[30px] my-[22px] mx-auto bg-[#1F222E] rounded-[32px]">
        <div>
          <p className="xl:text-[20px] sm:text-[18px] text-[16px] mt-8 eastman text-center ">
            What can i win ?
          </p>
          <p className="text-[16px] text-center er text-[#CED2E0] ">
            Угадай результат первых мачтей <span className="em">1/8</span> ЛЧ и
            получи возможность выиграть{" "}
            <span className="em text-[#48B415] font-bold text-[16px]">
              IPHONE 14 Pro max.
            </span>
          </p>
        </div>
        {/*award  */}
        <div className="grid sm:grid-cols-3 text-center sm:grid-flow-row  md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8  ">
          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4 justify-between">
            <img src={coin} alt="coin" className="w-[42px] h-[42px]" />
            <p className="text-[22px] eastman ">1 FREEBET</p>
            <p className="em">5 euro</p>
            <div className="t text-[14px] flex text-center em flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 2</p>
              <p className="">correct results</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4 justify-between">
            <img src={coin} alt="coin" className="w-[42px] h-[42px]" />
            <p className="text-[22px] eastman">2 FREEBET</p>
            <p className="em">5 euro</p>
            <div className="t text-[14px] em text-center flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3</p>
              <p>correct results</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4 justify-between">
            <img src={coin} alt="coin" className="w-[42px] h-[42px]" />
            <p className="text-[22px] eastman">3 FREEBET</p>
            <p className="em">5 euro</p>
            <div className=" t text-[14px] em text-center flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 4</p>
              <p>correct results</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col sm:col-span-3 w-full  items-center bg-[#15171F] px-3 w-full py-4  justify-between sm:col-span-2 md:col-span-1  ">
            <img src={gift} alt="coin" className="w-[42px] h-[42px]" />
            <p className="text-[20px] eastman text-center ">GRAND PRIZE</p>
            <p className="em">iphone 14 max pro</p>
            <div className=" t text-[14px] em flex flex-col items-center  bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p className="text-center">For 5</p>
              <p className="text-center">correct results</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <p className="text-center text-[#CED2E0] text-[14px] er mt-5">
            To participate in the promo, make a qualifying bet of 5+ euros on
            any match of Champions Legue.
          </p>
        </div>
      </div>

      {/* terms and conditions */}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`${round}  2xl:max-w-[85%] max-w-[95%] mx-auto my-[${marGin}] em  bg-[#272B3B] flex items-center justify-between p-4 transition-all duration-300`}
      >
        <div className="flex items-center gap-4">
          <img src={i} />
          <p>Terms & Conditions</p>
        </div>
        <div className="text-2xl font-medium cursor-pointer">
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </div>
      {isOpen ? (
        <div className="rounded-b-[16px] er 2xl:max-w-[85%] max-w-[95%] mx-auto h-auto bg-[#272B3B] er transition-all mb-5 p-5 text-lg ">
         <ol className="text-white flex flex-col gap-4">  
 <li className="text-sm">1. <span className="text-sm">Create an account with JeetCity and deposit at least ₹500.</span></li> 
 <li className="text-sm">2. <span className="text-sm">Use code IC1 in the Bonus Code field.</span></li>  
 <li className="text-sm">3. <span className="text-sm">And explore your first playroom with a royal bonus🔥.</span></li>  
 


</ol>  
        </div>
      ) : (
        ""
      )}

      {/*Modal  */}

      {/* pop Up */}
      {modal ? (
        <FullScreenModal>
          <div className="">
            <div className=" my-5 relative container h-auto rounded-[24px] mx-auto bg-[#272B3B] p-4">
              <img
                src={close}
                onClick={() => {
                  setModal(false);
                }}
                className="absolute top-[5%] right-[5%] cursor-pointer"
              />
              <div className="  flex flex-col items-center justify-center gap-5 ">
                <img src={popUp} />
                <p className="lg:text-[19px] text-[18px] w-[90%] er mx-auto  text-center   ">
                  To complete the Prediction, you need to provide email your
                  account and need to bet 5 EUR for any tennis match. Otherwise,
                  the Prediction will not be considered valid.
                </p>
                <div className="flex flex-col mt-4 w-[90%] mx-auto">
                  <label className="text-xl ">Email</label>
                  <input
                    type="email"
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    className="mt-3 p-3 outline-none bg-[#34384D] text-[#CED2E0] pl-4 rounded-[13px]"
                  />
                </div>
                <button
                  className="bg-[#48B415] my-6 text-center p-3 px-6 rounded-[16px] w-[90%]"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Make a bet
                </button>
              </div>
            </div>
          </div>
        </FullScreenModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Champions;

const FullScreenModal = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 modal  flex items-center justify-center lg:p-10 p-5">
      {children}
    </div>
  );
};