/* Basic arithmetic
  let name1 = "Kennedy";
  let name2 = "Oduor";
  // Use template literals (``) to join strings
  let statement = `My name is ${name1} ${name2}`;
  console.log(statement);
*/

// Implement above code using in a function declaration
function personName(name1, name2) {
  let statement = `My name is ${name1} ${name2}`;
  console.log(statement);
}
// Call or invoke the function
personName("Dorothy", "Akoth");

// Function expression
const addNums = function(num1, num2) {
  return num1 + num2;
}
// Invoke the function expression above
let result = addNums(190, 10);
console.log(result);
