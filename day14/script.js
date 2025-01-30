//function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Masha"));

//Arrow Function
const greet1 = (name) => "Hello" + name;
console.log(greet("Masha"));

//Array Iteration
let array = [1, 3, 4].forEach((element) => console.log(element));

let doubled = [1, 2, 3].map((x) => x * 2);
console.log(doubled);

let even = [1, 2, 3, 4, 78, 23, 45, 56, 78, 89].filter((x) => x % 2 == 0);
console.log(even);

// let odd = [1, 2, 3, 4, 78, 23, 45, 56, 78, 89].filter((x) => x % 2 !== 0);
// console.log(odd);

let odd = [1, 2, 3, 4, 78, 23, 45, 56, 78, 89].filter(
  (x) => x % 2 !== 0 && x >= 10
);
console.log(odd);

//1345=13;

let number = [1, 3, 4, 5];
let sum = 0;
number.forEach((x) => (sum += x));
//1=>sum+=x=>sum=sum+x=>0+1=>1
// sum+=x=>sum=sum+x =>1=1+3=4
// 4=4+5=13
console.log(sum);

let sum1 = number.reduce((total, x) => (total += x));
console.log(sum1);

//some
let age = number.some((x) => x % 2 !== 0);
console.log(age);

//spread(...)
const arr1 = [9, 7, 6];
const arr2 = [5, 6, 8];
const newArray = [arr1, arr2];
console.log(newArray);

const spreadA = [...arr1, ...arr2];
console.log(spreadA);

