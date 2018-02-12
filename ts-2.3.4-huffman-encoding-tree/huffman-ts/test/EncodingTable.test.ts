import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
// import { initializeQueue } from '../src/lib/initCharFreqQueue';
// import { initializeHuffmanEncodingTree } from '../src/lib/initEncodingTree';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestEncodingTable {
    @test public testBasicEncodingTableCreation() {
        // const testString = 'aaabbc';

        // Input String: 'aaabbc' -> Expected Huffman Encoding Tree:
        // ---------------------------------------------------------
        // |                [a, b, c] : 6                          |
        // |               /             \                         |
        // |           [a] : 3     [b, c] : 3                      |
        // |                      /          \                     |
        // |                 [b] : 2     [c] : 1                   |
        // ---------------------------------------------------------

        // Initialize a priority queue using the given test string.
        // const freqQueue = initializeQueue(testString);

        // Initialize an encoding tree.
        // const encodingTree = initializeHuffmanEncodingTree(freqQueue);

        // Initialize an encoding table.
        // todo ...

        // Assert that the encoding scheme is correct.
        // todo ...

        // Placeholder assertion. (Linting.)
        assert.equal(1, 1, 'Temporary placeholder.');
    }
}
