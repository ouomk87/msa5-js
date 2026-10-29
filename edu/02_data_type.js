//원시형(primitive type)
let num1 = 1;
let num2 = num1;
num2 = 99;
console.log(num1, num2);

//참조형(Referance type)
let obj1 = {
  id: 1,
  name: "둘리",
  etc: { addr: "대구", test: { key1: "val1" } }, // 참조형 데이터 { addr: "대구", test: { key1: "val1" }
};
// let obj2 = obj1;
// obj2.name = "홍길동";
// console.log(obj1.name, obj2.name);
//복사한 것을 바라본다고 해서 참조형 :내용이 아닌 자지고 있는 이름을 가지고 옴
//obj1.name 이름을 바꾸는것과 같음
//Referance type은 값을 복사하고 싶다고 복사 하지말라는것! 그걸 보여주기위한 예
// ------------------------------------------------------------------------------------

// 얕은 복사 Shallow Copy
// 객체의 최상위 계층만 값을 복사하고, 그 이하 계층은 참조형 데이터일 경우 주소만 복사하는 방식
let obj3 = { ...obj1 }; //복사
obj3.name = "또치";
obj3.etc.addr = "서울";
console.log(obj1.name, obj3.name, obj1.etc.addr, obj3.etc.addr);
//Shallow Copy는 최상위계층만 있을경우 사용해도 문제가 없지만 하위계층은 문제가 생김 같이 바껴짐
//안정성에 문제가 되기 때문에 비추

// ------------------------------------------------------------------------------------

// 깊은 복사 Deep Copy
// 객체의 모든 계층의 값을 복사(속도가 느린 단점이 있음 루프를 계속 돌리기 때문에 하지만 안전함)
// json 문자열로 구성됨 - 자바스크립의 형태랑 비슷하다고 해서 제이슨
//let obj4 = JSON.stringify(obj1)//제이슨 형태로 바꿈: (obj1)마우스 올려보면 알수있음
obj1 = {
  id: 1,
  name: "둘리",
  etc: { addr: "대구" }, // 참조형 데이터 { addr: "대구", test: { key1: "val1" }
};
let obj4 = JSON.parse(JSON.stringify(obj1)); //obj4에 딥가피가 됨 //제이슨으로 만들건 제이슨안에 한번더 넣음
obj4.name = "또치";
obj4.etc.addr = "서울";
console.log(obj1.name, obj4.name, obj1.etc.addr, obj4.etc.addr);

const obj5 = { id: 2 };
obj5.id = 3;
const num5 = 1;
num5 = 2;
