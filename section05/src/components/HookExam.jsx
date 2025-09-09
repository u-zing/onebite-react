import { useState } from "react";
// 3가지 hook관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 될 수는 없다(조건문,반복문 내부 불가능)
// 3. 나만의 훅(Custom Hook) 직접 만들수 있다.

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();
  return (
    <div>
      <input
        value={input}
        onChange={onChange}
      />
    </div>
  );
};

export default HookExam;
