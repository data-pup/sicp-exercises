import { PriorityQueue } from 'typescript-collections';
import { CharFreqRecord } from './CharFreqQueue/CharFreqRecord';
import { initializeQueue } from './CharFreqQueue/initCharFreqQueue';
import { HuffmanBTreeNode } from './HuffmanBTree/HuffmanBTreeNode';
import {
    initializeHuffmanEncodingTree,
} from './HuffmanBTree/initEncodingTree';

// Unused Imports:
// import { isNullOrUndefined } from 'util';
import { printHuffmanBTree } from './PrintingUtilities/printHuffmanBTree';
// import { DecodingTable } from './HuffmanDecoding/DecodingTable';
// import { EncodingTable } from './HuffmanEncoding/EncodingTable';
// import { NaiveEncodingTable } from './NaiveEncoding/NaiveEncodingTable';

const temp = () => {
    const s = 'hello world';
    const pq:PriorityQueue<CharFreqRecord> = initializeQueue(s);
    const hbt:HuffmanBTreeNode = initializeHuffmanEncodingTree(pq);
    printHuffmanBTree(hbt);
};

// Define the main function.
const main = () => {
    temp();
};

// Invoke the main function.
main();
