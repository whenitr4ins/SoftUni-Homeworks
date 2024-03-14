function addAndSubtract(n1, n2, n3) {
    let addSum = add(n1, n2);
    let subtractSum = subtract(addSum, n3);
    console.log(subtractSum);

    function add(n1, n2) {
        return n1 + n2;
    }
    function subtract(n1, n2) {
        return n1 - n2;
    }
}
addAndSubtract(23, 6, 10);