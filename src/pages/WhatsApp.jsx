import React, { createContext, useState } from "react";
import LeftMenu from "../components/LeftMenu";
import ChatDetail from "../components/ChatDetail";
import { chatsData } from "../data/whatsapp";

//Loading screen comp

// define a context
export const AppContext = createContext();

function WhatsApp() {

   // creating a shared state for the selected contact
  const [selectedContact, setSelectedContact] = useState(chatsData[0]);

  return (
    //main container
    <AppContext.Provider value={{ selectedContact, setSelectedContact }}>
      <div className="w-screen h-screen overflow-hidden">
        {/*2 comps container */}
        <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
          {/*left menu */}
          <div className="bg-[111a21] min-w-[340px] max-w-[500px] w-100 h-100">
            <LeftMenu />
          </div>
          {/*Chatdetail */}
          <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100">
            <ChatDetail />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
export default WhatsApp;
