import { PriorityQueue } from 'typescript-collections';
import { ICharFreqRecord } from '../interfaces/ICharFreqRecord';

export class HuffmanBTreeNode {

    // Create an encoding tree using a ICharFreqRecord priority queue.
    public static fromCFRQueue(cfrQueue:PriorityQueue<ICharFreqRecord>) {
        throw new Error('Not Yet Implemented!');
    }

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
        const parentChildren = [ ...left.childVals, ...right.childVals ].sort();
        // Calculate the cummulative weight of the parent node.
        const parentWeight = left.nodeWeight + right.nodeWeight;
        // Return a new parent node that contains both of the given trees.
        return new this (parentChildren, parentWeight, left, right);
    }

    // Public member variables.
    public readonly childVals:string[];
    public readonly nodeWeight:number;
    public readonly left:HuffmanBTreeNode;
    public readonly right:HuffmanBTreeNode;

    // Constructor definition.
    constructor(children:string[], weight:number,
                left:HuffmanBTreeNode = undefined,
                right:HuffmanBTreeNode = undefined) {
        // Sort the children array if it has not already been sorted.
        this.childVals = children.sort();
        this.nodeWeight = weight;
        this.left = left;
        this.right = right;
    }

}
