import { Dictionary, PriorityQueue } from "typescript-collections";
import { getCharFrequencies } from "./lib/count-characters";

// Define a class that will store the number of occurences for a given char.
class CharacterFrequency {
    public character: string;
    public occurences: number;
    constructor(c: string, f: number) {
        this.character = c;
        this.occurences = f;
    }
}

const CompareCharFrequency = (a: CharacterFrequency, b: CharacterFrequency)
                                : number => {
    if (a.occurences > b.occurences) {
        return  1;
    } else if (a.occurences < b.occurences) {
        return -1;
    } else {
        return  0;
    }
};

// Temporary function.
const tempFunction = (): void => {
    // Initialize a testing queue and add some basic example values.
    const pq = new PriorityQueue<CharacterFrequency>(CompareCharFrequency);
    pq.add(new CharacterFrequency("a", 1));
    pq.add(new CharacterFrequency("b", 2));
    pq.add(new CharacterFrequency("c", 3));

    // Print information about the queue and print the elements.
    process.stdout.write(`Queue has ${pq.size()} elements`);
    process.stdout.write(`Top queue item is ${pq.peek().character}`);

};

// Define a function that will print a dictionary.
const printDictionary = (dict: Dictionary<string, number>): void => {
    process.stdout.write("Dictionary Contents:\n");
    const dString = dict.toString();
    process.stdout.write(`Dictionary:\n${dString}\n`);
};

// Define the main function.
const main = () => {
    // Create a dictionary object, and then add some testing data.
    const s = "pet the good dog";
    const d = getCharFrequencies(s);
    printDictionary(d);
};

// Invoke the main function.
// main();
tempFunction();
