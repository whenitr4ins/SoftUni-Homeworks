function triangleNums(row) {
    for (let n = 1; n <= row; n++) {
        console.log(`${n} `.repeat(n));
    }
}
triangleNums(3);