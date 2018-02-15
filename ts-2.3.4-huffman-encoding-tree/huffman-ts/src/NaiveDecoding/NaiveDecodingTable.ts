import { Dictionary } from 'typescript-collections';
import { INaiveDecodingTable } from './INaiveDecodingTable';
import { INaiveEncodingTable } from '../NaiveEncoding/INaiveEncodingTable';

export class NaiveDecodingTable implements INaiveDecodingTable {

    public readonly decodingScheme:Dictionary<string, string>;

    public decode(input:string) : string {
        throw new Error('Not Implemented Error');
    }

    constructor(encodingTable:INaiveEncodingTable) {
        throw new Error('Not Implemented Error');
    }

}
