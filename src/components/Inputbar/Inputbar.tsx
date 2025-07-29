import React from "react";
import { Inputbar1, InputContainer } from "./InputbarStyled";
import Search from "../../../public/Search.png";
import { Icon } from "../typography/typography";

const Inputbar = () => {
  return (
    <InputContainer>
      <Icon iconPosition={"relative"} iconLeft={"52px"} src={Search} />
      <Inputbar1 placeholder="Search" />
    </InputContainer>
  );
};

export default Inputbar;
