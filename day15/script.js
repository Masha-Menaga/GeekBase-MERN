//object
let person = {
  name: "Masha",
  age: 30,
  iEmployed: "true",
};
console.log(person);
console.log(person.age);
console.log(person["age"]);

person.skills = "JS";
console.log(person);
person.location = "Trichy";
console.log(person);

//object Methods
let person1 = {
  name: "Tharun",
  greet: function () {
    return "Hello " + this.name;
  },
};
console.log(person1.greet());

let person2 = {
  name: "Sanjay",
  welcome() {
    return "Hello " + this.name;
  },
};
console.log(person2.welcome());

//Object Iteration
//for ...in loop
let person4 = {
  name: "Masha",
  age: 30,
  isEmployed: "true",
};
for (let key in person4) {
  console.log(key, person4[key]);
}

//Object.keys()
console.log(Object.keys(person4));
//Object.values()
console.log(Object.values(person4));
//Object.enteries()
console.log(Object.entries(person4));

//Timer
setTimeout(() => {
  console.log("This Message is Appear After 3 seconds");
}, 3000);
//clearTimeout
let TimeoutId = setTimeout(() => console.log("Wont Appear"), 4000);
clearTimeout(TimeoutId);

//setInterval
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  if (count == 5) clearInterval(intervalId);
}, 2000);
