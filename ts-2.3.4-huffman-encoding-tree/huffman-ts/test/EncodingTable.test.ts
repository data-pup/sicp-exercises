import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { Dictionary } from 'typescript-collections';
import { EncodingTable } from '../src/classes/EncodingTable';
import { initializeQueue } from '../src/lib/initCharFreqQueue';
import { initializeHuffmanEncodingTree } from '../src/lib/initEncodingTree';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestEncodingTable {

    @test public testBasicEncodingTableCreation() {
        // Input String: 'aaabbc' -> Expected Huffman Encoding Tree:
        // ---------------------------------------------------------
        // |                [a, b, c] : 6                          |
        // |               /             \                         |
        // |           [a] : 3     [b, c] : 3                      |
        // |                      /          \                     |
        // |                 [b] : 2     [c] : 1                   |
        // ---------------------------------------------------------

        // Expected Encoding Table:
        // ---------------------------------------------------------
        // | a -> 10                                               |
        // | b -> 110                                              |
        // | c -> 111                                              |
        // ---------------------------------------------------------

        // Initialize the input string.
        const testString = 'aaabbc';

        // Initialize a priority queue using the given test string.
        const freqQueue = initializeQueue(testString);

        // Initialize an encoding tree.
        const encodingTree = initializeHuffmanEncodingTree(freqQueue);

        // Initialize an encoding table.
        const encoder = new EncodingTable(encodingTree);

        // Initialize and fill a dictionary containing characters from
        // the test string and their respective encodings.
        const expectedEncodings = new Dictionary<string, string>();
        expectedEncodings.setValue('a', '10');
        expectedEncodings.setValue('b', '110');
        expectedEncodings.setValue('c', '111');

        // Assert the encoding scheme is correct by comparing the expected
        // and actual encoding for each key in the expected dictionary.
        expectedEncodings.forEach((char, expectedEncoding) : void => {
            // Get the character's actual encoding and assert is it correct.
            const actualEncoding:string = encoder.encode(char);
            assert.equal(actualEncoding, expectedEncoding);
        });

        // Manually initialize a string containing the expected encoding
        // of the test string, using the expected schema defined above.
        const expectedTestStringEncoding:string = [
            '10', '10', '10', '110', '110', '111',
        ].join();

        // Initialize a variable containing the actual test string encoding.
        const actualTestStringEncoding = encoder.encode(testString);

        // Assert the expected and actual test string encoding match.
        assert.equal(actualTestStringEncoding, expectedTestStringEncoding);
    }

}
