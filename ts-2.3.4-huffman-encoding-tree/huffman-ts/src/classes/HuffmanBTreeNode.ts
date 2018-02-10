import { ICharFreqRecord } from '../interfaces/ICharFreqRecord';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';
import { isNullOrUndefined } from 'util';

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

    // Return true or false depending on whether or not `this` is a leaf node.
    public isLeaf() : boolean {
        // Initialize variables to represent whether the node has defined
        // children, and whether it has exactly one token in its tokens list.
        const hasLeftChild:boolean = ! isNullOrUndefined(this.left);
        const hasRightChild:boolean = ! isNullOrUndefined(this.right);
        const hasOneToken = (!isNullOrUndefined(this.tokens))
            && (this.tokens.length === 1);

        // Return true if the node has no left or right child, and contains
        // only one token in its tokens array. Otherwise return false.
        return (
            (!hasLeftChild)
            && (!hasRightChild)
            && hasOneToken
        );
    }

    // Return true or false depending on whether or not the tree is empty.
    public isEmpty() : boolean {
        // Return false if a left or right child node reference exist.
        if (!isNullOrUndefined(this.left) || !isNullOrUndefined(this.right)) {
            return false;
        }

        // Retuurn false if token list exists and is not empty.
        if (!isNullOrUndefined(this.tokens) && this.tokens.length != 0) {
            return false;
        }

        return true; // Otherwise, return true.
    }

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
