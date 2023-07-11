# HashMap Methods and Properties Guide

This guide provides a comprehensive overview of useful methods and properties associated with HashMaps.

## Properties

- **`hashmap.size`**: This property returns the total number of elements currently present in the HashMap.

## Methods

- **`hashmap.get(<key>)`**: This method returns the value associated with the provided key. If the key is not present, it will return `undefined`.

- **`hashmap.has(<key>)`**: This method returns a boolean value indicating whether the HashMap contains the provided key.

- **`hashmap.set(<key>, <value>)`**: This method accepts two arguments: a key and a value. It sets the value for the key in the HashMap. If the key already exists, it updates its value.

- **`hashmap.delete(<key>)`**: This method removes the key-value pair from the HashMap that matches the provided key. It returns `true` if the key existed and was deleted, or `false` if the key was not found.

- **`hashmap.clear()`**: This method removes all elements from the HashMap.

Please be reminded that HashMaps in JavaScript are unordered collections of key-value pairs, and the sequence of insertion is not maintained. Always ensure your keys are unique to prevent accidental overwriting of data.
