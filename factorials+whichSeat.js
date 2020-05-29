// Write a for (note: not a function) loop that prints out the // factorial of the number 12:

// A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

// 3! = 3 * 2 * 1 = 63!=3∗2∗1=6
// 4! = 4 * 3 * 2 * 1 = 244!=4∗3∗2∗1=24
// 5! = 5 * 4 * 3 * 2 * 1 = 1205!=5∗4∗3∗2∗1=120

let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution); 

// * Programming Quiz: Find my Seat (4-8)
// * 
// * Write a nested for loop to print out all of the different seat combinations in the theater.
// * The first row-seat combination should be 0-0 
// * The last row-seat combination will be 25-99
// * 
// * Things to note: 
// *  - the row and seat numbers start at 0, not 1
// *  - the highest seat number is 99, not 100
// */

/*
* QUIZ REQUIREMENTS
* - Your code should use a nested `for` loop'
* - Your code should produce the expected output, as explained above
*/

// Write your code here
for (var x = 0; x <= 25; x++) {
 for (var y = 0; y <= 99; y++) {
   console.log(x + "-" + y);
 }
}