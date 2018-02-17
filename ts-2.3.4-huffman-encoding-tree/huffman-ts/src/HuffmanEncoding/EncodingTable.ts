import { Dictionary } from 'typescript-collections';
import { createEncodingDictionary } from './createEncodingDictionary';
import { IEncodingTable } from './IEncodingTable';
import { encodeInputString } from '../GenericConversionLogic/encodeData';
import { IHuffmanBTreeNode } from '../HuffmanBTree/IHuffmanBTreeNode';

export class EncodingTable implements IEncodingTable {

    public readonly encodingScheme:Dictionary<string, string>;

    public encode(input:string) : string {
        return encodeInputString(input, this.encodingScheme);
    }

    constructor(huffmanTree:IHuffmanBTreeNode) {
        this.encodingScheme = createEncodingDictionary(huffmanTree, '1');
    }

}
