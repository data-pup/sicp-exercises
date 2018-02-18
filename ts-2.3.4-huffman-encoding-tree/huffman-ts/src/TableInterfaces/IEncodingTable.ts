import { Dictionary } from 'typescript-collections';

export interface IEncodingTable {
    readonly encodingScheme:Dictionary<string, string>;
    encode(input:string) : string;
}
