import React from "react";
import { Inputbar1 } from "../../Inputbar/InputbarStyled";
import { Icon } from "../../typography/typography";
import Emoji from "../../../../public/Emoji.png";
import Send from "../../../../public/Send.png";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  messageAtom,
  newMeaasageAtom,
  selectedChatAtom
} from "../../Atom/ChatAtom";
import { TextBar } from "./MessageInputStyle";
import type { Message } from "../../../types/types";
import users from "../../../data/users1.json";

const Textbar = () => {
  const selectedUser = useAtomValue(selectedChatAtom);
  const setMessages = useSetAtom(messageAtom);
  const [inputText, setInputText] = useAtom(newMeaasageAtom);

  const handleSendMessage = () => {
    const text = inputText.trim();
    if (!text || !selectedUser?.first_name) return;

    const userName = selectedUser.first_name;

    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: "me"
    };

    setMessages((prev) => ({
      ...prev,
      [userName]: [...(prev[userName] ?? []), newMessage]
    }));

    setInputText("");

    setTimeout(() => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const reply: Message = {
        id: Date.now() + 1,
        text: randomUser.last_message,
        sender: "other"
      };

      setMessages((prev) => ({
        ...prev,
        [userName]: [...(prev[userName] ?? []), reply]
      }));
    }, 1000);
  };

  return (
    <TextBar>
      <Icon src={Emoji} IconWidth="20px" IconHeight="20px" />
      <Inputbar1
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        placeholder="Type your message..."
      />
      <Icon
        src={Send}
        IconWidth="20px"
        IconHeight="20px"
        onClick={handleSendMessage}
      />
    </TextBar>
  );
};

export default Textbar;
