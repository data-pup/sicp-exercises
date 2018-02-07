import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { CharFreqRecord } from '../src/classes/CharFreqRecord';
import { compareCharFreqRecords } from '../src/lib/compareCharFreqRecords';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestCompareCharFreqRecords {

    @test public testEqual() {
        const a = new CharFreqRecord('a', 1);
        const b = new CharFreqRecord('b', 1);
        const compareResult = compareCharFreqRecords(a, b);
        const expectedResult = 0;
        assert.equal(expectedResult, compareResult,
                     'Expected 0 for two records with equal priority.');
    }

    @test public testGreaterThan() {
        const a = new CharFreqRecord('a', 2);
        const b = new CharFreqRecord('b', 1);
        const compareResult = compareCharFreqRecords(a, b);
        const expectedMinimum = 0;
        assert.isAbove(compareResult, expectedMinimum,
                       'Expected result greater than 0.');
    }

    @test public testLessThan() {
        const a = new CharFreqRecord('a', 1);
        const b = new CharFreqRecord('b', 2);
        const compareResult = compareCharFreqRecords(a, b);
        const expectedMaximum = 0;
        assert.isBelow(compareResult, expectedMaximum,
                       'Expected result less than 0.');
    }

}
