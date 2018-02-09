import { PriorityQueue, Stack } from 'typescript-collections';
import { HuffmanBTreeNode } from '../classes/HuffmanBTreeNode';
import { ICharFreqRecord } from '../interfaces/ICharFreqRecord';

export const initializeHuffmanEncodingTree =
             (freqQueue:PriorityQueue<ICharFreqRecord>) : HuffmanBTreeNode => {
    if (freqQueue.isEmpty) { // Return an empty tree if the queue is empty.
        return new HuffmanBTreeNode([], 0);
    }

    // Convert the queue of records into a stack of leaf nodes.
    const nodeStack = initializeLeafNodeStack(freqQueue);

    while (!treeIsReady(nodeStack)) {
        throw new Error('Not implemented.');
    }

    // Pop the remaining node off the top of the stack, and return it. This
    // is the root node of the Huffman encoding tree.
    const encodingTree = nodeStack.pop();
    return encodingTree;
};

// This function will convert each character frequency record in the priority
// queue into a leaf node, and push the nodes into a stack, to prepare for
// the creation of the Huffman encoding tree.
const initializeLeafNodeStack = (freqQueue:PriorityQueue<ICharFreqRecord>)
                                : Stack<HuffmanBTreeNode> => {
    // Create an empty stack object.
    const nodeStack = new Stack<HuffmanBTreeNode>();

    // Initialize looping variables that will be used.
    let currentRecord:ICharFreqRecord = undefined;
    let newLeaf:HuffmanBTreeNode = undefined;

    // Continue to process the contents of the queue until it is empty.
    while (!freqQueue.isEmpty()) {
        // Pop the highest priority record off the front of the queue, and
        // use it to create a new Huffman leaf node. Push it onto the stack.
        currentRecord = freqQueue.dequeue();
        newLeaf = HuffmanBTreeNode.fromCharFreqRecord(currentRecord);
        nodeStack.push(newLeaf);
    }

    return nodeStack; // Return the stack of leaf nodes.
};

// Examine the node stack to see if the Huffman encoding tree is complete.
const treeIsReady = (nodeStack:Stack<HuffmanBTreeNode>) : boolean => {
    const stackSize = nodeStack.size(); // Find the size of the stack.

    if (stackSize == 0) { // Check that the stack is not empty.
        throw new Error('Node stack was not expected to be empty.');
    }

    if (stackSize === 1) { // Return true if the stack contains one node.
        return true;
    }

    return false; // Return false otherwise.
};
