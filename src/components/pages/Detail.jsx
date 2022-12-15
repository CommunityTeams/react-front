/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getLists, setReple, getReple } from "../../redux/modules/postSlice";

export default function Detail() {
  /*
  1. 렌더링
  1-1. url에서 아이디 값을 가져온 후 서버에서 전체리스트 정보를 들고 온다.
  1-2. url과 전체리스트를 filter함수를 사용하여 같은 객체를 배열로 반환한다.
  2. 반환한 내용을 뷰에 뿌려준다.
  2-1. map함수를 사용하여 html 작성
  */
  const dispatch = useDispatch();
  const globalValue = useSelector((state) => state.post.lists);
  const repleValue = useSelector((state) => state.post.reple);
  const params = useParams();
  const id = useRef();
  const password = useRef();
  const [render, setRender] = useState("");
  console.log(repleValue);

  const obj = globalValue.find((data) => {
    if (Number(params.id) === data.id) {
      return data;
    }
    return "";
  });
  console.log(obj);
  const reple = useRef();

  useEffect(() => {
    dispatch(getLists());
    dispatch(getReple());
  }, [render]);

  // eslint-disable-next-line consistent-return
  const addRepleHandler = () => {
    if (password.current.value.length < 4)
      return alert("비밀번호는 4자리 이상 입력해주세요.");
    dispatch(
      setReple({
        content: reple.current.value,
        id: id.current.value,
        password: password.current.value,
        page: Number(params.id),
      })
    );
    reple.current.value = "";
    id.current.value = "";
    password.current.value = "";
    setRender(!render);
  };

  return (
    <StWrapper>
      <div className="detail_page_inner">
        <StPageTitle>{obj.title}</StPageTitle>
        <div className="detail_content_wrapper">
          <div className="flex-column gap-50-0">
            <div className="detail_content_container">
              <div className="detail_content">{obj.content}</div>
            </div>
            <div className="reple_field_wrapper">
              <div className="textarea_container">
                <div className="user_info">
                  <input type="text" placeholder="닉네임" ref={id} />
                  <input
                    type="password"
                    placeholder="비밀번호"
                    ref={password}
                  />
                </div>
                <StTextArea name="" id="" cols="30" rows="10" ref={reple} />
                <div className="write_btn_container">
                  <StRepleButton type="button" onClick={addRepleHandler}>
                    Write
                  </StRepleButton>
                </div>
              </div>
              <StRepleWrapper>
                {repleValue &&
                  // eslint-disable-next-line consistent-return
                  repleValue.map((data) => {
                    console.log(data.page, Number(params.id));
                    if (Number(params.id) === data.page) {
                      return (
                        <StRepleContainer key={data.id}>
                          <span>{data.id}</span>
                          <span>{data.content}</span>
                        </StRepleContainer>
                      );
                    }
                  })}
              </StRepleWrapper>
            </div>
          </div>
        </div>
      </div>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 44.5px);
  padding: 70px 50px;
  box-sizing: border-box;
  background: #e7e3e3;
  .detail_page_inner {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }
  .detail_content_wrapper {
    background: #fff;
    min-height: 30vh;
    padding: 45px 30px;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    border-radius: 3px;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .gap-50-0 {
    gap: 50px 0;
  }
  .detail_content_container {
    display: flex;
    flex-direction: column;
    gap: 50px 0;
  }
  .textarea_container {
    display: flex;
    flex-direction: column;
    gap: 15px 0;
  }
  .write_btn_container {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }

  .detail_content {
    font-size: 1rem;
    min-height: 15vh;
  }
  .user_info {
    display: flex;
    gap: 0 10px;
  }
  .reple_field_wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
  }
`;
const StRepleButton = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  letter-spacing: 2.5px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    color: #cadff7;
  }
`;
const StTextArea = styled.textarea`
  width: 100%;
  height: 190px;
  resize: none;
  border: 1px solid #cccccc;
  padding: 15px;
  box-sizing: border-box;
  outline: none;
`;
const StPageTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1.3px;
`;
const StRepleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  padding-bottom: 20px;
  padding-top: 30px;
  border-top: 1px solid black;
`;
const StRepleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
`;
