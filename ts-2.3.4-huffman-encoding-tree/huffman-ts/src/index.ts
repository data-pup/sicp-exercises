import { NaiveDecodingTable } from './ConversionTables/NaiveTables/NaiveDecodingTable';
import { NaiveEncodingTable } from './ConversionTables/NaiveTables/NaiveEncodingTable';
import { getConversionSchemeString } from './ConversionTables/Printing/printConversionScheme';

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
// import { getTableString } from './ConversionTables/Printing/printConversionTable';

// Temporary example function. (Disabled)
// const temp = () => {
    // const s = 'hello world';
    // const pq:PriorityQueue<CharFreqRecord> = initializeQueue(s);
    // const hbt:HuffmanBTreeNode = initializeHuffmanEncodingTree(pq);
    // printHuffmanBTree(hbt);
// };

// Define the main function.
// ----------------------------------------------------------------------------
const main = () => {
    const testStrings:string[] = [
        '',
        'hello world',
        'the cow jumped over the moon',
        'this is a slightly longer test string',
        'the quick brown fox jumped over the slow lazy dog',
    ];

    testStrings.forEach(
        (testString:string) : void => {
            printNaiveScheme(testString);
        },
    );

};

// Define helper functions.
// ----------------------------------------------------------------------------

// // This function will create a naive encoding table and print the results.
// const createNaiveEncodingTableAndPrint = (s:string) => {
//     process.stdout.write(`Received input: '${s}'\n`);
//     const net = new NaiveEncodingTable(s);
//     const netString:string = getTableString(net);
//     process.stdout.write(`${netString}\n`);
//     process.stdout.write('\n\n');
// };

const printNaiveScheme = (s:string) => {
    const net = new NaiveEncodingTable(s);
    const ndt = new NaiveDecodingTable(net);
    process.stdout.write(`Received input: '${s}'\n`);
    process.stdout.write(getConversionSchemeString(net, ndt));
    process.stdout.write('\n\n');
};

// Invoke the main function.
main();
