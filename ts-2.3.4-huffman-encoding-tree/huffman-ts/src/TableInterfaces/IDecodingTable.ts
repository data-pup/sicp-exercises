import { Dictionary } from 'typescript-collections';

export interface IDecodingTable {
    readonly decodingScheme:Dictionary<string, string>;
    decode(input:string) : string;

    // Tags: These are used to identify specific types of tables.
    readonly method:string;
    readonly type:string;
}
