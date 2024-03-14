function oddEvenSum(num) {
    let odd = 0;
    let even = 0;
    let numAsString = num.toString();

    for (let i of numAsString) {
        let digit = Number(i);
        if (digit % 2 == 0) {
            even += digit;
        } else {
            odd += digit;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
oddEvenSum(1000435);