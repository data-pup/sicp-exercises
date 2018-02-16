// import { PriorityQueue } from 'typescript-collections';
// import { CharFreqRecord } from './CharFreqQueue/CharFreqRecord';
// import { initializeQueue } from './CharFreqQueue/initCharFreqQueue';
// import { HuffmanBTreeNode } from './HuffmanBTree/HuffmanBTreeNode';
// import {
//     initializeHuffmanEncodingTree,
// } from './HuffmanBTree/initEncodingTree';

// Unused Imports:
// import { isNullOrUndefined } from 'util';
// import { printHuffmanBTree } from './PrintingUtilities/printHuffmanBTree';
// import { DecodingTable } from './HuffmanDecoding/DecodingTable';
// import { EncodingTable } from './HuffmanEncoding/EncodingTable';
// import { NaiveEncodingTable } from './NaiveEncoding/NaiveEncodingTable';

// const createHuffmanBTreeFromString = (input:string) : HuffmanBTreeNode => {
//     const cfQueue:PriorityQueue<CharFreqRecord> = initializeQueue(input);
//     const tree:HuffmanBTreeNode = initializeHuffmanEncodingTree(cfQueue);
//     return tree;
// };

// const testing = () => {
//     // Initialize a Huffman encoding tree.
//     const greeting = 'aaabbbc';
//     const huffmanBTree:HuffmanBTreeNode = createHuffmanBTreeFromString(
//         greeting);

//     // Print the Huffman encoding tree.
//     printHuffmanBTree(huffmanBTree);

//     // Initialize an encoding table.
//     const encoder = new EncodingTable(huffmanBTree);

//     // Use the encoding table to create a decoding table.
//     const decoder = new DecodingTable(encoder);

//     // Serialize the test string using the encoder.
//     const encodedString:string = encoder.encode(greeting);
//     const decodedString:string = decoder.decode(encodedString);

//     // Print the results.
//     process.stdout.write(`Input String: ${greeting}\n`);
//     process.stdout.write(`Encoded String: ${encodedString}\n`);
//     process.stdout.write(`Decoded String: ${decodedString}\n`);
// }

// Define the main function.
const main = () => {
    process.stdout.write('Under Construction!');
};

// Invoke the main function.
main();
