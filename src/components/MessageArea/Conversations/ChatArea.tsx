import React from "react";
import {
  ChatAreaContainer,
  RightSideChatContainer,
  ChatBody,
  Chatwrapper
} from "./ChatAreaStyle";

import { useAtom, useAtomValue } from "jotai";
import { messageAtom, selectedChatAtom } from "../../Atom/ChatAtom";
import dayjs from "dayjs";
import { Icon, Text } from "../../typography/typography";
import Tick from "../../../../public/Tickmark.png";
import RightSideTick from "../../../../public/RightSideTick.png";

const ChatArea = () => {
  const personDetails = useAtomValue(selectedChatAtom);
  const [message] = useAtom(messageAtom);

  const messages = message[personDetails?.first_name || ""] || [];

  return (
    <ChatAreaContainer>
      <ChatBody>
        {messages.map((msg) => (
          <RightSideChatContainer key={msg.id} isMe={msg.sender === "me"}>
            <div>
              <Text fontSize={"16px"}>{msg.text}</Text>
            </div>
            <Chatwrapper>
              <Text
                fontSize={"12px"}
                color={msg.sender === "me" ? "white" : "black"}
              >
                {dayjs(msg.id).format("hh:mm")}
              </Text>
              <Icon
                IconHeight={"11px"}
                IconWidth={"14px"}
                src={msg.sender === "me" ? Tick : RightSideTick}
              />
            </Chatwrapper>
          </RightSideChatContainer>
        ))}
      </ChatBody>
    </ChatAreaContainer>
  );
};

export default ChatArea;
