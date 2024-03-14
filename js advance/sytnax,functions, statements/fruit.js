function solve(fruit, grams, price) {

    let weight = grams / 1000;
    let moneyNeeded = weight * price;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);


}
solve('orange', 2500, 1.80);