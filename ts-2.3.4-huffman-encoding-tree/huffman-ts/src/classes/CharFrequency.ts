import { ICharFrequency } from "../interfaces/ICharFrequency";

export class CharFrequency implements ICharFrequency {
    private character: string;
    private occurences: number;

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
