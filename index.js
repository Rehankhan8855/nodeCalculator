// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function calculate(num1, operator, num2) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num2 !== 0 ? num1 / num2 : "cannot divide by zero";
//     default:
//       return "Invalid Operator";
//   }
// }
// console.log("Simple Calculator");
// console.log("Available Operation:+,-,*,/");

// const getInput = () => {
//   rl.question("Enter first number:", (num1) => {
//     rl.question("Enter Operato(+,-,*,/):", (operator) => {
//       rl.question("Enter Second number:", (num2) => {
//         const result = calculate(parseFloat(num1), operator, parseFloat(num2));
//         console.log(`Result,${result}`);

//         rl.question("Do you want to calculate again? (yes/no):", (answer) => {
//           if (answer.toLowerCase() === "yes") {
//             getInput();
//           } else {
//             rl.close();
//           }
//         });
//       });
//     });
//   });
// };

// getInput();

// rl.on("close", () => {
//   console.log("Calculator closed. Goodbye!");
//   process.exit(0);
// });







const express = require("express");
const app = express();
const port = 3000;

const route = require("./routes/index");

app.use("/", route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
