import { PriorityQueue, Stack } from 'typescript-collections';
import { ICharFreqRecord } from './CharFreqQueue/ICharFreqRecord';
import { HuffmanBTreeNode } from './HuffmanBTreeNode';

export const initializeHuffmanEncodingTree =
             (freqQueue:PriorityQueue<ICharFreqRecord>) : HuffmanBTreeNode => {
    // First, check if the frequency queue is empty. An empty tree should be
    // returned if this queue is empty.
    if (freqQueue.isEmpty()) {
        return new HuffmanBTreeNode([], 0);
    }

    // Convert the queue of records into a stack of leaf nodes.
    const nodeStack = initializeLeafNodeStack(freqQueue);

    while (!treeIsReady(nodeStack)) {
        // Pop the two nodes with the lowest priority in the node stack.
        const rightTree:HuffmanBTreeNode = nodeStack.pop();
        const leftTree:HuffmanBTreeNode = nodeStack.pop();
        // Merge the trees together under a new parent node.
        const mergedTree = HuffmanBTreeNode.mergeTrees(leftTree, rightTree);
        placeMergedNodeIntoNodeStack(nodeStack, mergedTree);
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

// This function is used to place a newly merged tree into the node stack so
// that the node stack remains correctly sorted by cummulative node weight.
const placeMergedNodeIntoNodeStack = (nodeStack:Stack<HuffmanBTreeNode>,
                                      newNode:HuffmanBTreeNode) : void => {
    // Create a new stack to temporarily store the lower priority nodes that
    // we are going to push off of the node stack.
    const tempStack = new Stack<HuffmanBTreeNode>();

    // Until the top of the node stack has a lower cumumulative weight than
    // the new node that we are going to push, pop the next node off of
    // the stack and push it into the temporary stack.
    let currNode:HuffmanBTreeNode = undefined;
    while (!newNodeShouldBePushedOntoStack(nodeStack, newNode)) {
        currNode = nodeStack.pop();
        tempStack.push(currNode);
    }

    // Place the new node into the node stack in its correct place.
    nodeStack.push(newNode);

    // Push the contents of the temporary stack back into the node stack.
    let tempNode:HuffmanBTreeNode = undefined; // Loop variable.
    while (!tempStack.isEmpty()) {
        tempNode = tempStack.pop(); // Pop a node off of the temporary stack.
        nodeStack.push(tempNode); // Push it back onto the node stack.
    }
};

const newNodeShouldBePushedOntoStack = (nodeStack:Stack<HuffmanBTreeNode>,
                                        newNode:HuffmanBTreeNode) : boolean => {
    // New node should be pushed onto the stack if no nodes remain on the stack.
    if (nodeStack.isEmpty()) {
        return true;
    }

    // New node should be pushed onto the stack if the current top has a
    // cummulative weight greater than or equal to the new node's weight.
    if (nodeStack.peek().weight >= newNode.weight) {
        return true;
    }

    // We should continue to pop nodes off of the stack if neither condition
    // above was met. This means the new node should be deeper in the stack.
    return false;
};
