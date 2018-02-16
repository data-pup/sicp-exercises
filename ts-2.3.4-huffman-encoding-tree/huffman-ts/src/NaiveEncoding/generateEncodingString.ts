const leftPad = require('left-pad');

// Convert a number `i` to an encoding string with at least `paddingSize`
// characters. If `paddingSize` is zero, the encoding will not be left
// padded with zeroes. If `i` is not an integer that can be safely represented,
// or negative, an empty string will be returned.
export const convertNumberToEncodingString = (i:number, paddingSize:number)
                                             : string => {
    // Return an empty string if the validation function returns false
    // for either the value to be encoded, or the paddding size parameter.
    if (!parameterIsValidNonNegativeInteger(i)) {
        return '';
    } else if (!parameterIsValidNonNegativeInteger(paddingSize)) {
        return '';
    } else {
        // Calculate the base-2 string representation of `i`, pad the encoding
        // string if the string is shorter than the desired encoding size.
        const binaryStringRepresentation = i.toString(2);
        return padStringIfNeeded(binaryStringRepresentation, paddingSize);
    }
};

// Checks if left padding is needed for the encoding string. If padding is
// needed, invoke the leftPad function to place leading 0's in the string.
const padStringIfNeeded = (encoding:string, paddingSize:number) : string => {
    return (paddingSize <= encoding.length) ?
            encoding // Return the encoding string if no padding is needed.
            : leftPad(encoding, paddingSize, '0'); // Pad the string if needed.
};

// Check that the input value `i` is a finite, safe, integer greater than or
// equal to 0. Returns true if this is the case, and returns false otherwise.
const parameterIsValidNonNegativeInteger = (i:number) : boolean => {
    if (!Number.isFinite(i)) {
        return false;
    } else if (!Number.isNaN(i)) {
        return false;
    } else if (!Number.isSafeInteger(i)) {
        return false;
    } else if (i < 0) {
        return false;
    } else {
        return true;
    }
};
