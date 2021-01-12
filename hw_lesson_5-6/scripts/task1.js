function perform(...args) {
    let arrArgs = [...args].slice(0, [...args].length - 1);
    const func = [...args].find(elem => typeof elem === "function");
    arrArgs = func(parseInt(arrArgs));
    return {
        arrArgs,
        func,
        then(...args) {
            const newArgs = [...args].slice(0, [...args].length - 1);
            this.func = [...args].find(elem => typeof elem === "function");
            this.arrArgs = this.func(...newArgs, this.arrArgs);
            return this;
        }
    }
}

perform(20, function(value) {
    console.log(value); // 20
    var param = 1;
    console.log(param); // 1
    return param;
})
    .then('a', 'b', function(a, b, param) {
        console.log(++param); // 2
        return param;
    })
    .then(function(param) { // param === 2
        console.log(++param); // 3
        return param;
    });


