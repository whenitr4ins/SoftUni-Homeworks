function solve(arr) {

    let fileInfo = arr.split('\\').pop();
    let lastDotIdx = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.slice(0, lastDotIdx);
    let extension = fileInfo.slice(lastDotIdx + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
solve('C:\\Internal\\training-internal\\Template.pptx')