function lowerOrUpper(char) {

    let character = char.charCodeAt();

    if (character <= 90) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }


}

lowerOrUpper('L');