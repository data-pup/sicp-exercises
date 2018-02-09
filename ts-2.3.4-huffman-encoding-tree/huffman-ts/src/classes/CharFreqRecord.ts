import { isNullOrUndefined, isUndefined } from 'util';
import { ICharFreqRecord } from '../interfaces/ICharFreqRecord';

export class CharFreqRecord implements ICharFreqRecord {

    // Define error messages for constructor parameter validation functions.
    private static readonly charLengthErrorMessage =
        'CharFreqRecord.character must be a single character.';
    private static readonly occurenceUndefinedOrNaNErrorMessage =
        'CharFreqRecord.occurences cannot be undefined or NaN.';
    private static readonly occurenceInfinityErrorMessage =
        'CharFreqRecord.occurences must be finite.';
    private static readonly occurenceNegativeOrZeroErrorMessage =
        'CharFreqRecord.occurences must be greater than 0.';

    // Validate the parameters given to the constructor. Throws an exception
    // if the parameters do not meet the expected requirements.
    private static validateConstructorParams(c:string, o:number) : void {
        this.validateCharacterParam(c);
        this.validateOccurenceParam(o);
        this.validateOccurenceIsFiniteAndWithinBounds(o);
    }

    // Validate the constructor's string parameter. This should contain a
    // single character, and should not be null or undefined.
    private static validateCharacterParam(c:string) : void {
        if (isNullOrUndefined(c)) { // Throw an error if c is null or undefined.
            throw new Error(this.charLengthErrorMessage);
        }
        if (c.length != 1) { // Throw an error if c is not the correct length.
            throw new Error(this.charLengthErrorMessage);
        }
    }

    // Validate the occurence parameter. Throws an error object if the value
    // is NaN, undefined, or Inifinity, otherwise returns nothing. (void)
    private static validateOccurenceParam(o:number) : void {
        if (isNaN(o)) { // Throw an error if the value is NaN.
            throw new Error(this.occurenceUndefinedOrNaNErrorMessage);
        }
        if (isUndefined(o)) { // Throw an error if the value is undefined.
            throw new Error(this.occurenceUndefinedOrNaNErrorMessage);
        }
    }

    // Validate whether the occurence parameter, check that it is not Infinity
    // and is within the expected bounds. Throws an Error otherwise.
    private static validateOccurenceIsFiniteAndWithinBounds(o:number) : void {
        if (!isFinite(o)) { // Throw an error if the value is Infinity.
            throw new Error(this.occurenceInfinityErrorMessage);
        }
        if (o <= 0) { // Throw an error if the value is out of bounds.
            throw new Error(this.occurenceNegativeOrZeroErrorMessage);
        }
    }

    // Return a boolean representing whether or not the parameters are valid.
    public static paramsAreValid(c:string, f:number) : boolean {
        try { // Validate the parameters.
            CharFreqRecord.validateConstructorParams(c, f);
        } catch (e) { // Return false if the function threw an exception.
            return false;
        } // Otherwise, return true.
        return true;
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
