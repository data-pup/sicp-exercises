import { Dictionary } from 'typescript-collections';
import { createEncodingDictionary } from './createEncodingDictionary';
import { encodeInputString } from '../GenericLogic/encodeData';
import { IEncodingTable } from '../Interfaces/IEncodingTable';
import { IHuffmanBTreeNode } from '../../HuffmanBTree/IHuffmanBTreeNode';

export class EncodingTable implements IEncodingTable {

    public readonly encodingScheme:Dictionary<string, string>;
    public readonly method:string;
    public readonly type:string;

    public encode(input:string) : string {
        return encodeInputString(input, this.encodingScheme);
    }

    public getScheme() : Dictionary<string, string> {
        return this.encodingScheme;
    }

    constructor(huffmanTree:IHuffmanBTreeNode) {
        this.encodingScheme = createEncodingDictionary(huffmanTree, '1');
        this.method = 'huffman';
        this.type = 'encoding';
    }

}
