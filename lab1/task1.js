'use strict';

// Task 1
const inc = (n) => n + 1;

const a = 8;
const b = inc(a);

console.dir({ a, b });

// Task 2
const incObj = (item) => {
    item.n++;
};

const Obj = { n: 10 };

incObj(Obj);

console.dir(Obj);