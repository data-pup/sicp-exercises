import { Dictionary } from 'typescript-collections';

export interface INaiveEncodingTable {
    readonly encodingScheme:Dictionary<string, string>;
    encode(input:string) : string;
}
