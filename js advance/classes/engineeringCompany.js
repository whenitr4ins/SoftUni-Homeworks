function solve(input) {

    let carRegister = {};

    for (let line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!carRegister[carBrand]) {
            carRegister[carBrand] = {};
        }
        if (!carRegister[carBrand][carModel]) {
            carRegister[carBrand][carModel] = 0;
        }
        carRegister[carBrand][carModel] += producedCars;
    }
    for (let carBrand in carRegister) {
        console.log(carBrand);

        for (let carModel in carRegister[carBrand]) {
            console.log(`###${carModel} -> ${carRegister[carBrand][carModel]}`);
        }
    }

}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);