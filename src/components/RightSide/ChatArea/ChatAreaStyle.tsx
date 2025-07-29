import styled from "@emotion/styled";

export const ChatAreaContainer = styled.div`
  display: flex;
  max-height: 90vh;
  flex-direction: column-reverse;
  padding-bottom: 24px;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  align-self: end;
  padding-right: 29%;
  cursor: pointer;
`;

export const ChatdetailsContainer = styled.div`
  width: 100%;
`;

export const ChatBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LeftSideChatContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 5px 20px;
  font-size: 14px;
`;

export const ReciverContainer = styled.div`
  word-wrap: break-word;
`;

export const ReciveTime = styled.div`
  font-size: 10px;
  color: gray;
  text-align: right;
  margin-top: 4px;
`;

export const RightSideChatContainer = styled.div`
  background-color: #78e378;
  border-radius: 12px;
  padding: 8px 12px;
  align-self: flex-end;
  font-size: 14px;
  max-width: 400px;
`;

export const SenderContainer = styled.div`
  word-wrap: break-word;
`;

export const TextBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 20px;
`;
