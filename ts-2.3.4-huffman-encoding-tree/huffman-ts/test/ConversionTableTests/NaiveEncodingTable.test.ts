import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { Dictionary } from 'typescript-collections';
import { NaiveEncodingTable } from './importTestDependencies';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestNaiveEncodingTable {

    @test public testEmptyStringResultsInEmptyNaiveEncodingScheme() {
        const net = new NaiveEncodingTable('');
        assert.isTrue(net.encodingScheme.isEmpty());
    }

    @test public testUndefinedStringResultsInEmptyNaiveEncodingScheme() {
        const net = new NaiveEncodingTable('');
        assert.isTrue(net.encodingScheme.isEmpty());
    }

    @test public testSimpleStringCreatesCorrectNaiveEncodingScheme() {
        // Initialize a naive encoding string using a simple input string.
        const net = new NaiveEncodingTable('abc');

        // Initialize a dictionary which will be used to check that
        // the naive encoding scheme is correct.
        const expectedScheme = new Dictionary<string, string>();
        expectedScheme.setValue('a', '00');
        expectedScheme.setValue('b', '01');
        expectedScheme.setValue('c', '10');

        // Check that the real and expected values match for each key.
        expectedScheme.forEach(
            (token, expectedEncoding) : void => {
                const actualEncoding:string = net.encodingScheme
                    .getValue(token);
                assert.equal(actualEncoding, expectedEncoding);
            },
        );
    }

}
