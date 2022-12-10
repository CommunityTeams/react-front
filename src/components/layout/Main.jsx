import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <>
      <StMainWrapper>
        <div className="main_inner">
          <h2>커뮤니티 페이지</h2>
          <div className="upload_list_container">
            <StWritingBtn>
              글쓰기{" "}
              <span
                style={{
                  width: "15px",
                  height: "15px",
                  background: "grey",
                  display: "block",
                }}
              ></span>
            </StWritingBtn>
          </div>
        </div>
      </StMainWrapper>
    </>
  );
}

const StMainWrapper = styled.main`
  width: 100%;
  .main_inner {
    height: 100%;
    padding: 30px 40px;
    box-sizing: border-box;
  }
`;
const StWritingBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  box-sizing: border-box;
  border-radius: 3px;
  gap: 0 8px;
  border: 1px solid #ececec;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;
