// myPromise

// function perform() {
//     //TODO implement
// }
//
//     perform(20, function (value) {
//         console.log(value); //20
//         var param = 1;
//         console.log(param); //1
//         return param;
//     })
//     .then('a','b', function (a, b, param) {
//     console.log(++param); //2
//     return param;
//     })
//     .then(function (param) { //param === 2
//     console.log(++param); //3
//         return param;
//     });


//=--------------------------------------------------------------------------------------------------------=
// "input" which will show text (which typing user) with ping, after stop typing

// let changeInp = document.getElementById("input-change");
//
// function changInpLog() {
//     console.log(changeInp.value)
// }
// setInterval(changInpLog,3000);

//=--------------------------------------------------------------------------------------------------------=

// debounce (this one from lesson)

// let timeout = null;
//
// let input = document.createElement('input');
// input.addEventListener('keyup', function (e) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {console.log(e)}, 300)
// });
//
// $0.append('input');