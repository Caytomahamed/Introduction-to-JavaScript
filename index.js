/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up!🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*
Task 1 - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

*/

 const votinAge = 18 

if (votinAge <= 18){
   console.log(true)
}


/*
Task 2 - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

*/
 let num = 10
num = 22 

if ( num >18) {
   console.log(num)
   
}else{
   console.log(num)
}

/*
Task 3 - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/
const number = '1999'
console.log(parseInt(number))


/*
Task 4 - Mood Checker

Do the following:   
   1. Write a script that prompts the user for their current mood. 
   2. If the user inputs happy, print 'Yay me too!' to the console, sad print 'Aw cheer up',
   3. Else just print 'So moody!'

*/
var person = prompt("Please enter your mood");
const b1 = "happy"
const b2 ="sad"
if (person == b1) {
   console.log('yay me too')  
}else if ( person == b2) {
   console.log('Aw cheer up')
}else {
   console.log('So moody!')
}

/*


Task 5 - Odd or Even

Use conditionals to check if a hardcoded number is odd or even, and then console.log the number is odd or even with the numbers value.

jh*/

// var num; // write a number here
const testNum = 17;

// // write your conditions here
if (testNumber = 0) {
   console.log('even')
} else {
   console.log('odd')
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 FIZZBUZZ 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*

You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. 
It is a favorite for interviewers, and a shocking number of job-applicants can't get it right. 
But you won't be one of those people. Here are the rules for the assignment:

Write a program that prints the numbers from 1 to 100.

But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".

For numbers which are multiples of both three and five print "FizzBuzz".

The one hint you'll likely need is:

There is a Javascript operator called "remainder" but often referred to as "modulus" or "modulo". 
It is represented by the percentage sign (%) and it gives you the remainder left over after division. So for example:

 6 % 3

Equals zero. Because after dividing 6 by 3, there is zero leftover. Whereas:

6 % 4

Equals 2. Because after dividing 6 by 4, there are 2 left over from the six.

If that was confusing, don't worry. It will make more sense as you use it. 
The point is: the remainder operator is useful for finding out if X is a multiple of Y. If it is, then X % Y will yield zero. 
Knowing this should help you complete this assignment without any issue.


Extra Credit:

Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime". 
You should print this whenever you encounter a number that is prime (divisible only by itself and one).
As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. 
It's okay for it to be slow.


*/
for ( let i = 1; i < 100; i++ ) {
  
        console.log(i);

        if (i%3 === 0) {
         console.log('fizz');
        } 
         else if (i%5 === 0) {
         console.log('buzz');
        }
        if (i%3 === 0 && i%5=== 0)  {
         console.log('fizzbuzz');
        }
        else
        console.log(i);
        }
        
        





/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study next week's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}
