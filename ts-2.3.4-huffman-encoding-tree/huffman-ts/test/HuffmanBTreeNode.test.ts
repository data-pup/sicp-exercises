import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';
import { CharFreqRecord } from '../src/classes/CharFreqRecord';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNode {

    private assertArraysAreEqual<T>(a:T[], b:T[]) : void {
        // Check the arrays are of equal length, then compare each element.
        assert.equal(a.length, b.length);
        for (let index = 0; index < a.length; index++) {
            assert.equal(a[index], b[index]);
        }
    }

    @test public testDefaultConstructor() {
        // Create an empty Huffman encoding tree.
        const emptyHuffmanTree = new HuffmanBTreeNode(
            [], 0, undefined, undefined);
        // Check that the variable is not null and is of the correct type.
        assert.isNotNull(emptyHuffmanTree);
        // Check that the child array is not null, and is empty.
        assert.isNotNull(emptyHuffmanTree.childVals);
        assert.isEmpty(emptyHuffmanTree.childVals);
        // Check that the weight value and child pointers are correct.
        assert.equal(emptyHuffmanTree.nodeWeight, 0);
        assert.isUndefined(emptyHuffmanTree.left, 'Left pointer should be null.');
        assert.isUndefined(emptyHuffmanTree.right, 'Right pointer should be null.');
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
        assert.equal(hbt.nodeWeight, expectedWeight,
                     'Node weight should be 1.');
        // Assert that the child tokens array is correct.
        const expectedChildren:string[] = ['a'];
        this.assertArraysAreEqual(hbt.childVals, expectedChildren);
    }

}
