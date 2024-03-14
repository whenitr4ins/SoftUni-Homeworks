function solve(arr) {
    let parkingLot = {};

    for (let i = 0; i < arr.length; i++) {
        let [direction, carNumber] = arr[i].split(', ');
        if (direction == 'IN') {
            parkingLot[carNumber] = true;
        } else if (direction == 'OUT') {
            delete parkingLot[carNumber];
        }
    }
    let parkedCars = Object.keys(parkingLot).sort();

    if (parkedCars.length > 0) {
        console.log(parkedCars.join('\n'));
    } else {
        console.log(`Parking Lot is Empty`);
    }

}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);