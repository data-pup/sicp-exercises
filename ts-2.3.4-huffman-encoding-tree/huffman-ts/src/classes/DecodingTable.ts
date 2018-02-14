import { Dictionary } from 'typescript-collections';
import { IDecodingTable } from '../interfaces/IDecodingTable';
import { IEncodingTable } from '../interfaces/IEncodingTable';

export class DecodingTable implements IDecodingTable {

    public readonly data:Dictionary<string, string>;

    public decode(input:string) : string {
        throw new Error('Not Implemented.');
    }

    constructor(encoder:IEncodingTable) {
        this.data = new Dictionary<string, string>();
    }
}
