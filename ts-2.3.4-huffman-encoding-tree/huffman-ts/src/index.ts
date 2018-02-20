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

const createEncodingTableAndPrint = (s:string) => {
    process.stdout.write(`Received input: '${s}'\n`);
    const net = new NaiveEncodingTable(s);
    const netString:string = getTableString(net);
    process.stdout.write(`${netString}\n`);
    process.stdout.write('\n\n');
};

// Define the main function.
const main = () => {
    const testStrings:string[] = [
        '',
        'hello world',
        'the cow jumped over the moon',
        'this is a slightly longer test string',
        'the quick brown fox jumped over the slow lazy dog',
    ];
    testStrings.forEach(
        (testString) => createEncodingTableAndPrint(testString),
    );
};

// Invoke the main function.
main();
