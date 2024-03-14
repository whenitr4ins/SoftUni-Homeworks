function loadingBar(input) {
    if (input == 100) {
        console.log("100% Complete!\n[%%%%%%%%%%]");
    } else if (input % 10 == 0) {
        let percentage = input + "%";
        let completedBlocks = "[" + "%".repeat(input / 10) + ".".repeat(10 - input / 10) + "]";
        console.log(percentage + " " + completedBlocks + "\nStill loading...");
    } else {
        console.log("Invalid input. Please provide a number divisible by 10.");
    }
}
loadingBar(80);