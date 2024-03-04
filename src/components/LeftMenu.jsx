import React, { useState } from "react";
import RoundedButton from "./common/RoundedButton";
import Chats from "./Chats";
import { MdPeople } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { pic1 } from "../assets/whatsapp";
import { BiFilter } from "react-icons/bi";
import { ImFolderDownload } from "react-icons/im";

function LeftMenu() {
  const [filter, setFilter] = useState(false);
  const [archived, setArchived] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
      {/* profile nav*/}
      <div className="flex justify-between items-center bg-[#202d33] h-60px p-3">
        {/* profile pic */}
        <img
          src={pic1}
          alt="profile_picture"
          className="rounded-full w-[40px]"
        ></img>
        {/* profil and buttons */}
        <div className="flex justify-between w-[175px]">
          <RoundedButton icon={<MdPeople />} />
          <RoundedButton icon={<TbCircleDashed />} />
          <RoundedButton icon={<BiMessageRoundedAdd />} />
          <RoundedButton icon={<BsFillChatLeftTextFill />} />
          <RoundedButton icon={<HiDotsVertical />} />
        </div>
      </div>
      {/* search and filter */}
      <div className="flex justify-between items-center h-60px p-2">
        {/*search input*/}
        <input
          type="text"
          placeholder="Search or Start new chat"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none py-2 px-4 w-500px h-35px placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
        ></input>

        {/*filter button*/}
        <button
          className={`text-2xl m-2 p-1 rounded-full ${
            filter
              ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
              : "text-[#8796a1] hover:bg-[#3c454c]"
          }`}
          onClick={() => setFilter(!filter)}
        >
          <BiFilter />
        </button>
      </div>
      <div className="flex flex-col overflow-y-scroll cursor-pointer h-20">
        <button
          className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]"
          onClick={() => setArchived(!archived)}
        >
          {/* icon and text cont */}
          <div className="flex justify-around items-center w-[150px]">
            {/*icon*/}
            <span className="text-emerald-500 text-lg">
              <ImFolderDownload />
            </span>
            <h1 className="text-white flex-grow">Archived</h1>
          </div>
        </button>
      </div>
      {/* chats */}
      <Chats filter={filter} archived={archived} searchQuery={searchQuery} />
    </div>
  );
}

export default LeftMenu;
