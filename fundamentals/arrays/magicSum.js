function magicSum(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let firstNum = arr[i];
            let secondNum = arr[j];
            if (firstNum + secondNum == n) {
                console.log(firstNum, secondNum);
            }
        }
    }

}

// magicSum([1, 7, 6, 2, 19, 23],8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27)