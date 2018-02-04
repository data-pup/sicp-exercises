import { Dictionary, PriorityQueue } from "typescript-collections";

import { CharFrequency } from "./classes/CharFrequency";
import { ICharFrequency } from "./interfaces/ICharFrequency";
import { compareCharFrequencies } from "./lib/compareCharFrequencies";
import { getCharFrequencies } from "./lib/countCharacters";

// Temporary function.
const tempFunction = (): void => {
    // Initialize a testing queue and add some basic example values.
    const pq = new PriorityQueue<ICharFrequency>(compareCharFrequencies);
    pq.add(new CharFrequency("a", 1));
    pq.add(new CharFrequency("b", 2));
    pq.add(new CharFrequency("c", 3));

    // Print information about the queue and print the elements.
    process.stdout.write(`Queue has ${pq.size()} elements`);
    process.stdout.write(`Top queue item is ${pq.peek().getCharacter()}`);
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
