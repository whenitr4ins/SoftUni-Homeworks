function commonEls(arrOne, arrTwo) {

    for (let element of arrOne) {
        if (arrTwo.includes(element)) {
            console.log(element);
        }
    }

}
commonEls(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);