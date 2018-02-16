import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import {
    convertNumberToEncodingString,
} from '../../src/NaiveEncoding/generateEncodingString';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestGenerateEncodingString {

    @test public testBasicEncodingExample() {
        // Expected encoding: 3 -> 11 -> 00011
        const value = 3;
        const encodingSize = 5;

        // Encode the value into a string of 1's and 0's.
        const encodingString = convertNumberToEncodingString(
            value, encodingSize);

        // Assert that the value was encoded correctly.
        const expectedEncodingString = '00011';
        assert.equal(encodingString, expectedEncodingString);
    }

    @test public testPaddingSizeOfZeroTriggersNoPadding() {
        // Expected encoding: 3 -> 11 -> 11
        const value = 3;
        const encodingSize = 0;

        // Encode the value into a string of 1's and 0's.
        const encodingString = convertNumberToEncodingString(
            value, encodingSize);

        // Assert that the value was encoded correctly.
        const expectedEncodingString = '11';
        assert.equal(encodingString, expectedEncodingString);
    }

    @test public testNegativeValueReturnsEmpty() {
        const value = -1;
        const encodingSize = 5;
        const encodingString = convertNumberToEncodingString(
            value, encodingSize);
        const actualLength = encodingString.length;
        const expectedLength = 0;
        assert.equal(actualLength, expectedLength);
    }

    @test public testInfinityReturnsEmpty() {
        const value = Infinity;
        const encodingSize = 5;
        const encodingString = convertNumberToEncodingString(
            value, encodingSize);
        const actualLength = encodingString.length;
        const expectedLength = 0;
        assert.equal(actualLength, expectedLength);
    }

    @test public testNaNReturnsEmpty() {
        const value = NaN;
        const encodingSize = 5;
        const encodingString = convertNumberToEncodingString(
            value, encodingSize);
        const actualLength = encodingString.length;
        const expectedLength = 0;
        assert.equal(actualLength, expectedLength);
    }

    @test public testPaddingSizeOfNaNReturnsEmpty() {
        const value = 3;
        const encodingSize = NaN;
        const encodingString = convertNumberToEncodingString(
            value, encodingSize);
        const actualLength = encodingString.length;
        const expectedLength = 0;
        assert.equal(actualLength, expectedLength);
    }

    @test public testNegativePaddingSizeReturnsEmpty() {
        const value = 3;
        const encodingSize = -1;
        const encodingString = convertNumberToEncodingString(
            value, encodingSize);
        const actualLength = encodingString.length;
        const expectedLength = 0;
        assert.equal(actualLength, expectedLength);
    }

    @test public testInfinitePaddingSizeReturnsEmpty() {
        const value = 3;
        const encodingSize = Infinity;
        const encodingString = convertNumberToEncodingString(
            value, encodingSize);
        const actualLength = encodingString.length;
        const expectedLength = 0;
        assert.equal(actualLength, expectedLength);
    }

}
