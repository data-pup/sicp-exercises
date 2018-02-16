import { Dictionary } from 'typescript-collections';
import { INaiveEncodingTable } from './INaiveEncodingTable';

export class NaiveEncodingTable implements INaiveEncodingTable {

    // Private static helper function used by the constructor to generate
    // the internal encoding dictionary, given the input string.
    private static generateEncodingDictionary(inputString:string)
                                             : Dictionary<string, string> {
        throw new Error('');
    }

    public readonly encodingScheme:Dictionary<string, string>;

    public encode(input:string) : string {
        throw new Error('Not Implemented Error');
    }

    constructor (inputString:string) {
        this.encodingScheme = NaiveEncodingTable
            .generateEncodingDictionary(inputString);
    }

}
