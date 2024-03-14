function solve(numbers) {

    let result = [];
    let currMax = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= currMax) {
            currMax = numbers[i];
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));