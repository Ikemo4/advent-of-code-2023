const fs = require('fs');
const filePath = 'day2_1/input.txt';

// Read the file asynchronously
async function getPossibleGames() {
    await fs.readFile(filePath, 'utf8', (err, data) => {
        // Split the file contents into an array of lines
        const lines = data.split('\n');

        let sumOfIndices = 0;
        lines.forEach((line, lineIndex) => {
            const games = line.split(';');
            let valid;
            games.forEach((game) => {
                const color_counts = game.split(',');
                valid = true;
                color_counts.forEach((color_count) => {
                    if (valid) {
                        const [count, color] = color_count.trim().split(' ');
                        countInt = parseInt(count, 10)
                        console.log(countInt, color)
                        if (color === 'blue' && countInt > 14) {
                            valid = false;
                        } else if (color === 'green' && countInt > 13) {
                            valid = false;
                        } else if (color === 'red' && countInt > 12) {
                            valid = false;
                        } else {
                            if (isNaN(parseInt(color))) {
                                console.log('true');
                                valid = true;
                            } else {
                                console.log('false');
                                valid = false
                            }
                        }
                        console.log(valid);
                    } else {
                        return
                    }
                })
            })
            if (valid) { 
                sumOfIndices += lineIndex 
                console.log('index: ', lineIndex);
            }
        })
        console.log(sumOfIndices);
    })
}

getPossibleGames();