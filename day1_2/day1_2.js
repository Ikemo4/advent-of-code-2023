const fs = require('fs');
const filePath = 'day1_2/input.txt';
let runningSum = 0;
const nums1thru10 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

// Read the file asynchronously
async function getSum() {
    await fs.readFile(filePath, 'utf8', (err, data) => {
        // Split the file contents into an array of lines
        const lines = data.split('\n');
        // Iterate through each line
        lines.forEach((line, index) => {
            let idxLeftDigit; // the position of the left digit/term
            let leftDigit; // the left digit if it's a number
            let idxLeftTerm; // the left digit if it's a term
            //it will only ever be leftDigit or leftTerm, neither should have a value at the same time
            
            //for terms "one" to "nine"
            nums1thru10.forEach((term, idx) => {
                //find index of first term from left
                const termIdx = line.indexOf(term);
                //if term occurs before previous leftmost term, replace idxLeftDigit
                if (termIdx > 0 && (termIdx < idxLeftDigit || !idxLeftDigit)) {
                    idxLeftDigit = termIdx;
                    idxLeftTerm = idx;
                }
            })
            //find index of first number from left
            const leftIdx = line.indexOf(line.match(/\d/)?.[0]);
            //if number occurs before term, replace idxLeftDigit
            if (leftIdx < idxLeftDigit || !idxLeftDigit) {
                idxLeftDigit = leftIdx;
                leftDigit = line[leftIdx];
                idxLeftTerm = null;
            }

            let idxRightDigit;
            let rightDigit;
            let idxRightTerm;
            nums1thru10.forEach((term, idx) => {
                const index = line.lastIndexOf(term);
                if (index > idxRightDigit || !idxRightDigit) {
                    idxRightTerm = idx;
                    idxRightDigit = index;
                }
            })
            const numOnlyStr = line.replace(/[A-Za-z]/g, "");
            const rightIdx = line.lastIndexOf(numOnlyStr[numOnlyStr.length - 1]);
            if (rightIdx > 0 && (rightIdx > idxRightDigit || !idxRightDigit)) {
                rightDigit = line[rightIdx];
                idxRightDigit = rightIdx;
                idxRightTerm = null;
            }

            const numAsStr = String((idxLeftTerm !== null | undefined ? idxLeftTerm + 1 : leftDigit) + '' + (idxRightTerm !== null | undefined ? idxRightTerm + 1 : rightDigit));
            const sum = Number(numAsStr);
            // if (newStr.length > 1) {
            //     num = newStr[0] + newStr[newStr.length - 1];
            //     sum = Number(num)
            // } else if (newStr) {
            //     num = newStr[0] + newStr[0];
            //     sum = Number(num);
            // }
            runningSum += sum
            // if (index < 5) {console.log(line, ' ', sum)}
            // if (index > 5 && index < 10) {
            //     console.log('num: ', numAsStr);
            //     console.log('sum: ', sum);
            //     console.log('running sum: ', runningSum);
            //     console.log('line: ', line, 'left: ', idxLeftTerm, leftDigit, 'right: ', idxRightTerm, rightDigit)
            // }
            if (isNaN(runningSum)) {
                console.log('index: ', index);
                console.log('num: ', numAsStr);
                console.log('sum: ', sum);
            }
        });
        console.log('total: ', runningSum);
    });
}
getSum();
