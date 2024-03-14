function addItem() {

    const menuRef = document.getElementById("menu");
    const textRef = document.getElementById("newItemText");
    const valueRef = document.getElementById("newItemValue");

    let textValue = textRef.value;
    let valueValue = valueRef.value;

    let option = document.createElement("option");
    option.text = textValue;
    option.value = valueValue;

    menuRef.appendChild(option);

    textRef.value = "";
    valueRef.value = "";
}