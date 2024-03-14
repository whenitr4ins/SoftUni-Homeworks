function charsInRange(char1, char2) {
    let charOne = char1.charCodeAt(0);
    let charTwo = char2.charCodeAt(0);
    let minOne = Math.min(charOne, charTwo);
    let maxTwo = Math.max(charOne, charTwo);

    let result = '';

    for (let i = minOne + 1; i < maxTwo; i++) {
        let j = String.fromCharCode(i);
        result += j + ' '
    }
    console.log(result);

}
charsInRange('a', 'd');