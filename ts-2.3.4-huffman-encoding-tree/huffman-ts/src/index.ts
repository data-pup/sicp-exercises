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
    const testStrings:string[] = [ // Initialize an array of test cases.
        'hello world',
        'the cow jumped over the moon',
        'this is a slightly longer test string',
        'the quick brown fox jumped over the slow lazy dog',
        'mississipi sips slippery soup',
    ];

    testStrings.forEach( // Print the encoding scheme for each test string.
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

    // Next, encode the input string using each scheme, print the results.
    const [naiveEncoding, huffmanEncoding] = getEncodingForEachScheme(
        s, naiveScheme, huffmanScheme);
    printEncodingForEachScheme(s, naiveEncoding, huffmanEncoding);

    // Next, decode and print each scheme's encoding of the input string.
    const [naiveResult, huffmanResult] = getDecodingForEachScheme(
        naiveEncoding, huffmanEncoding, naiveScheme, huffmanScheme);
    printDecodingForEachScheme(naiveResult, huffmanResult);

    // Print the amount of space saved by the Huffman encoding scheme.
    calculateAndPrintHuffmanImprovement(naiveEncoding, huffmanEncoding);
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

// Given each encoding scheme, encode an input string and return the results.
const getEncodingForEachScheme = (inputString:string,
                                  naiveScheme:ConversionScheme,
                                  huffmanScheme:ConversionScheme)
                                 : [string, string] => {
    const naiveEncodingResult:string = (naiveScheme[0] as NaiveEncodingTable)
        .encode(inputString);
    const huffmanEncodingResult:string = (huffmanScheme[0] as EncodingTable)
        .encode(inputString);
    return [naiveEncodingResult, huffmanEncodingResult];
};

// Print the encoding of the input using each scheme.
const printEncodingForEachScheme = (inputString:string,
                                    naiveEncoding:string,
                                    huffmanEncoding:string) : void => {
    process.stdout.write(`Received input: '${inputString}'\n`);
    process.stdout.write(`Naively Encoded String: ${naiveEncoding}\n\n`);
    process.stdout.write(`Huffman Encoded String: ${huffmanEncoding}\n\n`);
    process.stdout.write('\n');
};

// Get the decoding of each scheme's encoding string.
const getDecodingForEachScheme = (naiveEncoding:string, huffmanEncoding:string,
                                  naiveScheme:ConversionScheme,
                                  huffmanScheme:ConversionScheme)
                                 : [string, string] => {
    const naiveResult:string =
        (naiveScheme[1] as NaiveDecodingTable).decode(naiveEncoding);
    const huffmanResult:string =
        (huffmanScheme[1] as DecodingTable).decode(huffmanEncoding);
    return [naiveResult, huffmanResult];
};

// Print the encoding of the input using each scheme.
const printDecodingForEachScheme = (naiveResult:string,
                                    huffmanResult:string) : void => {
    process.stdout.write(`Naive Result: ${naiveResult}\n`);
    process.stdout.write(`Huffman Result: ${huffmanResult}\n`);
    process.stdout.write('\n\n');
};

const calculateAndPrintHuffmanImprovement = (naiveEncoding:string,
                                             huffmanEncoding:string) => {
    const naiveLength:number = naiveEncoding.length;
    const huffmanLength:number = huffmanEncoding.length;
    const ratio:number = (huffmanLength / naiveLength);
    const savings:number = 1 - ratio;
    const savingsPercentage:number = savings * 100;
    const savingsString:string = savingsPercentage.toPrecision(5);
    process.stdout.write( // Print the amount of space saved.
        `Huffman scheme saved ${savingsString}% of space.`);
};

// Invoke the main function.
// ----------------------------------------------------------------------------
main();
