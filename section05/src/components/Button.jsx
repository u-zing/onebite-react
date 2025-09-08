const Button = ({ text, color = "blue" }) => {
  const onClickBtn = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickBtn}
      //onMouseEnter={onClickBtn}
      style={{ color: color }}
    >
      {text}
    </button>
  );
};

export default Button;
