import { isNullOrUndefined, isUndefined } from 'util';
import { ICharFreqRecord } from '../interfaces/ICharFreqRecord';

export class CharFreqRecord implements ICharFreqRecord {

    // Return a boolean representing whether or not the parameters are valid.
    public static paramsAreValid(c:string, f:number) : boolean {
        try { // Validate the parameters.
            CharFreqRecord.validateConstructorParams(c, f);
        } catch (e) { // Return false if the function threw an exception.
            return false;
        } // Otherwise, return true.
        return true;
    }

    // Validate the parameters given to the constructor. Throws an exception
    // if the parameters do not meet the expected requirements.
    private static validateConstructorParams(c:string, f:number) : void {
        if (isNullOrUndefined(c) || c.length === 0 || c.length > 1) {
            throw new Error( // Error message if string is empty or too long.
                'CharFreqRecord.character must be a single character.');
        } else if (isNaN(f) || isUndefined(f)) {
            throw new Error( // Error message if the occurence count is invalid.
                'CharFreqRecord.occurences cannot be undefined or NaN.');
        } else if (!isFinite(f)) {
            throw new Error( // Error message is the occurence count is infinite.
                'CharFreqRecord.occurences must be finite.');
        } else if (f <= 0) {
            throw new Error( // Error message if the occurence is out of bounds.
                'CharFreqRecord.occurences must be greater than 0.');
        }
    }

    // Private readonly member variables.
    private readonly character:string;
    private readonly occurences:number;

    // Constructor to create a new character frequency record object.
    constructor(c:string, f:number) {
        // Check that the given parameters pass validation, if the
        // validation checks passed, assign values to members.
        CharFreqRecord.validateConstructorParams(c, f);
        this.character = c;
        this.occurences = f;
    }

    // Accessor method to fetch the internal character value.
    public getCharacter() {
        return this.character;
    }

    // Accessor method to fetch the number of occurences for the character.
    public getOccurences() {
        return this.occurences;
    }
}
