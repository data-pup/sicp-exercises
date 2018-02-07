import { assert } from "chai";
import { suite, test } from "mocha-typescript";
import { HuffmanBTreeNode } from "../src/classes/HuffmanBTreeNode";

@suite class TestHuffmanBTreeNode {

    @test public testDefaultConstructor() {
        // Create an empty Huffman encoding tree.
        const emptyHuffmanTree = new HuffmanBTreeNode(
            [], 0, null, null);
        // Check that the child array is not null, and is empty.
        assert.isNotNull(emptyHuffmanTree.childVals);
        assert.isEmpty(emptyHuffmanTree.childVals);
        // Check that the weight value and child pointers are correct.
        assert.equal(emptyHuffmanTree.nodeWeight, 0);
        assert.isNull(emptyHuffmanTree.left, "Left pointer should be null.");
        assert.isNull(emptyHuffmanTree.right, "Right pointer should be null.");
    }

}
