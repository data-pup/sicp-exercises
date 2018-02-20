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

import { isNullOrUndefined } from 'util';
import { InvalidNodeErrorMessages } from './invalidNodeErrorMessages';
import { NodeCheckResult } from './NodeCheckResult';
import { IHuffmanBTreeNode } from '../IHuffmanBTreeNode';

// This function will validate an Huffman encoding tree node.
// Note that this is not a deep check, this does not check the children
// nodes' validity, if they do exist.
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
            false, InvalidNodeErrorMessages.leafNodeHasInvalidWeight);
    }

    // Return a node check result object representing a valid Huffman node.
    return new NodeCheckResult(true, undefined);
};

// This function is used to identify whether a parent node is valid.
const validateParentNode = (node:IHuffmanBTreeNode) : NodeCheckResult => {
    // Check the parent node's tokens. If a test fails, return the error.
    const tokenCheckResult:NodeCheckResult = validateParentNodeTokens(node);
    if (!tokenCheckResult.isValid) { return tokenCheckResult; }

    // Check the parent node's weight. If a test fails, return the error.
    const weightCheckResult:NodeCheckResult = validateParentNodeWeight(node);
    if (!weightCheckResult.isValid) { return weightCheckResult; }

    // Return a node check result object representing a valid Huffman node.
    return new NodeCheckResult(true, undefined);
};

// Parent node check helper function, checks that the token array is valid.
const validateParentNodeTokens = (parentNode:IHuffmanBTreeNode)
                                 : NodeCheckResult => {
    // If the node has children, it must have a token array.
    if (!parentNode.hasTokens()) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.parentNodeIsMissingTokens);
    }

    // If the node has children, it should not have a single token.
    if (parentNode.hasSingleToken()) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.parentNodeIsExtraneous);
    }

    // A parent node should not have duplicate values in its token array.
    if (parentNodeHasDuplicateTokens(parentNode)) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.parentNodeHasDuplicateTokens);
    }

    // Return a check result representing a passed test if nothing failed.
    return new NodeCheckResult(true, undefined);
};

// Parent node check helper function, checks that the node weight is valid.
const validateParentNodeWeight = (parentNode:IHuffmanBTreeNode)
                                 : NodeCheckResult => {
    // A parent node must have a non-zero weight value.
    if (!parentNode.hasWeight()) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.parentNodeHasInvalidWeight);
    }

    // A parent node's weight must match the sum of its children.
    if (!parentWeightMatchesSumOfChildren(parentNode)) {
        return new NodeCheckResult(
            false, InvalidNodeErrorMessages.parentNodeHasInvalidWeight);
    }

    // Return a check result representing a passed test if nothing failed.
    return new NodeCheckResult(true, undefined);
};

// This function will check that the given node's weight matches the sum
// of its childrens' weight. This should not be invoked on a leaf node.
const parentWeightMatchesSumOfChildren = (parentNode:IHuffmanBTreeNode)
                                         : boolean => {
    // Declare a sum variable, and determine which children exist.
    const parentWeight = parentNode.weight;
    let childrenWeightSum = 0;
    const parentHasLeftChild:boolean = ! isNullOrUndefined(parentNode.left);
    const parentHasRightChild:boolean = ! isNullOrUndefined(parentNode.right);

    // Add the weights of the children that exist.
    if (parentHasLeftChild) { childrenWeightSum += parentNode.left.weight; }
    if (parentHasRightChild) { childrenWeightSum += parentNode.right.weight; }

    // Return true if the child weight sum matches the parent node's weight.
    if (parentWeight === childrenWeightSum) { return true; }
    return false; // Return false if the sum did not match the parent weight.
};

// This function will chech that a parent Huffman node does not have any
// duplicate values in its tokens array. The logic in this function
// is written based on the fact that the Huffman node's constructor sorts
// the token array before checking node state validity.
const parentNodeHasDuplicateTokens = (parentNode:IHuffmanBTreeNode)
                                     : boolean => {
    let previousToken:string = undefined; // Initialize a helper variable.

    // Iterate through the token array to check for duplicates.
    for (const currentToken of parentNode.tokens) {
        // If the current token matches the previous token, return true.
        if (currentToken === previousToken) { return true; }
        previousToken = currentToken;
    }

    return false; // If no duplicates were found, return false.
};
