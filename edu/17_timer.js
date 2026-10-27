//타이머 함수
//비동기
//setTimeout(cd, ms[, args]) :number    []뒤에 이거가 있으면 생략가능
//설정한 일정 시간 후에 콜백함수를 실행
//콜백 함수에 파라미터가 필요한 경우에만  ...args를 추가
//return값은 timeoutId, 정수값 (해당 타이머의 고유한 식별값)
// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 1000);

// console.log("C");

console.log("A"); //동기
const timeoutId = setTimeout(() => {
  //비동기
  console.log("B");
}, 1000);

console.log("C");
//해당 ID의 setTimeout을 취소 시킨다.
clearTimeout(timeoutId);
//a찍고 1초뒤에 실행하도록 했고 3번쨰 c를찍게 했다 1초가 가기전에 clearTimeout을 취소했다.그래서 지워 진거임.

//setInterval() (cb, ms[, ...args]) :nuber을 리턴함
//설정한 일정 시간마다 콜백함수를 실행
//return값은 intervalID, 정수값 (해당 인터벌의 고유한 식별값)
const intervalID = setInterval(() => {
  console.log("인터벌");
}, 1000);
//1초가 지나가기전에 취소가 되어버려서 인터벌이 실행이 안됨
setTimeout(() => {
  clearInterval(intervalID);
}, 5000);
