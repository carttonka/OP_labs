
'use strict';

const arr = [
    15, 'cat', true, 8.5, 'book',
    false, -10, 'hello', true, 0
];

const types = {
    number: 0,
    string: 0,
    boolean: 0
};

for (const item of arr) {
    const type = typeof item;
    types[type]++;
}

console.dir(types);
