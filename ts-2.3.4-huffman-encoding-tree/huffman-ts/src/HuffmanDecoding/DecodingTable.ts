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
        const decodedTokens:string[] = new Array<string>();
        let tokenStart:number = 0;
        let tokenEnd:number = 0;
        let token:string = undefined;
        while (tokenEnd < input.length) {
            token = input.substring(tokenStart, tokenEnd);
            if (this.decodingScheme.containsKey(token)) {
                decodedTokens.push(this.decodingScheme.getValue(token));
                tokenStart = tokenEnd;
            }
            tokenEnd++;
        }
        token = input.substring(tokenStart, tokenEnd);
        if (this.decodingScheme.containsKey(token)) {
            decodedTokens.push(this.decodingScheme.getValue(token));
            tokenStart = tokenEnd;
        }
        return decodedTokens.join('');
    }

    constructor(encoder:IEncodingTable) {
        this.decodingScheme = DecodingTable.generateDecodingScheme(encoder);
    }
}
