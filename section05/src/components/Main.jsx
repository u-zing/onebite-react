//JSX 주의사항
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을수있다.(삼항연산식 , 문자열, 값,값으로써 평가될수 있는 것들)
//2. 숫자, 문자열, 배열 값만 렌더링 된다.
//3.모든 태그는 닫혀있어야한다.
//4. 최상위 태그는 반드시 하나여야 한다.
function Main() {
  const user = {
    name: "임유진",
    isLogin: true,
  };
  return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
}

export default Main;
