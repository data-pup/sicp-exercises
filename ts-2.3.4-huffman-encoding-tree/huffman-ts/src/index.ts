import { PriorityQueue } from "typescript-collections";
import { CharFreqRecord } from "./classes/CharFreqRecord";
import { ICharFreqRecord } from "./interfaces/ICharFreqRecord";
import { compareCharFreqRecords } from "./lib/compareCharFreqRecords";
import { initializeQueue } from "./lib/initCharFreqQueue";
import { printCharFreqQueue } from "./lib/printCharFreqQueue";

// Define the main function.
const main = () => {
    const s: string = "testing string";
    const q = initializeQueue(s);
    printCharFreqQueue(q);
};

// Invoke the main function.
main();
