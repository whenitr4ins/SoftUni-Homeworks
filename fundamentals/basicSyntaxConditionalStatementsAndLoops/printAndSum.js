function printAndSum(start, end) {
    let sum = 0;
    let numStr = '';
    for (let num = start; num <= end; num++) {
        numStr += num + ' ';
        sum += num;
    }
    console.log(numStr);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);