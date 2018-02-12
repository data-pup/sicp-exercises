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

import { NodeCheckResult } from '../classes/NodeCheckResult';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';
import { InvalidNodeErrorMessages } from '../lib/invalidNodeErrorMessages';

// This function will validate an Huffman encoding tree node.
export const validateIHuffmanBTreeNode = (node:IHuffmanBTreeNode)
                                         : NodeCheckResult => {

    if (node.isEmpty()) { // If the node is an empty tree, it is valid.
        return new NodeCheckResult(true, undefined);
    }

    // If the node has children, check that it is a valid parent node.
    if (node.hasChildren()) {
        return validateParentNode(node);
    } else {
        // If the node has no children check that it is a valid leaf node.
        return validateLeafNode(node);
    }
};

// This function is used to identify whether a leaf node is valid.
const validateLeafNode = (node:IHuffmanBTreeNode) : NodeCheckResult => {
    // A node with no children and a token array must only contain
    // a single token and a non-zero weight.
    if (!node.hasSingleToken()) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.leafNodeHasMultipleTokens);
    }

    // A leaf node with a single token must have a non-zero weight.
    if (!node.hasWeight()) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.leafNodeIsMissingWeight);
    }

    // Return a node check result object representing a valid Huffman node.
    return new NodeCheckResult(true, undefined);
};

const validateParentNode = (node:IHuffmanBTreeNode) : NodeCheckResult => {
    // If the node has children, it must have a token array.
    if (!node.hasTokens()) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.parentNodeIsMissingWeight);
    }

    // If the node has children, it should not have a single token.
    if (node.hasSingleToken()) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.parentNodeIsExtraneous);
    }

    // A parent node must have a non-zero weight value.
    if (!node.hasWeight()) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.parentNodeIsMissingWeight);
    }

    // Return a node check result object representing a valid Huffman node.
    return new NodeCheckResult(true, undefined);
};
