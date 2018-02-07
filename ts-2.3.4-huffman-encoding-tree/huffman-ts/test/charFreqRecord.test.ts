import { assert } from "chai";
import { suite, test } from "mocha-typescript";
import { CharFreqRecord } from "../src/classes/CharFreqRecord";

@suite class TestCharFreqRecord {

    @test public basicFreqRecordTest() {
        // Create a new record object.
        const record = new CharFreqRecord("a", 1);
        // Check the character getter method.
        const actualChar = record.getCharacter();
        const expectedChar = "a";
        assert.equal(actualChar, expectedChar, "Expected string 'a'.");
        // Check the occurence count getter method.
        const actualOccurences = record.getOccurences();
        const expectedOccurences = 1;
        assert.equal(actualOccurences, expectedOccurences,
            "Expected occurence value of 0.");
    }

    @test public testZeroIsNotAcceptedAsOccurenceValue() {
        // Define a function that creates a record with an invalid occurence value.
        function createInvalidCharFreqRecord() {
            const a = new CharFreqRecord("a", 0);
        } // Assert that the function above will raise an exception.
        assert.throws(createInvalidCharFreqRecord,
            "CharFreqRecord.occurences must be greater than 0.");
    }

    @test public testNegativeValueIsNotAccepted() {
        // Define a function that creates a record with an invalid occurence value.
        function createInvalidCharFreqRecord() {
            const a = new CharFreqRecord("a", -0.01);
        } // Assert that the function above will raise an exception.
        assert.throws(createInvalidCharFreqRecord,
            "CharFreqRecord.occurences must be greater than 0.");
    }

    @test public testNaNIsNotAcceptedAsOccurenceValue() {
        // Define a function that creates a record with an invalid occurence value.
        function createInvalidCharFreqRecord() {
            const a = new CharFreqRecord("a", NaN);
        } // Assert that the function above will raise an exception.
        assert.throws(createInvalidCharFreqRecord,
            "CharFreqRecord.occurences cannot be undefined or NaN.");
    }

    @test public testEmptyStringIsNotAcceptedAsCharValue() {
        // Define a function that creates a record with an invalid char value.
        function createInvalidCharFreqRecord() {
            const a = new CharFreqRecord("", 1);
        } // Assert that the function above will raise an exception.
        assert.throws(createInvalidCharFreqRecord,
            "CharFreqRecord.character must be a single character.");
    }

    @test public testLongStringIsNotAcceptedAsCharValue() {
        // Define a function that creates a record with an invalid char value.
        function createInvalidCharFreqRecord() {
            const a = new CharFreqRecord("ABC", 1);
        } // Assert that the function above will raise an exception.
        assert.throws(createInvalidCharFreqRecord,
            "CharFreqRecord.character must be a single character.");
    }

    @test public testPrivateStringCannotBeChanged() {
        // Create a new record object.
        const record = new CharFreqRecord("a", 1);
        // Use the getter method to fetch the character value.
        let s = record.getCharacter();
        s = "new string value"; // Reassign the value.
        // Check that the method return is not different.
        const actualChar = record.getCharacter();
        const expectedChar = "a";
        assert.equal(actualChar, expectedChar, "Private object was changed.");
    }

    @test public testParamsAreValidFunctionWithInvalidInputs() {
        const invalidValues = [ // Define an array of invalid input values.
            ["a", 0],
            ["a", -1],
            ["", 1],
            ["Hello", 1],
            [undefined, 1],
        ]; // Use the map function to find the results for each input case.
        const invalidCheckResults = invalidValues.map( (i) => {
            return CharFreqRecord.paramsAreValid(
                i[0] as string,
                i[1] as number,
            );
        }); // Count the number of inputs that were considered valid.
        const numberOfPassedChecks = invalidCheckResults
            .filter( (val) => val === true ).length;
        const expectedNumberOfPassedChecks = 0;
        assert.equal(numberOfPassedChecks, expectedNumberOfPassedChecks,
            "None of the given checks should have passed validation.");
    }

    @test public testParamsAreValidFunctionWithValidInputs() {
        const validValues = [ // Define an array of valid input values.
            ["a", 1],
        ]; // Use the map function to find the results that were accepted.
        const validCheckResults = validValues.map( (i) => {
            return CharFreqRecord.paramsAreValid(
                i[0] as string,
                i[1] as number,
            );
        }); // Assert that all of the tests passed.
        const numberOfPassedChecks = validCheckResults
            .filter( (val) => val === true ).length;
        const expectedNumberOfPassedChecks = validCheckResults.length;
        assert.equal(numberOfPassedChecks, expectedNumberOfPassedChecks);
    }

}
