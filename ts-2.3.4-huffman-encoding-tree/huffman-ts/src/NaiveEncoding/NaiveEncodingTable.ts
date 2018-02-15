import { Dictionary } from 'typescript-collections';
import { INaiveEncodingTable } from './INaiveEncodingTable';
import { IHuffmanBTreeNode } from '../HuffmanBTree/IHuffmanBTreeNode';

export class NaiveEncodingTable implements INaiveEncodingTable {

    public readonly encodingScheme:Dictionary<string, string>;

    public encode(input:string) : string {
        throw new Error('Not Implemented Error');
    }

    constructor (huffmanTree:IHuffmanBTreeNode) {
        throw new Error('Not Implemented Error');
    }
}
