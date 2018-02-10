import { PriorityQueue } from 'typescript-collections';
import { CharFreqRecord } from './classes/CharFreqRecord';
import { HuffmanBTreeNode } from './classes/HuffmanBTreeNode';
import { compareCharFreqRecords } from './lib/compareCharFreqRecords';
import { initializeHuffmanEncodingTree } from './lib/initEncodingTree';

// Currently unused imports.
// import { initializeQueue } from './lib/initCharFreqQueue';
// import { printCharFreqQueue } from './lib/printCharFreqQueue';

// Define the main function.
const main = () => {
    const testQueue = new PriorityQueue<CharFreqRecord>(
        compareCharFreqRecords);

    // Push some character frequency records onto the stack.
    testQueue.enqueue(new CharFreqRecord('a', 3));
    testQueue.enqueue(new CharFreqRecord('b', 2));
    testQueue.enqueue(new CharFreqRecord('c', 1));

    // Create an encoding tree using the testing priority queue.
    const encodingTree:HuffmanBTreeNode = initializeHuffmanEncodingTree(
        testQueue);

    // Print something so that the linter will remain quiet.
    process.stdout.write(encodingTree.tokens.toString());
};

// Invoke the main function.
main();
