function solve(products) {

    const catalog = [];
    products.sort((a, b) => a.localeCompare(b));

    products.forEach((products) => {
        const [name, price] = products.split(' : ');
        const initial = name.charAt(0).toUpperCase();

        if (!catalog[initial]) {
            catalog[initial] = [];
        }
        catalog[initial].push({ name, price });
    })

    for (let initial in catalog) {
        console.log(initial);
        catalog[initial].forEach((product) => {
            console.log(`${product.name}: ${product.price}`);
        })
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);