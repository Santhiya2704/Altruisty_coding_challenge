const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getMaxDiscount(ticket, k) {
    let result = '';
    const stack = [];

    for (let i = 0; i < ticket.length; i++) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > ticket[i]) {
            stack.pop();
            k--;
        }
        stack.push(ticket[i]);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    result = stack.join('');
    
    return result === '' ? '0' : result;
}

function getInputAndProcess() {
    rl.question('Enter the ticket price: ', (ticket) => {
        rl.question('Enter the number of digits to remove: ', (k) => {
            const result = getMaxDiscount(ticket, parseInt(k, 10));
            console.log(result);

            rl.close();
        });
    });
}

getInputAndProcess();
