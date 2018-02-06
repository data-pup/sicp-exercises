import { assert } from "chai";
import { slow, suite, test, timeout } from "mocha-typescript";

@suite class Hello {
    @test public world() {
        assert.equal(1, 2, "Expected one to equal two.");
    }
}
