import { assert } from "chai";
import { suite, test } from "mocha-typescript";
import { CharFreqRecord } from "../src/classes/CharFreqRecord";

@suite class TestCharFreqRecord {

    @test public basicFreqRecordTest() {
        // Create a new record object.
        const record = new CharFreqRecord("a", 0);

        // Check the character getter method.
        const actualChar = record.getCharacter();
        const expectedChar = "a";
        assert.equal(actualChar, expectedChar, "Expected string 'a'.")

        // Check the occurence count getter method.
        const actualOccurences = record.getOccurences();
        const expectedOccurences = 0;
        assert.equal(actualOccurences, expectedOccurences,
            "Expected occurence value of 0.");
    }

    @test public testPrivateStringCannotBeChanged() {
        // Create a new record object.
        const record = new CharFreqRecord("a", 0);

        // Use the getter method to fetch the character value.
        let s = record.getCharacter();
        s = "new string value"; // Reassign the value.

        // Check that the method return is not different.
        let actualChar = record.getCharacter();
        let expectedChar = "a";
        assert.equal(actualChar, expectedChar, "Private object was changed.");
    }

}
