import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import {
    NodeCheckResult,
} from './importTestDependencies';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestNodeCheckResult {

    @test public testFailedCheckMustContainMessage() {
        // Define a function that will attempt to create an invalid
        // check result, where .isValid is false but no message is set.
        const createInvalidNodeCheckResult = () : void => {
            /* tslint:disable-next-line:no-unused-variable */
            const invalidNodeCheckResult = new NodeCheckResult(
                false, undefined,
            );
        };

        // Assert the function above will raise the correct error message.
        assert.throws(
            createInvalidNodeCheckResult,
            NodeCheckResult.missingErrorMessage,
        );
    }

}
