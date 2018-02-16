import { Dictionary } from 'typescript-collections';
import { isNullOrUndefined } from 'util';
import { INaiveEncodingTable } from './INaiveEncodingTable';
import { IHuffmanBTreeNode } from '../HuffmanBTree/IHuffmanBTreeNode';

const leftPad = require('left-pad');

export class NaiveEncodingTable implements INaiveEncodingTable {

    // This method will return a boolean value representing whether or not
    // the input string is empty, null, or undefined.
    private static stringIsEmptyOrNullOrUndefined(input:string) : boolean {
        if (isNullOrUndefined(input)) { return true; }
        if (input.length === 0) { return true; }
        return false;
    }

    // This method is responsible for processing the input string, and
    // returning a sorted list of unique characters that occur in the input.
    private static getSortedUniqueCharArray(inputString:string) : string[] {
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
    }

    private static convertNumberToEncodingString(i:number,
                                                 encodingSize:number)
                                                : string {
        const binaryStringRepresentation = i.toString(2);
        if (encodingSize <= 0) {
            return binaryStringRepresentation;
        }

        return leftPad(binaryStringRepresentation, encodingSize, '0');
    }

    private static generateEncodingDictionary(uniqueChars:string[])
                                             : Dictionary<string, string> {
        const encodingSpace = uniqueChars.length - 1;
        //

        throw new Error('');
    }

    // Public member variables.
    public readonly encodingScheme:Dictionary<string, string>;

    // Encode an input string using the given string.
    public encode(input:string) : string {
        throw new Error('Not Implemented Error');
    }

    constructor (inputString:string) {
        // Use the private static getUniqueCharArray method to create a sorted
        // array of unique characters that occur in the input string.
        const sortedUniqueChars:string[] = NaiveEncodingTable
            .getSortedUniqueCharArray(inputString);

        // Throw an error temporarily.
        throw new Error('Not Implemented Error');
    }
}
