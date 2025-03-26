// You just need to implement the calculator function
function calculator(num1, num2, operator) {
    let result;
    switch (operator){
      case "+":
      result = num1+num2;
      break;
      case "-":
      result = num1-num2;
      break;
      case "*" :
      result = num1*num2;
      break;
      case "/":
          if (num2 === 0) {
          return "Error: Division by zero";
        }
        result = num1 / num2;
        break;
      default:
        return "Error: Invalid operator";
    }
    
    return result;
    // Perform basic arithmetic operations using switch case
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { num1, num2, operator } = JSON.parse(input);
    const result = calculator(num1, num2, operator);
    process.stdout.write(JSON.stringify(result));
  });