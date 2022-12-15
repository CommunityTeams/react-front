import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid silver;
  align-items: center;
  border-bottom: 1px solid #ececec;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;
const H3 = styled.h3`
  width: fit-content;
  font-family: "Noto Sans KR", sans-serif;
`;

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  return (
    <div>
      <Div>
        <Link to="/" title="집 아이콘">
          <Img src="https://cdn-icons-png.flaticon.com/512/60/60817.png" />
        </Link>
        <H3>🛳️ 10기 B반 전용 게시판</H3>
      </Div>
    </div>
  );
}
