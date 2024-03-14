function equalSums(arr) {
    let foundIndex = 'no';

    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            foundIndex = i;
        }

        leftSum += arr[i];
    }

    console.log(foundIndex);
}
equalSums([1, 2, 3, 3]);