import { ICharFreqRecord } from '../interfaces/ICharFreqRecord';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';

export class HuffmanBTreeNode implements IHuffmanBTreeNode  {

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
        // Create a new `children` array by concatenating and sorting the
        // children arrays in the left and right child nodes.
        const parentChildren = [ ...left.tokens, ...right.tokens ].sort();
        // Calculate the cummulative weight of the parent node.
        const parentWeight = left.weight + right.weight;
        // Return a new parent node that contains both of the given trees.
        return new this (parentChildren, parentWeight, left, right);
    }

    // Public member variables.
    public readonly tokens:string[];
    public readonly weight:number;
    public readonly left:HuffmanBTreeNode;
    public readonly right:HuffmanBTreeNode;

    // Constructor definition.
    constructor(children:string[], weight:number,
                left:HuffmanBTreeNode = undefined,
                right:HuffmanBTreeNode = undefined) {
        // Sort the children array if it has not already been sorted.
        this.tokens = children.sort();
        this.weight = weight;
        this.left = left;
        this.right = right;
    }

}
