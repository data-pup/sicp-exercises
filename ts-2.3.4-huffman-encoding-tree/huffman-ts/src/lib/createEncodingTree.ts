import { PriorityQueue } from "typescript-collections";
import { ICharFreqRecord } from "../interfaces/ICharFreqRecord";

class HuffmanBTreeNode {

    // Create a leaf node using a frequency record.
    public static fromCharFreqRecord(data: ICharFreqRecord): HuffmanBTreeNode {
        return new this (
            new Array<string> (data.getCharacter()), // Child token array.
            data.getOccurences(), // Cummulative weight value.
            null, // Empty left pointer.
            null  // Empty right pointer.
        );
    }

    // Merge two existing trees/nodes into a new Huffman tree.
    public static mergeTrees(left: HuffmanBTreeNode, right: HuffmanBTreeNode)
                                 : HuffmanBTreeNode {
        // TODO ...
        return new this ([], 0, null, null); // TEMP: Satiate the type system.
    }

    // Public member variables.
    public childVals: string[];
    public nodeWeight: number;
    public left: HuffmanBTreeNode;
    public right: HuffmanBTreeNode;

    // Constructor definition.
    constructor(children: string[], weight: number,
                left: HuffmanBTreeNode, right: HuffmanBTreeNode) {
        this.nodeWeight = weight;
        this.childVals = children;
        this.left = null;
        this.right = null;
    }
}

export const createEncodingTree = (): void => {
    process.stdout.write("Hello encoding function\n");
};
