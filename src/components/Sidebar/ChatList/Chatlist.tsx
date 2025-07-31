import { searchAtom, selectedChatAtom } from "../../Atom/ChatAtom";
import { useAtom, useAtomValue } from "jotai";
import {
  BottomBar,
  Chatcontainer,
  ChatDetailsContainer,
  ChatText,
  MessageCount,
  ScrollableChatList,
  Topbar
} from "./ChatlistStyle";
import { Icon, Text } from "../../typography/typography";
import dayjs from "dayjs";
import users from "../../../data/users1.json";

const Chatlist = () => {
  const [selectedChat, setSelectedChat] = useAtom(selectedChatAtom);
  const search = useAtomValue(searchAtom);

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <ScrollableChatList>
      {filteredUsers.map((user) => {
        const isSelected = selectedChat?.id === user.id;

        return (
          <Chatcontainer
            key={user.id}
            selected={isSelected}
            onClick={() => setSelectedChat(user)}
          >
            <Icon
              IconHeight="48px"
              IconWidth="48px"
              iconradious="100%"
              src={user.profile_pic}
            />
            <ChatDetailsContainer>
              <Topbar>
                <Text fontSize="16px" fontWeight="600" color="#0A0A0A">
                  {`${user.first_name} ${user.last_name}`}
                </Text>
                <Text fontSize="13px" color="#707991">
                  {dayjs
                    .utc(user.last_message_time)
                    .tz("Asia/Kolkata")
                    .format("HH:mm")}
                </Text>
              </Topbar>

              <BottomBar>
                <ChatText>{user.last_message}</ChatText>
                {!isSelected && (
                  <MessageCount>{user.unread_count}</MessageCount>
                )}
              </BottomBar>
            </ChatDetailsContainer>
          </Chatcontainer>
        );
      })}
    </ScrollableChatList>
  );
};

export default Chatlist;
