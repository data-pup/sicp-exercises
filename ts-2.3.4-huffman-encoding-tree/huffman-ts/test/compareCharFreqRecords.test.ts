import { assert } from "chai";
import { suite, test } from "mocha-typescript";
import { CharFreqRecord } from "../src/classes/CharFreqRecord";
import { compareCharFreqRecords } from "../src/lib/compareCharFreqRecords";

@suite class testCompareCharFreqRecords {
    @test public testEqual() {
        const a = new CharFreqRecord("a", 1);
        const b = new CharFreqRecord("b", 1);
        const compareResult = compareCharFreqRecords(a, b);
        const expectedResult = 0;
        assert.equal(expectedResult, compareResult,
            "Expected result of 0 for two records with equal priority.");
    }
}
