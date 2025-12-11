// variables
let var1;
let var2;
let num1;
let num2;
let Finalnum;
// user input
do {
  var1 = prompt("Enter a number between 20 and 30");
  num1 = parseInt(var1);
  //checks and alerts user if your number isn't between 20 and 30
  if (Number.isNaN(num1) || num1 < 20 || num1 > 30) {
    alert("This number isn't between 20 and 30. Try again!");
  }
  //while loop to do run code again if incorrect
} while (Number.isNaN(num1) || num1 < 20 || num1 > 30);

do {
  var2 = prompt("Enter a number between 60 and 70");
  num2 = parseInt(var2);
  //checks and alerts user if your number isn't between 60 and 70
} while (Number.isNaN(num2) || num2 < 60 || num2 > 70);
//Multiplies user input for final number
Finalnum = num1 * num2;
//checks if final num is even or odd and divides by 2 with remainder to check
if (Finalnum % 2 == 0) {
  alert("Your answer is even and is: " + Finalnum);
} else {
  alert("Your answer is odd and is: " + Finalnum);
}
