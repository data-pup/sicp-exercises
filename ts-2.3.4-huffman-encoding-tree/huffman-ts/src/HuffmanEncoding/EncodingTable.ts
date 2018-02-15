import { Dictionary } from 'typescript-collections';
import { createEncodingDictionary } from './createEncodingDictionary';
import { IEncodingTable } from './IEncodingTable';
import { IHuffmanBTreeNode } from '../HuffmanBTree/IHuffmanBTreeNode';

export class EncodingTable implements IEncodingTable {

    public readonly encodingScheme:Dictionary<string, string>;

    public encode(input:string) : string {
        const inputChars = input.split('');
        const encodedChars = inputChars.map((char) => {
            return this.encodingScheme.getValue(char);
        });
        const encodedOutput = encodedChars.join('');
        return encodedOutput;
    }

    constructor(huffmanTree:IHuffmanBTreeNode) {
        this.encodingScheme = createEncodingDictionary(huffmanTree, '1');
    }

}
