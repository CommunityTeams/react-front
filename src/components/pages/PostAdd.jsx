import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
// import { addPost, __getComment } from '../redux/modules/postSlice';
// eslint-disable-next-line no-unused-vars
import { __addNewPost } from "../../redux/modules/postsSlice";
import { getComm } from "../../redux/modules/postSlice";

function PostAdd() {
  // 값을 담을 두 공간 필요하다. 1. 제목 , 2. 내용
  // 2개의 useState를 만들어야한다. useState 현재 상태를 저장하고, 변경할 수 있다. 첫번째 상태, 두번째 변경
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComm());
  }, []);

  // dispatch로 Axios.get 요청 > 서버에서 모든 데이터를 가지고 와서 스토어에 저장을한다.
  // useSelector로 저장된 comm에 데이터들을 가지고 컴포넌트(뷰)로 온다 > state.post.comm
  // 데이터들이 담긴 변수(globalValue)들은 배열이다. console.log로 확인해보면 알 수 있음.
  // 변수를 map함수 (map함수는 배열함수) 를 사용하여 객체의 name만 뽑아서 변수에 따로 저장한다. 변수: name
  // console.log(name)으로 뽑아낸 변수들을 확인한다.

  const globalValue = useSelector((state) => state.post.comm);

  const id = globalValue.map((data) => {
    return data.id;
  });
  const name = globalValue.map((data) => {
    return data.name;
  });

  const onsubmitHandler = () => {
    dispatch(
      __addNewPost({
        title,
        content,
        category: select,
        img: "https://image.bugsm.co.kr/album/images/500/202860/20286013.jpg",
      })
    );
  };
  return (
    <StContainer>
      <StAddForm action="">
        <h2>카테고리</h2>
        <div>
          <select
            name=""
            id=""
            value={select}
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          >
            <option default>카테고리를 선택해주세요</option>
            {name.map((data, idx) => {
              return (
                <option key={id[idx]} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
        </div>
        <h2>제목</h2>
        <StInputGroup
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="제목을 입력해주세요"
        />
        <h2>내용</h2>
        <Textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="내용을 입력해주세요"
        />
        <button type="button" size="large" onClick={onsubmitHandler}>
          추가하기
        </button>
      </StAddForm>
    </StContainer>
  );
}

export default PostAdd;

const StInputGroup = styled.input`
  width: 100%;
  height: 50px;
  font-size: 14px;
  border: 2px solid #eee;
`;

const StAddForm = styled.form`
  width: 100%;
  height: 100%;
  font-size: 14px;
  cursor: pointer;
`;
const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;

const StContainer = styled.div`
  height: 100%;
`;
