/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable import/named */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { BsListCheck } from "react-icons/bs";
import useModal from "../../hooks/useModal";
import Modal from "../common/modals/Modal";
import { postComm, getComm, setComm } from "../../redux/modules/postSlice";

export default function Sidebar({ setCategoryName }) {
  const contentInput = useRef();
  const [modal, onChangeModalHandler] = useModal();
  const [isTrue, setIsTrue] = useState(false);
  const dispatch = useDispatch();
  const comm = useSelector((state) => state.post.comm);

  // 모달창 x 버튼 눌렀을 때
  const closeEventHandler = () => {
    onChangeModalHandler();
    contentInput.current.value = "";
  };

  // 모달창에서 추가하기 버튼 눌렀을 때, 서버에 input text 저장
  const onSubmitHandler = () => {
    if (contentInput.current.value === "") {
      // eslint-disable-next-line no-alert
      return alert("이름을 작성하셨는지 한번 더 확인해주세요.");
    }
    dispatch(postComm({ name: contentInput.current.value, isClicked: false }));
    setIsTrue(!isTrue);
    contentInput.current.value = "";
    return onChangeModalHandler();
  };

  // 커뮤니티 리스트 클릭했을 때
  const onClickHandler = (id) => {
    const list = comm.map((item) => {
      if (item.id === id) {
        setCategoryName(item.name);
        return {
          ...item,
          isClicked: true,
        };
      }
      return {
        ...item,
        isClicked: false,
      };
    });
    dispatch(setComm(list));

    /*   */
  };

  useEffect(() => {
    dispatch(getComm());
  }, [dispatch, isTrue]);

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
          <StLogo className="logo">Team Spirit</StLogo>
        </div>
        <div className="add_button_container">
          <StButton onClick={onChangeModalHandler}>리스트 추가하기</StButton>
        </div>
        <StCategory>
          <span className="category_title">
            <BsListCheck style={{ width: "20px", height: "20px" }} />
            <StCategoryTitle>커뮤니티 리스트</StCategoryTitle>
          </span>

          <StCategoryInner>
            {comm &&
              comm.map((item) => {
                return (
                  <button
                    type="button"
                    key={item.id}
                    className={
                      item.isClicked
                        ? "category_list clicked"
                        : "category_list "
                    }
                    onClick={() => onClickHandler(item.id)}
                  >
                    {item.name}
                  </button>
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
const StCategoryTitle = styled.span`
  margin-top: 3px;
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
  .clicked {
    color: #eceaea;
    text-shadow: 0 0 6px #e6618f, 0 0 18px #e6618f;
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
  background: linear-gradient(180deg, #c5a7fb, #7492f2);
  font-size: 1rem;
  cursor: pointer;
  border: none;
  box-shadow: 2px 2px 6px 1px rgb(0 0 0 / 20%);
  font-size: 0.9rem;
  color: #212121;
  &:active {
    box-shadow: none;
  }
`;

const StLogo = styled.span`
  font-size: 2rem;
  font-weight: 600;
  font-family: "Corinthia", cursive;
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
