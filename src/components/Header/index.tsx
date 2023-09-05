import React from "react";
import { styled } from "styled-components";

export const Header = () => {
  return <HeaderWrapper>LOKOKO</HeaderWrapper>;
};

const HeaderWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "EF_jejudoldam";
  font-size: 30px;
`;
