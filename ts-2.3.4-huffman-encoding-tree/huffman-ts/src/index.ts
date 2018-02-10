// import { PriorityQueue } from 'typescript-collections';
// import { CharFreqRecord } from './classes/CharFreqRecord';
import { HuffmanBTreeNode } from './classes/HuffmanBTreeNode';
import { initializeQueue } from './lib/initCharFreqQueue';
import { initializeHuffmanEncodingTree } from './lib/initEncodingTree';

const testing = (data:HuffmanBTreeNode) : void => {
    process.stdout.write('Hello Testing!');
};

// Define the main function.
const main = () => {
    // Initialize a testing string.
    const testString = 'aaabbc';

    // Initialize a priority queue using the given test string.
    const freqQueue = initializeQueue(testString);

    // Initialize an encoding tree.
    const encodingTree = initializeHuffmanEncodingTree(freqQueue);

    // Testing function.
    testing(encodingTree);
};

// Invoke the main function.
main();
