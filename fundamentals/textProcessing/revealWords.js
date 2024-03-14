function solve(wordsStr, text) {

    let words = wordsStr.split(', ');

    for (let word of words) {
        let repeatCount = word.length;

        let template = '*'.repeat(repeatCount);
        text = text.replace(template, word);
    }
    console.log(text);
}
solve('great',
    'softuni is ***** place for learning new programming languages');