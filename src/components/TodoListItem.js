import React from "react";
import styled from "styled-components";
import checkmarkImg from "../images/checkmark.svg";
import checkmarkRedImg from "../images/checkmark_red.svg";
import cancelImg from "../images/cancelmark.svg";

const ItemContainer = styled.div`
  background: linear-gradient(
      311.99deg,
      rgba(0, 0, 0, 0.3) -22.55%,
      rgba(255, 255, 255, 0.3) 131.34%
    ),
    #4e555d;
  background-blend-mode: soft-light, normal;
  border-radius: 15px;
  position: relative;
  margin: 10px 0;
`;

const TodoListItem = ({ item, index, removeItem, markTodoDone }) => {
  const onClickClose = () => {
    var idx = parseInt(index);
    removeItem(idx);
  };
  const onClickDone = () => {
    var idx = parseInt(index);
    markTodoDone(idx);
  };
  return (
    <li style={{ width: "500px" }}>
      <ItemContainer
        className={`w-full max-w-2xl dark-box-shadow flex flex-row items-center justify-content p-3 ${
          item.done ? " text-red-600 line-through" : " text-white"
        }`}
      >
        <span className="mr-3" aria-hidden="true" onClick={onClickDone}>
          <img
            src={item.done ? checkmarkRedImg : checkmarkImg}
            className="w-7"
            alt="check-mark"
          />
        </span>
        <div className="flex flex-col flex-grow items-center justify-start text-left">
          <span className="w-full">{item.value}</span>
        </div>
        <div className="flex flex-col items-center justify-end text-right">
          <span aria-hidden="true" onClick={onClickClose}>
            <img src={cancelImg} className="w-4" alt="cancel-mark" />
          </span>
        </div>
      </ItemContainer>
    </li>
  );
};

export default TodoListItem;
