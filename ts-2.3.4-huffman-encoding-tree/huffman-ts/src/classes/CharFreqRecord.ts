import { ICharFreqRecord } from "../interfaces/ICharFreqRecord";

export class CharFreqRecord implements ICharFreqRecord {
    private readonly character: string;
    private readonly occurences: number;

    constructor(c: string, f: number) {
        this.character = c;
        this.occurences = f;
    }

    public getCharacter() {
        return this.character;
    }

    public getOccurences() {
        return this.occurences;
    }
}
