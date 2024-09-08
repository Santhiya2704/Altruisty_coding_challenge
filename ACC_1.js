const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTwoSingleNumbers(arr) {
    let xor_all = 0;
    arr.forEach(num => xor_all ^= num);

    let rightmost_set_bit = xor_all & -xor_all;

    let num1 = 0;
    let num2 = 0;
    arr.forEach(num => {
        if (num & rightmost_set_bit) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    });

    return [num1, num2].sort((a, b) => a - b);
}

function getInputAndFindNumbers() {
    rl.question('Enter value of N: ', (N) => {
        N = parseInt(N, 10);

        rl.question(`Enter ${2 * N + 2} numbers separated by spaces: `, (input) => {
            const arr = input.split(' ').map(Number);

            if (arr.length !== 2 * N + 2) {
                console.log(`Error: You must enter exactly ${2 * N + 2} numbers.`);
                rl.close();
                return;
            }

            const result = findTwoSingleNumbers(arr);
            console.log(`The two distinct numbers are: ${result[0]} ${result[1]}`);

            rl.close();
        });
    });
}

getInputAndFindNumbers();


    
