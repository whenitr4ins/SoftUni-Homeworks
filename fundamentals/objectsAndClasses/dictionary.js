function solve(input) {
    let dictionary = {};
    input.forEach(jsonString => {
        let jsonObj = JSON.parse(jsonString);
        for (let term in jsonObj) {
            dictionary[term] = jsonObj[term];
        }
    });

    let sortedDictionary = {};
    Object.keys(dictionary).sort().forEach(term => {
        sortedDictionary[term] = dictionary[term];
    });

    for (let term in sortedDictionary) {
        console.log(`Term: ${term} => Definition: ${sortedDictionary[term]}`);
    }
}
solve(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip ofmaterial, typically used to holdor fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);