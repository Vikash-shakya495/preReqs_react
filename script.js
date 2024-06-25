// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

// let arr = [1,2,3,4,5,6,7,8];
// arr.map((num)=>{
//     console.log(num*num);
// });

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// function getGrade(score){
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }

// console.log(getGrade(70));
// console.log(getGrade(90));

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// let car = {
//     company: 'Toyota',
//     model: 'Camry',
//     year: 2015
// }

// function changeYear(car, newYear){
//     car.year = newYear;
//     return car;
// }
// changeYear(car,2024);

// let {model, year} = car;
// console.log(`Model: ${model}, Year: ${year}`);


// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
// let prime_numbers = [];
// numbers.filter((num)=>{
//     if(isPrime(num)){
//         prime_numbers.push(num);
//     }
// });

// function isPrime(num){
//     if(num <= 1) return false;
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0) return false ;
//     }
//     return num;
// }

// console.log(prime_numbers);


//Q5 -  State different use cases of map, filter and reduce functions

// map use

// const celsius = [0, 20, 30];
// const fahrenheit = celsius.map(temp => temp * 9/5 + 32);
// console.log(fahrenheit);

// filter use

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 19 }
// ];
// const adults = users.filter(user => user.age > 18);
// console.log(adults); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 19 }]

// reduce function
//The reduce function is used to apply a function to an accumulator and each element in the array (from left to right) to reduce it to a single value.

// const num_arr = [1, 2, 3, 4, 5];
// const sum = num_arr.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 15


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
// just revising the concept of map, reduce and filter

// const getApiData = async ()=>{
//     const url = 'https://jsonplaceholder.typicode.com/todos';
//     const response = await fetch(url);
//     const data = await response.json();
//     const completedTasks = data.filter(task => task.completed === true);
//     const taskCount = completedTasks.reduce((acc, task) => acc + 1,
//     0);
//     console.log(taskCount);
// }

// getApiData();


// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
    name: 'Vikash',
    address: {
        street: '52 Divyalok Colony',
        city: 'Agra',
        state: 'UP',
        postalCode: '282007'
    },
    contact: {
        phone: 1234567890,
        email: 'vikash@example.com'
    }
};

console.log(person.contact?.phone);