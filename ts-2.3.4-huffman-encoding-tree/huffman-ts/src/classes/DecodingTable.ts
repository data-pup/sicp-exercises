import { Dictionary } from 'typescript-collections';
import { IDecodingTable } from '../interfaces/IDecodingTable';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';

// Disabled import, factory method to be implemented later.
// import { IEncodingTable } from '../interfaces/IEncodingTable';

export class DecodingTable implements IDecodingTable {

    public data:Dictionary<string, string>;

    public decode(input:string) : string {
        throw new Error('Not Implemented.');
    }

    constructor(tree:IHuffmanBTreeNode) {
        this.data = new Dictionary<string, string>();
    }
}
