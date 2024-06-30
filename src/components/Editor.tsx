import React, { useState } from "react";

interface Props {
  handleClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const [text, setText] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClickButton = () => {
    props.handleClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={handleChangeInput} />
      <button onClick={handleClickButton}>추가하기</button>
    </div>
  );
}
