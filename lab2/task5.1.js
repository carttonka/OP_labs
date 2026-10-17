'use strict';

const phoneBook = [
    { name: 'Carolina', phone: '0638966281' },
    { name: 'Darina', phone: '0688167136' },
    { name: 'Masha', phone: '0687383155' }
];

const findPhoneByName = (name) => {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
};

console.log(findPhoneByName('Carolina'));
console.log(findPhoneByName('Darina'));
console.log(findPhoneByName('Masha'));