let number1 = 10;
console.log(++number1);
console.log(number1); //11

console.log(number1++);
console.log(number1); //11

let number = 1;
let number2 = 2;
let result = number + ++number2;
// let result = number-- + ++number2;
// let result = number + number2++;

const base = 2;
const pow = 3;
const result = base ** pow;
// const result = (-base) ** pow;
//const result = -(base ** pow);

let number1 = 10;
const number2 = 4;
number1 += number2;
number1 = number1 + number2;

number1 /= 3;
number1 = number1 / 3;

number1 *= number2;
number1 = number1 * number2;

number1 **= 2;
number1 = number1 ** 2;

number1 %= 5;
number1 = number1 % 5;

number--;
number1 = number1 - 1;