"use strict";

// Import the dictionary type from the typescript-collections module.
import { Dictionary } from "typescript-collections";

// Define a function that will initialize a dictionary.
const initFreqDictionary = (uniqueCharacters: string[])
    : Dictionary<string, number> => {
    const freqDict = new Dictionary<string, number>();
    freqDict.setValue("a", 0);
    freqDict.setValue("b", 1);
    return freqDict;
};

// Define a function that will count the occurences of each character.
const getCharFrequencies = (input: string): Dictionary<string, number> => {

    // Find a list of the unique characters in the string.
    const inputChars = input.split(""); // Split the string.
    const uniqueCharacters = inputChars.filter( // Filter for unique characters.
        (item, index, arr) => arr.indexOf(item) === index,
    );

    // Initialize the frequency dictionay.
    const returnValue = initFreqDictionary(uniqueCharacters);

    // Iterate through the characters in the string.
    // for (const currChar of inputChars) {
    //     const printString = `${currChar}\n`;
    //     process.stdout.write(printString);
    // }

    return returnValue; // Return the frequency dictionary.
};

// Export the dictionary type from this module.
export { getCharFrequencies };
export { Dictionary } from "typescript-collections";
