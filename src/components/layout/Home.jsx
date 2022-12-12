import React from "react";
import styled from "styled-components";
import Sidebar from "../features/Sidebar";
import Main from "../features/Main";

export default function Home() {
  return (
    <StWrapper>
      <Sidebar />
      <Main />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;
