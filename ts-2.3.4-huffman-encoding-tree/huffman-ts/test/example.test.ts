import { assert } from "chai";
import { slow, suite, test, timeout } from "mocha-typescript";

@suite class Hello {
    @test public world() {
        assert.equal(2, 2, "Expected two to equal two.");
    }
}
