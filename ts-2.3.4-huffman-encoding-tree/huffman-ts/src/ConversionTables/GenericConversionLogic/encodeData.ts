import { Dictionary } from 'typescript-collections';

export const encodeInputString = (input:string,
                                  encodingScheme:Dictionary<string, string>)
                                 : string => {
    const inputChars = input.split('');
    const encodedChars = inputChars.map((char) => {
        return encodingScheme.getValue(char);
    });
    const encodedOutput = encodedChars.join('');
    return encodedOutput;
};
