// Declaring a Hashmap using the Javascript Map() constructor
let firstHashMap = new Map();

// Declaring and initizialing a new hashmap constructor
let secondHashMap = new Map([
    [1, "first"],
    [2, "second"],
    [5, "fifth"]
]);

// console.log("firstHashMap: ", firstHashMap);
// console.log("secondHashMap: ", secondHashMap);

// get value of key 2 
// console.log(".get(key): ", secondHashMap.get(2));

// check to see if key 2 and then key 3 are in the hashmap
console.log(".has(key): (2)", secondHashMap.has(2));
console.log(".has(key): (3)", secondHashMap.has(3));