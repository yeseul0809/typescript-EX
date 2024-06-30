import React from "react";
import { Todo } from "../types";

interface Props extends Todo {
  handleClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const handleClickButton = () => {
    props.handleClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={handleClickButton}>삭제하기</button>
    </div>
  );
}
