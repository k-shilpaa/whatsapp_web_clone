import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
function LoadingScreen(progress) {
  return (
    <div className="flex flex-col justify-center bg-[#111a21] w-screen h-screen">
      {/* icon */}
      <span className="text-[#3d464a] text-6xl my-12">
        <BsWhatsapp />
      </span>
      {/* loadingbar and text*/}
      <div className="flex flex-col items-center justify-evenly h-[150px]">
        {/* bar */}
        <ProgressBar
          variant="success"
          now={progress}
          className="bg-[#243138] round-lg-w-[320px] h-[3px]"
        />
        {/* text */}
        <div className="flex flex-col items-center ">
          <h1 className="text-[#c1c6c9] text-lg font-medium">Whatsapp</h1>
          <div className="flex items-center text-[#687782]">
            <span className="text-sm mr-3 ">
              <FaLock />
            </span>
            <p>End-to-end encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoadingScreen;
