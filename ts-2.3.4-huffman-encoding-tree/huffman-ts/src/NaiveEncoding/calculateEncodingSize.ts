import { convertNumberToEncodingString } from './generateEncodingString';

// This function will calculate the padding size, by finding the length
// of the largest encoding value.
export const calculateEncodingSize = (tokens:string[]) : number => {
    const maxEncodingValue:number = tokens.length - 1;
    const encoding:string = convertNumberToEncodingString(maxEncodingValue);
    return encoding.length;
};
