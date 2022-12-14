import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import axios from "axios";
import {__addNewPost } from '../../redux/modules/postsSlice';
// import {__addNewPost, __updatePost} from '../../redux/modules/postsSlice';
import newPost from '../pages/newPost';

function PostAdd() {
  const { postId } = useParams();
  const postText = useSelector((state) => state.postText);
  // dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useState
  const [list] = useState({
    id: "",
    title: "",
    content:"",
  });
  const [lists, setLists] = useState({
    id: 0,
    title: "",
    content:"",
  });
  const fetchLists = async () => {
    const { data } = await axios.get("http://localhost:3004/lists");
    setLists(data);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(__addNewPost(newPost(postText)));
    navigate('/');
    
  };
  // const onSubmitHandler = (list) => {
  //   axios.post("http://localhost:3004/lists", list);
  //   setLists([...lists, { ...list, id: lists.length + 1 }]);
  // };
  // onChangeHandler
  // const onChangeHandler = (event) => {
  //   event.preventDefault();
  //   dispatch(__updatePost({ ...postText, id: postId }));
  //   navigate(`/details/${postId}`);
  // };
  //useEffect
  useEffect(() => {
    fetchLists();
  }, []);

return (
    <StContainer>
      <StAddForm action="" onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(list);
        }}>
        <h2>작성자</h2>
        <StInputGroup
          type="text"
          // name="user"
          // value={lists.user}
          // onChange={onChangeHandler}
          placeholder="이름을 입력해주세요"
        />
        <h2>제목</h2>
        <StInputGroup
          type="text"
          name="title"
          value={lists.title}
          // onChange={onChangeHandler}
          placeholder="제목을 입력해주세요"
        />
        <h2>내용</h2>
        <Textarea
          type="text"
          name="content"
          value={lists.content}
          // onChange={onChangeHandler}
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
