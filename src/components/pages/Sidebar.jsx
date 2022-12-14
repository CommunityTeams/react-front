import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import useModal from "../../hooks/useModal";
import Modal from "../common/modals/Modal";
import { postComm, getComm } from "../../redux/modules/postSlice";

export default function Sidebar() {
  const contentInput = useRef();
  const [modal, onChangeModalHandler] = useModal();
  const [content, useContent] = useState(false);
  const dispatch = useDispatch();
  const comm = useSelector((state) => state.post.comm);
  // 모달창 x 버튼 눌렀을 때
  console.log(comm);
  const closeEventHandler = () => {
    onChangeModalHandler();
    contentInput.current.value = "";
  };

  // 모달창에서 추가하기 버튼 눌렀을 때, 서버에 input text 저장
  const onSubmitHandler = () => {
    if (contentInput.current.value === "") {
      return alert("이름을 작성하셨는지 한번 더 확인해주세요."); // eslint-disable-line no-alert
    }
    dispatch(postComm({ name: contentInput.current.value }));
    useContent(!content);
    contentInput.current.value = "";
    return onChangeModalHandler();
    onChangeModalHandler();
    return dispatch(postLists({ name: contentInput.current.value }));
  };
  const onClickHandler = (id) => {
    dispatch({ type: "setComm", payload: id });
  };
  useEffect(() => {
    dispatch(getComm());
  }, [content]);

  return (
    <StSidebar>
      <Modal
        modal={modal}
        close={closeEventHandler}
        submit={onSubmitHandler}
        header="리스트 추가하기"
      >
        <StTitle>리스트이름 : </StTitle>
        <StModalInput type="text" ref={contentInput} />
      </Modal>
      <div className="sidebar_inner">
        <div className="logo_container">
          <StLogo className="logo">LOGO</StLogo>
        </div>
        <div className="add_button_container">
          <StButton onClick={onChangeModalHandler}>리스트 추가하기</StButton>
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
            {comm &&
              comm.map((item) => {
                console.log(item);
                return (
                  <button
                    type="button"
                    key={item.id}
                    className="category_list"
                    onClick={() => onClickHandler(item.id)}
                  >
                    {item.name}
                  </button>
                );
              })}
            {comm?.map((item) => {
              return (
                <StCategoryTitle key={item.name}>{item.name}</StCategoryTitle>
              );
            })}
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
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
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
  .category_list {
    font-size: 0.9rem;
    cursor: pointer;
    width: fit-content;
    background: none;
    border: none;
  }
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
const StCategoryTitle = styled.input`
  font-size: 0.9rem;
`;
