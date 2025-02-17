//Error Handling
try {
  //code that may throw an error
} catch (error) {
  //code to handle error
} finally {
  //Run always , even if no errors occurs
}

try {
  throw new Error("Something went Wrong");
} catch (err) {
  console.log("caught error", err.message);
} finally {
  console.log("Finally Block Executed...");
}

function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18");
  }
  return "valid age";
}
try {
  console.log(checkAge(16));
} catch (error) {
  console.log(error.message);
  alert("age must be 18");
}
