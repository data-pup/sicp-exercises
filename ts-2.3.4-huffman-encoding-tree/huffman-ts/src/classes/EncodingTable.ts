import { Dictionary } from 'typescript-collections';
import { IEncodingTable } from '../interfaces/IEncodingTable';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';
import { createEncodingDictionary } from '../lib/createEncodingDictionary';

export class EncodingTable implements IEncodingTable {

    public readonly encodingScheme:Dictionary<string, string>;

    public encode(input:string) : string {
        const inputChars = input.split('');
        const encodedChars = inputChars.map((char) => {
            return this.encodingScheme.getValue(char);
        });
        const encodedOutput = encodedChars.join();
        return encodedOutput;
    }

    constructor(huffmanTree:IHuffmanBTreeNode) {
        this.encodingScheme = createEncodingDictionary(huffmanTree, '1');
    }

}
