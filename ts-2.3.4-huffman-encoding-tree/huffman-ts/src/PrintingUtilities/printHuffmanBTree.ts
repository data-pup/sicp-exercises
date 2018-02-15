import { isNullOrUndefined } from 'util';
import { IHuffmanBTreeNode } from '../HuffmanBTree/IHuffmanBTreeNode';

// This function will print a Huffman encoding tree to stdout.
export const printHuffmanBTree = (rootNode:IHuffmanBTreeNode) : void => {
    printHuffmanBTreeNode(rootNode);
};

// This function will print a single node Huffman encoding tree to stdout.
const printHuffmanBTreeNode = (node:IHuffmanBTreeNode,
                               linePrefix:string='') : void => {
    // Calculate the prefix string that should be printed before the node.
    const nodeStringPrefix = generateNodeLinePrefix(linePrefix);

    // Wrap each token in quotations, for readability.
    const wrappedTokens:string[] = node.tokens.map((token) : string => {
        return ['\'', token, '\''].join('');
    });

    // Create a string representation of the node tokens.
    const nodeTokensString:string = [
        '[', // Join the tokens, separating by ', '.
        wrappedTokens.join(', '),
        ']', // Then combine the array, placing a space between the '[' and ']'.
    ].join(' ');

    // Next, combine the tokens string and the weight value.
    const nodeString = [
        nodeStringPrefix,
        nodeTokensString,
        ':',
        node.weight.toString(),
    ].join(' ');

    // Finally, print the string with a newline appended.
    process.stdout.write(`${nodeString}\n`);

    // Print the child nodes.
    const leftLinePrefix = generateChildsLinePrefix(linePrefix);
    const printableChildren:IHuffmanBTreeNode[] = getPrintableChildren(node);
    printableChildren.map((childNode) : void => {
        if (!isNullOrUndefined(childNode)) {
            printHuffmanBTreeNode(childNode, leftLinePrefix);
        }
    });
};

// Generate the prefix string to be printed before the string
// representation of a node, given the line prefix string variable.
const generateNodeLinePrefix = (linePrefix:string, isLast:boolean=false)
                               : string => {
    if (linePrefix.length === 0) { return ''; }

    // Select the branch character to use, depending on the `isLast` flag.
    const selectedBranchChar:string = isLast ?
        TreePrintingChars.lastBranchChar
        : TreePrintingChars.branchChar;

    return linePrefix.concat( // Generate the line prefix using concatenation.
        selectedBranchChar,
        TreePrintingChars.horizontalChar,
        TreePrintingChars.horizontalChar,
    );
};

// Generate a prefix string that shall be printed before each of a
// node's children.
const generateChildsLinePrefix = (parentLinePrefix:string) : string => {
    return parentLinePrefix.concat(
        TreePrintingChars.verticalChar,
        TreePrintingChars.nodeIndentation,
    );
};

// Generate an array of a node's printable children.
const getPrintableChildren = (parentNode:IHuffmanBTreeNode)
                                 : IHuffmanBTreeNode[] => {
    if (isNullOrUndefined(parentNode)) {
        return [];
    } else {
        // Return an array of the children nodes that are defined.
        return [parentNode.left, parentNode.right].filter(
            (node) : boolean => {
                if (isNullOrUndefined(node)) { return false; }
                return true;
            },
        );
    }
};

// // Private class containing public static helper characters
// // used to print a Huffman encoding tree.
class TreePrintingChars {
    public static branchChar:string = '├';
    public static lastBranchChar:string = '└';
    public static horizontalChar:string = '─';
    public static verticalChar:string = '│';
    public static nodeIndentation:string = '    ';
}
