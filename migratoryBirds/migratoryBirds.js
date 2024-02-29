'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let array = [...arr].sort((a, b) => a - b)

    let num = array[0]
    let count = 0
    
    
    while (array.length > 0) {
        let currNum = array.shift()
        
        let currCount = 0
        
        for (let i = 0; i < array.length; i++) {
            if (currNum === array[i]) {
                currCount++;
            }
        }
        
        if (currCount > count && currNum !== num) {
            num = currNum;
            count = currCount;
        }
    

    }
    
    return num;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
