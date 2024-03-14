function solve(...args) {
    let result = {};

    for (let data of args) {
        let type = typeof data;
        console.log(`${type}: ${data}`)
        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type] += 1;
    }
    for (let [key, value] of Object.entries(result).sort((a, b) => b[1] - a[1])) {
        console.log(`${key} = ${value}`);
    }
}
solve('cat', 42, function () { console.log('Hello world!'); })