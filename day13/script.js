//Array
let array = [1, 2, 3, 4, 5, 6];
console.log(array);
let slicedArray = array.slice(2);
console.log(slicedArray);

let num = [20, 30, 4, 5, 7];
let splicedArr = num.slice(2);
console.log(splicedArr);

console.log(splicedArr.indexOf(5));
console.log(num.includes(30));

//array to string
let str = num.toString();
console.log(str);
console.log(num.join("_"));

//sorting
let number = [23, 45, 67, 12, 46, 89, 23, 11];
let sorting = number.sort();
console.log(sorting);

let str1 = ["Masha", "Tharun", "Ragul", "Jaishree"];
console.log(str1.sort());

let rev = str1.reverse();
console.log(rev);

//for loop in array
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}
//i=0; 0<8; 0++=1 = number[0]=11
//i=1; 1<8; 1++=2  =number[1]=12
// 8<8

for (let i = 0; i < number.length; i++) {
  console.log(number[i] * 10);
}

let numArray = [6, 78, 9];
let newArray = [];
for (let i = 0; i < numArray.length; i++) {
  newArray[i] = numArray[i];
}
console.log(newArray);
//i=0;0<3;i++=0++=1=newArray[0]=numArray[0] =newArray[0]=6
//1<3 =78
//2<3 =9
3 < 3;
for (let i = 0; i < num; i++) {
  newArray.push(numArray[i]);
}
console.log(newArray);
