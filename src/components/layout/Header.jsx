import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

let Div = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid silver;
`;

let Img = styled.img`
  width: 30px;
  height: 30px;
`;
let H3 = styled.h3`
  width: 160px;
  margin-top: 5px;
`;

export function Header() {
  return (
    <>
      <div>
        <Div>
          <Link to={"/"} title="집 아이콘">
            <Img src="https://cdn-icons-png.flaticon.com/512/60/60817.png" />
          </Link>
          <H3>🛳️10기 B반 전용 게시판</H3>
        </Div>
      </div>
    </>
  );
}
