import { initializeQueue } from './lib/initCharFreqQueue';
import { printCharFreqQueue } from './lib/printCharFreqQueue';

// Define the main function.
const main = () => {
    const s = 'This is a testing string, to demonstrate a queue.';
    const q = initializeQueue(s);
    printCharFreqQueue(q);
};

// Invoke the main function.
main();
