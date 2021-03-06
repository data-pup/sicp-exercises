import { Dictionary } from 'typescript-collections';
import { isNullOrUndefined } from 'util';
import { decodeInputString } from '../GenericLogic/decodeData';
import { IDecodingTable } from '../Interfaces/IDecodingTable';
import { IEncodingTable } from '../Interfaces/IEncodingTable';

export class DecodingTable implements IDecodingTable {

    // This is a private static helper function used by the constructor
    // to convert the schema of an encoding dictionary to a decoding
    // schema. This will return a Dictionary<string, string> object.
    private static generateDecodingScheme(encoder:IEncodingTable)
                                         : Dictionary<string, string> {
        // Initialize a new empty dictionary.
        const decodingScheme = new Dictionary<string, string>();

        // Return an empty dictionary if the encoding table is undefined.
        if (isNullOrUndefined(encoder)) { return decodingScheme; }

        // Iterate through the dictionary stored in the encoder.
        encoder.encodingScheme.forEach((char, encoding) : void => {
            decodingScheme.setValue(encoding, char);
        });

        return decodingScheme; // Return the decoding scheme.
    }

    public readonly decodingScheme:Dictionary<string, string>;
    public readonly method:string;
    public readonly type:string;

    public getScheme() : Dictionary<string, string> {
        return this.decodingScheme;
    }

    public decode(input:string) : string {
        return decodeInputString(input, this.decodingScheme);
    }

    constructor(encoder:IEncodingTable) {
        this.decodingScheme = DecodingTable.generateDecodingScheme(encoder);
        this.method = 'huffman';
        this.type = 'decoding';
    }
}
