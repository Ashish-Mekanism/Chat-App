import React from "react";
import {
  ChatbarContainer,
  ChatPersonDetails,
  ChatpersonDetailsContainer,
  Conatiner,
  EmptyChatMessage,
  FilterIconContainer
} from "./ConversationsStyle";

import Search from "../../../../public/Search.png";
import Call from "../../../../public/CallIcon.png";
import ThreeDot from "../../../../public/3DotIcon.png";
import ChatArea from "../Conversations/ChatArea";
import { Icon, Text } from "../../typography/typography";
import { useAtomValue } from "jotai";
import { selectedChatAtom } from "../../Atom/ChatAtom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Textbar from "../MessageInput/MessageInput";

dayjs.extend(utc);
dayjs.extend(timezone);

const Conversations = () => {
  const selectedChat = useAtomValue(selectedChatAtom);

  const isPersonSelected = !!selectedChat;

  const personName = `${selectedChat?.first_name} ${selectedChat?.last_name}`;

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
                src={selectedChat?.profile_pic}
              />
              <ChatPersonDetails>
                <Text fontSize="16px" fontWeight="500">
                  {personName}
                </Text>
                <Text fontSize="14px" color="#707991">
                  last seen
                  {"  " +
                    dayjs
                      .utc(selectedChat?.last_message_time)
                      .tz("Asia/Kolkata")
                      .format("HH:mm")}
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

export default Conversations;
