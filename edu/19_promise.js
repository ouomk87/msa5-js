// 아래 3~16번에서 작성한 코드는 setTimeout은 비동기 처리의 특징으로 인해 C>B>A 순서로 나온다

// setTimeout(() => {
//   console.log("A");

// }, 1500);
// // 1.5s

// setTimeout(() => {
//   console.log("B");
// }, 1000);
// // 1s

// setTimeout(() => {
//   console.log("C");
// }, 500);
// // 0.5s

// ==============================================================================

// 아래와같이 비동기처리를 동기형식으로 바꿀 수 있다

// setTimeout(() => {
//   console.log("A");

//   setTimeout(() => {
//     console.log("B");

//     setTimeout(() => {
//       console.log("C");
//     }, 500);
//     // 0.5s
//   }, 1000);
//   // 1s
// }, 1500);
// // 1.5s

// ==============================================================================

// 위 콜백 지옥을 회피하기 위해서 프로미스 기반으로 변경

// 함수 정의식
// function test() {}

// 함수 표현식
// const test2 = () => {};

const timer = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);

      if (str === "A" || str === "B" || str === "c") {
        resolve({ code: "허용", word: str }); // 객체형태로 전달
      } else {
        reject(new Error("허용하지 않는 문자가 입력됐다.")); // 보통 에러 객체
      }
    }, 2000);
  });
};

timer("A")
  .then((result) => {
    // resolve 일 때 실행되는 코드 작성
    console.log(result.code, result.word);
  })
  .catch((error) => {
    // reject 일 때 실행되는 코드 작성
    console.log(error.message);
  })
  .finally(() => {
    // resolve/reject 어느쪽이든 무조건 실행되는 코드
    console.log("파이널리");
  });

// timer는 함수 타이머라고도하고 변수라고도 한다. 콘스트니까 상수이기도한다.
// str은 파라미터. 아규먼트를 저장하기위한 변수.
// 아규먼트란? 함수 외부로부터 외부에서 전달되어지는 실질적인 값.
// timer('a'); 이때 문자열 a를 아규먼트라고한다.
// promise객체도 콜백함수를 받음
// resolve와 reject는 js가 자동으로 채워주는 파라미터
// 성공시 호출할 resolve와 실패시 호출할 reject
