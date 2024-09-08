function getMaxToys(prices, money) {
    let maxToys = 0;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < prices.length; end++) {
        currentSum += prices[end];

        while (currentSum > money) {
            currentSum -= prices[start];
            start++;
        }

        maxToys = Math.max(maxToys, end - start + 1);
    }

    return maxToys;
}

// Function to handle user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInputAndProcess() {
    rl.question('Enter the number of toys: ', (n) => {
        rl.question('Enter the prices of the toys separated by spaces: ', (pricesInput) => {
            rl.question('Enter the budget: ', (money) => {
                const prices = pricesInput.split(' ').map(Number);
                money = parseInt(money, 10);
                
                const result = getMaxToys(prices, money);
                console.log(result);
                
                rl.close();
            });
        });
    });
}

getInputAndProcess();
