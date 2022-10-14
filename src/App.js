import "./index.css"
import bg_left from "./images/bg-main-desktop.png"
import card_1 from "./images/bg-card-back.png";
import card_2 from "./images/bg-card-front.png";
import card_logo from "./images/card-logo.svg";
import React, { useState } from "react";
import Datas from "./Datas";
import Input from "./Input";
import doneIcon from "./images/icon-complete.svg";
import bg_left_mobile from "./images/bg-main-mobile.png";
function App()
{
  const [cardDetails, setCardDetails] = useState({
    name: "Jane Applessed",
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  })

  const [done, setDone] = useState(null);

  const handleChange = (event) =>
  {
    const { name, value, } = event.target;
    // setCardDetails({ ...cardDetails, [name]: value })
    var cardNo = [];

    if (name === "number" && event.target.validity.valid) {
      if (value.length === 16) {
        for (let x = 0; x <= 16; x++) {
          if ((x % 4 === 0) && !(x === 0)) {
            cardNo.push(" ");
          }
          cardNo.push(value[x]);
        }

      }
      cardNo = cardNo.join("");
      setCardDetails({ ...cardDetails, number: cardNo })
    }


    else if (event.target.validity.valid) {
      setCardDetails({ ...cardDetails, [name]: value })
    }


  }


  const handleClick = (e) =>
  {
    e.preventDefault();
    // alert("Hey");
    const checkValue = () =>
    {
      for (let x in cardDetails) {
        if (cardDetails[x] === "00" || cardDetails[x] === "") {
          console.log(cardDetails[x]);
          return false;
        }

      }

      return true;
    }

    if (!checkValue()) {
      alert("Error please Check yor values!!");
    }
    else {
      console.log(cardDetails);
      setDone(!done);
    }



  }
  const InputsDatas = Datas.map((datas) => (
    <Input datas={datas} key={datas.id} handleChange={handleChange} />
  ))
  return (
    <div className="App h-screen w-screen flex font-Space text-ms relative Mobile:flex-col Mobile:text-[14px]">
      {/* left */}
      <section className="w-1/4 h-full Mobile:w-full Mobile:h-2/5">
        <img src={bg_left} alt="img left" className="w-full h-full object-cover Mobile:hidden" />
        <img src={bg_left_mobile} alt="bg mobile" className="hidden Mobile:block w-full h-full object-cover" />
      </section>
      {/* Right */}
      <section className="w-3/4 h-full flex items-center justify-center z-50 Mobile:w-full Mobile:3/5 ">
        {/* <form action="" className="w-1/2 h-1/2 uppercase text-Very-dark-violet flex flex-col gap-2 justify-evenly tracking-wider"> */}
        <div className="w-1/2 h-1/2 uppercase text-Very-dark-violet flex flex-col gap-2 justify-evenly tracking-wider Mobile:w-full Mobile:pt-10 Mobile:p-5 Mobile:justify-between Mobile:h-full ">

          {!done && InputsDatas}

          {/* Done */}
          {done &&
            (<div className="w-full h-full flex items-center justify-center gap-5 flex-col text-center">
              <img src={doneIcon} alt="done icon" />
              <h3>thank you!</h3>
              <h4 className=" normal-case font-ms text-Dark-grayish-violet">We're added your card details</h4>
              <button className="w-1/2 bg-Very-dark-violet p-3 rounded-xl text-White capitalize">Contiune</button>
            </div>)}
          {/* Button */}
          {!done && <button className="w-full bg-Very-dark-violet p-3 rounded-xl text-White capitalize" onClick={handleClick} >confirm</button>}
        </div>
        {/* </form> */}
      </section>

      {/* Card */}
      <div className="Mobile:w-8/12 Mobile:h-1/5 text-White Mobile:left-1/2  Mobile:top-5 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 absolute Mobile:block Mobile:translate-y-0 z-50">
        <div className="card_1 Mobile:h-1/2 Mobile:w-full Mobile:translate-x-5 Mobile:ml-0 order-2 ml-10">
          <div className="Mobile:w-full relative Mobile:text-center">
            <img src={card_1} alt="" />
            <span className="absolute top-[50%] right-[12%] -translate-y-1/2 order-1">{cardDetails.cvc}</span>
          </div>

        </div>
        <div className="card_2 Mobile:h-1/2 Mobile:w-full Mobile:-translate-x-5 Mobile:translate-y-1/2 order-1">
          <div className="w-full  relative text-center ">
            <img src={card_2} alt="" />
            <img src={card_logo} alt="" className="z-[100] absolute top-5 left-5 w-16" />
            <h3 className="text-[1.2rem] Mobile:text-[1rem] tracking-widest absolute top-1/2 w-full left-1/2 -translate-x-1/2 -ml-6 Mobile:m-0 translate-y-1/2">{cardDetails.number}</h3>
            <div className="w-full px-5 text-White uppercase text-[12px] flex items-center justify-between absolute bottom-[8%] tracking-widest">
              {/* <div> */}
              {/* CardName */}
              <h3>{cardDetails.name}</h3>
              {/* Year & Month */}
              <span className="z-[200] mr-16 Mobile:m-0">{cardDetails.month}/{cardDetails.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card */}

    </div>
  );
}

export default App;
