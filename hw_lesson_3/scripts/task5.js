console.log('Task 5...');

// ========== myForEach ==========

// ========== myMap ==========
Array.prototype.myMap = function (callback, thisArg = this) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr.push(callback.call(null, this[i], i, this));
    }

    return newArr;
};

function myMapFunc(array) {
    return array.myMap(function (argument) {
        return argument + "'s";
    })
}
console.log(myMapFunc(['mom', 'dad', 'master', 'none']));

// ========== mySort ==========


// ========== myFilter ==========
Array.prototype.myFilter = function (callback, thisArg = this) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(null, this[i], i, this)) newArr.push(this[i]);
    }

    return newArr;
};

function myFilterFunc(array) {
    return array.myFilter(function (argument) {
        return argument === 7;
    })
}
console.log(myFilterFunc([2, 4, 7, 1, NaN, -7, 'sfd', 3, 7]));


// ========== myFind =========
Array.prototype.myFind = function (callback, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        if (callback.call(null, this[i], i, this) === true) {
            return this[i];
        }
    }
};

function myFindFunc(array) {
    return array.myFind(function (argument) {
        return argument === 7;
    })
}
console.log(myFindFunc([2, 4, 7, 1, NaN, -7, 'sfd', 3, 7]));