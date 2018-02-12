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
        assert.equal(
            invalidParent.checkResults.message,
            InvalidNodeErrorMessages.parentNodeIsExtraneous,
            'Extraneous parent node was not properly identified.',
        );
    }

    @test public testParentNodeCannotBeMissingTokens() {
        // Create two new child nodes.
        const [leftChild, rightChild] = [
            new HuffmanBTreeNode(['a'], 1, undefined, undefined),
            new HuffmanBTreeNode(['b'], 1, undefined, undefined),
        ];

        // Attempt to manually create an invalid parent object with no tokens.
        const invalidParent = new HuffmanBTreeNode(
            [], 2, leftChild, rightChild,
        );

        // Check that the node was correctly recognized as invalid.
        assertNodeIsInInvalidState(invalidParent);
        assert.equal(
            invalidParent.checkResults.message,
            InvalidNodeErrorMessages.parentNodeIsMissingTokens,
            'Parent node with missing tokens was not correctly identified',
        );
    }

    @test public testParentNodeCannotHaveWeightOfZero() {
        // Create two new child nodes.
        const [leftChild, rightChild] = [
            new HuffmanBTreeNode(['a'], 1, undefined, undefined),
            new HuffmanBTreeNode(['b'], 1, undefined, undefined),
        ];

        // Attempt to manually create an invalid parent object with no tokens.
        const invalidParent = new HuffmanBTreeNode(
            ['a', 'b'], 0, leftChild, rightChild,
        );

        // Check that the node was correctly recognized as invalid.
        assertNodeIsInInvalidState(invalidParent);
        assert.equal(
            invalidParent.checkResults.message,
            InvalidNodeErrorMessages.parentNodeHasInvalidWeight,
            'Parent node with invalid weight was not correctly handled.',
        );
    }

    @test public testParentNodeCannotHaveNegativeWeight() {
        // Create two new child nodes.
        const [leftChild, rightChild] = [
            new HuffmanBTreeNode(['a'], 1, undefined, undefined),
            new HuffmanBTreeNode(['b'], 1, undefined, undefined),
        ];

        // Attempt to manually create an invalid parent object with no tokens.
        const invalidParent = new HuffmanBTreeNode(
            ['a', 'b'], -1, leftChild, rightChild,
        );

        // Check that the node was correctly recognized as invalid.
        assertNodeIsInInvalidState(invalidParent);
        assert.equal(
            invalidParent.checkResults.message,
            InvalidNodeErrorMessages.parentNodeHasInvalidWeight,
            'Parent node with negative weight was not correctly handled.',
        );
    }

    @test public testParentNodeWeightMustEqualChildrenWeightSum() {
        // Create two new child nodes.
        const [leftChild, rightChild] = [
            new HuffmanBTreeNode(['a'], 1, undefined, undefined),
            new HuffmanBTreeNode(['b'], 1, undefined, undefined),
        ];

        // Attempt to manually create an invalid parent object with no tokens.
        const invalidParent = new HuffmanBTreeNode(
            ['a', 'b'], 3, leftChild, rightChild,
        );

        // Check that the node was correctly recognized as invalid.
        assertNodeIsInInvalidState(invalidParent);
        assert.equal(
            invalidParent.checkResults.message,
            InvalidNodeErrorMessages.parentNodeHasInvalidWeight,
            'Parent node with incorrect weight was not correctly handled.',
        );
    }

    @test public testParentNodeCannotHaveDuplicateTokens() {
        assert.equal(1, 1, 'Temporary placeholder.');
    }

}
