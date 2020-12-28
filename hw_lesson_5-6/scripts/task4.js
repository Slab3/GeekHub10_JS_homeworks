// 1. isPrime
console.log('1. isPrime');

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(10000000000000));

//
// 2. factorial
console.log('2. factorial');

function factorial(num) {
    if (num != 1) {
        return num * factorial(num - 1)
    } else {
        return num = 1;
    }
}

console.log(factorial(5));

//
// 3. fib
console.log('3. fibonacci');

function fib(num) {

    if (num < 1) return 0;

    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(10));
console.log(fib(20));


//
// 4. isSorted
console.log('4. isSorted');

function isSorted(arr) {
    let sorted = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            sorted = false;
        }
    }

    return sorted;
}

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));


//
// 5. reverse
console.log('5. reverse');

function reverse(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }

    return reversed;
}

console.log(reverse(''));
console.log(reverse('abcdef'));

//
// 6. indexOf
console.log('6. indexOf');
