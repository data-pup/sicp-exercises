import { Dictionary } from 'typescript-collections';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';
import { IEncodingTable } from '../interfaces/IEncodingTable';

export class EncodingTable implements IEncodingTable {

    public data:Dictionary<string, string>;

    constructor(tree:IHuffmanBTreeNode) {
        this.data = new Dictionary<string, string>();
    }
}
