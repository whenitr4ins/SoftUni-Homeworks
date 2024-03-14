function solve(input) {

    let words = input.split(/(?=[A-Z])/);

    let result = words.join(', ');

    console.log(result);

}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');