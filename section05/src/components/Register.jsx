import { useState } from "react";
//회원가입폼 (이름,생년월일,국적,자기소개)

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.value]: e.target.value });
  };

  return (
    <div>
      <div>
        <input
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
    </div>
  );
};

export default Register;
