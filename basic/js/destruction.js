//구조분해할당시 원본 배열을 훼손하지않음 rest는 항상 마지막에 해야함.
const nums = [1, 2, 3, 4, 5];
const newNums = [...nums]; //let [...ccc] = nums;와 같은내용
let [...ccc] = nums; // nums를 분해한뒤 ccc에 배열 할당 nums와 메모리상의 다른 주솟값을 가짐
nums.push(6);
console.log(nums);
console.log(ccc);
let [a, b, ...rest] = nums; // nums의 배열을 구조분해한뒤 각각을 순서대로 할당한뒤 나머지를 rest에 배열 할당한다.
console.log(rest);
let aa = 10;
let bb = 20;
[bb, aa] = [aa, bb]; // 새로운변수c를 만들필요없이 변수2개를 배열로만든후 분해해서 bb에 aa를 할당,aa에bb를할당.
console.log(aa, bb);
// let [, , c, , e] = nums; // nums의 배열을 구조분해한뒤 각각을 순서대로 할당한다. 결과 = c=3 e=5
// console.log(c, e);
// let [a, b, c, d, e] = nums; //nums의 배열을 구조분해한뒤 각각을 변수로 할당하겠다. 결과 a=1 b=2 c=3 d=4 e=5
// let oldA = nums[0] //예전에 구조분해 할당 하던방법
// let oldB = nums[1] //예전에 구조분해 할당 하던방법
// console.log(a, b, c);
