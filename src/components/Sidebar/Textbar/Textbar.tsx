import React from "react";
import { Inputbar1 } from "../../Inputbar/InputbarStyled";
import { TextBar } from "../../RightSide/ChatArea/ChatAreaStyle";
import { Icon } from "../../typography/typography";
import Emoji from "../../../../public/Emoji.png";
import Send from "../../../../public/Send.png";
import { useAtom, useSetAtom } from "jotai";
import {
  chatPersonDetailsAtom,
  messageAtom,
  newMeaasageAtom
} from "../../Atom/ChatAtom";

const Textbar = () => {
  const [personDetails] = useAtom(chatPersonDetailsAtom);
  const setMessage = useSetAtom(messageAtom);
  const [newMessage, setNewMessage] = useAtom(newMeaasageAtom);
  const handleSendMessage = () => {
    const text = newMessage.trim();
    const person = personDetails?.personname;

    if (!text || !person) return;

    const newMsg = { text, id: Date.now() };

    setMessage((prev) => ({
      ...prev,
      [person]: [...(prev[person] ?? []), newMsg]
    }));

    setNewMessage("");
  };
  return (
    <TextBar>
      <Icon
        iconPosition={"relative"}
        iconLeft={"50px"}
        IconHeight={"20px"}
        IconWidth={"20px"}
        src={Emoji}
      />
      <Inputbar1
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        inputHeight={"56px"}
        inputWidth={"694px"}
        inputBackgroundColor={"white"}
        placeholder="Message"
        value={newMessage}
      />
      <Icon
        onClick={handleSendMessage}
        iconPosition={"relative"}
        iconRight={"48px"}
        IconHeight={"20px"}
        IconWidth={"20px"}
        src={Send}
      />
    </TextBar>
  );
};

export default Textbar;
