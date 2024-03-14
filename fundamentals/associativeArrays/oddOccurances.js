function solve(arr) {
    let words = arr.toLowerCase().split(' ');
    let wordCounts = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
    let occurrences = [];
    for (let word in wordCounts) {
        if (wordCounts[word] % 2 !== 0) {
            occurrences.push(word);
        }
    }
    console.log(occurrences.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');