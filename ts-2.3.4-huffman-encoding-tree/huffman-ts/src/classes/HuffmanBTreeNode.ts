import { ICharFreqRecord } from '../interfaces/ICharFreqRecord';

export class HuffmanBTreeNode {

    // Create a leaf node using a frequency record.
    public static fromCharFreqRecord(data:ICharFreqRecord) : HuffmanBTreeNode {
        return new this (
            new Array<string> (data.getCharacter()), // Child token array.
            data.getOccurences(), // Cummulative weight value.
            undefined, // Empty left pointer.
            undefined,  // Empty right pointer.
        );
    }

    // Merge two existing trees/nodes into a new Huffman tree.
    public static mergeTrees(left:HuffmanBTreeNode, right:HuffmanBTreeNode)
                                 : HuffmanBTreeNode {
        // TODO ...
        return new this ([], 0, undefined, undefined); // TEMP: Satiate the type system.
    }

    // Public member variables.
    public childVals:string[];
    public nodeWeight:number;
    public left:HuffmanBTreeNode;
    public right:HuffmanBTreeNode;

    // Constructor definition.
    constructor(children:string[], weight:number,
                left:HuffmanBTreeNode, right:HuffmanBTreeNode) {
        this.childVals = children;
        this.nodeWeight = weight;
        this.left = undefined;
        this.right = undefined;
    }
}
