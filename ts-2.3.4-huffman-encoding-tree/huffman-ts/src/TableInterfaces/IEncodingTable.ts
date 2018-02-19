import { Dictionary } from 'typescript-collections';

export interface IEncodingTable {
    readonly encodingScheme:Dictionary<string, string>;
    encode(input:string) : string;

    // Tags: These are used to identify specific types of tables.
    readonly method:string;
    readonly type:string;
}
