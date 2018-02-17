import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { HuffmanBTreeNode } from '../../src/HuffmanBTree/HuffmanBTreeNode';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNode {

    @test public testIsEmptyForBasicEmptyNode() {
        // Create a basic empty tree, assert that it is considered empty.
        const hbt = new HuffmanBTreeNode([], 0);
        assert.isTrue(hbt.isEmpty());
    }

    @test public testIsEmptyForLeafNode() {
        // Create a basic leaf node, assert that it is not considered empty.
        const hbt = new HuffmanBTreeNode(['a'], 1);
        assert.isFalse(hbt.isEmpty());
    }

    @test public testIsEmptyForParentNode() {
        const leftChild = new HuffmanBTreeNode(['a'], 1);
        const rightChild = new HuffmanBTreeNode(['b'], 1);
        const parentNode = HuffmanBTreeNode.mergeTrees(leftChild, rightChild);
        assert.isFalse(parentNode.isEmpty());
    }

}
