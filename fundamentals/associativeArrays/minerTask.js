function solve(arr) {
    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {
        resource = arr[i];
        quantity = Number(arr[i + 1]);

        if (resource in resources) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }
    let entries = Object.entries(resources);

    for (let [resource, quantity] of entries) {
        console.log(`${resource} -> ${quantity}`);
    }

}
solve(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);