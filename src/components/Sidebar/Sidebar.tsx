import React from "react";
import { NavContainer, SidebarContainer } from "./SidebarStyle";
import menuicon from "../../../public/Vector.png";
import Inputbar from "../Inputbar/Inputbar";
import Chatlist from "./ChatList/Chatlist";
import { Icon } from "../typography/typography";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavContainer>
        <Icon IconHeight="14px" IconWidth="20px" src={menuicon} />
        <Inputbar />
      </NavContainer>
      <Chatlist />
    </SidebarContainer>
  );
};

export default Sidebar;
