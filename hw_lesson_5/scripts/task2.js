//
let timeout = null;

let input = document.createElement('input');
input.addEventListener('keyup', function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {console.log(e)}, 300)
});

$0.append('input');