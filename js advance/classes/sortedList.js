class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }
    add(number) {
        this.numbers.push(number);
        this.size++;
        this.numbers.sort((a, b) => a - b);
        return this;
    }
    remove(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error(`The index is outside the length of the collection.`);
        }
        this.numbers.splice(index, 1);
        this.size--;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error(`The index is outside the length of the collection.`)
        }
        return this.numbers[index];
    }

}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
