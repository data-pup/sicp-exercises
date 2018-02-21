import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import {
    NaiveDecodingTable,
    NaiveEncodingTable,
} from './importTestDependencies';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestNaiveDecodingTable {

    @test public testEmptyEncodingTableIsAccepted() {
        const net = new NaiveEncodingTable('');
        const ndt = new NaiveDecodingTable(net);
        assert.isTrue(ndt.decodingScheme.isEmpty());
    }

    @test public testUndefinedInputToConstructor() {
        const ndt = new NaiveDecodingTable(undefined);
        assert.isTrue(ndt.decodingScheme.isEmpty());
    }

    @test public testSimpleStringCanBeEncodedAndDecodedSuccessfully() {
        // Declare a test string that will be encoded and then decoded.
        const inputString = 'hello world';

        // Create a naive encoding table and a naive decoding table.
        const net = new NaiveEncodingTable(inputString);
        const ndt = new NaiveDecodingTable(net);

        // Encode the string, decode the result, and assert that the
        // resulting plaintext matches the original string.
        const outputString = ndt.decode(net.encode(inputString));
        assert.equal(inputString, outputString);
    }

}
