import { assert } from 'chai';
import { IHuffmanBTreeNode } from '../../src/interfaces/IHuffmanBTreeNode';

export const assertNodeIsInInvalidState = (node:IHuffmanBTreeNode) : void => {
    // Check that the child pointers, token list, and weight are undefined.
    assert.isUndefined(node.left);
    assert.isUndefined(node.right);
    assert.isUndefined(node.weight);
    assert.isUndefined(node.tokens);
};
