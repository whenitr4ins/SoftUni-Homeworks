function solve(input) {

    let words = input.split(' ');

    let specialWords = words.filter(word => word.startsWith('#') && word.length > 1);

    for(let word of specialWords){
        word = word.slice(1);
        let isValid = true;

        for(let char of word){
            if(!/[A-Za-z]/.test(char)){
            isValid = false;
            break;
            }
        }
        if(isValid){
            console.log(word);
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');