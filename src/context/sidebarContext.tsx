import React, { useState } from "react";

type SidebarContextObj = { isOpen: boolean; toggleSidebar: () => void };

const SidebarContext = React.createContext<SidebarContextObj>({
  isOpen: true,
  toggleSidebar: () => { },
});

interface Props {
  children: React.ReactNode;
}

export const SidebarContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  function ToggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  const contextValue: SidebarContextObj = {
    isOpen,
    toggleSidebar: ToggleSidebar,
  };
  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
