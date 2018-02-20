import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import {
    assertNodeIsInInvalidState,
} from '../testUtils/assertNodeIsInInvalidState';
import { HuffmanBTreeNode } from '../../src/HuffmanBTree/HuffmanBTreeNode';
import {
    InvalidNodeErrorMessages,
} from '../../src/HuffmanBTree/Validation/invalidNodeErrorMessages';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNodeInvalidLeaf {

    @test public testLeafNodeCannotHaveMultipleTokens() {
        // Attempt to create a leaf node with multiple tokens but no children.
        const invalidLeaf = new HuffmanBTreeNode(
            ['a', 'b'], 2, undefined, undefined,
        );

        // Assert that the node is in the correct invalid state, and that
        // the checkResults object contains the correct error message.
        assertNodeIsInInvalidState(invalidLeaf);
        assert.equal(
            invalidLeaf.checkResults.message,
            InvalidNodeErrorMessages.leafNodeHasMultipleTokens,
            'Leaf node with multiple tokens was improperly handled',
        );
    }

    @test public testLeafNodeCannotHaveWeightOfZero() {
        // Attempt to create a leaf node with multiple tokens but no children.
        const invalidLeaf = new HuffmanBTreeNode(
            ['a'], 0, undefined, undefined,
        );

        // Assert that the node is in the correct invalid state, and that
        // the checkResults object contains the correct error message.
        assertNodeIsInInvalidState(invalidLeaf);
        assert.equal(
            invalidLeaf.checkResults.message,
            InvalidNodeErrorMessages.leafNodeHasInvalidWeight,
            'Leaf node with weight of zero was improperly handled',
        );
    }

    @test public testLeafNodeCannotHaveNegativeWeight() {
        // Attempt to create a leaf node with multiple tokens but no children.
        const invalidLeaf = new HuffmanBTreeNode(
            ['a'], -1, undefined, undefined,
        );

        // Assert that the node is in the correct invalid state, and that
        // the checkResults object contains the correct error message.
        assertNodeIsInInvalidState(invalidLeaf);
        assert.equal(
            invalidLeaf.checkResults.message,
            InvalidNodeErrorMessages.leafNodeHasInvalidWeight,
            'Leaf node with weight of zero was improperly handled',
        );
    }

}
