import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { HuffmanBTreeNode } from '../src/classes/HuffmanBTreeNode';
import { InvalidNodeErrorMessages } from '../src/lib/invalidNodeErrorMessages';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestHuffmanBTreeNodeInvalidLeaf {

    private checkNodeIsInvalidState(node:HuffmanBTreeNode) : void {
        // Check that the child pointers, token list, and weight are undefined.
        assert.isUndefined(node.left);
        assert.isUndefined(node.right);
        assert.isUndefined(node.weight);
        assert.isUndefined(node.tokens);
    }

    @test public testLeafNodeCannotHaveMultipleTokens() {
        // Attempt to create a leaf node with multiple tokens but no children.
        const invalidLeaf = new HuffmanBTreeNode(
            ['a', 'b'], 2, undefined, undefined,
        );

        // Assert that the node is in the correct invalid state, and that
        // the checkResults object contains the correct error message.
        this.checkNodeIsInvalidState(invalidLeaf);
        assert.isFalse(invalidLeaf.checkResults.isValid);
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
        this.checkNodeIsInvalidState(invalidLeaf);
        assert.isFalse(invalidLeaf.checkResults.isValid);
        assert.equal(
            invalidLeaf.checkResults.message,
            InvalidNodeErrorMessages.leafNodeIsMissingWeight,
            'Leaf node with weight of zero was improperly handled',
        );
    }

    @test public testLeafNodeCannotHaveNegativeWeight() {
        assert.equal(1, 1, 'Placeholder assertion.');
    }

}
