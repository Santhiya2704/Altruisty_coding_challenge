const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isSteppingNumber(num) {
    const digits = num.toString().split('').map(Number);
    for (let i = 1; i < digits.length; i++) {
        if (Math.abs(digits[i] - digits[i - 1]) !== 1) {
            return false;
        }
    }
    return true;
}

function findSteppingNumbers(N, M) {
    const result = [];
    for (let num = N; num <= M; num++) {
        if (isSteppingNumber(num)) {
            result.push(num);
        }
    }
    return result;
}

function getInputAndFindSteppingNumbers() {
    rl.question('Enter two numbers N and M separated by a space: ', (input) => {
        const [N, M] = input.split(' ').map(Number);

        if (N < 0 || M > 1000000000 || N >= M) {
            console.log('Invalid input. Ensure 0 <= N < M <= 1,000,000,000');
            rl.close();
            return;
        }

        const steppingNumbers = findSteppingNumbers(N, M);
        console.log(steppingNumbers.join(' '));

        rl.close();
    });
}

getInputAndFindSteppingNumbers();
