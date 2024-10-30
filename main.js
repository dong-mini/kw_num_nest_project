const lib = require('./lib');

let command = process.argv[2];
let numbers = process.argv.slice(3).map((n) => parseFloat(n));
let result;

switch (command) {
    case 'avg':
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        result = sum / numbers.length;

        break;

    case 'prime':
        result = lib.prime(numbers[0]);
        break;

    case 'factorial':
        result = lib.factorial(numbers[0]);
        break;

    default:
        console.log('Wrong command!');
        process.exit(1);
}

console.log(result);