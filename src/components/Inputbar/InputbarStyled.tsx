import styled from "@emotion/styled";

interface InputbarProps {
  inputHeight?: string;
  inputWidth?: string;
  inputBackgroundColor?: string;
  inputBorderRadius?: string;
  inputBorder?: string;
  inputpadding?: string;
}

export const Inputbar1 = styled.input<InputbarProps>`
  height: ${({ inputHeight }) => inputHeight || ""};
  width: ${({ inputWidth }) => inputWidth || ""};
  font-size: 16px;
  background-color: ${({ inputBackgroundColor }) =>
    inputBackgroundColor || "lightgray"};
  color: black;
  border-radius: 18px;
  margin-left: 20px;
  border: none;
  outline: none;
  /* padding-left: 50px; */
  padding: 10px 40px;
`;

export const InputContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
`;
