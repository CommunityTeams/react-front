import React from "react";
import Sidebar from "../layout/Sidebar";
import styled from "styled-components";
import Main from "../layout/Main";

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
