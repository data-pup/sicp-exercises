import { isNullOrUndefined } from 'util';
import { HuffmanBTreePrintingChars } from './HuffmanBTreePrintingChars';
import { IHuffmanBTreeNode } from '../HuffmanBTree/IHuffmanBTreeNode';

// This function will print a Huffman encoding tree to stdout.
export const printHuffmanBTree = (rootNode:IHuffmanBTreeNode) : void => {
    printHuffmanBTreeNode(rootNode);
};

// This function will print a single node Huffman encoding tree to stdout.
const printHuffmanBTreeNode = (node:IHuffmanBTreeNode,
                               linePrefix:string='') : void => {
    // Create the string representation of the current node, and print it.
    const nodeString = getNodeString(node, linePrefix);
    process.stdout.write(`${nodeString}\n`);

    // Create the line prefix for printing child nodes, and recursively print.
    const leftLinePrefix = generateChildsLinePrefix(linePrefix);
    const printableChildren:IHuffmanBTreeNode[] = getPrintableChildren(node);
    printableChildren.map((childNode) : void => {
        if (!isNullOrUndefined(childNode)) {
            printHuffmanBTreeNode(childNode, leftLinePrefix);
        }
    });
};

// This function will calculate the string representation of a huffman encoding
// tree node, given the current indentation level in a line prefix string.
const getNodeString = (node:IHuffmanBTreeNode, linePrefix:string) : string => {
    const nodeStringPrefix = generateNodeLinePrefix(linePrefix);
    const nodeTokensString:string = getNodeTokensString(node);
    const nodeString = [
        nodeStringPrefix,
        nodeTokensString,
        ' : ',
        node.weight.toString(),
    ].join('');
    return nodeString;
};

const getNodeTokensString = (node:IHuffmanBTreeNode) : string => {
    // Wrap each token in single quotes, for readability.
    const wrappedTokens:string[] = node.tokens.map((token) : string => {
        return ['\'', token, '\''].join('');
    });

    // Create a string representation of the node tokens.
    const nodeTokensString:string = [
        '[', // Join the tokens, separating by ', '.
        wrappedTokens.join(', '),
        ']', // Then combine the array, placing a space between the '[' and ']'.
    ].join(' ');

    return nodeTokensString; // Return the tokens string.
};

// Generate the prefix string to be printed before the string
// representation of a node, given the line prefix string variable.
const generateNodeLinePrefix = (linePrefix:string, isLast:boolean=false)
                               : string => {
    // Return an empty string if the preexesting line prefix is also empty.
    if (linePrefix.length === 0) { return ''; }

    // Select the branch character to use, depending on the `isLast` flag.
    const selectedBranchChar:string = isLast ?
        HuffmanBTreePrintingChars.lastBranchChar
        : HuffmanBTreePrintingChars.branchChar;

    return linePrefix.concat( // Generate the line prefix using concatenation.
        selectedBranchChar,
        HuffmanBTreePrintingChars.horizontalChar,
        HuffmanBTreePrintingChars.horizontalChar,
    );
};

// Generate a prefix string that shall be printed before each of a
// node's children.
const generateChildsLinePrefix = (parentLinePrefix:string, isLast:boolean=false)
                                 : string => {
    // If the parent's line prefix is empty, return a single space.
    if (parentLinePrefix.length === 0) { return ' '; }

    // Generate the child's line indendation prefix for further print calls.
    // If the node is the last child of the parent, do not include a vertical
    // pipe character in the indentation string.
    return isLast ?
        parentLinePrefix.concat(' ', HuffmanBTreePrintingChars.nodeIndentation)
        : parentLinePrefix.concat(
            HuffmanBTreePrintingChars.verticalChar,
            HuffmanBTreePrintingChars.nodeIndentation,
        );
};

// Generate an array of a node's printable children.
const getPrintableChildren = (parentNode:IHuffmanBTreeNode)
                                 : IHuffmanBTreeNode[] => {
    if (isNullOrUndefined(parentNode)) {
        return []; // Return an empty array if the parent is not defined.
    } else { // Otherwise, return an array of the children nodes.
        return [parentNode.left, parentNode.right].filter(
            (node) : boolean => { // Callback checks whether the child exists.
                if (isNullOrUndefined(node)) { return false; }
                return true;
            },
        );
    }
};
