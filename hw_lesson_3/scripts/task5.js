console.log('Task 5');

// myForEach

// myMap

// mySort

// myFilter

Array.prototype.myFilter = function (callback, thisArg = this) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(null, this[i], i, this)) newArr.push(this[i]);
    }

    return newArr;
}


// myFind

Array.prototype.myFind = function (callback, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        if (callback.call(null, this[i], i, this) === true) {
            return this[i];
        }
    }
};
