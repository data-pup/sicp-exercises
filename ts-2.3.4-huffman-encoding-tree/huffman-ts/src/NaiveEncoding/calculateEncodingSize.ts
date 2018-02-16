import { isNullOrUndefined } from 'util';
import { convertNumberToEncodingString } from './generateEncodingString';

// This function will calculate the padding size, by finding the length
// of the largest encoding value.
export const calculateEncodingSize = (tokens:string[]) : number => {
    if (isNullOrUndefined(tokens)) {
        throw new Error('Error calculating encoding string size!');
    }

    // If the token array contains 0 or 1 elements, return a length of 1.
    if (tokens.length <= 1) {
        return 1;
    }

    // Calculate the largest encoding value, and return its length.
    const maxEncodingValue:number = tokens.length - 1;
    const encoding:string = convertNumberToEncodingString(maxEncodingValue);
    return encoding.length;
};
