import React from "react";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  const handleClickButton = () => {
    dispatch.handleClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={handleClickButton}>삭제하기</button>
    </div>
  );
}
