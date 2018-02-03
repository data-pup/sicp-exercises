
import { Dictionary } from "typescript-collections";

import { getCharacterFrequencies } from "./lib/string-processing";

// Define the main function.
const main = () => {

    // Create a dictionary object, and then add some testing data.
    const d = new Dictionary<string, number>();
    d.setValue("hello", 0);
    d.setValue("world", 1);
    const dString = d.toString();
    process.stdout.write(`Dictionary:\n${dString}\n`);

    getCharacterFrequencies("Hello!");
};

// Invoke the main function.
main();
