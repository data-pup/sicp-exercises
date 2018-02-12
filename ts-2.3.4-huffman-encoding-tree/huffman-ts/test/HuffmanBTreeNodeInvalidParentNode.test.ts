import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import {
    assertNodeIsInInvalidState,
} from './testUtils/assertNodeIsInInvalidState';
import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';
import { InvalidNodeErrorMessages } from '../src/lib/invalidNodeErrorMessages';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNodeInvalidLeaf {

    @test public testExtraneousParentNodeCannotBeCreated() {
        // Create a leaf node, which we will assign to the parent.
        const leafNode = new HuffmanBTreeNode(
            ['a'], 1, undefined, undefined,
        );

        // Attempt to create an extraneous parent node for the leaf node.
        const invalidParent = new HuffmanBTreeNode(
            ['a'], 1, leafNode, undefined,
        );

        assertNodeIsInInvalidState(invalidParent);
        assert.isFalse(invalidParent.checkResults.isValid);
        assert.equal(
            invalidParent.checkResults.message,
            InvalidNodeErrorMessages.parentNodeIsExtraneous,
            'Extraneous parent node was not properly identified.',
        );
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
