import { NaiveDecodingTable } from './ConversionTables/NaiveTables/NaiveDecodingTable';
import { NaiveEncodingTable } from './ConversionTables/NaiveTables/NaiveEncodingTable';
import { getConversionSchemeString } from './ConversionTables/Printing/printConversionScheme';
import { ConversionTable } from './ConversionTables/Printing/printingHelperTypes';
import { initializeHuffmanEncodingTree } from './HuffmanBTree/initEncodingTree';
import { initializeQueue } from './HuffmanBTree/CharFreqQueue/initCharFreqQueue';
import { DecodingTable } from './ConversionTables/HuffmanTables/DecodingTable';
import { EncodingTable }  from './ConversionTables/HuffmanTables/EncodingTable';

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
            printSchemeComparison(testString);
        },
    );

};

// Define helper functions.
// ----------------------------------------------------------------------------

const printSchemeComparison = (s:string) => {
    const naiveScheme = getNaiveScheme(s);
    const huffmanScheme = getHuffmanScheme(s);
    process.stdout.write(`Received input: '${s}'\n`);
    process.stdout.write(getConversionSchemeString(
        [
            ...naiveScheme,
            ...huffmanScheme,
        ],
    ));
    process.stdout.write('\n\n');
};

const getNaiveScheme = (s:string) : ConversionTable[] => {
    const net = new NaiveEncodingTable(s);
    const ndt = new NaiveDecodingTable(net);
    return [net, ndt];
};

const getHuffmanScheme = (s:string) : ConversionTable[] => {
    const pq = initializeQueue(s);
    const hbt = initializeHuffmanEncodingTree(pq);
    const het = new EncodingTable(hbt);
    const hdt = new DecodingTable(het);
    return [het, hdt];
};

// Invoke the main function.
main();
