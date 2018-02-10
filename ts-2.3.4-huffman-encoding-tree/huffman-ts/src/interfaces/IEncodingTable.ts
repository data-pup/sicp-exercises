import { Dictionary } from 'typescript-collections';

export interface IEncodingTable {
    data:Dictionary<string, string>;
    encode(input:string) : string;
}