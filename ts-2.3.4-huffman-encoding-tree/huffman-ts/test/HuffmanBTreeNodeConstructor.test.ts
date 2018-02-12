import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { assertArraysAreEqual } from './testUtils/assertArraysAreEqual';
import { CharFreqRecord } from '../src/classes/CharFreqRecord';
import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNodeConstructor {

    @test public testBasicConstructorCall() {
        // Create an empty Huffman encoding tree.
        const emptyHuffmanTree = new HuffmanBTreeNode(
            [], 0, undefined, undefined);
        // Check that the child array is not null, and is empty.
        assert.isNotNull(emptyHuffmanTree.tokens);
        assert.isEmpty(emptyHuffmanTree.tokens);
        // Check that the weight value and child pointers are correct.
        assert.equal(emptyHuffmanTree.weight, 0);
        assert.isUndefined(emptyHuffmanTree.left, 'Left pointer should be null.');
        assert.isUndefined(emptyHuffmanTree.right, 'Right pointer should be null.');
    }

    @test public testConstructorDefaultChildrenParameterValues() {
        const hbt = new HuffmanBTreeNode([], 0);
        assert.isUndefined(hbt.left);
        assert.isUndefined(hbt.right);
    }

    @test public testFromCharFreqRecord() {
        // Create a basic character frequency object, and use it to initialize
        // a new Huffman encoding tree for that single record.
        const cfr = new CharFreqRecord('a', 1);
        const hbt:HuffmanBTreeNode = HuffmanBTreeNode.fromCharFreqRecord(cfr);

        // Assert that the child pointers are undefined.
        assert.isUndefined(hbt.left);
        assert.isUndefined(hbt.right);

        // Assert that the node weight is correct.
        const expectedWeight:number = 1;
        assert.equal(hbt.weight, expectedWeight,
                     'Node weight should be 1.');

        // Assert that the child tokens array is correct.
        const expectedChildren:string[] = ['a'];
        assertArraysAreEqual(hbt.tokens, expectedChildren);
    }

}
