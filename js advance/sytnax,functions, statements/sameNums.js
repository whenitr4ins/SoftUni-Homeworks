function solve(number) {
    let strNumber = number.toString();
    let sum = 0;
    let ifSame = true;
    sum += Number(strNumber[0]);
    for (let i = 1; i < strNumber.length; i++) {
        if (strNumber[i] !== strNumber[i - 1]) {
            ifSame = false;
            sum += Number(strNumber[i]);

        } else {
            ifSame = true;
            sum += Number(strNumber[i]);
        }
    }
    console.log(ifSame);
    console.log(sum);

}
solve(2222222);