import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { getLists } from "../../redux/modules/postSlice";
import Card from "./Card";

export default function Main() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.post.lists);
  console.log(dataList);
  const isLoading = useSelector((state) => state.isLoading);
  const navigate = useNavigate();
  const locationHandler = (id) => {
    navigate(`/${id}`);
  };
  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  return (
    <StMainWrapper>
      <div className="main_inner">
        <StMainTitle>커뮤니티 페이지</StMainTitle>
        <StUploadContainer>
          <div className="write_btn_container">
            <StWritingBtn>
              <StLink to="/Post/add">
                <p>글쓰기</p>
                <StPencil />
              </StLink>
            </StWritingBtn>
          </div>
          <hr />
          <div className="upload_list_container">

            {dataList?.map((data) => (
              <Card
                key={data.id}
                data={data}
                locationHandler={locationHandler}
              />
            ))}

          </div>
        </StUploadContainer>
      </div>
    </StMainWrapper>
  );
}

const StMainWrapper = styled.main`
  width: 100%;
  margin-left: 270px;
  .main_inner {
    height: 100%;
    padding: 30px 40px;
    box-sizing: border-box;
  }
  .write_btn_container {
    display: flex;
    justify-content: flex-end;
  }
`;
const StPencil = styled(BsPencilSquare)`
  width: 15px;
  height: 15px;
`;
const StLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  gap: 0 5px;
  color: #353535;
`;
const StUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  .upload_list_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
`;
const StMainTitle = styled.h2`
  font-size: 1.9rem;
  font-weight: 600;
`;

const StWritingBtn = styled.span`
  padding: 7px 10px;
  border: 1px solid #ececec;
  cursor: pointer;
  font-size: 0.8rem;
  box-shadow: 1px 1px 5px 1px rgb(0 0 0 / 10%);
  &:active {
    box-shadow: none;
  }
`;

