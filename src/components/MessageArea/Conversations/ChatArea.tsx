import React from "react";
import {
  ChatAreaContainer,
  RightSideChatContainer,
  ChatBody,
  Chatwrapper,
  LeftSideChatContainer
} from "./ChatAreaStyle";

import { useAtom, useAtomValue } from "jotai";
import { messageAtom, selectedChatAtom } from "../../Atom/ChatAtom";
import dayjs from "dayjs";
import { Icon, Text } from "../../typography/typography";
import Tick from "../../../../public/Tickmark.png";
import Heart from "../../../../public/Heart.png";
import RightSideTick from "../../../../public/RightSideTick.png";

const ChatArea = () => {
  const personDetails = useAtomValue(selectedChatAtom);
  const [message] = useAtom(messageAtom);

  const messages = message[personDetails?.first_name || ""] || [];

  return (
    <ChatAreaContainer>
      <>
        <ChatBody>
          {messages.map((msg) =>
            msg.sender === "me" ? (
              <RightSideChatContainer key={msg.id}>
                <div>
                  <Text fontSize={"16px"}>{msg.text}</Text>
                </div>
                <Chatwrapper>
                  <Text fontSize={"12px"} color={"white"}>
                    {dayjs(msg.id).format("hh:mm")}
                  </Text>
                  <Icon IconHeight={"11px"} IconWidth={"14px"} src={Tick} />
                </Chatwrapper>
              </RightSideChatContainer>
            ) : (
              <LeftSideChatContainer key={msg.id}>
                <div>
                  <Text fontSize={"16px"}>{msg.text}</Text>
                </div>
                <Chatwrapper>
                  <Icon IconHeight={"11px"} IconWidth={"14px"} src={Heart} />
                  <Text fontSize={"12px"} color={"black"}>
                    {dayjs(msg.id).format("hh:mm")}
                  </Text>
                  <Icon
                    IconHeight={"11px"}
                    IconWidth={"14px"}
                    src={RightSideTick}
                  />
                </Chatwrapper>
              </LeftSideChatContainer>
            )
          )}
        </ChatBody>
      </>
    </ChatAreaContainer>
  );
};

export default ChatArea;
