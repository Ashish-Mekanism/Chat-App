import styled from "@emotion/styled";
import { Text } from "../../typography/typography";

export const ScrollableChatList = styled.div`
  max-height: 93vh;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface ChatcontainerProps {
  selected?: boolean;
}

export const Chatcontainer = styled.div<ChatcontainerProps>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#f0f0f0" : "#ffffff")};

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ChatDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  overflow: hidden;
`;

export const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomBar = styled(Topbar)`
  margin-top: 4px;
`;

export const ChatText = styled(Text)`
  font-size: 14px;
  color: #707991;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
`;

export const MessageCount = styled.span<ChatcontainerProps>`
  font-size: 12px;
  color: #ffffff;
  min-width: ${({ selected }) => (selected ? "0px" : "20px")};
  min-height: ${({ selected }) => (selected ? "0px" : "20px")};
  background-color: ${({ selected }) => (selected ? "#f9f9f9" : "#78e378")};
  display: ${({ selected }) => (selected ? "none" : "flex")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-left: 10px;
`;
