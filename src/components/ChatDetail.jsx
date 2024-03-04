import React, { useContext, useEffect, useState, useRef } from "react";
import RoundedButton from "./common/RoundedButton";
import Message from "./Message";
import { MdSearch } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { pic1 } from "../assets/whatsapp";
import { AppContext } from "../pages/WhatsApp";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { messageData } from "../data/whatsapp";
import { getTime } from "../logic/Whatsapp";
import { pic2 } from "../assets/whatsapp";
function ChatDetail() {
  const { selectedContact } = useContext(AppContext);

  const filteredMsgData = messageData.filter(
    (msg) => msg.contact === selectedContact.contact
  )[0];

  const [messages, setMessages] = useState(filteredMsgData.messages);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    setMessages(messageData.filter(
      (msg) => msg.contact === selectedContact.contact
    )[0].messages);
  }, [selectedContact]);

  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };
  const addMessage = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };
  const handleEmojiClick = () => {
    inputRef.current.value += "👍";
    inputRef.current.focus();
  };
  const handleImageUpload = () => {
    addMessage({
      img: pic2,
      time: getTime(),
      sent: true,
    });
  };

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });

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
      <div
        className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100"
        style={{ padding: "12px 7%" }}
      >
        {/* <p className="h-100">{selectedContact.msg}</p> */}
        {messages.map((msg) => (
          <Message
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
        ))}
        <div ref={bottomRef}></div>
      </div>
      {/* Bottom section */}
      <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">
        {/* emoji*/}
        <RoundedButton icon={<BiHappy />} onClick={handleEmojiClick} />
        {/* upload btn */}
        <span>
          <RoundedButton
            icon={<AiOutlinePaperClip />}
            onClick={handleImageUpload}
          />
        </span>
        {/* input bar*/}
        <input
          type="text"
          placeholder="type a message"
          className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]"
          onChange={handleInputChange}
          ref={inputRef}
        ></input>
        {/* mic/send button */}
        <span className="ml-2">
          {typing ? (
            <RoundedButton icon={<MdSend />} onClick={handleInputSubmit} />
          ) : (
            <RoundedButton icon={<BsFillMicFill />} />
          )}
        </span>
      </div>
    </div>
  );
}

export default ChatDetail;
