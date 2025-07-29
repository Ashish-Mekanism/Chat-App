import React from "react";
import {
  ChatAreaContainer,
  RightSideChatContainer,
  ChatBody,
  ChatdetailsContainer
} from "./ChatAreaStyle";

import { useAtom } from "jotai";
import { chatPersonDetailsAtom, messageAtom } from "../../Atom/ChatAtom";
import dayjs from "dayjs";
import { Icon, Text } from "../../typography/typography";
import Tick from "../../../../public/Tickmark.png";

const ChatArea = () => {
  const [personDetails] = useAtom(chatPersonDetailsAtom);
  const [message] = useAtom(messageAtom);

  const messages = message[personDetails?.personname || ""] || [];

  return (
    <ChatAreaContainer>
      <ChatdetailsContainer>
        <ChatBody>
          {messages.map((msg) => (
            <RightSideChatContainer key={msg.id}>
              <Text fontSize={"16px"}>{msg.text}</Text>
              <Text
                fontSize={"12px"}
                align={"right"}
                margin={"8px 0px 0px 0px"}
                padding={"0px 0px 0px 26px"}
                color={"white"}
              >
                {dayjs(msg.id).format("hh:mm")}
                <Icon IconHeight={"11px"} IconWidth={"14px"} src={Tick} />
              </Text>
            </RightSideChatContainer>
          ))}
        </ChatBody>
      </ChatdetailsContainer>
    </ChatAreaContainer>
  );
};

export default ChatArea;
