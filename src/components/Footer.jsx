import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <img src="./images/heart.png" alt="no-img"width="40px" height="40px"/>
      <span style={{fontWeight: 700, display: "flex", alignItems: "center", color:"white",justifyContent: "center" }}className="leading-relaxed text-white">
        Developed By Nistha
      </span>
    </div>
  );
};

export default Footer;
