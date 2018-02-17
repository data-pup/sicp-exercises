import { Dictionary } from 'typescript-collections';
import { IDecodingTable } from './IDecodingTable';
import { IEncodingTable } from '../HuffmanEncoding/IEncodingTable';

export class DecodingTable implements IDecodingTable {

    // This is a private static helper function used by the constructor
    // to convert the schema of an encoding dictionary to a decoding
    // schema. This will return a Dictionary<string, string> object.
    private static generateDecodingScheme(encoder:IEncodingTable)
                                         : Dictionary<string, string> {
        // Initialize a new empty dictionary.
        const decodingScheme = new Dictionary<string, string>();

        // Iterate through the dictionary stored in the encoder.
        encoder.encodingScheme.forEach((char, encoding) : void => {
            decodingScheme.setValue(encoding, char);
        });

        // Return the decoding scheme.
        return decodingScheme;
    }

    public readonly decodingScheme:Dictionary<string, string>;

    public decode(input:string) : string {
        // Declare a decoded tokens array, and position variables.
        const decodedTokens:string[] = new Array<string>();
        let tokenStart:number = 0;
        let tokenEnd:number = 0;
        let token:string = undefined;

        // Declare a local function that will process the current substring.
        const processCurrentToken = () => {
            token = input.substring(tokenStart, tokenEnd);
            if (this.decodingScheme.containsKey(token)) {
                decodedTokens.push(this.decodingScheme.getValue(token));
                tokenStart = tokenEnd;
            }
        };

        // Move through the input string, and decode the content.
        while (tokenEnd < input.length) {
            processCurrentToken();
            tokenEnd++;
        }
        processCurrentToken();
        return decodedTokens.join('');
    }

    constructor(encoder:IEncodingTable) {
        this.decodingScheme = DecodingTable.generateDecodingScheme(encoder);
    }
}
