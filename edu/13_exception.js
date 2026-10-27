// console.log(1);
// console.log(2);
// //console.log(test.name);
// try {
//   //내가 실행할 처리를 작성
//   console.log("try문 시작");
//   console.log(test.name);
//   console.log("try문 끝");
// } catch (error) {
//   // try 문 안에서 에러나 예외가 발생했을때 처리할 로직
//   console.log("error 발생");
//   console.log(error.name); //발생하는 에러명
//   console.log(error.message); //발생한 에러 내용
//   console.log(error.stack); //발생한 에러 상세 정보 :stack => 정보가 많이 나오기때문에 콘솔에 찍으면 안됨
// }
// console.log(3);
// console.log(4);

// try {
//   console.log(1);
//   //강제 예외 발생 시키기
//   throw new Error("강제로 예외 발생 시켰다.");
//   console.log(2);
// } catch (error) {
//   console.log(error.stack);
// }
//finally 예외 여부와 상관 없이 무조건 실행 되는 로직을 작성하기 위해 사용
// try {
//   console.log(test.name);

//   console.log(1);
// } catch (error) {
//   console.log("error");
// } finally {
//   console.log("finally");
// }
//요렇게 많이 씀

//에러를 상게하게 처리하는 방법
//여러 종류의 예외를 처리하고 싶을때,
// instanceof 연산자를 사용해서 구체적으로 처리
//eval()<==이게 보이면 절대쓰지말기!!
try {
  throw new ReferenceError();
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("싱텍스 에러");
  } else if (error instanceof ReferenceError) {
    console.log("참조 에러");
  } else {
    console.log("에러에러!");
  }
}
