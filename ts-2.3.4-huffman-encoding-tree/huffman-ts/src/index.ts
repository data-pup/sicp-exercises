import { HuffmanBTreeNode } from './classes/HuffmanBTreeNode';
import { initializeQueue } from './lib/initCharFreqQueue';
import { initializeHuffmanEncodingTree } from './lib/initEncodingTree';

// Unused Imports:
// ----------------------------------------------------------
// import { Queue } from 'typescript-collections';
// import { CharFreqRecord } from './classes/CharFreqRecord';
// ----------------------------------------------------------

const testing = (data:HuffmanBTreeNode) : void => {
    // Print some overview information about the root node.
    process.stdout.write('Received root node with the following properties:\n');
    process.stdout.write(`\tWeight: ${data.weight}\n`);
    process.stdout.write('\tTokens:\n');
    for (const token of data.tokens) {
        process.stdout.write(`\t\t${token}\n`);
    }
    process.stdout.write('\n');
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
