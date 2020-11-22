// calculate(3).add(2).multiply(2).result() // 10
console.log('Task 4');

class Calculate {
    constructor(num) {
        this.value = num;
    }

    add(numNext)  {
        this.value += numNext;
        return this;
    }

    multiply(numNext){
        this.value *= numNext;
        return this;
    }

    result() {
        return this.value;
    }
}
let calculate = new Calculate(3);

console.log(calculate.add(2).multiply(2).result());
