const fs = require('fs');
const filePath = 'input.txt';
let runningSum = 0;
const nums1thru10 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// Read the file asynchronously
async function getSum() {
    await fs.readFile(filePath, 'utf8', (err, data) => {
        // Split the file contents into an array of lines
        const lines = data.split('\n');
        // Iterate through each line
        lines.forEach((line, index) => {
            let leftDigit = 0;
            nums1thru10.forEach((term) => {
                const index = line.indexOf()
            })
            const newStr = line.replace(/[A-Za-z]/g, "");
            let sum = 0
            if (newStr.length > 1) {
                num = newStr[0] + newStr[newStr.length - 1];
                sum = Number(num)
            } else if (newStr) {
                num = newStr[0] + newStr[0];
                sum = Number(num);
            }
            runningSum += sum
        });
        console.log(runningSum);
    });
}
getSum();