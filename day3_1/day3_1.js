const fs = require('fs');
const filePath = 'day3_1/input.txt';

// Read the file asynchronously
async function getPartNumbers() {
    await fs.readFile(filePath, 'utf8', (err, data) => {
        // Split the file contents into an array of lines
        const lines = data.split('\n');
        let validPartNums = [];

        lines.forEach((line, linesIndex) => {
            let firstIdxOfNumChar = -1;
            let positionsWithNums = {};
            let positionsWithSpecialChar = [];
            let lineArray = Array.from(line);
            lineArray.forEach((char, lineIndex) => {
                if (isNaN(parseInt(char))) {
                    firstIdxOfNumChar = -1;
                    if (char !== '.') {
                        positionsWithSpecialChar.push(lineIndex);
                    }
                } else {
                    if (firstIdxOfNumChar >= 0) {
                        // { beginningOfCurrentNumber : line[beginningOfCurrentNumber] -> line[currentIndex]}
                        positionsWithNums[firstIdxOfNumChar] =  lineArray.slice(firstIdxOfNumChar, lineIndex + 1).join('')
                    } else {
                        firstIdxOfNumChar = lineIndex
                        positionsWithNums[firstIdxOfNumChar] = char
                    }
                }
            })
            positionsWithSpecialChar.forEach((pos) => {
                for (const [key, value] of Object.entries(positionsWithNums)) {
                    if (pos >= parseInt(key) - 1 && pos <= (parseInt(key) + parseInt(value.length) - 1)) {
                        validPartNums.push(parseInt(value));
                    }
                }
            })
        })
        const sum = validPartNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        console.log(sum);
    })
}

getPartNumbers();