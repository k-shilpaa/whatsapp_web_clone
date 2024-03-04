import React, { useState, useEffect } from "react";
import { chatsData } from "../data/whatsapp";
import { ImFolderDownload } from "react-icons/im";
function Chats({ filter }) {
    const [chats, setChats] = useState(chatsData);
    useEffect(() => {
      const newChats = filter
        ? chatsData.filter((chat) => chat.unreadMsgs)
        : chatsData;
      setChats(newChats);
    }, [filter]);
  
    //to find ARchived chats
  
    return (
      // chats main cont
      <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
        {/*archived cont*/}
        <div className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]">
          {/* icon and text cont */}
          <div className="flex justify-around items-center w-[150px]">
            {/*icon*/}
            <span className="text-emerald-500 text-lg">
              <ImFolderDownload />
            </span>
            <h1 className="text-white">
              Archived
              {/* <button onClick={()=>setArchived(!archived)}>Archived</button> */}
            </h1>
          </div>
        </div>
  
        {/* chats*/}
        {chats.map((chat, i) => {
          return (
            <Chat
              pp={chat.pp}
              contact={chat.contact}
              msg={chat.msg}
              time={chat.time}
              unreadMsgs={chat.unreadMsgs}
              active={i === 0}
            />
          );
        })}
      </div>
    );
  }
  export default Archive;
  