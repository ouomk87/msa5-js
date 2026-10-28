const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); //기존이벤트 취소
  //엑시오스 보내기
  //이벤트 객체에서 이벤트가 발생한 요소에 접근(e.target)해서 필요한 값 획득
  const page = e.target.page.value;
  const limit = e.target.limit.value;
});
//submit버튼 누를때 번쩍이는 현상
//html value값을 (value="3") 지정하면 인풋박스에 숫자가 지정되는데
//그값이 우리가 인풋에 가지고 올 숫자를 적으면 자동으로 눈에 안 보이지만 지정되게 된다.
