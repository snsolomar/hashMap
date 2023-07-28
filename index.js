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
// console.log(".has(key): (2)", secondHashMap.has(2));
// console.log(".has(key): (3)", secondHashMap.has(3));

function sortArray(arr) {
    let hashMap = {};

    // Fill the hashMap object with the frequency of each element
    for(let i = 0; i < arr.length; i++){
        if (hashMap[arr[i]]){
            hashMap[arr[i]]++;
        } else {
            hashMap[arr[i]] = 1;
        }
    }

    // Find the min and max in the array
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    // Initialize the sorted array
    let sortedArray = [];

    // Iterate from min to max, and for each number, 
    // if it exists in the hashMap object, add it to the sorted array
    for(let i = min; i <= max; i++) {
        if(hashMap[i]) {
            for(let j = 0; j < hashMap[i]; j++) {
                sortedArray.push(i);
            }
        }
    }

    return sortedArray;
}

let array = [1,0,1,0,2,2];
console.log(sortArray(array));  // Output: [0,0,1,1,2,2]
