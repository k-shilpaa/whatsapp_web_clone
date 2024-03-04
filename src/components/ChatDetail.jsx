import React, { useContext, useEffect } from "react";
import RoundedButton from "./common/RoundedButton";
import { MdSearch } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { pic1 } from "../assets/whatsapp";
import { AppContext } from "../pages/WhatsApp";
function ChatDetail() {
  const { selectedContact } = useContext(AppContext);

  return (
    //chat detail main
    <div className="flex flex-col h-screen">
      {/* Contact nav */}
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
        {/* contact info */}
        <div className="flex items-center ">
          {/* profile pic */}
          <img
            src={pic1}
            alt="profile pic"
            className="rounded-full w-[40px] h-[45px] mr-5"
          ></img>
          {/* info */}
          <div className="flex flex-col">
            {/* name can send thru prop im using static*/}
            <h1 className="text-white font-medium ">
              {selectedContact.contact}
            </h1>
            {/* status */}
            <p className="text-[#8796a1] text-xs">online</p>
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-between items-center w-[85px]">
          <RoundedButton icon={<MdSearch />} />
          <RoundedButton icon={<HiDotsVertical />} />
        </div>
      </div>
      {/* Messages section */}
      <div className="flex-1 overflow-y-scroll"></div>
      {/* Bottom nav */}
      <div className="bg-gray-200 h-16"></div>
    </div>
  );
}

export default ChatDetail;
