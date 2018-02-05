import { Dictionary, PriorityQueue } from "typescript-collections";

import { CharFreqRecord } from "./classes/CharFrequency";
import { ICharFrequency } from "./interfaces/ICharFrequency";
import { compareCharFrequencies } from "./lib/compareCharFrequencies";
import { getCharFrequencies } from "./lib/countCharacters";

// Temporary function.
const tempFunction = (): void => {
    const s: string = "hellooo";
    const a: string[] = s.split("").sort();

    const pq = new PriorityQueue<CharFreqRecord>(compareCharFrequencies);
    let currChar: string = a[0];
    let currCount: number = 0;

    for (const c of a) {
        if (c === currChar) {
            currCount++;
        } else {
            // Add a new freq record using the existing values.
            pq.add(new CharFreqRecord(currChar, currCount));
            [currChar, currCount] = [c, 1]; // Process the current character.
        }
    }
    pq.add(new CharFreqRecord(currChar, currCount));

    process.stdout.write("Queue contents:");
    while (!pq.isEmpty()) {
        process.stdout.write(`${pq.dequeue().getCharacter()}`);
    }
};

// Define the main function.
const main = () => {
    // Create a dictionary object, and then add some testing data.
    const s = "pet the good dog";
    const d = getCharFrequencies(s);
};

// Invoke the main function.
// main();
tempFunction();
