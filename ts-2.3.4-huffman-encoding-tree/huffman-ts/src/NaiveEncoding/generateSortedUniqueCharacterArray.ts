import { Dictionary } from 'typescript-collections';
import { isNullOrUndefined } from 'util';

// This method will return a boolean value representing whether or not
// the input string is empty, null, or undefined.
export const stringIsEmptyOrNullOrUndefined = (input:string) : boolean => {
    if (isNullOrUndefined(input)) { return true; }
    if (input.length === 0) { return true; }
    return false;
};

// This method is responsible for processing the input string, and
// returning a sorted list of unique characters that occur in the input.
export const getSortedUniqueCharArray = (inputString:string) : string[] => {
    // Initialize a hash table that will store identified characters.
    const charactersSeen = new Dictionary<string, boolean>();

    // Return an empty list if the input is empty, null, or undefined.
    if (this.stringIsEmptyOrNullOrUndefined) {
        return new Array<string>();
    }

    // Split the input string into an array of characters, then iterate
    // through the array, one character at a time.
    const characterArray = inputString.split('');
    for (const currChar of characterArray) {
        // If the current character has not been seen, add it to the
        // dictionary of previously identified characters.
        if (!charactersSeen.containsKey(currChar)) {
            charactersSeen.setValue(currChar, true);
        }
    }

    // Convert the list of keys in the dictionary into a sorted array.
    const uniqueCharArray:string[] = charactersSeen.keys().sort();
    return uniqueCharArray; // Return the result.
};
