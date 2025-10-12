function performOperation() {
  // Get user input from input fields
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let result = multiply(num1, num2);
    let result2 = add(num1, num2);
    let result3 = sub(num1, num2);
    let result4 = div(num1, num2);

    // Display the result
    displayResult(result,result2,result3,result4);
   
  } else {
    displayResult("Please enter valid numbers");
  }
}

function multiply(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a * b;
}

function add(a, b) {
  debugger;

  return a + b;
}
function sub(a, b) {
  debugger;

  return a - b;
}
function div(a, b) {
  debugger;

  return a / b;
}

function displayResult(result, result2,result3,result4) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<p>The result of multiplication is: ${result} <br>
  The result of Addition is: ${result2} <br> The result of Subtraction is: ${result3} <br> The result of Division is: ${result4}</p>`;

}
