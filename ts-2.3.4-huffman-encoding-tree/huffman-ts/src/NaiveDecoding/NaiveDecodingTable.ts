import { Dictionary } from 'typescript-collections';
import { isNullOrUndefined } from 'util';
import { INaiveDecodingTable } from './INaiveDecodingTable';
import { decodeInputString } from '../GenericConversionLogic/decodeData';
import { INaiveEncodingTable } from '../NaiveEncoding/INaiveEncodingTable';

export class NaiveDecodingTable implements INaiveDecodingTable {

    private static generateDecodingScheme(encoder:INaiveEncodingTable)
                                         : Dictionary<string, string> {
        // Initialize a new empty dictionary.
        const decodingScheme = new Dictionary<string, string>();

        // Return an empty dictionary if the encoding table is undefined.
        if (isNullOrUndefined(encoder)) { return decodingScheme; }

        // Iterate through the dictionary, swap keys and values.
        encoder.encodingScheme.forEach((char, encoding) => {
            decodingScheme.setValue(encoding, char);
        });

        return decodingScheme; // Return the decoding scheme.
    }

    public readonly decodingScheme:Dictionary<string, string>;

    // Convert an input string back into plaintext using the internal
    // decoding scheme dictionary.
    public decode(input:string) : string {
        return decodeInputString(input, this.decodingScheme);
    }

    constructor(encodingTable:INaiveEncodingTable) {
        this.decodingScheme = NaiveDecodingTable
            .generateDecodingScheme(encodingTable);
    }

}
