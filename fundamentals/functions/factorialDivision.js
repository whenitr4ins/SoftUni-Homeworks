function factorialDivision(num1, num2) {
    let fac1 = factorial(num1);
    let fac2 = factorial(num2);
    let result = fac1 / fac2;

    console.log(result.toFixed(2));

    function factorial(num) {
        let fac = 1;
        while (num > 1) {
            fac *= num;
            num--
        }
        return fac;
    }
}
factorialDivision(5, 2)