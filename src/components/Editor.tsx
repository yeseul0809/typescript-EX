import React, { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClickButton = () => {
    dispatch.handleClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={handleChangeInput} />
      <button onClick={handleClickButton}>추가하기</button>
    </div>
  );
}
