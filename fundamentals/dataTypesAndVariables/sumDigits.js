function sumDigits(num) {

    let numAsDigit = String(num);
    let sum = 0;

    for (i = 0; i < numAsDigit.length; i++) {
        sum += Number(numAsDigit[i]);
    }
    console.log(sum);

}

sumDigits(245678);