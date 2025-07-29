/** @jsxImportSource @emotion/react */

import React from "react";
import {
  BottamBar,
  Chatcontainer,
  ChatDetailsContainer,
  ChatlistMainContainer,
  ChatText,
  MessageCount,
  ScrollableChatList,
  Topbar
} from "./ChatlistStyle";

import User from "../../../../users1.json";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Icon, Text } from "../../typography/typography";
import { useAtom, useSetAtom } from "jotai";
import {
  chatPersonDetailsAtom,
  selectedPersonNameAtom
} from "../../Atom/ChatAtom";

dayjs.extend(utc);
dayjs.extend(timezone);

const Chatlist = () => {
  const setPersonDetails = useSetAtom(chatPersonDetailsAtom);
  const [selectedPersonName, setSelectedPersonName] = useAtom(
    selectedPersonNameAtom
  );

  console.log(" ===>", ChatlistMainContainer.toString());

  return (
    <ChatlistMainContainer>
      <ScrollableChatList>
        {User.map((user, index) => {
          const isSelected = selectedPersonName === user.first_name;

          return (
            <Chatcontainer
              key={index}
              onClick={() => {
                setPersonDetails({
                  personname: user.first_name,
                  avatar: user.profile_pic,
                  time: dayjs
                    .utc(user.last_message_time)
                    .tz("Asia/Kolkata")
                    .format("hh:mm A")
                });
                setSelectedPersonName(user.first_name);
              }}
              selected={isSelected}
            >
              <Icon
                IconHeight={"48px"}
                IconWidth={"48px"}
                iconradious={"100%"}
                src={user.profile_pic}
              />
              <ChatDetailsContainer>
                <Topbar>
                  <Text fontSize="16px" fontWeight="500">
                    {user.first_name + "  " + user.last_name}
                  </Text>
                  <ChatText>{user.last_message}</ChatText>
                </Topbar>
                <BottamBar>
                  <Text fontSize="14px" color="#707991">
                    {dayjs
                      .utc(user.last_message_time)
                      .tz("Asia/Kolkata")
                      .format("hh:mm")}
                  </Text>
                  <MessageCount>{user.unread_count}</MessageCount>
                </BottamBar>
              </ChatDetailsContainer>
            </Chatcontainer>
          );
        })}
      </ScrollableChatList>
    </ChatlistMainContainer>
  );
};

export default Chatlist;
