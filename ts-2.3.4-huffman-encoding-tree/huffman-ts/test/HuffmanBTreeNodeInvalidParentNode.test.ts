import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
// import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';
// import { InvalidNodeErrorMessages } from '../src/lib/invalidNodeErrorMessages';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNodeInvalidLeaf {

    @test public testExtraneousParentNodeCannotBeCreated() {
        assert.equal(1, 1, 'Temporary placeholder.');
    }

    @test public testParentNodeCannotBeMissingTokens() {
        assert.equal(1, 1, 'Temporary placeholder.');
    }

    @test public testParentNodeCannotHaveWeightOfZero() {
        assert.equal(1, 1, 'Temporary placeholder.');
    }

    @test public testParentNodeCannotHaveNegativeWeight() {
        assert.equal(1, 1, 'Temporary placeholder.');
    }

    @test public testParentNodeWeightMustEqualChildrenWeightSum() {
        assert.equal(1, 1, 'Temporary placeholder.');
    }

    @test public testParentNodeCannotHaveDuplicateTokens() {
        assert.equal(1, 1, 'Temporary placeholder.');
    }

}
