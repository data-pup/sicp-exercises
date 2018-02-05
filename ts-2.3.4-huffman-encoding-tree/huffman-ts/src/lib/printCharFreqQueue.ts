import { PriorityQueue } from "typescript-collections";
import { ICharFreqRecord } from "../interfaces/ICharFreqRecord";

const printICharFreqRecord = (record: ICharFreqRecord): void => {
    const char = record.getCharacter();
    const count = record.getOccurences();
    process.stdout.write(`Character: '${char}'\t# of Occurences: ${count}\n`);
};

export const printCharFreqQueue = (queue: PriorityQueue<ICharFreqRecord>)
                                        : void => {
    process.stdout.write("Queue Contents:\n");
    queue.forEach(printICharFreqRecord);
};
