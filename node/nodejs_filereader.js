const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const filestream = fs.createReadStream('your-input-file.txt');
    const rl = readline.createInterface({
        input: filestream,
        crlfDelay: Infinity
    })
     
    for await (const line of rl) {
     // Define your code here. Will iterate over each line in your filestream. 
    }
}

processLineByLine();
