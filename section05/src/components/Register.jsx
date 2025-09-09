import { useState, useRef } from "react";

//회원가입폼 (이름,생년월일,국적,자기소개)

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({ ...input, [e.target.value]: e.target.value });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      input.current.focus();
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          console.log("레지스터 렌더링");
        }}
      >
        ref+1
      </button>

      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value="">국가를 선택해 주세요</option>
          <option>한국</option>
          <option>영국</option>
          <option>미국</option>
        </select>
      </div>

      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
        />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
