function solve(commands) {
    let array = [];
    let currentNumber = 1;

    for (let command of commands) {
        if (command == "add") {
            array.push(currentNumber);
        } else if (command == "remove") {
            if (array.length > 0) {
                array.pop();
            }
        }

        currentNumber++;
    }

    if (array.length == 0) {
        console.log("Empty");
    } else {
        console.log(array.join("\n"));
    }
}
solve(['add', 'add', 'add', 'add']);