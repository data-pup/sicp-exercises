import { Dictionary } from 'typescript-collections';
import { HuffmanBTreeNode } from './classes/HuffmanBTreeNode';
import { initializeQueue } from './lib/initCharFreqQueue';
import { initializeHuffmanEncodingTree } from './lib/initEncodingTree';
import { isNullOrUndefined } from 'util';

// Unused Imports:
// ----------------------------------------------------------
// import { Queue } from 'typescript-collections';
// import { CharFreqRecord } from './classes/CharFreqRecord';
// ----------------------------------------------------------

const getEncodingValues = (node:HuffmanBTreeNode, prefix:string = '')
                          : Dictionary<string, string> => {
    // Check if the given node is a leaf node.
    const hasLeftChild:boolean = ! isNullOrUndefined(node.left);
    const hasRightChild:boolean = ! isNullOrUndefined(node.right);
    const hasOneToken:boolean = (node.tokens.length === 1);
    const isLeafNode:boolean =
        (!hasLeftChild) && (!hasRightChild) && hasOneToken;

    // If the node is a leaf node, create a new dictionary containing the
    // current node's token encoding, which will be the prefix parameter.
    if (isLeafNode) {
        const token:string = node.tokens[0];
        const encodingDict = new Dictionary<string, string>();
        encodingDict.setValue(token, prefix);
        return encodingDict;
    }

    // Recurse down the left branch if there is a left child.
    const leftPrefix = prefix.concat('0');
    const leftEncodingDict = hasLeftChild ?
        getEncodingValues(node.left, leftPrefix)
        : new Dictionary<string, string>();

    // Recurse down the right branch if there is a right child.
    const rightPrefix = prefix.concat('1');
    const rightEncodingDict = hasRightChild ?
        getEncodingValues(node.right, rightPrefix)
        : new Dictionary<string, string>();

    // Combine the two dictionaries and return the result.
    const returnDictionary = new Dictionary<string, string>();
    leftEncodingDict.forEach((key, value) : void => { // Add each left item.
        returnDictionary.setValue(key, value);
    });
    rightEncodingDict.forEach((key, value) : void => { // Add each right item.
        returnDictionary.setValue(key, value);
    }); // Return the result.
    return returnDictionary;
};

// const encodeString = (input:string, table:Dictionary<string, string>)
//                      : string => {
//     throw new Error('Not Implemented Error!');
// };

const testing = (data:HuffmanBTreeNode) : void => {
    // Print some overview information about the root node.
    process.stdout.write('Received root node with the following properties:\n');
    process.stdout.write(`\tWeight: ${data.weight}\n`);
    process.stdout.write('\tTokens:\n');
    for (const token of data.tokens) {
        process.stdout.write(`\t\t${token}\n`);
    }
    process.stdout.write('\n');

    // Create an encoding dictionary using the function above.
    const encodingDict:Dictionary<string, string> = getEncodingValues(data);

    // Print the encoding dictionary that we created.
    process.stdout.write('Dictionary Contents:\n');
    encodingDict.forEach((key:string, value:string) : void => { // Print each item.
        process.stdout.write(`\t${key} : ${value}\n`);
    });
};

// Define the main function.
const main = () => {
    // Initialize a testing string.
    const testString = 'Hello World! Is This Working Correctly?';

    // Initialize a priority queue using the given test string.
    const freqQueue = initializeQueue(testString);

    // Initialize an encoding tree.
    const encodingTree = initializeHuffmanEncodingTree(freqQueue);

    // Testing function.
    testing(encodingTree);
};

// Invoke the main function.
main();
