'use strict';

const phoneBook = {
    'Carolina': '0638966281',
    'Darina': '0688167136',
    'Masha': '0687383155'
};

const findPhoneByName = (name) => {
    return phoneBook[name];
};

console.log(findPhoneByName('Carolina'));
console.log(findPhoneByName('Darina'));
console.log(findPhoneByName('Masha'));