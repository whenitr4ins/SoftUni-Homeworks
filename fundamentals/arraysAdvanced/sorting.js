function sorting(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let newArr = [];

    while (sorted.length > 0) {
        let maxNum = sorted.pop()
        let minNum = sorted.shift()

        newArr.push(maxNum);
        newArr.push(minNum);
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);