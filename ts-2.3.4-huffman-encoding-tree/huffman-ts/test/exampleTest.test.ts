import "chai";
import { describe, it } from "mocha-typescript";

describe("#Example", () => {

    it("Should pass a simple test", () => {
        const hello = "hello";
        chai.expect(hello).to.equal("hello");
    });

});
