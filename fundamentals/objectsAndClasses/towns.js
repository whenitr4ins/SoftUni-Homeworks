function towns(arr) {

    for (let town of arr) {
        let newArr = town.split(' | ');
        let nameOfTown = newArr[0];
        let output = { town: newArr[0], latitude: Number(newArr[1]).toFixed(2), longitude: Number(newArr[2]).toFixed(2) }
        console.log(output);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);