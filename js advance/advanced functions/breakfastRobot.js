function solve() {

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function (input) {

        let [command, item, qty] = input.split(' ');
        qty = Number(qty);
        let message = '';

        switch (command) {
            case 'restock':
                storage[item] += qty;
                message = 'Success';
                break;
            case 'prepare':
                let recipe = recipes[item];
                for (let ingredient in recipe) {
                    if (storage[ingredient] < recipe[ingredient] * qty) {
                        message = `Error: not enough ${ingredient} in stock`;
                        return message;
                    }
                }
                for (let ingredient in recipe) {
                    storage[ingredient] -= recipe[ingredient] * qty;

                }
                message = 'Success'
                break;
            case 'report':
                message = `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
                break;
        }
        return message;
    }


}
let manager = solve();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

