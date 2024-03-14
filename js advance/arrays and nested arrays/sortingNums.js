function solve(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    let newArr = [];
    while (arr.length > 0) {
        result = arr.shift();
        newArr.push(result);
        result = arr.pop();
        newArr.push(result);
    }
    return (newArr);
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);