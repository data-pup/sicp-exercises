import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { PriorityQueue } from 'typescript-collections';
import { assertArraysAreEqual } from './testUtils/assertArraysAreEqual';
import { CharFreqRecord } from '../src/classes/CharFreqRecord';
import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';
import { compareCharFreqRecords } from '../src/lib/compareCharFreqRecords';
import { initializeHuffmanEncodingTree } from '../src/lib/initEncodingTree';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestInitEncodingTree {

    @test public checkEncodingTreeIsEmptyForEmptyPriorityQueue() {
        // Initialize a priority queue that will use the given comparison
        // function to sort the character frequency records.
        const testQueue = new PriorityQueue<CharFreqRecord>(
            compareCharFreqRecords);

        // Create an encoding tree for the empty priority queue.
        const encodingTree:HuffmanBTreeNode = initializeHuffmanEncodingTree(
            testQueue);

        // Assert that the root node's cummulative weight is 0.
        const expectedCummulativeWeight = 0;
        assert.equal(encodingTree.nodeWeight, expectedCummulativeWeight);

        // Check that the child token array is empty.
        assertArraysAreEqual(encodingTree.childVals, []);

        // Check that the child pointers are undefined.
        assert.isUndefined(encodingTree.left);
        assert.isUndefined(encodingTree.right);
    }

    @test public testEncodingTreeCreationForSimpleQueue() {
        // Initialize a priority queue to store test data.
        const testQueue = new PriorityQueue<CharFreqRecord>(
            compareCharFreqRecords);

        // Push some character frequency records onto the stack.
        testQueue.enqueue(new CharFreqRecord('a', 3));
        testQueue.enqueue(new CharFreqRecord('b', 2));
        testQueue.enqueue(new CharFreqRecord('c', 1));

        // Create an encoding tree using the testing priority queue.
        const encodingTree:HuffmanBTreeNode = initializeHuffmanEncodingTree(
            testQueue);

        // Expected encoding tree structure:
        // | -------------------------------------- |
        // |          [a, b, c] : 6                 |
        // |         /             \                |
        // |    [a] : 3          [b, c] : 3         |
        // |                    /          \        |
        // |                [b] : 2    [c] : 1      |
        // |                                        |
        // | -------------------------------------- |

        // Check the generated encoding tree matches the above structure:
        // --------------------------------------------------------------

        // Check that the root node contains [a, b, c] and has weight 6.
        const expectedRootWeight = 6;
        assert.equal(encodingTree.nodeWeight, expectedRootWeight);
        const expectedRootChildList = ['a', 'b', 'c'];
        assertArraysAreEqual(encodingTree.childVals, expectedRootChildList);

        // ...
    }

}
