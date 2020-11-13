console.log('---');
console.log('Task 2: ');

let arrHeight1 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
let arrHeight2 = [3, 4, 4, 5, 3, 4, 0, 3, 6, 1, 4];


function needToFillTheCells(arrHeight) {
    let length = arrHeight.length;
    let stock = 0;


    for (let i = 0; i < length; i++) {

        let left = arrHeight[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, arrHeight[j]);
        }

        let right = arrHeight[i];
        for (let j = i; j < length; j++) {
            right = Math.max(right, arrHeight[j]);
        }
        stock += Math.min(left, right) - arrHeight[i];
    }
    return stock;
}

console.log('Array 1: ' + needToFillTheCells(arrHeight1, length));

console.log('Array 2: ' + needToFillTheCells(arrHeight2, length));
