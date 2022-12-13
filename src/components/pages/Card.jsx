import React from "react";
import styled from "styled-components";

export default function Card({ data, locationHandler }) {
  const { id, title, content, img } = data; // eslint-disable-line no-unused-vars
  console.log(title, content, img, id);
  return (
    <StCard onClick={() => locationHandler(id)}>
      <StCardImg src={img} alt="" />
      <div className="upload_content_box">
        <span className="upload_title">{title}</span>
        <span className="upload_content">{content}</span>
      </div>
    </StCard>
  );
}

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  border-radius: 3px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.13);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  .upload_content_box {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }
  .upload_title {
    font-weight: 600;
    font-size: calc(0.4rem + 0.7vw);
  }
  .upload_content {
    font-size: calc(0.4rem + 0.5vw);
  }
`;
const StCardImg = styled.img`
  width: 100%;
  aspect-ratio: 16/12;
  object-fit: cover;
`;
