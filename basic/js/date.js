const current = new Date(); //스크립트 내의 내장객체중 날짜관련
const yoil = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// 내장객체 Date
console.log(current);
const currentDay = current.getDay;
console.log(yoil[currentDay]);
const plusThree = function (num) {
  //f(x) = x+3
  return num + 3; //리턴이후는 없음
};
const jegop = function (num) {
  return num * num;
};
//어떤 수를 입력했을떄 나머지를 구해주는 함수
const mod = function (firstNum, secondNum) {
  return firstNum % secondNum;
};

const jjang = {
  name: "허태훈",
  age: 29,
  nickName: "태훈",
  isAdult: true,
};
const myNumerFunction = {
  plusThree: function (num) {
    return num + 3;
  },
  jegop: function (num) {
    return num * num;
  },
  mod: function (firstNum, secondNum) {
    return firstNum % secondNum;
  },
};
console.log(myNumerFunction["plusThree"](3));
// console.log(plusThree(3));
// console.log(jegop(15));
// console.log(mod(10, 5));
