function bombNumbers(arrOfNums, bombInfo) {
    let [bombNum, power] = bombInfo;
    
    while (arrOfNums.includes(bombNum)) {
        let index = arrOfNums.indexOf(bombNum);
        arrOfNums.splice(Math.max(0, index - power), power * 2 + 1);
    }
    
    let sum = 0;

    for (let num of arrOfNums) {
        sum += num;
    }
    console.log(sum);
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);