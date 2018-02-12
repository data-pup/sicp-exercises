import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
// import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNodeInvalidObject {

    // Invalid Leaf Node Parameters

    @test public testLeafNodeCannotHaveMultipleTokens() {
        assert.equal(1, 1, 'Placeholder assertion.');
    }

    @test public testLeafNodeCannotHaveMissingTokens() {
        assert.equal(1, 1, 'Placeholder assertion.');
    }

    @test public testLeafNodeCannotHaveWeightOfZero() {
        assert.equal(1, 1, 'Placeholder assertion.');
    }

    @test public testLeafNodeCannotHaveNegativeWeight() {
        assert.equal(1, 1, 'Placeholder assertion.');
    }

}
