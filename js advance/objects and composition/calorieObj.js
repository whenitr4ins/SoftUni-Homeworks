function solve(arr){
    const productName = {};
    for(let i = 0; i < arr.length; i += 2){
        const product = arr[i];
        const calories = Number(arr[i + 1]);

        productName[product] = calories;
    }
    console.log(productName);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);