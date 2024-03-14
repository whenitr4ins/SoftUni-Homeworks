function train(array) {

    let wagons = array[0].split(' ').map(Number);
    let capacity = array[1];

    for (let i = 2; i < array.length; i++) {
        let command = array[i];
        let commandArr = command.split(' ');

        if (commandArr[0] == 'Add') {
            let passangers = Number(commandArr[1]);
            wagons.push(passangers);
        } else {
            let passangers = Number(commandArr[0]);

            for (let index = 0; index < wagons.length; index++) {
                if (wagons[index] + passangers <= capacity) {
                    wagons[index] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);