import styled from "@emotion/styled";

export const ChatAreaContainer = styled.div`
  display: flex;
  max-height: 83vh;
  flex-direction: column-reverse;

  justify-content: space-between;
  width: 75%;
  flex: 1;
  margin: auto;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  cursor: pointer;
`;

export const ChatdetailsContainer = styled.div``;

export const ChatBody = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RightSideChatContainer = styled.div`
  background-color: #78e378;
  border-radius: 12px;
  padding: 4px 10px;
  align-self: flex-end;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  word-wrap: wrap;
`;

export const Chatwrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

export const LeftSideChatContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 8px 10px;
  align-self: flex-start;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  word-wrap: wrap;
`;
