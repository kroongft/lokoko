import React, { useState } from "react";
import { styled } from "styled-components";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

export const Header = () => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <HeaderWrapper>
      <HeaderTitle>LOKOKO</HeaderTitle>
      <Paper
        component="form"
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
          onChange={(e) => setKeyword(e.target.value)}
        />
        <IconButton type="button" sx={{ fontSize: "1rem" }} aria-label="search">
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
