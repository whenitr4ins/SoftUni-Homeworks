function solve(input) {
    // const columns = input[0].split('|').map(e => e.trim()).filter(e => !!e);
    // input.shift();
    let result = [];
    let keys = input.shift().split('|').filter(x => x !== '').map(x => x.trim());

    for (let i of input) {
        let [town, latitude, longitude] = i.split('|').map(e => e.trim()).filter(e => !!e);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        result.push({ [keys[0]]: town, [keys[1]]: Number(latitude), [keys[2]]: Number(longitude) });

    }
    return JSON.stringify(result);
}
console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));