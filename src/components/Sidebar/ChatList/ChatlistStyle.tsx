/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
export const ChatlistMainContainer = styled.div`
  padding-top: 18px;
`;

export const ScrollableChatList = styled.div`
  max-height: 94vh;
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
  padding: 10px 10px;
  gap: 20px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#f0f0f0" : "transparent")};
`;

export const ChatDetailsContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const Topbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const BottamBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatText = styled.div`
  font-size: 14px;
  color: #707991;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
  min-width: 265px;
`;

export const MessageCount = styled.div`
  font-size: 12px;
  color: #ffffff;
  height: 24px;
  width: 24px;
  background-color: #78e378;
  text-align: center;
  border-radius: 100%;
  padding: 6px 2px;
`;
