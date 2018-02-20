import { Dictionary } from 'typescript-collections';
import { isNullOrUndefined } from 'util';
import { IHuffmanBTreeNode } from '../../HuffmanBTree/IHuffmanBTreeNode';

// Create an encoding dictionary using a Huffman encoding tree. This function
// will recursively traverse the tree and return a dictionary containing
// the encoding for each token in the tree.
export const createEncodingDictionary = (huffmanBTree:IHuffmanBTreeNode,
                                         encodingPrefix:string)
                                        : Dictionary<string, string> => {
    // If the tree is null, undefined, or empty, return an empty dictionary.
    if (huffmanTreeIsNullOrUndefinedOrEmpty(huffmanBTree)) {
        return new Dictionary<string, string>();
    }

    // Determine if the node is a leaf node or a parent node within the
    // Huffman encoding tree, and create the encoding dictionary accordingly.
    if (huffmanBTree.isLeaf()) {
        return getLeafNodeEncodingDict(huffmanBTree, encodingPrefix);
    } else {
        return getParentNodeEncodingDict(huffmanBTree, encodingPrefix);
    }
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
    // Calculate the left child's encoding prefix and encoding dictionary.
    const leftChildPrefix = encodingPrefix.concat('0');
    const leftChildDict:Dictionary<string, string> = createEncodingDictionary(
        huffmanBTree.left, leftChildPrefix);

    // Calculate the right child's encoding prefix and encoding dictionary.
    const rightChildPrefix = encodingPrefix.concat('1');
    const rightChildDict:Dictionary<string, string> = createEncodingDictionary(
        huffmanBTree.right, rightChildPrefix);

    // Merge the left and right children's encoding dictionaries.
    const parentNodeEncodingDict:Dictionary<string, string> =
        mergeEncodingDictionaries(leftChildDict, rightChildDict);
    return parentNodeEncodingDict; // Return the result of the merge.
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
