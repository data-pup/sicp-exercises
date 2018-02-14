import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { Dictionary } from 'typescript-collections';
import { initializeQueue } from '../src/CharFreqQueue/initCharFreqQueue';
import { DecodingTable } from '../src/HuffmanDecoding/DecodingTable';
import { EncodingTable } from '../src/HuffmanEncoding/EncodingTable';
import {
    initializeHuffmanEncodingTree,
} from '../src/HuffmanBTree/initEncodingTree';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestDecodingTable {

    @test public testDecodingSchemeGeneration() {
        assert.equal(1, 1, 'Placeholder Test');
        // Expected Decoding Table:
        // ---------------------------------------------------------
        // | 10 -> a                                               |
        // | 110 -> b                                              |
        // | 111 -> c                                              |
        // ---------------------------------------------------------
        // NOTE: See EncodingTable test suite for more information.
        // ---------------------------------------------------------

        // Initialize the input string.
        const testString = 'aaabbc';

        // Initialize a priority queue using the given test string.
        const freqQueue = initializeQueue(testString);

        // Initialize an encoding tree.
        const encodingTree = initializeHuffmanEncodingTree(freqQueue);

        // Initialize an encoding table.
        const encoder = new EncodingTable(encodingTree);

        // Use the encoding table to create a decoding table.
        const decoder = new DecodingTable(encoder);

        // Initialize a dictionary containing the expected decoding scheme.
        const expectedDecodings = new Dictionary<string, string>();
        expectedDecodings.setValue('10', 'a');
        expectedDecodings.setValue('110', 'b');
        expectedDecodings.setValue('111', 'c');

        // Check that each entry in the actual decoding table matches the
        // corresponding entry in the collection of expected entries.
        expectedDecodings.forEach((encoding, expectedChar) => {
            const actualChar = decoder.decodingScheme.getValue(encoding);
            assert.equal(actualChar, expectedChar);
        });
    }

}
