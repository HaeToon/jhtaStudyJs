//중복방지
//숫자나열후에 랜덤하게뽑기
//1~45 섞어놓고 앞에서 6장 뽑기

const nums = [];
let i;
for (i = 0; i < 45; i = i + 1) {
  // console.log(i);
  nums[i] = i + 1;
}
// console.log("for문 빠져나왔음");
for (let j = 0; j < 6; j++) {
  console.log(nums.splice(Math.floor(Math.random() * nums.length), 1).pop());
}
// for (let j = 0; j < 6; j++) { //위 또는 아래
//   console.log(nums.splice(Math.floor(Math.random() * (45 - j)), 1));
// }

// console.log(nums.splice(Math.floor(Math.random() * 44), 1));
// console.log(nums.splice(Math.floor(Math.random() * 43), 1));
// console.log(nums.splice(Math.floor(Math.random() * 42), 1));
// console.log(nums.splice(Math.floor(Math.random() * 41), 1));
// console.log(nums.splice(Math.floor(Math.random() * 40), 1));
console.log(nums);
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);
// console.log(nums[Math.floor(Math.random() * 45)]);

// mutable 변하는것 immutable 변하지않는것
const animals = ["tiger", "cat", "lion", "bear"];
// const selected = ["tiger"];
console.log(animals.splice(0, 1).pop());

// console.log(animals.shift()); //shift = 앞에서 뽑기 배열에 영향을 미치므로 조심해야함
// console.log(animals);
// console.log(animals.pop()); //pop = 뒤에서 뽑기
// console.log(animals);
// animals.push("dog"); //배열의 뒤에 값 추가 배열에 영향을 미침 배열의 순번이 변하지않음
// animals.unshift("frog"); //배열의 앞에 값 추가 배열에 영향을 미침 배열의 순번이 변함
// console.log(animals.splice(1, 2)); //splice 원하는 자릿수에서 뽑을때 사용 배열에 영향을 미침
// console.log(animals);
// console.log(nums.splice(1, 1)); //splice 원하는 자릿수에서 뽑을때 사용 배열에 영향을 미침
// console.log(nums.splice(1, 1)); //splice 원하는 자릿수에서 뽑을때 사용 배열에 영향을 미침
console.log(nums.splice(1, 4)); //splice 원하는 자릿수에서 뽑을때 사용 배열에 영향을 미침
// console.log(nums);

// console.log(Math.floor(Math.random() * 45 + 1));
