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
//async/await 방식
const process = async () => {
  //함수정의할때 앞에 async을 꼭 넣기
  try {
    const result1 = await timer("A"); //timer 비동기처리 앞에  await을 씀
    console.log(result1.code, result1.word);
    const result2 = await timer("B");
    console.log(result2.code, result2.word);
    const result3 = await timer("D");
    console.log(result3.code, result3.word);
  } catch (error) {
    console.log(error.message);
  }
};
process();
//위에서 아래로 순서대로 쓸수있어 편하다
