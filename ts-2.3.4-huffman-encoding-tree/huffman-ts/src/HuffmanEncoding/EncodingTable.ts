import { Dictionary } from 'typescript-collections';
import { createEncodingDictionary } from './createEncodingDictionary';
import { encodeInputString } from '../GenericConversionLogic/encodeData';
import { IHuffmanBTreeNode } from '../HuffmanBTree/IHuffmanBTreeNode';
import { IEncodingTable } from '../TableInterfaces/IEncodingTable';

export class EncodingTable implements IEncodingTable {

    public readonly encodingScheme:Dictionary<string, string>;
    public readonly method:string;
    public readonly type:string;

    public encode(input:string) : string {
        return encodeInputString(input, this.encodingScheme);
    }

    constructor(huffmanTree:IHuffmanBTreeNode) {
        this.encodingScheme = createEncodingDictionary(huffmanTree, '1');
        this.method = 'huffman';
        this.type = 'encoding';
    }

}
