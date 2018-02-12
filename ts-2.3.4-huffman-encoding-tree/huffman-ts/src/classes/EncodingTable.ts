import { Dictionary } from 'typescript-collections';
import { IEncodingTable } from '../interfaces/IEncodingTable';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';

export class EncodingTable implements IEncodingTable {

    private static getEncodingValues(encodingTree:IHuffmanBTreeNode,
                                     prefix:string)
                                    : Dictionary<string, string> {
        // TEMP: Raise an error until this is implemented.
        throw new Error('Not Implemented');

        // Initialize a new dictionary object for the encoding values.
        // const encodingDict = new Dictionary<string, string>();

        // // If the encoding tree is empty, return an empty dictionary.
        // if (encodingTree.isEmpty()) {
        //     return encodingDict;
        // }

        // // Process the encoding tree if it is a single leaf node.
        // if (encodingTree.isLeaf()) {
        //     const token:string = encodingTree.tokens[0];
        //     const encodingDict = new Dictionary<string, string>();
        //     encodingDict.setValue(token, prefix);
        //     return encodingDict;
        // } else {
        //     throw new Error('Parent node encoding branch not implemented.')
        //     // Create left and right prefixes for the child trees.
        //     // const leftPrefix = prefix.concat('0');
        //     // const rightPrefix = prefix.concat('1');
        // }
    }

    // Helper method, returns the encoding dictionary for a leaf node.
    // private static getLeafNodeEncodingValue(node:IHuffmanBTreeNode,
    //                                         prefix:string)
    //                                         : Dictionary<string, string> {
    //     throw new Error('Leaf node encoding logic not implemented.');
    // }

    // Helper method, returns the encoding dictionary for a parent node.
    // This recurses down the left and right child trees and merges the
    // resulting dictionaries.
    // private static getChildrenEncodingValues(parentNode:IHuffmanBTreeNode,
    //                                          prefix:string)
    //                                          : Dictionary<string, string> {
    //     throw new Error('Leaf node encoding logic not implemented.');
    // }

    public data:Dictionary<string, string>;

    public encode(input:string) : string {
        throw new Error('Not Implemented.');
    }

    constructor(tree:IHuffmanBTreeNode) {
        this.data = new Dictionary<string, string>();
    }

}
