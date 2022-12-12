import React from "react";

import styled from "styled-components";

export default function sidebar() {
  return (
    <StSidebar>
      <div className="sidebar_inner">
        <div className="logo_container">
          <StLogo className="logo">LOGO</StLogo>
        </div>
        <div className="add_button_container">
          <StButton>리스트 추가하기.</StButton>
        </div>
        <StCategory>
          <span className="category_title">
            <span
              className="icon"
              style={{
                width: "20px",
                height: "20px",
                background: "grey",
                display: "block",
              }}
            />
            <span>커뮤니티 리스트</span>
          </span>

          <StCategoryInner>
            <span>리스트1</span>
            <span>리스트1</span>
            <span>리스트1</span>
          </StCategoryInner>
        </StCategory>
      </div>
    </StSidebar>
  );
}

const StSidebar = styled.div`
  width: 100%;
  max-width: 270px;
  border: 1px solid #ececec;
  .sidebar_inner {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px 0;
  }
  .logo_container {
    display: flex;
    justify-content: center;
  }
`;
const StCategoryInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  padding: 0 30px;
`;
const StCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  margin-top: 30px;
  .category_title {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }
`;
const StButton = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 3px;
  background: #e0e0e0;
  font-size: 1rem;
  cursor: pointer;
  border: none;
`;

const StLogo = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;
