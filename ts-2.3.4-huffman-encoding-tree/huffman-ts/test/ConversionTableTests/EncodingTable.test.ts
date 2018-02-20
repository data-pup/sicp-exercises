import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { Dictionary } from 'typescript-collections';
import {
    DecodingTable,
} from '../../src/ConversionTables/HuffmanTables/DecodingTable';
import {
    EncodingTable,
} from '../../src/ConversionTables/HuffmanTables/EncodingTable';
import {
    initializeQueue,
} from '../../src/HuffmanBTree/CharFreqQueue/initCharFreqQueue';
import {
    initializeHuffmanEncodingTree,
} from '../../src/HuffmanBTree/initEncodingTree';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestEncodingTable {

    @test public testUndefinedInputForEncodingTableConstructor() {
        const encoder = new EncodingTable(undefined);
        const encodingSchemeIsEmpty = encoder.encodingScheme.isEmpty();
        assert.isTrue(encodingSchemeIsEmpty);
    }

    @test public testEmptyEncodingTableCreation() {
        // Create an encoding table, given an empty test string.
        const testString = '';
        const freqQueue = initializeQueue(testString);
        const encodingTree = initializeHuffmanEncodingTree(freqQueue);
        const encoder = new EncodingTable(encodingTree);

        // Check that the encoding table is empty.
        const encodingSchemeIsEmpty = encoder.encodingScheme.isEmpty();
        assert.isTrue(encodingSchemeIsEmpty);
    }

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
        ].join('');

        // Initialize a variable containing the actual test string encoding.
        const actualTestStringEncoding = encoder.encode(testString);

        // Assert the expected and actual test string encoding match.
        assert.equal(actualTestStringEncoding, expectedTestStringEncoding);
    }

    @test public testEncodingTableCreationForNonTrivialString() {
        // Input String: aaabbbcccdddeeefffggghhhiii
        // ----------------------------------------------------
        // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ] : 27
        // │    ├──[ 'a', 'b', 'c', 'h', 'i' ] : 15
        // │    │    ├──[ 'a', 'h', 'i' ] : 9
        // │    │    │    ├──[ 'h', 'i' ] : 6
        // │    │    │    │    ├──[ 'i' ] : 3
        // │    │    │    │    ├──[ 'h' ] : 3
        // │    │    │    ├──[ 'a' ] : 3
        // │    │    ├──[ 'b', 'c' ] : 6
        // │    │    │    ├──[ 'c' ] : 3
        // │    │    │    ├──[ 'b' ] : 3
        // │    ├──[ 'd', 'e', 'f', 'g' ] : 12
        // │    │    ├──[ 'd', 'e' ] : 6
        // │    │    │    ├──[ 'e' ] : 3
        // │    │    │    ├──[ 'd' ] : 3
        // │    │    ├──[ 'f', 'g' ] : 6
        // │    │    │    ├──[ 'g' ] : 3
        // │    │    │    ├──[ 'f' ] : 3
        // -----------------------------------------------------------------
        // This test case is designed to cause a situation where
        // the encoding tree generation process requires completely emptying
        // the priority queue into a temporary queue into temporary queue.
        //
        // This is done by creating a string with various characters that
        // are equally weighted so that any merge of these nodes will be
        // of larger weight than all other nodes.
        //
        // Rather than creating the expected tree manually, this is checked
        // by ensuring that the string can be decoded correctly.
        // -----------------------------------------------------------------
        const testString:string = 'aaabbbcccdddeeefffggghhhiii';

        // Initialize a priority queue using the given test string.
        const freqQueue = initializeQueue(testString);

        // Initialize an encoding tree.
        const encodingTree = initializeHuffmanEncodingTree(freqQueue);

        // Initialize an encoding table and a decoding table.
        const encoder = new EncodingTable(encodingTree);
        const decoder = new DecodingTable(encoder);

        // Check that the encoding tree is valid by encoding and then decoding
        // the contents of `testString` and asserting that they are equal.
        const result = decoder.decode(encoder.encode(testString));
        assert.equal(result, testString);
    }

}
