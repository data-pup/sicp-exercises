import { Dictionary, PriorityQueue } from "typescript-collections";
import { getCharFrequencies } from "./lib/count-characters";

// Temporary function.
const tempFunction = (): void => {
    // Initialize a testing queue.
    const pq = new PriorityQueue<string>();
    pq.add("hello");
    pq.add("hello");
    pq.add("world");

    // Print information about the queue and print the elements.
    process.stdout.write(`Queue has ${pq.size()} elements`);
    process.stdout.write(`Top queue item is ${pq.peek()}`);
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
