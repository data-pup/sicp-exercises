// Huffman Scheme Generation Imports:
import { initializeHuffmanEncodingTree } from './HuffmanBTree/initEncodingTree';
import { initializeQueue } from './HuffmanBTree/CharFreqQueue/initCharFreqQueue';

// Conversion Table Imports:
import { ConversionTable } from './ConversionTables/Printing/printingHelperTypes';
import { DecodingTable } from './ConversionTables/HuffmanTables/DecodingTable';
import { EncodingTable }  from './ConversionTables/HuffmanTables/EncodingTable';
import { NaiveDecodingTable } from './ConversionTables/NaiveTables/NaiveDecodingTable';
import { NaiveEncodingTable } from './ConversionTables/NaiveTables/NaiveEncodingTable';

// Miscellaneous Imports:
import { getConversionSchemeString } from './ConversionTables/Printing/printConversionScheme';

// Define helper types that will be used in this file.
type ConversionScheme = [ConversionTable, ConversionTable];

// Define the main function.
// ----------------------------------------------------------------------------
const main = () => {
    const testStrings:string[] = [
        // '',
        // 'hello world',
        // 'the cow jumped over the moon',
        // 'this is a slightly longer test string',
        // 'the quick brown fox jumped over the slow lazy dog',
        'mississipi sips slippery soup',
    ];

    testStrings.forEach(
        (testString:string) : void => {
            printSchemeComparison(testString);
        },
    );

};

// Define helper functions.
// ----------------------------------------------------------------------------

const printSchemeComparison = (s:string) : void => {
    // Create a naive scheme and a Huffman for the given input.
    const naiveScheme:ConversionScheme = getNaiveScheme(s);
    const huffmanScheme:ConversionScheme = getHuffmanScheme(s);

    // Print the two scheme's encoding/decoding tables.
    process.stdout.write(getConversionSchemeString(
        [   // Spread the arrays of tables into a single array.
            ...naiveScheme,
            ...huffmanScheme,
        ],
    ));
    process.stdout.write('\n\n');

    // Next, encode the input string using each scheme.
    const naiveEncodingResult:string = (naiveScheme[0] as NaiveEncodingTable)
        .encode(s);
    const huffmanEncodingResult:string = (huffmanScheme[0] as EncodingTable)
        .encode(s);

    // Print the encoding of the input using each scheme.
    process.stdout.write(`Received input: '${s}'\n`);
    process.stdout.write(`Naively Encoded String: ${naiveEncodingResult}\n\n`);
    process.stdout.write(`Huffman Encoded String: ${huffmanEncodingResult}\n\n`);
    process.stdout.write('\n\n');

    // Next, decode each scheme's encoding of the input string.
    const naiveResult:string =
        (naiveScheme[1] as NaiveDecodingTable).decode(naiveEncodingResult);
    const huffmanResult:string =
        (huffmanScheme[1] as DecodingTable).decode(huffmanEncodingResult);

    // Print the encoding of the input using each scheme.
    process.stdout.write(`Naive Result: ${naiveResult}\n`);
    process.stdout.write(`Huffman Result: ${huffmanResult}\n`);
    process.stdout.write('\n\n');

    // Calculate the percent of space that huffman encoding used in comparison
    // to the naive scheme, if both results could be successfully decoded.
    const huffmanImprovement:string =(
        (huffmanEncodingResult.length / naiveEncodingResult.length) * 100
    ).toPrecision(5);

    // Print the percentage improvement of the Huffman encoding scheme.
    process.stdout.write( // Print
        `Huffman scheme used ${huffmanImprovement}% as much space as naive encoding.\n`,
    );

    process.stdout.write('\n\n\n'); // Print some newline characters.
};

// Given an input string, create a naive encoding scheme, return the
// corresponding encoding & decoding tables to the caller.
const getNaiveScheme = (s:string) : ConversionScheme => {
    const net = new NaiveEncodingTable(s);
    const ndt = new NaiveDecodingTable(net);
    return [net, ndt];
};

// Given an input string, create a Huffman encoding scheme, return the
// corresponding encoding & decoding tables to the caller.
const getHuffmanScheme = (s:string) : ConversionScheme => {
    const pq = initializeQueue(s);
    const hbt = initializeHuffmanEncodingTree(pq);
    const het = new EncodingTable(hbt);
    const hdt = new DecodingTable(het);
    return [het, hdt];
};

// Invoke the main function.
main();
