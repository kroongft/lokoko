import React, { useState } from "react";
import { styled } from "styled-components";
import { getArmories } from "../../api/armories";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

export const Header = () => {
  const [keyword, setKeyword] = useState<string>("");

  const getCharacterProfiles = async () => {
    await getArmories(keyword, "profiles");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimKeyword = e.target.value.trim();
    setKeyword(trimKeyword);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getCharacterProfiles();
    }
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>LOKOKO</HeaderTitle>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          background: "rgb(233, 233, 233);",
          borderRadius: "12px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontSize: "14px" }}
          placeholder="캐릭터 검색"
          value={keyword}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
        />
        <IconButton
          type="button"
          sx={{ fontSize: "1rem" }}
          aria-label="search"
          onClick={() => getCharacterProfiles()}
        >
          <Search />
        </IconButton>
      </Paper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 24px;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 100px;
`;

const HeaderTitle = styled.div`
  font-family: "EF_jejudoldam";
  font-size: 30px;
`;

const SearchWrapper = styled.div`
  width: 300px;
  padding: 8px;
  background-color: rgb(233, 233, 233);
  border-radius: 8px;
  display: flex;
`;
const SearchInput = styled.input`
  border: 0;
  outline: none;
  background-color: rgb(233, 233, 233);
`;
