function palindromeInts(arr) {

    for (let num of arr) {
        let numAsString = num.toString();
        let reversedNum = numAsString.split('').reverse().join('');
        console.log(numAsString == reversedNum);
    }

}
palindromeInts([123, 323, 421, 121]);