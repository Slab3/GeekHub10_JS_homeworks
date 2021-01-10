function matrix(R, C, r0, c0) {
    const join = (R, C, x, y) => {
        if (x >= 0 && y >= 0 && x < R && y < C) {
            res.push([x, y]);
        }
    };

    let res = [];
    let step = 1;

    while (res.length < R * C) {
        // i = index
        for (let i = 0; i < step; ++i) {
            join(R, C, r0, c0++);
        }
        for (let i = 0; i < step; ++i) {
            join(R, C, r0++, c0);
        }
        ++step;
        for (let i = 0; i < step; ++i) {
            join(R, C, r0, c0--);
        }
        for (let i = 0; i < step; ++i) {
            join(R, C, r0--, c0);
        }
        ++step;
    }

    return res;
}

{
let R = 1,
    C = 4,
    r0 = 0,
    c0 = 0;

console.log(matrix(R, C, r0, c0));
}
{
let R = 5,
    C = 6,
    r0 = 4,
    c0 = 4;

console.log(matrix(R, C, r0, c0));
}
