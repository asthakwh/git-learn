const name = "Alice";
const age = 30;
const city = "New York";
function sayHello() {
  console.log("Hello, " + name + "!");
}
console.log(name);
console.log(city);
sayHello();

function add(a, b) {
  return a + b;
}
const sum = add(5, 10);
console.log("The sum is: " + sum);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers: " + doubledNumbers.join(", "));
