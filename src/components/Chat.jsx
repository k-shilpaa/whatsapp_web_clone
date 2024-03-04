import React, { useContext } from "react";
import { AppContext } from "../pages/WhatsApp";
import { chatsData } from "../data/whatsapp";

function Chat({ pp, contact, msg, time, unreadMsgs }) {
  const { selectedContact, setSelectedContact } = useContext(AppContext);

  const handleSelect = () => {
    const selContact = chatsData.filter((chat) => chat.contact === contact)[0];
    setSelectedContact(selContact);
  };

  return (
    <div
      className={`flex justify-between items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33] 
      ${selectedContact.contact === contact ? "bg-[#202d33]" : ""}`}
      onClick={handleSelect}
    >
      {/* profile pic*/}
      <img src={pp} alt="profile_pic" className="rounded-full w-[50px] mr-5 " />
      {/* info*/}
      <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">
        {/* contact name and msg*/}
        <div className="flex flex-col justify-between text-white ">
          {/*contac name */}
          <h1 className="font-medium mb-1">{contact}</h1>
          {/* msg*/}
          <p
            className={`text-sm ${
              !unreadMsgs ? "text-neutral-400" : "text-color-white"
            }`}
          >
            {msg}
          </p>
        </div>
        {/* time and num of msgs*/}
        <div className="flex flex-col justify-between items-end h-100 text-xs">
          {/*time*/}
          <p className="text-emerald-500 min-w-[55px]">{time}</p>
          {/*number of msgs*/}
          {unreadMsgs && (
            <div className="flex justify-center items-center bg-emerald-500 rounded-full w-[50px] h-[20px]">
              <p className="text-emerald-900">{unreadMsgs}</p>
            </div>
          )}
          <p></p>
        </div>
      </div>
    </div>
  );
}
export default Chat;
