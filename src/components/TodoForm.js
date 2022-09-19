import React, { useRef } from "react";
import styled from "styled-components";

const SettingInput = styled.input`
  background: linear-gradient(
      134.85deg,
      rgba(0, 0, 0, 0.4) -9.62%,
      rgba(255, 255, 255, 0.4) 136.92%
    ),
    #4e555d;
  background-blend-mode: soft-light, normal;
  box-shadow: inset 2.5px 2.5px 5px #35373e;
  border-radius: 20px;
  padding: 3px 20px;
  width: 400px;
  height: 50px;
`;

const Button = styled.button`
  width: 80px;
  height: 50px;
  border-radius: 20px;
  background-color: #21b04b;
`;

const TodoForm = ({ addItem }) => {
  const ref = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    var newItemValue = ref.current.value;

    if (newItemValue) {
      addItem(newItemValue);
      ref.current.value = "";
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex justify-between mb-7"
      style={{ width: "500px" }}
    >
      <SettingInput ref={ref} className="text-white outline-none" placeholder="add a new todo..." />
      <Button type="submit" className="text-white border-none">Add</Button>
    </form>
  );
};

export default TodoForm;
