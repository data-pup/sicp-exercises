import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import {
    calculateEncodingSize,
} from '../../src/NaiveEncoding/calculateEncodingSize';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestCalculateEncodingSize {

    @test public testUndefinedInputRaisesError() {
        const expectedError:string = 'Error calculating encoding string size!';
        assert.throws(
            () => {
                const testValue:string[] = undefined;
                calculateEncodingSize(testValue);
            },
            expectedError);
    }

    @test public testEmptyArrayReturnsEncodingSizeOf1() {
        const testArray:string[] = new Array<string>();
        const actualEncodingSize:number = calculateEncodingSize(testArray);
        const expectedEncodingSize = 1;
        assert.equal(actualEncodingSize, expectedEncodingSize,
                     'Expected encoding size of 1.');
    }

    @test public testArrayOfSizeOneReturnsEncodingSizeOf1() {
        const testArray:string[] = ['a'];
        const actualEncodingSize:number = calculateEncodingSize(testArray);
        const expectedEncodingSize = 1;
        assert.equal(actualEncodingSize, expectedEncodingSize,
                     'Expected encoding size of 1.');
    }

    @test public testArrayOfSizeTwoReturnsEncodingSizeOf1() {
        const testArray:string[] = ['a', 'b'];
        const actualEncodingSize:number = calculateEncodingSize(testArray);
        const expectedEncodingSize = 1;
        assert.equal(actualEncodingSize, expectedEncodingSize,
                     'Expected encoding size of 1.');
    }

    @test public testOtherArraysReturnCorrectEncodingSize() {
        // An array of size 9 will have the following encoding values:
        // [ 0000, 0001, 0010, 0011, 0100, 0101, 0110, 0111, 1000 ]
        // and thus should have an encoding length of 4.
        // -----------------------------------------------------------
        const testArray = [ // Declare the testing array (9 element).
            'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k',
        ];
        const actualEncodingSize:number = calculateEncodingSize(testArray);
        const expectedEncodingSize = 4; // Check the calculated encoding size.
        assert.equal(actualEncodingSize, expectedEncodingSize,
                     'Expected encoding size of 4.');
    }

}
