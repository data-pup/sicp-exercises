import { Dictionary } from 'typescript-collections';

export interface IDecodingTable {
    readonly data:Dictionary<string, string>;
    decode(input:string) : string;
}
