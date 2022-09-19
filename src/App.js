import React, { useState } from "react";
import styled from "styled-components";
import TodoListItem from "./components/TodoListItem";
import TodoForm from "./components/TodoForm";

const Container = styled.div`
  background: #4e555e;
`;

const PurpleRadial = styled.div`
  position: fixed;
  width: 588px;
  height: 576px;
  opacity: 0.3;
  transform: matrix(1, 0, 0, -1, 0, 0);
  left: 50%;
  top: 50%;
  background: radial-gradient(
    38.72% 38.72% at 50% 50%,
    #ed21fa 0%,
    rgba(78, 85, 94, 0.37) 100%
  );
  margin-left: calc((-588px / 2) + 91px);
  margin-top: calc((-576px / 2) + 79px);
`;

const GreenRadial = styled.div`
  position: fixed;
  width: 588px;
  height: 576px;
  opacity: 0.3;
  transform: matrix(1, 0, 0, -1, 0, 0);
  left: 50%;
  top: 50%;
  background: radial-gradient(
    38.72% 38.72% at 50% 50%,
    #1fe3cc 0%,
    rgba(78, 85, 94, 0.37) 100%
  );
  margin-left: calc((-588px / 2) + -43px);
  margin-top: calc((-576px / 2) + -14px);
`;

const initItems = [
  { index: 1, value: "learn react", done: false },
  { index: 2, value: "Go shopping", done: true },
  { index: 3, value: "buy flowers", done: true },
];

function App() {
  const [todoItems, setTodoItems] = useState(initItems);
  const addItem = (newItemValue) => {
    const temp = [...todoItems];
    temp.unshift({
      index: todoItems.length + 1,
      value: newItemValue,
      done: false,
    });
    setTodoItems(temp);
  };
  const removeItem = (itemIndex) => {
    const temp = [...todoItems];
    temp.splice(itemIndex, 1);
    setTodoItems(temp);
  };
  const markTodoDone = (itemIndex) => {
    var todo = todoItems[itemIndex];
    let temp = [...todoItems];
    temp.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? temp.push(todo) : temp.unshift(todo);
    setTodoItems(temp);
  };
  return (
    <Container className="flex flex-col min-h-full text-center">
      <PurpleRadial />
      <GreenRadial />
      <div className="w-full max-w-lg flex-grow relative flex flex-col mx-auto pt-52 pb-3">
        <TodoForm addItem={addItem} />
        <ul>
          {todoItems.map((item, index) => {
            return (
              <TodoListItem
                key={index}
                item={item}
                index={index}
                removeItem={removeItem}
                markTodoDone={markTodoDone}
              />
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default App;
