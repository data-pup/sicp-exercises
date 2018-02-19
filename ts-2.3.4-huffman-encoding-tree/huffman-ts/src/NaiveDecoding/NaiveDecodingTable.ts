import { Dictionary } from 'typescript-collections';
import { isNullOrUndefined } from 'util';
import { decodeInputString } from '../GenericConversionLogic/decodeData';
import { IDecodingTable } from '../TableInterfaces/IDecodingTable';
import { IEncodingTable } from '../TableInterfaces/IEncodingTable';

export class NaiveDecodingTable implements IDecodingTable {

    private static generateDecodingScheme(encoder:IEncodingTable)
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
    public readonly method:string;
    public readonly type:string;

    // Convert an input string back into plaintext using the internal
    // decoding scheme dictionary.
    public decode(input:string) : string {
        return decodeInputString(input, this.decodingScheme);
    }

    constructor(encodingTable:IEncodingTable) {
        this.decodingScheme = NaiveDecodingTable
            .generateDecodingScheme(encodingTable);
        this.method = 'naive';
        this.type = 'decoding';
    }

}
