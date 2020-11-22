// calculate(3).add(2).multiply(2).result() // 10
console.log('Task 4');

class Calculate {
    constructor(num) {
        this.value = num;
    }

    add(numValue)  {
        this.value += numValue;
        return this;
    }

    multiply(numValue){
        this.value *= numValue;
        return this;
    }

    result() {
        return this.value;
    }
}
let calculate = new Calculate(3);

console.log(calculate.add(2).multiply(2).result());