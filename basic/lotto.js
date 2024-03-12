// let aa = 10;
// let bb = aa;
// aa = 100;
// console.log(bb);

// const nums = []; //object는 주소만가리킴
// const numsCopy = nums; //shallow copy 얕은 복사 주소값만 복사 , deep copy 완전히 두개가 분리가됨
// nums[0] = 1;
// nums[1] = 2;
// nums[2] = 3;
// numsCopy[2] = 100;
// console.log(nums);
// console.log(numsCopy);

const nums = [];
for (let i = 0; i < 45; i++) {
  // nums[i] = i + 1;
  nums.push(i + 1); //뒤에서부터 밀어넣기 = 순서대로 1~45
  // nums.unshift(i + 1); //앞에서부터 밀어넣기 = 역순으로 45~1
}
const selectedNums = [];
for (let i = 0; i < 6; i++) {
  selectedNums.push(
    nums.splice(Math.floor(Math.random() * nums.length), 1).pop()
  );
}
console.log(selectedNums);
