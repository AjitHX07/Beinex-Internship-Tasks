const ages = [10, 2, 3, 4, 5, 9, 6, 1]

//1) write a function  that returns an array of prime numbers from the input array?
let primeArr = []
const primeNumberFinder = () => {
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 2) {

            let isprime = true;

            for (let j = 2; j < Math.sqrt(ages[j]); j++) {
                if (ages[i] % j === 0) {
                    console.log(ages[i]);
                    isprime = false
                    break;
                }
            }
            if (isprime = true) {
                primeArr.push(ages[i])
            }
        }
    }
    return primeArr
}

console.log(primeNumberFinder());



// 2) Write a function that filters out even numbers and doubles the remaining ones using filter() and map().


const marks = [0.8, 1, 2, 3, 4.7, 4, 5, 6, 7, 3.8986,]

function doubleOddNumbers() {
    return marks
        .filter(num => num % 2 !== 0) // Filter  even numbers 
        .map(num => num * 2); // Double the remaining numbers
}

console.log(doubleOddNumbers());




// 3) Write a function that merges two objects into a new object using the spread operator?

person1 = {
    name: 'ajith', age: 23, role: 'SDE1'
}

person2 = {
    name: 'jithin', age: 25, role: 'SDE2'
}

const mergeObj = () => {
    person3 = {
        person1: { ...person1 }, person2: { ...person2 }
    }

    return person3
}
// console.log(mergeObj());




// 4) Write a function that calculates the sum of even numbers using filter() and reduce() ?

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = () => {
    return numbers
        .filter(num => num % 2 === 0) // Filter out even numbers
        .reduce((acc, current) => acc + current, 0); // Sum the even numbers
};

// console.log(sumOfEvenNumbers());



// 5) Write a function that finds the maximum number in an array  Use a for loop to compare each element ?

// const numbers = [3, 5, 7, 2, 8, 1, 4];

const findMaxNumber = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max; // Return the maximum number 
};

console.log(findMaxNumber(numbers));



// 6) Write a function that returns an array of common elements between two arrays ?

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const findCommonElements = (arr1, arr2) => {
    return arr1.filter(element => arr2.includes(element)); // Filter elements that are present in both arrays
};

console.log(findCommonElements(array1, array2)); 
