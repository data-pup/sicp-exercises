import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';

// Test helper utilities imports.
import {
    assertNodeIsInInvalidState,
} from './testUtils/assertNodeIsInInvalidState';
import { assertArraysAreEqual } from './testUtils/assertArraysAreEqual';

// Huffman B-Tree and validation imports.
import { HuffmanBTreeNode } from '../src/HuffmanBTree/HuffmanBTreeNode';
import {
    InvalidNodeErrorMessages,
} from '../src/HuffmanBTreeValidation/invalidNodeErrorMessages';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNodeMergeTrees {

    @test public testBasicMergeOfTwoLeafNodes() {
        // Initialize two child nodes and merge them into a new tree.
        const leftChild = new HuffmanBTreeNode(['a'], 1);
        const rightChild = new HuffmanBTreeNode(['b'], 1);
        const parentNode:HuffmanBTreeNode = HuffmanBTreeNode.mergeTrees(
            leftChild, rightChild);

        // Assert that the child pointers point to the child objects.
        assert.deepEqual(leftChild, parentNode.left);
        assert.deepEqual(rightChild, parentNode.right);

        // Assert that the parent node's weight is correct.
        const expectedWeight = 2;
        assert.equal(parentNode.weight, expectedWeight);

        // Assert that the parent node's children array is correct.
        const expectedChildren = ['a', 'b'];
        assertArraysAreEqual(parentNode.tokens, expectedChildren);
    }

    @test public testMergeOfLeafAndTreeOfHeight2() {
        // -------------------------------------
        //       Example Huffman Tree Structure:
        //            [a, b, c] : 3
        //           /              \
        //      [a] : 1        [b, c] : 2
        //                    /          \
        //               [b] : 1      [c] : 1
        // -------------------------------------

        // Initialize the tree shown above.
        const hbtRightLeftLeaf = new HuffmanBTreeNode(['b'], 1);
        const hbtRightRightLeaf = new HuffmanBTreeNode(['c'], 1);
        const rightChild = HuffmanBTreeNode.mergeTrees(
            hbtRightLeftLeaf, hbtRightRightLeaf);
        const leftChild = new HuffmanBTreeNode(['a'], 1);
        const rootNode = HuffmanBTreeNode.mergeTrees(
            leftChild, rightChild);

        // First, test that the root node's properties are correct.
        const expectedRootChildArray = ['a', 'b', 'c']; // Check children array.
        assertArraysAreEqual(rootNode.tokens, expectedRootChildArray);
        const expectedRootWeight = 3; // Check the root node's weight value.
        assert.equal(rootNode.weight, expectedRootWeight);
        assert.deepEqual(rootNode.left, leftChild); // Check the child pointers.
        assert.deepEqual(rootNode.right, rightChild);

        // Next, check the properties of the left child node.
        const expectedLeftChildChildren = ['a'];
        assertArraysAreEqual( // Check the left child's token array.
            rootNode.left.tokens, expectedLeftChildChildren);
        const expectedLeftChildWeight = 1; // Check the left child's weight.
        assert.equal(rootNode.left.weight, expectedLeftChildWeight);
        assert.deepEqual(rootNode.left, leftChild);

        // Check the properties of the right child node.
        const expectedRightChildChildren = ['b', 'c'];
        assertArraysAreEqual( // Check the right child's token array.
            rootNode.right.tokens, expectedRightChildChildren);
        const expectedRightChildWeight = 2;
        assert.equal(rootNode.right.weight, expectedRightChildWeight);
        assert.deepEqual(rootNode.right, rightChild);

        // Check that the leaf node at (root -> right -> left) is correct.
        assertArraysAreEqual(rootNode.right.left.tokens, ['b']);
        assert.equal(rootNode.right.left.weight, 1);
        assert.deepEqual(rootNode.right.left, hbtRightLeftLeaf);

        // Check that the leaf node at (root -> right -> right) is correct.
        assertArraysAreEqual(rootNode.right.right.tokens, ['c']);
        assert.equal(rootNode.right.right.weight, 1);
        assert.deepEqual(rootNode.right.right, hbtRightRightLeaf);

        // Check that each leaf node has no defined child pointers.
        assert.isUndefined(rootNode.left.left);
        assert.isUndefined(rootNode.left.right);
        assert.isUndefined(rootNode.right.left.left);
        assert.isUndefined(rootNode.right.left.right);
        assert.isUndefined(rootNode.right.right.left);
        assert.isUndefined(rootNode.right.right.right);
    }

    @test public testMergeOfTwoLeafNodesWithDuplicateTokensFails() {
        // Create two new child nodes with identical token arrays.
        const [leftChild, rightChild] = [
            new HuffmanBTreeNode(['a'], 1, undefined, undefined),
            new HuffmanBTreeNode(['a'], 1, undefined, undefined),
        ];

        // Attempt to merge the two leaf nodes into a single tree.
        const invalidParent = HuffmanBTreeNode.mergeTrees(
            leftChild, rightChild);

        // Check that node was correctly recognized as invalid.
        assertNodeIsInInvalidState(invalidParent);
        assert.equal(
            invalidParent.checkResults.message,
            InvalidNodeErrorMessages.parentNodeHasDuplicateTokens,
            'Parent node with duplicate tokens was not correctly identified',
        );
    }

}
