function mergedArrays(arrOne, arrTwo) {
    let newArr = [];

    for (let i = 0; i < arrOne.length; i++) {
        let elementOne = arrOne[i];
        let elementTwo = arrTwo[i];

        if (i % 2 == 0) {
            newArr.push(Number(elementOne) + Number(elementTwo));
        } else {
            newArr.push(elementOne + elementTwo);
        }
    }
    console.log(newArr.join(" - "));

}

mergedArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);