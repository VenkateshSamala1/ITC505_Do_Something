"use strict";

function validateNumber() {
  // Get the value entered by the user
  var number = document.getElementById("number").value;

  // Check if the input is empty or not a number
  if (number === "" || isNaN(number)) {
    alert("Please enter a valid number!");
    return;
  }

  // Convert the input to a number
  number = parseFloat(number);
  let singleNumbers = Array.from(String(number), Number);
  console.log(singleNumbers);
  let factorial_sum = 0;
  for (let d of singleNumbers) {
    let f = 1;
    // Calculate the factorial of the digit
    for (let i = 1; i <= d; i++) {
      f *= i;
    }
    // Add the factorial to the sum
    factorial_sum += f;
  }
  // Check if the number is positive, negative, or zero
  if (factorial_sum == number) {
    alert("The Number is strong.");
  } else {
    alert("The Number is not strong.");
  }
}
