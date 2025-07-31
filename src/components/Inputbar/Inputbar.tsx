import React, { useRef } from "react";
import { Inputbar1, InputContainer } from "./InputbarStyled";
import Search from "../../../public/Search.png";
import { Icon } from "../typography/typography";
import { useAtom } from "jotai";
import { searchAtom } from "../Atom/ChatAtom";

const Inputbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useAtom(searchAtom);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <InputContainer>
      <Icon
        iconPosition="absolute"
        iconLeft="18px"
        src={Search}
        onClick={handleFocus}
      />
      <Inputbar1
        placeholder="Search"
        ref={inputRef}
        value={search}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default Inputbar;
