// Split()

let str = "Good_evening_Everyone, Hi!";
console.log(str);
let arr = str.split(" ");
console.log(arr);
console.log(arr[1]);

//index of
console.log(str.indexOf("e"));
console.log(str.lastIndexOf("e"));

//includes
console.log(str.includes("Eve"));
console.log(str.startsWith("evening"));
console.log(str.endsWith("Hi!"));

//closure
function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

//Array

let a = 5;
str = "Masha";
let array = [10, 20, 30, 40, 50];
console.log(array);
array[2] = 35;
console.log(array);

//older
let array1 = new Array(20, 40, 60);
console.log(array1);
//newer
let array2 = [10, 20, 30, 40, 50];
console.log(array2);
array2[2] = array2[2] * 10;
console.log(array2);

array2.push("Masha");
console.log(array2);
array2.push(100);
console.log(array2);

array2.pop();
console.log(array2);

array2.shift();
console.log(array2);

array2.unshift(11);
console.log(array2);

let num1 = [1, 2, 3];
let num2 = [3, 4, 5];
let num3 = [5, 6, 7];
console.log(num1);
console.log(num2);
let total = num1.concat(num2, num3);
console.log(total);

let slicedArr = total.slice(4);
console.log(slicedArr);

console.log(total.indexOf(3));
console.log(total.lastIndexOf(3));
