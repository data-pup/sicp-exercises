import { PriorityQueue } from 'typescript-collections';
import { CharFreqRecord } from './CharFreqQueue/CharFreqRecord';
import { initializeQueue } from './CharFreqQueue/initCharFreqQueue';
import { HuffmanBTreeNode } from './HuffmanBTree/HuffmanBTreeNode';
import {
    initializeHuffmanEncodingTree,
} from './HuffmanBTree/initEncodingTree';
import { DecodingTable } from './HuffmanDecoding/DecodingTable';
import { EncodingTable } from './HuffmanEncoding/EncodingTable';

// Unused Imports:
// import { isNullOrUndefined } from 'util';
// import { printHuffmanBTree } from './PrintingUtilities/printHuffmanBTree';

const createHuffmanBTreeFromString = (input:string) : HuffmanBTreeNode => {
    const cfQueue:PriorityQueue<CharFreqRecord> = initializeQueue(input);
    const tree:HuffmanBTreeNode = initializeHuffmanEncodingTree(cfQueue);
    return tree;
};

// Define the main function.
const main = () => {
    // Initialize a Huffman encoding tree;
    const greeting = 'Can you hear me now? Good!';
    const huffmanBTree:HuffmanBTreeNode = createHuffmanBTreeFromString(
        greeting);

    // Initialize an encoding table.
    const encoder = new EncodingTable(huffmanBTree);

    // Use the encoding table to create a decoding table.
    const decoder = new DecodingTable(encoder);

    // Serialize the test string using the encoder.
    const encodedString:string = encoder.encode(greeting);
    const decodedString:string = decoder.decode(encodedString);

    // Print the results.
    process.stdout.write(`Input String: ${greeting}\n`);
    process.stdout.write(`Encoded String: ${encodedString}\n`);
    process.stdout.write(`Decoded String: ${decodedString}\n`);
};

// Invoke the main function.
main();
