function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers) {
        console.log(number);
        sum += number;
    }
    return sum;
}

const nums = [1, 2, 3, 4, 5];
console.log(nums);
const sum = sumOfNumbers(nums);
console.log("Sum of numbers is: ", sum);

const min = Math.min(45, 32, 43,56);
console.log(min);
const max = Math.max(45, 32, 43, 56);
console.log(max);
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.abs(-45));
console.log(Math.round(2.323434324234));
console.log(Math.floor(2.9999999999));
console.log(Math.ceil(2.0000000000000001));
console.log(Math.random());

