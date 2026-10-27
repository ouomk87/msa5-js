// 구조분해 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
// const arr = [1, 2, 3, 4, 5];
// let idx1 = arr[0];
// let idx2 = arr[1];
// let idx3 = arr[2];
// let idx4 = arr[3];
// let idx5 = arr[4];
// //destructuring문법
// let [i1, i2, i3, i4, i5] = arr;
// console.log(i3);

//객체쪽에서 사용방법
// const user = {
//   name: "홍길동",
//   age: 20,
//   gender: "M",
//   addr: "대구광역시",
//   info: { bord: 1 },
// };
// //객체에서는 {} property : 속성으로변역됨
// const { name: userName, age, addr2 = "없음" } = user;
// console.log(userName, age, addr2); //name에 줄은 많이 사용하는거기때문에 변경하는게 좋음

function test(num) {
  //기본값을 설정할수 있다.
  console.log(num * 2);
}
test();
