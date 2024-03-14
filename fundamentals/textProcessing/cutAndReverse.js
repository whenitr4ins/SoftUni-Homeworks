function solve(arr) {

    let splitPoint = (arr.length / 2);

    let firstHalf = arr.slice(0, splitPoint);
    let secondHalf = arr.slice(splitPoint);

    let reversedFirstHalf = firstHalf.split('').reverse().join('');
    let reversedSecondHalf = secondHalf.split('').reverse().join('');

    console.log(reversedFirstHalf);
    console.log(reversedSecondHalf);


}
solve('tluciffiDsIsihTgnizamAoSsIsihT');