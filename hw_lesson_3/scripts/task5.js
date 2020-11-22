console.log('Task 5...');

// ========== myForEach ==========
console.log('myForEach');
Array.prototype.myForEach = function (callback, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
};
function myForEachFunc(array) {
    array.myForEach(function (argument) {
        console.log(argument);
    })
}
myForEachFunc([2, 7, 1, NaN, -7, 'sfd', 3, 7]);


// ========== myMap ==========
console.log('myMap');
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
console.log('mySort');

// Array.prototype.mySort = function (callback, thisArg = this) {
//
// };


// ========== myFilter ==========
console.log('myFilter');
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
console.log(myFilterFunc([2, 7, 1, NaN, -7, 'sfd', 3, 7]));


// ========== myFind =========
console.log('myFind');
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
console.log(myFindFunc([2, 7, 1, NaN, -7, 'sfd', 3, 7]));