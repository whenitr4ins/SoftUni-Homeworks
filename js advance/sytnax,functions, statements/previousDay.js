function solve(year, month, day) {

    let theDate = new Date(year, month - 1, day);
    theDate.setDate(theDate.getDate() - 1);

    console.log(`${theDate.getFullYear()}-${theDate.getMonth() + 1}-${theDate.getDate()}`);
}
solve(2016, 9, 30);