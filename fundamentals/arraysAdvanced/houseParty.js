function houseParty(arr) {

    let guestList = [];

    for (let i of arr) {
        let arrays = i.split(' ');
        let name = arrays[0];

        if (arrays.includes('not')) {
            if (guestList.includes(name)) {
                let index = guestList.indexOf(name);
                guestList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name)
            }
        }
    }
    console.log(guestList.join('\n'));
}
houseParty
    (['Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!']);