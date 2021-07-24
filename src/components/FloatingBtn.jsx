import React from "react";
import Whatsapp from "../Images/Whatsaap.png"

const FloatingBtn = () =>{
  return(
    <>
        <a href="https://api.whatsapp.com/send?phone=+919484416073" target="blank"> 
            <img src={Whatsapp} alt={Whatsapp} className="floating-whatsapp"/>
        </a>
    </>
  );
};

export default FloatingBtn;