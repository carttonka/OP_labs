
'use strict';

const arr = [
    15, 'cat', true, 8.5, 'book',
    false, -10, 'hello', true, 0
];

const types = {};

for (const item of arr) {
    const type = typeof item;

    if (types[type] === undefined) {
        types[type] = 0;
    }

    types[type]++;
}

console.dir(types);
