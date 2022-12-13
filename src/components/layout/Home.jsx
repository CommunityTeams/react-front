import React, { useRef, useState } from "react";
import styled from "styled-components";
import Sidebar from "../pages/Sidebar";
import Main from "../pages/Main";
import Modal from "../common/modals/Modal";
import useModal from "../../hooks/useModal";

export default function Home() {
  const [modal, onChangeModalHandler] = useModal();
  const contentInput = useRef();
  const [input, setInput] = useState(""); // eslint-disable-line no-unused-vars

  return (
    <StWrapper>
      <Sidebar modal={modal} close={onChangeModalHandler} />
      <Main />
      <Modal
        modal={modal}
        close={onChangeModalHandler}
        content={contentInput}
        header="리스트 추가하기"
      >
        <StTitle>리스트이름 : </StTitle>
        <StModalInput type="text" ref={contentInput} />
      </Modal>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const StTitle = styled.span`
  min-width: 25%;
`;

const StModalInput = styled.input`
  width: 100%;
  height: 28px;
  border: 1px solid #c8c8c8;
  outline: none;
  text-indent: 10px;
  border-radius: 3px;
`;
