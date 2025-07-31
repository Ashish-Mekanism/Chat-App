import styled from "@emotion/styled";

export const ChatbarContainer = styled.div`
  background-image: url("../../../../public/BG.png");
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ChatpersonDetailsContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 9px 16px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
`;

export const Conatiner = styled.div`
  display: flex;
  gap: 16px;
`;
export const ChatPersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FilterIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;
export const EmptyChatMessage = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: grid;
  place-items: center;
`;
