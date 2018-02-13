import { Dictionary } from 'typescript-collections';
import { IEncodingTable } from '../interfaces/IEncodingTable';

export class EncodingTable implements IEncodingTable {

    public readonly encodingScheme:Dictionary<string, string>;

    public encode(input:string) : string {
        throw new Error('Not Implemented.');
    }

    constructor(encodingScheme:Dictionary<string, string>) {
        this.encodingScheme = encodingScheme;
    }

}
