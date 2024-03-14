function searchForNum(arr, commands) {
    let newEls = arr.slice(0, commands[0]);
    let deleted = newEls.splice(0, commands[1]);
    let number = commands[2];
    let count = 0;

    for (let i = 0; i < newEls.length; i++) {
        if (newEls.includes(number)) {
        };
        count = newEls.filter((num) => num == number).length;
    }

    console.log(`Number ${number} occurs ${count} times.`);
}
searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);