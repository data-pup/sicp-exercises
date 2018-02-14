import { Dictionary } from 'typescript-collections';
import { IDecodingTable } from '../interfaces/IDecodingTable';
import { IEncodingTable } from '../interfaces/IEncodingTable';

export class DecodingTable implements IDecodingTable {

    // This is a private static helper function used by the constructor
    // to convert the schema of an encoding dictionary to a decoding
    // schema. This will return a Dictionary<string, string> object.
    private static generateDecodingScheme(encoder:IEncodingTable)
                                         : Dictionary<string, string> {
        throw new Error('Not Implemented');
    }

    public readonly decodingScheme:Dictionary<string, string>;

    public decode(input:string) : string {
        throw new Error('Not Implemented.');
    }

    constructor(encoder:IEncodingTable) {
        this.decodingScheme = DecodingTable.generateDecodingScheme(encoder);
    }
}