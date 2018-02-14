import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';

@suite class TestDecodingTable {

    @test public placeholderTest() {
        assert.equal(1, 1, 'Placeholder Test');
    }

}
