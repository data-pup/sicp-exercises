import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNode {

    @test public testDefaultConstructor() {
        // Create an empty Huffman encoding tree.
        const emptyHuffmanTree = new HuffmanBTreeNode(
            [], 0, undefined, undefined);
        // Check that the variable is not null and is of the correct type.
        assert.isNotNull(emptyHuffmanTree);
        assert.typeOf(emptyHuffmanTree, 'HuffmanBTreeNode',
                      'Variable is not of correct type.');
        // Check that the child array is not null, and is empty.
        assert.isNotNull(emptyHuffmanTree.childVals);
        assert.isEmpty(emptyHuffmanTree.childVals);
        // Check that the weight value and child pointers are correct.
        assert.equal(emptyHuffmanTree.nodeWeight, 0);
        assert.isUndefined(emptyHuffmanTree.left, 'Left pointer should be null.');
        assert.isUndefined(emptyHuffmanTree.right, 'Right pointer should be null.');
    }

}
