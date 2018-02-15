import { PriorityQueue } from 'typescript-collections';
import { CharFreqRecord } from './CharFreqQueue/CharFreqRecord';
import { initializeQueue } from './CharFreqQueue/initCharFreqQueue';
import { HuffmanBTreeNode } from './HuffmanBTree/HuffmanBTreeNode';
import {
    initializeHuffmanEncodingTree,
} from './HuffmanBTree/initEncodingTree';
import { printHuffmanBTree } from './PrintingUtilities/printHuffmanBTree';

// Unused Imports:
// import { isNullOrUndefined } from 'util';

const createHuffmanBTreeFromString = (input:string) : HuffmanBTreeNode => {
    const cfQueue:PriorityQueue<CharFreqRecord> = initializeQueue(input);
    const tree:HuffmanBTreeNode = initializeHuffmanEncodingTree(cfQueue);
    return tree;
};

// Define the main function.
const main = () => {
    // Initialize a Huffman encoding tree;
    const greeting = 'hello world!';
    const huffmanBTree:HuffmanBTreeNode = createHuffmanBTreeFromString(
        greeting);
    // Call the printing function.
    printHuffmanBTree(huffmanBTree);
};

// Invoke the main function.
main();
