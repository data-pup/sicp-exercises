// Unused Imports:
// import { PriorityQueue } from 'typescript-collections';
// import { CharFreqRecord } from './CharFreqQueue/CharFreqRecord';
// import { initializeQueue } from './CharFreqQueue/initCharFreqQueue';
// import { HuffmanBTreeNode } from './HuffmanBTree/HuffmanBTreeNode';
// import {
//     initializeHuffmanEncodingTree,
// } from './HuffmanBTree/initEncodingTree';
// import { isNullOrUndefined } from 'util';
// import { printHuffmanBTree } from './PrintingUtilities/printHuffmanBTree';
// import { DecodingTable } from './HuffmanDecoding/DecodingTable';
// import { EncodingTable } from './HuffmanEncoding/EncodingTable';
import { NaiveEncodingTable } from './NaiveEncoding/NaiveEncodingTable';
import { getTableString } from './PrintingConversionTables/printTables';

// Temporary example function. (Disabled)
// const temp = () => {
    // const s = 'hello world';
    // const pq:PriorityQueue<CharFreqRecord> = initializeQueue(s);
    // const hbt:HuffmanBTreeNode = initializeHuffmanEncodingTree(pq);
    // printHuffmanBTree(hbt);
// };

// Define the main function.
const main = () => {
    // process.stdout.write('Under construction');
    // temp();

    const net = new NaiveEncodingTable('hello world this is a table!');
    const netString:string = getTableString(net);
    process.stdout.write(`${netString}\n`);
};

// Invoke the main function.
main();
