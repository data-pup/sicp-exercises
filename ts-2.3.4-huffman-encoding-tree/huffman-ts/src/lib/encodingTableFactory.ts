import { Dictionary } from 'typescript-collections';
import { EncodingTable } from '../classes/EncodingTable';
import { IHuffmanBTreeNode } from '../interfaces/IHuffmanBTreeNode';
import { isNullOrUndefined } from 'util';

export const createEncodingTable = (huffmanBTree:IHuffmanBTreeNode,
                                    encodingPrefix:string)
                                   : EncodingTable => {
    // Initialize a new dictionary object to store encoding values.
    // const encodingDict = new Dictionary<string, string>();

    // if (huffmanTreeIsNullOrUndefinedOrEmpty(huffmanBTree)) {
    //     return new EncodingTable() // TODO: Change the constructor params.
    // }

    // TEMP: Throw an error for now.
    throw new Error('Not Implemented Error');
};

// Returns a boolean value representing whether or not the given Huffman
// encoding tree is null, undefined, or empty.
const huffmanTreeIsNullOrUndefinedOrEmpty = (huffmanBTree:IHuffmanBTreeNode)
                                            : boolean => {
    if (isNullOrUndefined(huffmanBTree)) { return true; }
    if (huffmanBTree.isEmpty()) { return true; }
    return false;
};

const getLeafNodeEncodingDict = (huffmanBTree:IHuffmanBTreeNode,
                                 encodingPrefix:string)
                                : Dictionary<string, string> => {
    // Identify the token stored at this leaf node.
    const leafToken:string = huffmanBTree.tokens[0];

    // Create a new dictionary and add the encoding dictionary entry.
    const encodingDict = new Dictionary<string, string>();
    encodingDict.setValue(leafToken, encodingPrefix);
    return encodingDict; // Return the resulting dictionary.
};

const getParentNodeEncodingDict = (huffmanBTree:IHuffmanBTreeNode,
                                   encodingPrefix:string)
                                  : Dictionary<string, string> => {
    throw new Error('Not Implemented!');
};

// This is a helper function for processing parent nodes, this will merge
// each child's encoding dictionary into single dictionary object.
const mergeEncodingDictionaries = (left:Dictionary<string, string>,
                                   right:Dictionary<string, string>)
                                  : Dictionary<string, string> => {
    // Initialize a new dictionary that we will return after merging.
    const returnDictionary = new Dictionary<string, string>();

    // Process the left and right encoding dictionaries.
    [left, right].forEach((encodingDict) => {
        // Add each entry in the current dictionary to the return dictionary.
        encodingDict.forEach((token, encoding) => {
            addEncodingToDictionary(token, encoding, returnDictionary);
        });
    });

    return returnDictionary; // Return the merged dictionary.
};

// This template function is used as a callback in forEach(..) to place
// the key-value pairs from child nodes into a single dictionary object.
// This is sort of extraneous, but generics are fun! :)
const addEncodingToDictionary = <K, V>(token:K, encoding:V,
                                       encodingDict:Dictionary<K, V>)
                                      : void => {
    encodingDict.setValue(token, encoding);
};
