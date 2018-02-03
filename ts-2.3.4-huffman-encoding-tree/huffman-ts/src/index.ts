import { Dictionary } from "typescript-collections";
import { getCharFrequencies } from "./lib/string-processing";

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
main();
