import { Dictionary } from 'typescript-collections';
import { IEncodingTable } from '../interfaces/IEncodingTable';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';

export class EncodingTable implements IEncodingTable {

    public data:Dictionary<string, string>;

    public encode(input:string) : string {
        throw new Error('Not Implemented.');
    }

    constructor(tree:IHuffmanBTreeNode) {
        this.data = new Dictionary<string, string>();
    }
}
