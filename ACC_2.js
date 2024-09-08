const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function canSegmentString(s, dictionary) {
    const wordSet = new Set(dictionary);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length] ? 1 : 0;
}

function getInputAndCheckSegmentation() {
    rl.question('Enter the number of words in dictionary: ', (n) => {
        rl.question('Enter the string to be segmented: ', (s) => {
            rl.question('Enter the dictionary words separated by spaces: ', (dictionaryInput) => {
                const dictionary = dictionaryInput.split(' ');

                const result = canSegmentString(s, dictionary);
                console.log(result);

                rl.close();
            });
        });
    });
}

getInputAndCheckSegmentation();
