// 콜백 지옥
// setTimeout(() => {
//   console.log("A");

//   setTimeout(() => {
//     console.log("B");

//     setTimeout(() => {
//       console.log("C");
//     }, 500);
//   }, 1000);
// }, 1500);

//위 콜백 지옥을 회피하기 위해서 프로미스 기반으로 변경
//동작하는 정도만 파악하기 아직쓸일없음

//프로미스로만드는 객채로 만듬
//함수 정의식
// function test() {}

// //함수표현식
// const test2 = () => {};

//timer 함수 타이머
//str 파라미터 :
//argument 외부로 부터 전달받는 값
//resolve, reject 자동으로 채워주는 파라미터임
const timer = (str) => {
  return new Promise((resolve, reject) => {
    //하고 싶은 비동기 처리를 적어주면 된다.
    setTimeout(() => {
      console.log(str);
      if (str === "A" || str === "B" || str === "C") {
        resolve({ code: "허용", word: str }); //어떤형태로도 상관없음
      } else {
        reject(new Error("허용하지 않는 문자가 입력됐다."));
      }
    }, 2000);
  });
};
timer("A") //timer을 호출하면 프로미스객체를 대기 상태로 반환함 pending
  .then((result) => {
    //resolve 일때 실행 되는 코드 작성
    console.log(result.code, result.word);
    return timer("B"); //동기처리를 하기 위한 방법
  }) //성공하면 여기에 //콜백함수로 적어줌
  .then((result) => {
    console.log(result.code, result.word);
    return timer("C");
  })
  .then((result) => {
    console.log(result.code, result.word);
  })
  .catch((error) => {
    //reject 일때 실행 되는 코드 작성
    console.log(error.message);
  }) //실패하면 여기에 //
  .finally(() => {
    //resolve던 reject던 무조건 실행되는코드
    console.log("파이널리");
  });

// console.log("외부외부");
