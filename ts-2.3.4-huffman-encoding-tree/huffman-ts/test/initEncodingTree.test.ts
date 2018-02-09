import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { PriorityQueue } from 'typescript-collections';
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

        // Assert that the tree is empty as expected.
        const expectedCummulativeWeight = 0; // Check that the weight is 0.
        assert.equal(encodingTree.nodeWeight, expectedCummulativeWeight);
        assert.isUndefined(encodingTree.left);  // Check that the child pointers
        assert.isUndefined(encodingTree.right); // are undefined.
    }
}
