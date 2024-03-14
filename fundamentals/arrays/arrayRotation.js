function arrRotation(arr, rotationNum) {

    for (let rotation = 1; rotation <= rotationNum; rotation++) {

        let firstElement = arr.shift();

        arr.push(firstElement);
    }

    console.log(arr.join(' '));
}

arrRotation([51, 47, 32, 61, 21], 2);