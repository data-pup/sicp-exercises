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

}
