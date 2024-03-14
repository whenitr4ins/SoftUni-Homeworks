function getFibonator() {

    let current = 0;
    let next = 1;

    return function () {
        const result = current + next;
        current = next;
        next = result;
        return current;
    }

}

let fibonator = getFibonator();
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
