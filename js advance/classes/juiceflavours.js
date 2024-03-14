function solve(juices) {

    let juiceName = {};
    let bottles = [];

    for (let line of juices) {
        let [name, qty] = line.split(' => ');
        qty = Number(qty);

        if (!juiceName.hasOwnProperty(name)) {
            juiceName[name] = 0;
        }
        juiceName[name] += qty;

        if (juiceName[name] >= 1000) {
            if (!bottles.hasOwnProperty(name)) {
                bottles[name] = 0;
            }
            let newBottle = Math.floor(juiceName[name] / 1000);
            bottles[name] += newBottle;
            // console.log(bottles);
            juiceName[name] -= 1000;
            // console.log(juiceName);
        }

    }
    for (let [key, value] of Object.entries(bottles)) {
        console.log(`${key} => ${value}`);
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);