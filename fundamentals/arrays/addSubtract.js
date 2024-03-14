function addSubtract(arr) {
    let sum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num;

        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }

        newSum += num
        arr[i] = num;
    }
    console.log(arr);
    console.log(sum);
    console.log(newSum);
}

addSubtract([5, 15, 23, 56, 35]);