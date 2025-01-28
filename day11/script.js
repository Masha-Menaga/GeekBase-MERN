console.log("Hi");

for (let i = 0; i < 5; i++) {
  console.log(i);
}
//i=0 0<5 0+1=1
//i=1   1<5 1+1=2
//i=2 2<5 2+1

let m = 1;
let n = 10;
while (m <= n) {
  console.log(m);
  let j = 2;
  m += j; //m++ m+1
}
// 1<=10 1  m+1=2
// 2<=10 2  m++=3
// 3<=10

//m=1 1<=10 1   1+=2 3
//m=3   3<=10   3+=2    5
//m=5   5<=10   5+=2    7
//m=7   7<=10   7+=2    9
//m=9   9<=10   7+=2    11

// do-while

let x = 2;
let y = 10;
do {
  console.log(x);
  x++;
} while (x <= y);

// x=2
//2   x++=3

// for in loop
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key + ":" + obj[key]);
}
// a 1
// b 2

//for of loop
let arr = [10, 20, 30, 40, 50, 60];
for (let value of arr) {
  console.log(value);
}

//function
function add(m, n) {
  let sum = m + n;
  console.log("Sum of " + m, n + "=" + sum);
  console.log(`sum of ${m}  ${n} = ${sum}`);
}
function add() {
  //
}
add(20, 5);

function greet(name) {
  console.log(`Hi ${name} !`);
}
greet("Masha");

// String
let Name = "Mashaaasa";
console.log(Name);

CharAt(index); //
console.log(Name.charAt(1));

console.log(Name.charAt(2));

console.log(Name.at(2));

Name[4] = "b";
console.log(Name);

let newStr = Name.replace("a", "A");
console.log(newStr);
console.log(Name);
console.log(Name.replaceAll("a", "A"));

console.log(Name.substring(3));
console.log(Name.substring(3, 5)); //5-1
console.log(Name);
console.log(Name.slice(-7, -3));
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

let str = "Jaishree";
let str1 = "Menaga";
console.log(str + str1);
console.log(str.concat(" Masha", " Menaga"));

let Name2 = "  Masha  ";
console.log(Name2);
console.log(Name2.trim());
