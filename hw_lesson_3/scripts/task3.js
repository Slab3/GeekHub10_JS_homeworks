// sum(1)(2)(3) // 6;
console.log('Task 3');

function sum(a) {

    let currentSum = a;

    function func(b) {
        currentSum += b;
        return func;
    }

    func.toString = function() {
        return currentSum;
    };
    return func;
}

console.log('sum func (1)(2)(3): ' + sum(1)(2)(3));

alert('Sum of your numbers: ' + sum (+prompt('sum(1)(2)(3) but with your numbers, number 1: '))
    (+prompt('Number 2: '))(+prompt('Number 3: '))(+prompt('Number 4: ')));


