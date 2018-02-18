import { Dictionary } from 'typescript-collections';
import { calculateEncodingSize } from './calculateEncodingSize';
import { convertNumberToEncodingString } from './generateEncodingString';
import { getSortedUniqueCharArray } from './generateSortedUniqueCharacterArray';
import { encodeInputString } from '../GenericConversionLogic/encodeData';
import { IEncodingTable } from '../TableInterfaces/IEncodingTable';

export class NaiveEncodingTable implements IEncodingTable {

    // Private static helper function used by the constructor to generate
    // the internal encoding dictionary, given the input string.
    private static generateEncodingDictionary(inputString:string)
                                             : Dictionary<string, string> {
        // Initialize a new dictionary, which will store encoding mappings.
        const encodingDictionary = new Dictionary<string, string>();

        // Generate an array of encoding keys, find the encoding string width.
        const sortedKeys:string[] = getSortedUniqueCharArray(inputString);
        const paddingWidth:number = calculateEncodingSize(sortedKeys);

        // Declare loop helper variables, and iterate through the array of
        // sorted unique tokens. Find the encoding for each, and add the
        // key value pair to the dictionary.
        let [currentToken, tokenEncoding]:string[] = [undefined, undefined];
        for (let index = 0; index < sortedKeys.length; index++) {
            currentToken = sortedKeys[index];
            tokenEncoding = convertNumberToEncodingString(index, paddingWidth);
            encodingDictionary.setValue(currentToken, tokenEncoding);
        }

        return encodingDictionary; // Return the dictionary.
    }

    public readonly encodingScheme:Dictionary<string, string>;

    public encode(input:string) : string {
        return encodeInputString(input, this.encodingScheme);
    }

    constructor (inputString:string) {
        this.encodingScheme = NaiveEncodingTable
            .generateEncodingDictionary(inputString);
    }

}
