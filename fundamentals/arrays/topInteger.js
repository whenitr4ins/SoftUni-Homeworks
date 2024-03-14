function topInteger(arr) {
    let topNums = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isTopInt = true;
        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];
            if (rightNum >= num) {
                isTopInt = false;
            }
        }
        if (isTopInt) {
            topNums.push(num)
        }
    }
    console.log(topNums.join(' '));
}
topInteger([1, 4, 3, 2]);