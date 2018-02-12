import { Dictionary } from 'typescript-collections';

export interface IDecodingTable {
    data:Dictionary<string, string>;
    decode(input:string) : string;
}
