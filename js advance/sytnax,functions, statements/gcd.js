function solve(a, b) {

    while (b > 0) {

        let gcd = b;
        b = a % b;
        a = gcd;
    }
    console.log(a);


}
solve(2154, 458);