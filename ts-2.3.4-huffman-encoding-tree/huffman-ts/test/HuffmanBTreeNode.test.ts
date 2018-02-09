import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';
import { CharFreqRecord } from '../src/classes/CharFreqRecord';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNode {

    private assertArraysAreEqual<T>(a:T[], b:T[]) : void {
        // Check the arrays are of equal length, then compare each element.
        assert.equal(a.length, b.length);
        for (let index = 0; index < a.length; index++) {
            assert.equal(a[index], b[index]);
        }
    }

    @test public testBasicConstructorCall() {
        // Create an empty Huffman encoding tree.
        const emptyHuffmanTree = new HuffmanBTreeNode(
            [], 0, undefined, undefined);
        // Check that the variable is not null and is of the correct type.
        assert.isNotNull(emptyHuffmanTree);
        // Check that the child array is not null, and is empty.
        assert.isNotNull(emptyHuffmanTree.childVals);
        assert.isEmpty(emptyHuffmanTree.childVals);
        // Check that the weight value and child pointers are correct.
        assert.equal(emptyHuffmanTree.nodeWeight, 0);
        assert.isUndefined(emptyHuffmanTree.left, 'Left pointer should be null.');
        assert.isUndefined(emptyHuffmanTree.right, 'Right pointer should be null.');
    }

    @test public testConstructorDefaultChildrenParameterValues() {
        const hbt = new HuffmanBTreeNode([], 0);
        assert.isUndefined(hbt.left);
        assert.isUndefined(hbt.right);
    }

    @test public testFromCharFreqRecord() {
        // Create a basic character frequency object, and use it to initialize
        // a new Huffman encoding tree for that single record.
        const cfr = new CharFreqRecord('a', 1);
        const hbt:HuffmanBTreeNode = HuffmanBTreeNode.fromCharFreqRecord(cfr);
        // Assert that the child pointers are undefined.
        assert.isUndefined(hbt.left);
        assert.isUndefined(hbt.right);
        // Assert that the node weight is correct.
        const expectedWeight:number = 1;
        assert.equal(hbt.nodeWeight, expectedWeight,
                     'Node weight should be 1.');
        // Assert that the child tokens array is correct.
        const expectedChildren:string[] = ['a'];
        this.assertArraysAreEqual(hbt.childVals, expectedChildren);
    }

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
        assert.equal(parentNode.nodeWeight, expectedWeight);
        // Assert that the parent node's children array is correct.
        const expectedChildren = ['a', 'b'];
        this.assertArraysAreEqual(parentNode.childVals, expectedChildren);
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
        this.assertArraysAreEqual(rootNode.childVals, expectedRootChildArray);
        const expectedRootWeight = 3; // Check the root node's weight value.
        assert.equal(rootNode.nodeWeight, expectedRootWeight);
        assert.deepEqual(rootNode.left, leftChild); // Check the child pointers.
        assert.deepEqual(rootNode.right, rightChild);

        // Next, check the properties of the left child node.
        const expectedLeftChildChildren = ['a'];
        this.assertArraysAreEqual( // Check the left child's token array.
            rootNode.left.childVals, expectedLeftChildChildren);
        const expectedLeftChildWeight = 1; // Check the left child's weight.
        assert.equal(rootNode.left.nodeWeight, expectedLeftChildWeight);
        assert.deepEqual(rootNode.left, leftChild);

        // Check the properties of the right child node.
        const expectedRightChildChildren = ['b', 'c'];
        this.assertArraysAreEqual( // Check the right child's token array.
            rootNode.right.childVals, expectedRightChildChildren);
        const expectedRightChildWeight = 2;
        assert.equal(rootNode.right.nodeWeight, expectedRightChildWeight);
        assert.deepEqual(rootNode.right, rightChild);

        // Check that the leaf node at (root -> right -> left) is correct.
        this.assertArraysAreEqual(rootNode.right.left.childVals, ['b']);
        assert.equal(rootNode.right.left.nodeWeight, 1);
        assert.deepEqual(rootNode.right.left, hbtRightLeftLeaf);

        // Check that the leaf node at (root -> right -> right) is correct.
        this.assertArraysAreEqual(rootNode.right.right.childVals, ['c']);
        assert.equal(rootNode.right.right.nodeWeight, 1);
        assert.deepEqual(rootNode.right.right, hbtRightRightLeaf);

        // Check that each leaf node has no defined child pointers.
        assert.isUndefined(rootNode.left.left);
        assert.isUndefined(rootNode.left.right);
        assert.isUndefined(rootNode.right.left.left);
        assert.isUndefined(rootNode.right.left.right);
        assert.isUndefined(rootNode.right.right.left);
        assert.isUndefined(rootNode.right.right.right);
    }
}
