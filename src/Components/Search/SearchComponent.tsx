import React, { useState } from "react";
import {
  Input,
  SearchContainer,
  SearchIcon,
  InputContainer,
} from "./SearchStyles";
export const SearchComponent = ({
  movies,
  setFiltered,
  setFilterMode,
}: any) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: any) => {
    if (e.key === "Enter" && inputValue) filterMovies(inputValue);
    if (!inputValue) filterMovies("");
    return;
  };

  const filterMovies = (filterText: string) => {
    if (filterText) {
      setFilterMode(true);
      const filtered = movies.filter((item: any) =>
        item["title"].toLowerCase().includes(filterText.toLowerCase())
      );

      setFiltered(filtered);
    } else {
      setFilterMode(false);
    }
  };

  return (
    <SearchContainer>
      <InputContainer>
        <SearchIcon
          src={require("../../assets/searchlogo.svg").default}
          alt=""
        />
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleInput(e)}
          placeholder={"Search for a movie"}
        />
      </InputContainer>
    </SearchContainer>
  );
};
