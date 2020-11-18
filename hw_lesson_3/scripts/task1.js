console.log('Task 1 ');

function myFor(i, j, result) {
    if (i < j) {
        return result;
    } else {
        console.log(i);
        result = result + 1;
        i++;
        myFor(i, j, result);
    }
}

console.log(myFor(2, 5, 20));