import React, { useState, useEffect } from "react";
import { chatsData } from "../data/whatsapp";
import Chat from "./Chat";

function Chats({ filter, archived, searchQuery }) {
  const [chats, setChats] = useState(chatsData);

  // filter unreach chats
  useEffect(() => {
    const newChats = filter
      ? chatsData.filter((chat) => chat.unreadMsgs)
      : chatsData;
    setChats(newChats);
  }, [filter]);

  //to find Archived chats
  useEffect(() => {
    const archivedChats = archived
      ? chatsData.filter((chat) => chat.archived)
      : chatsData;
    setChats(archivedChats);
  }, [archived]);

  // filter based on search query
  useEffect(() => {
    if (searchQuery !== "") {
      const searchFilteredChats = chatsData.filter((chat) =>
        chat.contact
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase() ||
              chat.msg.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
      setChats(searchFilteredChats);
    }

    return () => {
      if (searchQuery.length === 1) {
        setChats(chatsData);
      }
    };
  }, [searchQuery]);

  return (
    // chats main cont
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {/* chats*/}
      {chats.map((chat, i) => {
        return (
          <Chat
            key={chat.contact}
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
          />
        );
      })}
    </div>
  );
}
export default Chats;
