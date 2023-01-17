import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../Images/logo.png";
import Ausbg from "../Images/Ausbg.png";
import aushome from "../Images/aushome.png";
import coin from "../Images/coin.png";
import gift from "../Images/gift.png";
import i from "../Images/i.png";
import down from "../Images/down.png";
import popUp from "../Images/popUp.png";
import close from "../Images/close.png";
import {IoIosArrowForward ,IoIosArrowDown} from 'react-icons/io'


const Australianopen = () => {
   const [isOpen, setIsOpen] = useState(false);
  const [email,setemail] =useState('')
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [selected3, setSelected3] = useState(null);
  const [selected4, setSelected4] = useState(null);
  const [selected5, setSelected5] = useState(null);
  const [selected6, setSelected6] = useState(null);
  const [selected7, setSelected7] = useState(null);
  const [finalselected, setFinalSelected] = useState("btn");
  const [finalName, setFinalName] = useState("");


const round = isOpen === true ?'rounded-t-[16px]':'rounded-[16px]'


  function changeColorFinal(btn) {
  
    const one = document.getElementById("final1").textContent;
    const two = document.getElementById("final2").textContent;

   if (finalselected === btn) {
      setFinalSelected(null);
      setFinalName(null);
    } else {
      setFinalSelected(btn);
      setFinalName(btn === 'finalbtn1' ? one  : two);
    }


  
  }

  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");

  const [name5, setName5] = useState("");
  const [name6, setName6] = useState("");
  const [name7, setName7] = useState("");

  const [toggle,settoggle] = useState(false)

  console.table("namemmemem", name5);
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  function changeColor(btn) {

   if (selected === btn) {
      setSelected(null);
      setName(null);
    } else {
      setSelected(btn);
      setName(btn === 'btn1' ? 'Messi' : 'Ronaldo');
    }
  }
  
  function changeColor2(btn) {
   
   if (selected2 === btn) {
      setSelected2(null);
      setName2(null);
    } else {
      setSelected2(btn);
      setName2(btn === 'btn3' ? 'Neymar' : 'Maradona');
    }
  }

  ////////////
  function changeColor3(btn) {
   
   if (selected3 === btn) {
      setSelected3(null);
      setName3(null);
    } else {
      setSelected3(btn);
      setName3(btn === 'btn5' ? 'pele' : 'Mbappe');
    }
  }

  ////////////////////////////////
  function changeColor4(btn) {
    
   if (selected4 === btn) {
      setSelected4(null);
      setName4(null);
    } else {
      setSelected4(btn);
      setName4(btn === 'btn7' ? 'Lewandoski' : 'Suarez');
    }
  }

  // console.log('selelle',selected5)
  //////////////////////

  function changeColor5(btn) {
    setSelected5(btn);
    const inn2 = document.getElementById("test2").textContent;
    const inn = document.getElementById("test").textContent;

   
   if (selected5 === btn) {
      setSelected5(null);
      setName5(null);
    } else {
      setSelected5(btn);
      setName5(btn === 'btn9' ? inn : inn2);
    }

    // selected5==='btn10'?setName5(inn):setName6(inn2)
  }

  /////////////////////////////
  function changeColor6(btn) {
    setSelected6(btn);
    const top1 = document.getElementById("test3").textContent;
    const top2 = document.getElementById("test4").textContent;

   if (selected6 === btn) {
      setSelected6(null);
      setName6(null);
    } else {
      setSelected6(btn);
      setName6(btn === 'btn11' ? top1 : top2);
    }
  }

  /////////////////////////////
  function changeColor7(btn) {
    setSelected7(btn);
    const fintext = document.getElementById("test5").textContent;
    const fintext2 = document.getElementById("test6").textContent;

   if (selected7 === btn) {
      setSelected7(null);
      setName7(null);
    } else {
      setSelected7(btn);
      setName7(btn === 'btn13' ? fintext : fintext2);
    }
  }

  ///////////////////////////////////////
  const [selected8, setSelected8] = useState("btn");
  const [selected9, setSelected9] = useState("btn");
  const [selected10, setSelected10] = useState("btn");
  const [selected11, setSelected11] = useState("btn");
  const [selected12, setSelected12] = useState("btn");
  const [selected13, setSelected13] = useState("btn");
  const [selected14, setSelected14] = useState("btn");
  const [selected15, setSelected15] = useState("btn");

  // const[name8,setName8] = useState('')
  const [name9, setName9] = useState("");
  const [name10, setName10] = useState("");
  const [name11, setName11] = useState("");
  const [name12, setName12] = useState("");
  const [name13, setName13] = useState("");
  const [name14, setName14] = useState("");
  const [name15, setName15] = useState("");



  function changeColor9(btn) {
     if (selected9 === btn) {
      setSelected9(null);
      setName9(null);
    } else {
      setSelected9(btn);
      setName9(btn === 'btn17' ? ' Zidane' : 'Cruyff');
    }
  }

  function changeColor10(btn) {

       if (selected10 === btn) {
      setSelected10(null);
      setName10(null);
    } else {
      setSelected10(btn);
      setName10(btn === 'btn19' ? ' Beckenbauer' : 'Puskas');
    }
  
  }

  function changeColor11(btn) {
   if (selected11 === btn) {
      setSelected11(null);
      setName11(null);
    } else {
      setSelected11(btn);
      setName11(btn === 'btn21' ? 'Haaland' : ' Salah');
    }

  
  }


  function changeColor12(btn) {
  
       if (selected12 === btn) {
      setSelected12(null);
      setName12(null);
    } else {
      setSelected12(btn);
      setName12(btn === 'btn15' ? 'di stefano' : 'Xavi');
    }
  }

  function changeColor13(btn) {
    setSelected13(btn);
    const n3 = document.getElementById("no3").textContent;
    const n4 = document.getElementById("no4").textContent;

    if (selected13 === btn) {
      setSelected13(null);
      setName13(null);
    } else {
      setSelected13(btn);
      setName13(btn === 'btn23' ? n3  : n4);
    }

    
  }

  function changeColor14(btn) {
   

    const n1 = document.getElementById("no1").textContent;
    const n2 = document.getElementById("no2").textContent;

      if (selected14 === btn) {
      setSelected14(null);
      setName14(null);
    } else {
      setSelected14(btn);
      setName14(btn === 'btn25' ? n1  : n2);
    }
   
  }

  function changeColor15(btn) {
    setSelected15(btn);
    const ff1 = document.getElementById("f1").textContent;
    const ff2 = document.getElementById("f2").textContent;

    if (selected15 === btn) {
      setSelected15(null);
      setName15(null);
    } else {
      setSelected15(btn);
      setName15(btn === 'btn27' ? ff1  : ff2);
    }
  }

 const handleSubmit = (e) => {
    // e.preventDefault();

    
    if (!email || !name || !name2 || !name3 || !name4 || !name5 || !name6 || !name7 || !name9 || !name10 || !name11 || !name12 || !name13 || !name14 || !name15 || !finalName) {
        alert("Please make sure to enter your email and make all the player predictions!");
        return;
    }

   
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    const data = {
        email: email,
        n1: name,
        n2: name2,
        n3: name3,
        n4: name4,
        n5: name5,
        n6: name6,
        n7: name7,
        n9: name9,
        n10: name10,
        n11: name11,
        n12: name12,
        n13: name13,
        n14: name14,
        n15: name15,
        finalist: finalName,
    };

    axios
        .post(
            "https://sheet.best/api/sheets/9d85ac60-871b-476d-afa4-2f75755439e3",
            data
        )
        .then((response) => {
            console.log(response);
         
            // setModal(false)
            window.location.href="https://sports.jeetcity.com/en/tennis/australian-open-men-singles-l-4"
          
         




            //https://sports.jeetcity.com/en/tennis/australian-open-men-singles-l-4
        })
        .catch((error) => {
            console.log(error);
            alert('An error occurred, please try again later.');
        });
};


  const marGin = isOpen ? '0px':'25px'
  ///////////////////

  return (
    <div className="text-white  ">
      {/* <p>check </p> */}
      <header className="flex justify-between items-center p-3">
        <img src={logo} alt="logo" className="w-[132px] h-[34px]" />
        <div className="flex gap-5 items-center">
         
        <button className="bg-[#48b415] em p-2 px-4 rounded-3xl font-medium text-center">
          Sign Up
        </button>
        </div>
      
      </header>

      {/* home section  */}
      <div className="bgg w-full  h-[500px] object-cover no-repeat bg-center">
  <div className=" lg:max-w-[90%] mx-auto gap-10 px-[24px] lg:px-10 py-10 sm:py-0  flex flex-col-reverse items-center justify-center sm:flex-row xl:gap-5 lg:gap-2 place-items-center  ">
        <div className="">
          <p className=" text-[20px] sm:text-[25px]">AUSTRALIAN OPEN 2022</p>
          <h2 className=" eastman text-[30px] sm:text-[35px] lg:text-[40px]">
            20% ONLY WIN FREE  BET +20% COMBOBOOST
          </h2>
        </div>
        <img 
          src={aushome}
          className=" xl:w-[462px] xl:h-[448px] md:w-[395px] md:h-[382px] sm:w-[332px] sm:h-[321px] w-[184px] h-[178px] "
        />
      </div>
      </div>
    
      {/* bet section */}
      <div className="max-w-[94%] my-5 mx-auto bg-[#1F222E] p-6 rounded-[48px]">
        <p className="text-[32px] eastman text-center ">What should I do?</p>
        <div>
          <p className="text-[24px] er text-center mt-8  ">
            Совершай депозит от{" "}
            <span className="text-[#48B415]">30 евро с 16 по 29 января,</span>{" "}
            получай{" "}
            <span className="text-[#48B415]">
              {" "}
              20% Onlywin фрибет + Комбобуст 20%{" "}
            </span>
            на матчи АО2022. Когда турнир подойдет к самому интересному (1/8
            финала), то у тебя будет возможность выиграть
            <span className="text-[#48B415]">iPhone 14 Pro MAX</span> оставив
            свои прогнозы у нас.
          </p>
        </div>

        <p className="text-[28px] mt-8 eastman text-center ">
          What can i win ?
        </p>
        {/* prize section */}
        <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8  ">
          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4 justify-between" >
            <img src={coin} alt="coin" className="w-[42px] h-[42px]" />
            <p className="text-[22px] eastman">1 FREEBET</p>
            <p className="em">5 euro</p>
            <div className="text-[18px] flex text-center er flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4 justify-between">
            <img src={coin} alt="coin" className="w-[42px] h-[42px]"/>
            <p className="text-[22px] eastman">2 FREEBET</p>
            <p className="em">5 euro</p>
            <div className="text-[18px] er text-center flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 py-4 justify-between">
            <img src={coin} alt="coin" className="w-[42px] h-[42px]"/>
            <p className="text-[22px] eastman">3 FREEBET</p>
            <p className="em">5 euro</p>
            <div className=" er text-[18px] text-center flex flex-col items-center bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p>For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] w-full  px-3 py-4 justify-between ">
            <img src={coin} alt="coin" className="w-[42px] h-[42px]"/>
            <p className="text-[22px] eastman">4 FREEBET</p>
            <p className="em">10 euro</p>
            <div className=" er text-[18px] flex flex-col items-center bg-[#1F222E] w-full text-center rounded-xl p-2 mt-2">
              <p >For 3-5</p>
              <p>guessed teams</p>
            </div>
          </div>

          <div className="rounded-xl flex flex-col items-center bg-[#15171F] px-3 w-full py-4  justify-between sm:col-span-2 md:col-span-1  ">
            <img src={gift} alt="coin" className="w-[42px] h-[42px]"/>
            <p className="text-[20px] eastman text-center ">GRAND PRIZE</p>
            <p className="em">iphone 14 max pro</p>
            <div className=" er text-[18px] flex flex-col items-center  bg-[#1F222E] w-full rounded-xl p-2 mt-2">
              <p className="text-center">For 3-5</p>
              <p className="text-center">guessed teams</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 er">
          To participate in the promo, make a qualifying bet of 5+ euros on any
          tennis match.
        </p>
      </div>

      {/* predictions section  */}
      <p className="text-center m-4 text-3xl">Your predictions</p>

      <div className=" em flex flex-col items-center w-full sm:h-[1600px]  h-[2000px] px-2">

        <div className="w-[2px]   border-2 lg:h-[1599px] sm:h-[1600px] h-[2000px]   flex flex-col items-center  gap-[250px] z-20">
          <button className={`w-[200px] px-10 p-[10px] bg-white text-black rounded-lg  lg:mt-[13px]`}>
           1/8 finals
          </button>
          <button className="w-[200px] px-10 mt-[180px]   sm:-mt-[1px]  md:-mt-[45px]    lg:-mt-[10px]  p-[10px] bg-white text-black rounded-lg">
          1/4 finals
          </button>
          <button className="w-[200px] -mt-[30px]  sm:-mt-[70px] px-10 md:-mt-[90px] lg:-mt-[82px] bg-white text-black p-[10px]  rounded-lg">
          Semi-final
          </button>
          <button className=" w-[200px]  mt-[260px]  sm:mt-[260px]  px-10  md:mt-[330px]   lg:mt-[240px] p-[10px] bg-white text-black rounded-lg">
          Semi-final
          </button>
          <button className=" w-[200px] -mt-[40px] px-10 sm:-mt-[45px] md:-mt-[90px]  lg:-mt-[80px]  p-[10px] bg-white text-black  rounded-lg">
           1/4 finals
          </button>
          <button className=" w-[200px] px-10 p-[10px] mt-[98px] sm:-mt-[82px]   md:-mt-[60px]  lg:-mt-[40px] bg-white text-black  rounded-lg">
           1/8 final
          </button>
        </div>

        <div className=" border-2 rounded-2xl md:rounded-3xl lg:-mt-[1600px] sm:-mt-[1600px] -mt-[2000px] w-[100%] h-full md:w-[95%] lg:w-[90%] mx-auto bg-[#34A2DB] flex flex-col items-center justify-between md:p-5 py-8 md:py-10 " >
          {/* <div className="bg-[#34A2DB] p-3 lg:p-10 w-full h-auto md:h-[900px] rounded-t-[32px]"> */}
            <div className="border-2 border-white p-3 lg:p-8 grid sm:grid-cols-2 sm:gap-8  rounded-[32px] mb-5 w-full">
              <div className="grid grid-cols-2 gap-4 w-full md:py-0 py-8">
                <div className="w-full border-2 flex flex-col items-center justify-center  p-1 lg:p-[16px] gap-[16px] rounded-[16px]">
                  <button
                    onClick={() => {
                      changeColor("btn1");
                    }}
                    className={
                      selected === "btn1"  
                        ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Messi
                  </button>
                  <button
                    onClick={() => {
                      changeColor("btn2");
                    }}
                    className={
                      selected === "btn2"
                     
                        ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Ronaldo
                  </button>
                </div>

                <div className=" border-2 flex flex-col items-center justify-center  p-1 lg:p-[16px] gap-[16px] rounded-[16px]">
                  <button
                    onClick={() => {
                      changeColor2("btn3");
                    }}
                    className={
                      selected2 === "btn3"
                        ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Neymar
                  </button>
                  <button
                    onClick={() => {
                      changeColor2("btn4");
                    }}
                    className={
                      selected2 === "btn4"
                        ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Maradona
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full md:py-0 py-8">
                <div className="border-2 flex flex-col items-center justify-center  p-1 lg:p-[16px] gap-[16px] rounded-[16px]">
                  <button
                    onClick={() => {
                      changeColor3("btn5");
                    }}
                    className={
                      selected3 === "btn5"
                        ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Pele
                  </button>
                  <button
                    onClick={() => {
                      changeColor3("btn6");
                    }}
                    className={
                      selected3 === "btn6"
                        ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Mbappe
                  </button>
                </div>

                <div className=" border-2 flex flex-col items-center justify-center  p-1 lg:p-[16px] gap-[16px] rounded-[16px]">
                  <button
                    onClick={() => {
                      changeColor4("btn7");
                    }}
                    className={
                      selected4 === "btn7"
                        ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Lewandoski
                  </button>
                  <button
                    onClick={() => {
                      changeColor4("btn8");
                    }}
                    className={
                      selected4 === "btn8"
                        ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Suarez
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 my-10 grid grid-cols-2 gap-8 p-3 w-full lg:p-8 md:rounded-[32px]">
              <div className="grid md:grid-cols-2 gap-5 p-3 border-2 lg:p-[16px] rounded-[16px]">
                <button
                  id="test"
                  onClick={() => {
                    changeColor5("btn9");
                  }}
                  className={
                    selected5 === "btn9" 
                      ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                      : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                  }
                  disabled={!name}
                >
                  {name ? name : "player name"}
                </button>
                <button
                  id="test2"
                  onClick={() => {
                    changeColor5("btn10");
                  }}
                  className={
                    selected5 === "btn10"
                      ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full" 
                      : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                  }
                  disabled={!name2}

                >
                  {name2 ? name2 : "player name"}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-5 p-3 lg:p-[16px] rounded-[16px] border-2">
                <button
                  id="test3"
                  onClick={() => {
                    changeColor6("btn11");
                  }}
                  className={
                    selected6 === "btn11"
                      ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                      : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                  }
                  disabled={!name3}

                >
                  {name3 ? name3 : "player name"}
                </button>
                <button
                  id="test4"
                  onClick={() => {
                    changeColor6("btn12");
                  }}
                  className={
                    selected6 === "btn12"
                      ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                      : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                  }
                  disabled={!name4}

                >
                  {name4 ? name4 : "player name"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2  gap-5 border-2 p-8 my-5  w-full lg:max-w-[50%] mx-auto rounded-[32px]">
              <button
                id="test5"
                onClick={() => {
                  changeColor7("btn13");
                }}
                className={
                  selected7 === "btn13"
                    ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                    : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                }
                  disabled={!name5}

              >
                {name5 ? name5 : "player name"}
              </button>

              <button
                id="test6"
                onClick={() => {
                  changeColor7("btn14");
                }}
                className={
                  selected7 === "btn14"
                    ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                    : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                }
                  disabled={!name6}

              >
                {name6 ? name6 : "player name"}
              </button>
            </div>

            <div className=" flex flex-col my-5 gap-5 w-[300px] mx-auto  border-2 p-4 rounded-[16px]  z-20">
              <button
                id="final1"
                onClick={() => {
                  changeColorFinal("finalbtn1");
                }}
                className={
                  finalselected === "finalbtn1"
                    ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                    : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                }
                  disabled={!name7}

              >
                {name7 ? name7 : "player name"}
              </button>
              <button className="px-4 p-3 bg-white text-black rounded-lg z-20">
                {finalName ? finalName : "Winner"}
              </button>
              <button
                id="final2"
                onClick={() => {
                  changeColorFinal("finalbtn2");
                }}
                className={
                  finalselected === "finalbtn2"
                    ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                    : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                }
                  disabled={!name15}

              >
                {name15 ? name15 : "player name"}
              </button>
            {/* </div> */}
          </div>

          {/*  */}
          {/* <div className="bg-[#34A2DB] p-5 lg:p-10 w-full  h-auto lg:h-[700px] rounded-b-[32px]"> */}
            <div className=" grid grid-cols-2  gap-5 border-2 p-6 md:p-9 lg:p-8 my-5  w-full lg:max-w-[50%] mx-auto md:rounded-[32px]">
              <button
                id="f1"
                onClick={() => {
                  changeColor15("btn27");
                }}
                className={
                  selected15 === "btn27"
                    ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                    : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                }
                  disabled={!name14}

              >
                {name14 ? name14 : "player name"}
              </button>
              <button
                id="f2"
                onClick={() => {
                  changeColor15("btn28");
                }}
                className={
                  selected15 === "btn28"
                    ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                    : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                }
                  disabled={!name13}

              >
                {name13 ? name13 : "player name"}
              </button>
            </div>

            <div className="border-2 my-10 grid grid-cols-2 gap-8 w-full lg:p-8 p-3 rounded-[32px]">
              <div className="grid md:grid-cols-2 gap-5 border-2 p-[16px] rounded-[16px]">
                <button
                  id="no1"
                  onClick={() => {
                    changeColor14("btn25");
                  }}
                  className={
                    selected14 === "btn25"
                      ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                      : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                  }
                  disabled={!name12}

                >
                  {name12 ? name12 : "player name"}
                </button>
                <button
                  id="no2"
                  onClick={() => {
                    changeColor14("btn26");
                  }}
                  className={
                    selected14 === "btn26"
                      ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                      : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                  }
                  disabled={!name9}

                >
                  {name9 ? name9 : "player name"}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-5 border- p-[16px] rounded-[16px] border-2">
                <button
                  id="no3"
                  onClick={() => {
                    changeColor13("btn23");
                  }}
                  className={
                    selected13 === "btn23"
                      ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                      : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                  }
                  disabled={!name10}

                >
                  {name10 ? name10 : "player name"}
                </button>
                <button
                  id="no4"
                  onClick={() => {
                    changeColor13("btn24");
                  }}
                  className={
                    selected13 === "btn24"
                      ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                      : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                  }
                  disabled={!name11}

                >
                  {name11 ? name11 : "player name"}
                </button>
              </div>
            </div>
            <div className="border-2 w-full  border-white p-3 lg:p-8 grid sm:grid-cols-2 gap-8 rounded-[32px] mb-5">
              <div className="grid grid-cols-2 gap-4  ">
                <div className=" border-2 flex flex-col  items-center justify-center  p-2 lg:p-[16px] gap-[16px] rounded-[16px]">
                  <button
                    onClick={() => {
                      changeColor12("btn15");
                    }}
                    className={
                      selected12 === "btn15"
                        ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    di stefano
                  </button>
                  <button
                    onClick={() => {
                      changeColor12("btn16");
                    }}
                    className={
                      selected12 === "btn16"
                        ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Xavi
                  </button>
                </div>

                <div className=" border-2 flex flex-col items-center justify-center  p-1 lg:p-[16px] gap-[16px] rounded-[16px]">
                  <button
                    onClick={() => {
                      changeColor9("btn17");
                    }}
                    className={
                      selected9 === "btn17"
                        ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                   Zidane
                  </button>
                  <button
                    onClick={() => {
                      changeColor9("btn18");
                    }}
                    className={
                      selected9 === "btn18"
                        ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                     Cruyff
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 ">
                <div className="border-2  flex flex-col p-2 lg:p-[16px] gap-[16px] items-center justify-center rounded-[16px]">
                  <button
                    onClick={() => {
                      changeColor10("btn19");
                    }}
                    className={
                      selected10 === "btn19"
                        ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                     Beckenbauer
                  </button>
                  <button
                    onClick={() => {
                      changeColor10("btn20");
                    }}
                    className={
                      selected10 === "btn20"
                        ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                     Puskas
                  </button>
                </div>

                <div className=" border-2 flex flex-col items-center justify-center  p-1 lg:p-[16px] gap-[16px] rounded-[16px]">
                  <button
                    onClick={() => {
                      changeColor11("btn21");
                    }}
                    className={
                      selected11 === "btn21"
                        ? "px-4 p-3  bg-green-600 rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                    Haaland
                  </button>
                  <button
                    onClick={() => {
                      changeColor11("btn22");
                    }}
                    className={
                      selected11 === "btn22"
                        ? "px-4 p-3 bg-green-600  rounded-lg z-20 w-full"
                        : "px-4 p-3 bg-[#42475E] rounded-lg z-20 w-full"
                    }
                  >
                  Salah
                  </button>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>

      {/*  */}
      <div className="  mt-24 md:mt-0">
        <div className="flex items-center justify-center ">
          <button
            className="bg-[#48B415] my-6 text-center em p-3 px-6 rounded-xl"
            onClick={() => {
              setModal(true);
            }}
          >
            Confirm Prediction
          </button>
        </div>

        <div  onClick={()=>{setIsOpen(!isOpen)}} className={  `${round} max-w-[90%] mx-auto my-[${marGin}] em  bg-[#272B3B] flex items-center justify-between p-4 transition-all duration-300`}>
          <div className="flex items-center gap-4">
            <img src={i} />
            <p>Terms & Conditions</p>
          </div>
          <div className='text-2xl font-medium cursor-pointer'>{isOpen ?<IoIosArrowDown/>:<IoIosArrowForward />}</div>

        </div>
        {isOpen ? <div className="rounded-b-[16px] er max-w-[90%] mx-auto h-auto bg-[#272B3B] er transition-all mb-5 p-5 text-lg ">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut!</p>
        </div>:''}
       
       







      </div>

         {/* pop Up */}
        {modal ? (
          <FullScreenModal >
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
                  onChange={(e) =>{setemail(e.target.value)}}
                  className="mt-3 p-3 outline-none bg-[#34384D] pl-4 rounded-[16px]"
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

export default Australianopen;




const FullScreenModal = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 modal  flex items-center justify-center lg:p-10 p-5">
      {children}
    </div>
  );
};