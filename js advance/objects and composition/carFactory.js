function solve(order) {

    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };

    let selectedEngine;
    if (order.power <= 90) {
        selectedEngine = smallEngine;
    } else if (order.power <= 120) {
        selectedEngine = normalEngine;
    } else {
        selectedEngine = monsterEngine;
    }

    const selectedCarriage = {
        type: order.carriage,
        color: order.color,
    };

    const wheels = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;

    const assembledCar = {
        model: order.model,
        engine: selectedEngine,
        carriage: selectedCarriage,
        wheels: [wheels, wheels, wheels, wheels],
    };
    return assembledCar;

}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));