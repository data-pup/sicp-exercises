import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNodeIsLeaf {

    @test public testIsLeafForSingleNode() {
        const exampleLeaf = new HuffmanBTreeNode(['a'], 1);
        assert.isTrue(exampleLeaf.isLeaf());
    }

    @test public testIsLeafForSimpleTree() {
        // Create two leaf nodes and a parent node by merging the two trees.
        const leftChild = new HuffmanBTreeNode(['a'], 1);
        const rightChild = new HuffmanBTreeNode(['b'], 1);
        const parentNode = HuffmanBTreeNode.mergeTrees(leftChild, rightChild);

        // Check that the leaf nodes are considered as such, and that the
        // parent node is not considered to be a leaf node.
        assert.isTrue(leftChild.isLeaf());
        assert.isTrue(rightChild.isLeaf());
        assert.isFalse(parentNode.isLeaf());
    }

    @test public testIsLeafForNodeWithOneChild() {
        // Create a child node and create a parent node.
        const firstLeafNode = new HuffmanBTreeNode(['b'], 1);
        const secondLeafNode = new HuffmanBTreeNode(['c'], 1);
        const childNode = new HuffmanBTreeNode(['b', 'c'], 2,
                                               firstLeafNode, secondLeafNode);
        const parentNode = new HuffmanBTreeNode(['b', 'c'], 3,
                                                childNode, undefined);

        // Assert that the parent node is not identified as a leaf.
        assert.isFalse(parentNode.isLeaf());

        // Check that the isLeaf() method is correct for the other nodes.
        assert.isFalse(childNode.isLeaf());
        assert.isTrue(firstLeafNode.isLeaf());
        assert.isTrue(secondLeafNode.isLeaf());
    }

}
