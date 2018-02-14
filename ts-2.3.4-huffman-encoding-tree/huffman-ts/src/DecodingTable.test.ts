import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
// import { DecodingTable } from '../src/classes/DecodingTable';
// import { EncodingTable } from '../src/classes/EncodingTable';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestDecodingTable {

    @test public placeholderTest() {
        assert.equal(1, 1, 'Placeholder Test');
    }

}
