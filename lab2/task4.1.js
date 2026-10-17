'use strict';

const fn = () => {
    const user1 = { name: 'Carolina' };
    let user2 = { name: 'Darina' };

    user1.name = 'Masha';
    user2.name = 'Carolina';

    // user1 = { name: 'Darina' };
    user2 = { name: 'Masha' };

    console.log(user1);
    console.log(user2);
};

fn();