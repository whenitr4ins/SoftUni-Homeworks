function solve(arr) {
    let searchedWords = arr.shift().split(' ');
    let occurrences = {};

    for (let word of searchedWords) {
        occurrences[word] = 0;
    }
    for (let word of arr) {
        if (word in occurrences) {
            occurrences[word]++;
        }
    }
    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, occurrences] of entries) {
        console.log(`${word} - ${occurrences}`);
    }
}
solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']);