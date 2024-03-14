function solve(numAsString, op1, op2, op3, op4, op5) {

    let num = Number(numAsString);
    let operations = [op1, op2, op3, op4, op5];

    for (let operation of operations) {
        switch (operation) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= 0.2 * num;
                break;

        }
        console.log(num);
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');