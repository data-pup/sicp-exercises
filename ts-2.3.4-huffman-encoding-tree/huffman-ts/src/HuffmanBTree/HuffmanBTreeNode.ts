import { isNullOrUndefined } from 'util';
import { IHuffmanBTreeNode } from './IHuffmanBTreeNode';
import { ICharFreqRecord } from '../CharFreqQueue/ICharFreqRecord';
import {
    validateIHuffmanBTreeNode,
} from './Validation/checkHuffmanNodeValidity';
import { NodeCheckResult } from './Validation/NodeCheckResult';

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
    public readonly checkResults:NodeCheckResult;

    // Constructor definition.
    constructor(children:string[], weight:number,
                left:HuffmanBTreeNode = undefined,
                right:HuffmanBTreeNode = undefined) {

        // Sort the children array if it has not already been sorted.
        this.tokens = children.sort();
        this.weight = weight;
        this.left = left;
        this.right = right;

        // Check that the object is a valid node.
        this.checkResults = validateIHuffmanBTreeNode(this);
        if (!this.checkResults.isValid) {
            // Reset the properties if the validity check failed.
            this.tokens = undefined;
            this.weight = undefined;
            this.left = undefined;
            this.right = undefined;
        }
    }

    // Helper method used for the isLeaf and IsEmpty methods.
    public hasChildren() : boolean {
        // Declare variables representing whether left or right children exist.
        const hasLeftChild:boolean = ! isNullOrUndefined(this.left);
        const hasRightChild:boolean = ! isNullOrUndefined(this.right);
        // Return false if a left or right child exist. Otherwise, return true.
        if (hasLeftChild || hasRightChild) {
            return true;
        } else {
            return false;
        }
    }

    // Returns a boolean value representing whether or not the token
    // array has been initialized and contains a single token.
    public hasSingleToken() : boolean {
        if (!this.hasTokens()) { return false; }
        if (this.tokens.length != 1) { return false; }
        return true;
    }

    // Returns a boolean value representing whether or not the
    // token array has been initialized and contains any data.
    public hasTokens() : boolean {
        if (isNullOrUndefined(this.tokens)) { return false; }
        if (this.tokens.length === 0) { return false; }
        return true;
    }

    // Returns a boolean value representing whether a weight value exists.
    public hasWeight() : boolean {
        if (this.weight > 0) { return true; }
        return false;
    }

    // Return true or false depending on whether or not the tree is empty.
    public isEmpty() : boolean {
        // Return false if the node has any children or a token list.
        if (this.hasChildren()) { return false; }
        if (this.hasTokens()) { return false; }
        return true; // Otherwise, return true.
    }

    // Return true or false depending on whether or not `this` is a leaf node.
    public isLeaf() : boolean {
        // Return false if the node has any children.
        if (this.hasChildren()) { return false; }
        if (!this.hasSingleToken()) { return false; }
        return true;
    }

}
