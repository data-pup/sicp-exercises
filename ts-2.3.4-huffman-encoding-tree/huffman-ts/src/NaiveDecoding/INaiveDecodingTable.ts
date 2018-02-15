import { Dictionary } from 'typescript-collections';

export interface INaiveDecodingTable {
    readonly decodingScheme:Dictionary<string, string>;
    decode(input:string) : string;
}
