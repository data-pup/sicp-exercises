import { ICharFrequency } from "../interfaces/ICharFrequency";

export class CharFrequency implements ICharFrequency {
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
