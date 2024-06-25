//Write a program that declares a variable price as a number, product as a string, and isAvailable as a boolean. 
//Print their data types to the console.
let price = 100;
let product = "Laptop";
let isAvailable = true;

console.log(typeof price);      
console.log(typeof product);   
console.log(typeof isAvailable);

// Write a program that declares an array of numbers and a constant object representing a car with properties make, model, and year. 
//Modify one of the properties of the object and print the updated object to the console.
let numbers = [10, 20, 30, 40, 50];

const car = { make: "Mazda", model: "Demio", year:  "2016"
};
//modify an element 'model'
car.model = "cx-9"
console.log(car);

//Write a program that compares two variables a and b using both == and ===. 
//Print the result of each comparison to the console and explain the difference.
let a = 5;
let b = "5";

console.log(a == b);     
console.log(a === b);    
console.log('This comparison checks for equality of values and ignores operator');
console.log('This comparison checks for equality of values and ignores operator');

//Write a program that checks if a string str1 is lexicographically smaller than another string str2. 
//Print the result to the console.
let str1 = "Welcome Home";
let str2 = "Enjoy your stay";
console.log(str1 < str2); 

//Write a program that takes a variable age and prints "Child" if the age is less than 13, 
//"Teenager" if the age is between 13 and 19, and "Adult" if the age is 20 or older.

let age = 15;

if(age < 13){
    console.log("Child");
}else if(age >=13 && age<=19){
    console.log("Teenager");
}else{
    console.log("Adult");
}

/*Write a program that takes a variable score and prints a grade based on the following criteria: SWICH STATEMENTS
> A for scores 90 and above
> B for scores between 80 and 89
> C for scores between 70 and 79
> D for scores between 60 and 69
> F for scores below 60*/

let score = 30;
if(score >=90){
    console.log('A');
}else if(score >=80){
    console.log('B');
}else if(score >=70){
    console.log('C');
}else if(score >=60){
    console.log('D');
}else {
    console.log('F');
}


//Write a program that checks if a given number num is both positive and even. 
//Print "The number is positive and even" if both conditions are true, otherwise print "The number does not meet both conditions".
let num = 13;

if (num > 0 && num % 2 === 0) {
    console.log("The number is positive and even");
} else {
    console.log("The number does not meet both conditions");
}

//Write a program that checks if a user is either an admin or has a valid subscription.
// If either condition is true, print "Access granted", otherwise print "Access denied".

// let user = "user";
// let subscription = "valid";
// if(user == "admin" || subscription =="valid"){
//     console.log('Access granted');
// }else{
//     console.log("Access denied")
// }
            //OR//
let isAdmin = false;
let hasValidSubscription = true;

if (isAdmin || hasValidSubscription) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
//Write a program that uses a for loop to print all the numbers from 1 to 20, but skips multiples of 3.
// i = index as in loops, we manipulate indices from 0
for(let i = 1; i <=20; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}

//Write a program that uses a switch statement to print the day of the week 
//based on a variable dayNumber (0 for Sunday, 1 for Monday, etc.).

let dayNumber = 4;

switch (dayNumber) {
    case 0:
        console.log("Sunday");
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday"); 
    default:
        day = "Invalid day number";
}

console.log(day);


// Write a program that uses a while loop to calculate and print the sum of all integers
// from 1 to n, where n is a variable.
let n = 30;
let sum = 0;
let i = 1;

while (i <= n) {
    sum += i;
    i++;
}

console.log("Sum:", sum);