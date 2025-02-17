//console.log("Masha"; //Syntax Error

// let a = 10;
// console.log(b); //- undefined value

// input 10
// output 20

// let num = 10;
// console.log(10 + 2); //12

// 10/0 =

try {
  let number = "masha";
  console.log(number * 2);
} catch (error) {
  console.log("Something went Wrong!", error.message);
}

try {
  let result = 10 / 0;
  throw new Error("Custom Error");
} catch (err) {
  console.log("Error occured:", err.message);
}

try {
  console.log("Trying Something...");
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Catched Error:", error.message);
} finally {
  console.log("Finally Blocke Executed");
}

function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be above 18");
  }
  return "valid age";
}
try {
  console.log(checkAge(16));
} catch (error) {
  console.log(error.message);
}
