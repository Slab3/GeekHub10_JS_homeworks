// Asynchronous-debounce-search

let inputSearch = document.getElementById("inputSearch");
    // valInputSearch = document.getElementById("inputSearch");

let timeout = null;
inputSearch.addEventListener("keyup", function () {
    if (timeout) { //
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => {console.log(inputSearch.value)}, 1000);

});

