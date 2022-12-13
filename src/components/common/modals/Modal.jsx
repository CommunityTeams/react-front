import React from "react";
import styled from "styled-components";

export default function Modal(props) {
  const { modal, close, header } = props;
  return (
    <StModalContainer className={modal ? "modal_open" : "modal_close"}>
      <div className="modal_inner">
        <div className="modal_header">
          <span>{header}</span>
          <button type="button" className="modal_close_btn" onClick={close}>
            x
          </button>
        </div>
        <div className="modal_content">
          <div>{props.children}</div>
        </div>
        <div className="modal_footer">
          <button type="button">추가하기</button>
        </div>
      </div>
    </StModalContainer>
  );
}

const StModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  width: 100%;
  min-height: 100vh;
  .modal_inner {
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 50%;
    top: 45%;
    z-index: 3;
    max-width: 500px;
    width: 100%;
    transform: translate(-50%, -100%);
  }
  .modal_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
