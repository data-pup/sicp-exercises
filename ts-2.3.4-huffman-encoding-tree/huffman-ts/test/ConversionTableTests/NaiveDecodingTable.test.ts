import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import {
    NaiveDecodingTable,
} from '../../src/NaiveDecoding/NaiveDecodingTable';
import {
    NaiveEncodingTable,
} from '../../src/NaiveEncoding/NaiveEncodingTable';

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

}
