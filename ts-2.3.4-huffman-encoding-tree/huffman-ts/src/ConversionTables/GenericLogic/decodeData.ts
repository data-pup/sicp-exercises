import { Dictionary } from 'typescript-collections';

export const decodeInputString = (input:string,
                                  decodingScheme:Dictionary<string, string>)
                                 : string => {
    // Declare a decoded tokens array, and position variables.
    const decodedTokens:string[] = new Array<string>();
    let tokenStart:number = 0;
    let tokenEnd:number = 0;
    let token:string = undefined;

    // Declare a local function that will process the current substring.
    const processCurrentToken = () => {
        token = input.substring(tokenStart, tokenEnd);
        if (decodingScheme.containsKey(token)) {
            decodedTokens.push(decodingScheme.getValue(token));
            tokenStart = tokenEnd;
        }
    };

    // Move through the input string, and decode the content.
    while (tokenEnd < input.length) {
        processCurrentToken();
        tokenEnd++; // Increment the current token end position.
    } // Process the end of the input string.
    processCurrentToken();
    return decodedTokens.join(''); // Join the tokens and return.
};
