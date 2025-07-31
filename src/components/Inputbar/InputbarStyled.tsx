import styled from "@emotion/styled";

interface InputbarProps {
  inputHeight?: string;
  inputWidth?: string;
  inputBackgroundColor?: string;
  inputBorderRadius?: string;
  inputBorder?: string;
  inputpadding?: string;
}

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #f5f5f5;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 22px;
`;

export const Inputbar1 = styled.input<InputbarProps>`
  width: 100%;
  border: none;
  background-color: ${({ color }) => color || "transparent"};
  font-size: 16px;
  outline: none;
`;
