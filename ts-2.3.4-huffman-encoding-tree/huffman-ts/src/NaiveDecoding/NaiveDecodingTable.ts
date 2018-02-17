import { Dictionary } from 'typescript-collections';
import { INaiveDecodingTable } from './INaiveDecodingTable';
import { decodeInputString } from '../GenericConversionLogic/decodeData';
import { INaiveEncodingTable } from '../NaiveEncoding/INaiveEncodingTable';

export class NaiveDecodingTable implements INaiveDecodingTable {

    public readonly decodingScheme:Dictionary<string, string>;

    // Convert an input string back into plaintext using the internal
    // decoding scheme dictionary.
    public decode(input:string) : string {
        return decodeInputString(input, this.decodingScheme);
    }

    constructor(encodingTable:INaiveEncodingTable) {
        throw new Error('Not Implemented Error');
    }

}
