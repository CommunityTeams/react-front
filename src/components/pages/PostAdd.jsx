import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import {__addNewPost,__updatePost } from '../../redux/modules/postsSlice';

const PostAdd = () => {
 const { lists} = useSelector((state) => state.lists);
  // dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useState
  const [postlist, setPostLists ] = useState({
    id: 0,
    user:"",
    title: "",
    content:"",
  });
  const fetchLists = async () => {
    const { data } = await axios.get("http://localhost:3004/lists");
    setPostLists(data);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(
      __addNewPost({...postlist, id: uuidv4()}));
    setPostLists({
      id:0,
      user:"",
      title: "",
      content:"",
    });
    navigate("/posts");
  };
  // onChangeHandler
  const onChangeHandler = (event) => {
    const{name,value} = event.target;
    dispatch(__updatePost({ ...postlist, [name]:value }));
  };

  useEffect(() => {
    fetchLists();
  }, []);

return (
    <StContainer>
      <StAddForm action="" onSubmit={onSubmitHandler}>
        <h2>작성자</h2>
        <StInputGroup
          type="text"
          name="user"
          value={lists.user}
          onChange={onChangeHandler}
          placeholder="이름을 입력해주세요"
        />
        <h2>제목</h2>
        <StInputGroup
          type="text"
          name="title"
          value={lists.title}
          onChange={onChangeHandler}
          placeholder="제목을 입력해주세요"
        />
        <h2>내용</h2>
        <Textarea
          type="text"
          name="content"
          value={lists.content}
          onChange={onChangeHandler}
          placeholder="내용을 입력해주세요"
        />
        <button type="submit" size="large">
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
