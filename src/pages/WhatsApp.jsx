import React, { createContext, useState, useEffect } from "react";
import LeftMenu from "../components/LeftMenu";
import ChatDetail from "../components/ChatDetail";
import { chatsData } from "../data/whatsapp";
import LoadingScreen from "../components/common/LoadingScreen";

// define a context
export const AppContext = createContext();

function WhatsApp() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * 10) + 3;
        setProgress(progress + increment);
      }
    }, 300);
  }, [progress]);

  const [selectedContact, setSelectedContact] = useState(chatsData[0]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <AppContext.Provider value={{ selectedContact, setSelectedContact }}>
          <div className="w-screen h-screen overflow-hidden">
            {/* 2 components cointainer */}
            <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
              {/* LeftMenu */}
              <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-100 h-100">
                <LeftMenu />
              </div>

              {/* ChatDetail */}
              <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100">
                <ChatDetail />
              </div>
            </div>
          </div>
        </AppContext.Provider>
      )}
    </>
  );
}
export default WhatsApp;
