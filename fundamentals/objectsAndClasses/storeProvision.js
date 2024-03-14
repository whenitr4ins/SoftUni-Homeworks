function solve(stock, orderedOne) {
    let allProducts = {};

    for (let i = 0; i < stock.length; i += 2) {
        let productName = stock[i];
        let quantity = Number(stock[i + 1]);
        allProducts[productName] = quantity;
    }
    for (let j = 0; j < orderedOne.length; j += 2) {
        let productName = orderedOne[j];
        let quantity = Number(orderedOne[j + 1]);

        if (productName in allProducts) {
            allProducts[productName] += quantity;
        } else {
            allProducts[productName] = quantity;
        }

    }
    let entries = Object.entries(allProducts);
    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }

}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas',
'14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7',
'Tomatoes', '70', 'Bananas', '30'
]);