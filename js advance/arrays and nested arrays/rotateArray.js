function solve(arr, rotationNum) {
    for (let i = 1; i <= rotationNum; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));

}
solve(['1', '2', '3', '4'], 2);