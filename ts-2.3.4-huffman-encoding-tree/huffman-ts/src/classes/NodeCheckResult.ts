import { isUndefined } from 'util';
import { INodeCheckResult } from '../interfaces/INodeCheckResult';

export class NodeCheckResult implements INodeCheckResult {

    // Private static error message declarations.
    public static missingErrorMessage =
        'Result object must contain an Error message if check failed';

    // Member variables.
    public readonly isValid:boolean;
    public readonly message:string;

    constructor (isValid:boolean, message:string) {
        this.isValid = isValid;
        this.message = message;
        this.checkResultObjectState();
    }

    // This method is used to check that test results related to a failed
    // validity check always include a defined error message. If this.isValid
    // is false but the message does not contained a defined string, throw
    // an Error object.
    private checkResultObjectState() : void {
        const hasUndefinedMessage = isUndefined(this.message);
        const testFailed = ! this.isValid;
        if (testFailed && hasUndefinedMessage) {
            throw new Error(
                NodeCheckResult.missingErrorMessage,
            );
        }
    }
}
