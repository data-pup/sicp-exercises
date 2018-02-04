"use strict";

// Import the dictionary type from the typescript-collections module.
import { Dictionary } from "typescript-collections";

// Define a function that will initialize the character frequency dictionary.
const initFreqDictionary = (uniqueCharacters: string[])
                            : Dictionary<string, number> => {
    // Initialize a new dictionary.
    const freqDict = new Dictionary<string, number>();
    uniqueCharacters.forEach( // Set each key's value to 0.
        (item, index, arr) => freqDict.setValue(item, 0));
    return freqDict; // Return the intialized dictionary.
};

// Define a function that will count the occurences of each character.
const getCharFrequencies = (input: string): Dictionary<string, number> => {
    // Find a list of the unique characters in the string.
    const inputChars = input.split(""); // Split the string.
    const uniqueCharacters = inputChars.filter( // Filter for unique characters.
        (item, index, arr) => arr.indexOf(item) === index);
    // Initialize the frequency dictionary, then process the string.
    const returnValue = initFreqDictionary(uniqueCharacters);
    for (const currChar of inputChars) { // Iterate through the character array.
        returnValue.setValue(currChar, // Increment the occurence value.
            returnValue.getValue(currChar) + 1);
    }
    return returnValue; // Return the frequency dictionary.
};

// Export the dictionary type from this module.
export { getCharFrequencies };
export { Dictionary } from "typescript-collections";
