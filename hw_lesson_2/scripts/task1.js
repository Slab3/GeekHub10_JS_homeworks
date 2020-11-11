let arr = [1, 7, 3, -5, NaN, 4, undefined, -12, 77];

// === === === === === max === === === === === методом:
// в случае когда у нас в масиве есть элеметы которые не являются числами, метод не может
// определить max/min.

// let max_meth = Math.max(...arr);
// console.log('max методом: ' + max_meth);

// === === === max циклом:

let max = getMaxOfArray(arr);

function getMaxOfArray(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log('max value: ' + max);


// === === === === === min === === === === === методом:

// let min_meth = Math.min(...arr);
// console.log('min методом: ' + min_meth);

// === === === min циклом:

let min = getMinOfArray(arr);

function getMinOfArray(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log('min value: ' + min);


// === === === === === sum === === === === ===

let result = 0;

for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}
console.log('sum: ' + result);
