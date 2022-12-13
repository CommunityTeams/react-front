import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
// import { addPost, __getComment } from "./.../redux/modules/postSlice";
import { __addComment } from ".../redux/modules/postSlice";

function PostAdd() {
  // dispatch
  const dispatch = useDispatch();
  // 네트워크 로딩중/에러메세지 확인
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  // useState
  const [postLists, setPostLists] = useState({
    id: 0,
    user: "",
    title: "",
    content: "",
  });
  // onSubmitHandler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      postLists.user.trim() === "" ||
      postLists.title.trim() === "" ||
      postLists.content.trim() === ""
    )
      return alert("입력안하니?");
    dispatch(__addComment({ ...postLists, id: todos.length + 1 }));
    setPostLists({
      id: 0,
      user: "",
      title: "",
      content: "",
    });
  };
  // onChangeHandler
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPostLists({
      ...postLists,
      [name]: value,
    });
  };

  // __addComment 시간나면 댓글달기

  // useEffect __getComment 시간나면

  return (
    <StContainer>
      <StAddForm action="" onSubmit={onSubmitHandler}>
        <h2>작성자</h2>
        <StInputGroup
          type="text"
          name="user"
          // value={posts.user}
          onChange={onChangeHandler}
          placeholder="이름을 입력해주세요"
        />
        <h2>제목</h2>
        <StInputGroup
          type="text"
          name="title"
          // value={posts.title}
          onChange={onChangeHandler}
          placeholder="제목을 입력해주세요"
        />
        <h2>내용</h2>
        <Textarea
          type="text"
          name="content"
          // value={posts.content}
          onChange={onChangeHandler}
          placeholder="내용을 입력해주세요"
        />
        <button type="button" size="large">
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
