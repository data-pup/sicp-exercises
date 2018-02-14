import { assert } from 'chai';
import { IHuffmanBTreeNode } from '../../src/HuffmanBTree/IHuffmanBTreeNode';

export const assertNodeIsInInvalidState = (node:IHuffmanBTreeNode) : void => {
    // Check that the child pointers, token list, and weight are undefined.
    assert.isUndefined(node.left);
    assert.isUndefined(node.right);
    assert.isUndefined(node.weight);
    assert.isUndefined(node.tokens);

    // Assert that the results object has its validity flag set to false.
    assert.isFalse(node.checkResults.isValid);
};
