
'use strict';

function ipToInt(ip = '127.0.0.1') {
    const parts = ip.split('.').map(Number);

    const shifted = parts.map((byte, index) => {
        for (let i = index; i < 3; i++) {
            byte = byte << 8;
        }
        return byte;
    });

    return shifted.reduce((sum, byte) => sum + byte, 0);
}

console.log(ipToInt());
console.log(ipToInt('10.0.0.1'));
