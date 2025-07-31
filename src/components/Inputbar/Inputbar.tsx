import React, { useEffect, useRef, useState } from "react";
import { Inputbar1, InputContainer } from "./InputbarStyled";
import SearchIcon from "../../../public/Search.png";
import { Icon } from "../typography/typography";
import { useSetAtom } from "jotai";
import { searchAtom } from "../Atom/ChatAtom";

const Inputbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localSearch, setLocalSearch] = useState("");
  const setSearch = useSetAtom(searchAtom);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(localSearch);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [localSearch, setSearch]);

  return (
    <InputContainer>
      <Icon
        iconPosition="absolute"
        iconLeft="18px"
        src={SearchIcon}
        onClick={handleFocus}
      />
      <Inputbar1 placeholder="Search" ref={inputRef} onChange={handleChange} />
    </InputContainer>
  );
};

export default Inputbar;
