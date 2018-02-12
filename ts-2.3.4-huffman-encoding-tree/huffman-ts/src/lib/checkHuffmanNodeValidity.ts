/* Checking validity of Huffman encoding tree nodes:
 * ----------------------------------------------------------------------------
 * First, check if the node has any children. (Are left/right both undefined?)
 * If the node has children, check if it is a valid parent node. Otherwise,
 * check if the node is a valid leaf node or an empty tree.
 *
 * Parent Node Check:
 *   - Token array should contain more than 1 item.
 *   - Token array should contain no duplicates.
 *   - Every token should be in either the right or left child token array.
 *   - No token in the token array should appear in both of the child arrays.
 *   - Weight value should equal the sum of the left/right children weights.
 *
 * Leaf Node Check:
 *   - If the node is an empty tree, it should have no weight and no tokens.
 *   - If the node is a leaf node, it should have one token and a valid weight.
 *
 * If the node does not match its corresponding requirements, it is not a
 * validly initialized Huffman encoding tree node.
 *
 * ----------------------------------------------------------------------------
*/

import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';

// This function will validate an Huffman encoding tree node.
export const validateIHuffmanBTreeNode = (node:IHuffmanBTreeNode) : void => {
    if (this.hasChildren()) {
        validateParentNode(node);
    } else {
        validateLeafNode(node);
    }
};

// This function is used to identify whether a leaf node is valid.
const validateLeafNode = (node:IHuffmanBTreeNode) : void => {
    // If the node does not have children, it must either be an empty
    // tree, or a validly initialized leaf node.
    if (this.hasTokens()) {
        // A node with no children and a token array must only contain
        // a single token and a non-zero weight.
        if (!this.hasSingleToken()) {
            throw new Error(
                'Leaf nodes cannot contain multiple tokens!');
        }
        // A leaf node with a single token must have a non-zero weight.
        if (!this.hasWeight()) {
            throw new Error('Leaf node must have a non-zero weight!');
        }
    } else {
        if (this.hasWeight()) {
            throw new Error('Empty tree cannot have a weight value!');
        }
    }
};

const validateParentNode = (node:IHuffmanBTreeNode) : void => {
    // If the node has children, it must have a token array.
    if (!this.hasTokens()) {
        throw new Error('Parent node must have a token array!');
    }
    // If the node has children, it should not have a single token.
    if (this.hasSingleToken()) {
        throw new Error('Extraneous parent node detected!');
    }
    // A parent node must have a non-zero weight value.
    if (!this.hasWeight()) {
        throw new Error('Parent node must have a non-zero weight!');
    }
};
