import React from "react";
import {
  ChatbarContainer,
  ChatPersonDetails,
  ChatpersonDetailsContainer,
  Conatiner,
  EmptyChatMessage,
  FilterIconContainer
} from "./ChatbarStyle";

import Search from "../../../../public/Search.png";
import Call from "../../../../public/CallIcon.png";
import ThreeDot from "../../../../public/3DotIcon.png";
import ChatArea from "../ChatArea/ChatArea";
import { Icon, Text } from "../../typography/typography";
import { useAtom } from "jotai";
import { chatPersonDetailsAtom } from "../../Atom/ChatAtom";
import Textbar from "../../Sidebar/Textbar/Textbar";

const Chatbar = () => {
  const [personDetails] = useAtom(chatPersonDetailsAtom);

  const isPersonSelected = !!personDetails?.personname;
  console.log("personDetails ===>", personDetails);

  return (
    <ChatbarContainer>
      {isPersonSelected ? (
        <>
          <ChatpersonDetailsContainer>
            <Conatiner>
              <Icon
                IconHeight={"40px"}
                IconWidth={"40px"}
                iconradious={"100%"}
                src={personDetails?.avatar}
              />
              <ChatPersonDetails>
                <Text fontSize="16px" fontWeight="500">
                  {personDetails?.personname}
                </Text>
                <Text fontSize="14px" color="#707991">
                  last seen {personDetails?.time}
                </Text>
              </ChatPersonDetails>
            </Conatiner>
            <FilterIconContainer>
              <Icon IconWidth={"18.5px"} IconHeight={"18.5px"} src={Search} />
              <Icon IconWidth={"14px"} IconHeight={"20px"} src={Call} />
              <Icon IconWidth={"4px"} IconHeight={"16px"} src={ThreeDot} />
            </FilterIconContainer>
          </ChatpersonDetailsContainer>

          <ChatArea />
          <Textbar />
        </>
      ) : (
        <EmptyChatMessage>
          <Text fontSize="20px" color="#black">
            Select a person to start chat
          </Text>
        </EmptyChatMessage>
      )}
    </ChatbarContainer>
  );
};

export default Chatbar;
