//11. Write a program with javascript that can truncate a variable to a maximum length of 20 characters.


// let yourInformation = `Hello, My name is Rahib, I am a University Student. Currently i am learning JavaScript.`
// let truncate = yourInformation.slice(0, 20)
// console.log(truncate)

// 12. Write a program that takes a string and returns the number of words in it.

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length)

// 13. Write a JavaScript program that takes a number as input and rounds it to two decimal places. For example, if the input is 3.14159, the function should return 3.14.

// let x = 3.14159
// let ans = x.toFixed(2)
// console.log(ans)

// 14. Declare variables considering a student first name, last name, age and result. And print all of this  within given format:
// Name: John Doe,
// Age: 23,
// GPA: 4.75,
// Note: you must store the output in a separate variable. text = "Hello".concat(" ", "World!");

// let firstName = "John"
// let lastName = "Doe"
// let age = 23;
// let gpa = 4.75;

// let info = `Name: ${firstName} ${lastName}
// Age: ${age}
// GPA: ${gpa}
// `

// console.log(info)

// 15. Write a program that takes a user-entered string containing a numeric float value and converts it to an integer.

// let x = 5.2777
// let ans = x.toFixed(0)
// console.log(ans)

// 16. Write a program that validates user input to ensure it's a valid number.

// let x = "999"
// let ans = isNaN(x)

// console.log(ans)

// 17. Create a program that prompts the user for a string containing a decimal number and converts it to a floating-point number.

// let x = "hello 23"

//  Write a JavaScript program that can check if a string contains the given value. 
		// Example:
        // var myText = ‘The quick brown fox has jumped’
        // var myInput = ‘Fox’
        // Now check if myText variable contains myInput or not.

// let myText = "The quick brown fox has jumped"     

// 19. Imagine you have an employee ID of 8 digits. The first employee ID is 00000001. If you can declare a variable with the number value: 199 how can you make it total 8 digits by adding an additional 0 at the beginning? Think and try to use string methods.
// let text = "199";
// let padded = text.padStart(10,"0");
// console.log(padded)

// 20. Develop a JavaScript program that generates an email template. The template should include placeholders for the recipient's name, sender's name, and a custom message
let reciptName = "Jhone Doe"
let senderName = "Joe Biden"
let message = "Hello, How Are you."
let email = `Recipient's Name ${reciptName}
Sender Name: ${senderName}
Message:
${message}`
console.log(email)



