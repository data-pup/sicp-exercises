import { Dictionary } from 'typescript-collections';

export interface IDecodingTable {
    readonly decodingScheme:Dictionary<string, string>;
    decode(input:string) : string;
}
