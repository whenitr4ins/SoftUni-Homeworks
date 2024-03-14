function solve(data, sortCriteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for (let input of data) {
        let [destination, price, status] = input.split("|");
        let myTicket = new Ticket(destination, price, status);
        result.push(myTicket);
    }

    return sortedArray(result, sortCriteria);

    function sortedArray(arr, criteria) {
        return arr.sort((a, b) => {
            return criteria === "price" ?
                a[criteria] - b[criteria] :
                a[criteria].localeCompare(b[criteria])
        })
    }
}
let res = solve(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination')

console.log(res);