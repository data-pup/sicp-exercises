import { ICharFrequency } from "../interfaces/ICharFrequency";

export class CharFreqRecord implements ICharFrequency {
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
