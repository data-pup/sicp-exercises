import { Dictionary } from 'typescript-collections';
import { IEncodingTable } from '../interfaces/IEncodingTable';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';
import { createEncodingDictionary } from '../lib/createEncodingDictionary';

export class EncodingTable implements IEncodingTable {

    public readonly encodingScheme:Dictionary<string, string>;

    public encode(input:string) : string {
        throw new Error('Not Implemented.');
    }

    constructor(huffmanTree:IHuffmanBTreeNode) {
        this.encodingScheme = createEncodingDictionary(huffmanTree, '0');
    }

}
