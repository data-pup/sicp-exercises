import { PriorityQueue } from 'typescript-collections';
import { isNullOrUndefined } from 'util';
import { CharFreqRecord } from '../classes/CharFreqRecord';
import { compareCharFreqRecords } from './compareCharFreqRecords';

// Declare a function that will create a new priority queue used to build
// the Huffman encoding tree.
export const initializeQueue = (inputString:string)
                                : PriorityQueue<CharFreqRecord> => {
    // Initialize a new priority queue, using the imported comparison function.
    const freqQueue = new PriorityQueue<CharFreqRecord>(compareCharFreqRecords);
    // Check that the input string was not empty, or undefined.
    if (isNullOrUndefined(inputString) || inputString.length === 0) {
        return freqQueue; // Return an empty queue if the input string is empty.
    } else { // Split and sort the input string, initialize loop variables.
        const sortedChars:string[] = inputString.split('').sort();
        let currChar:string = sortedChars[0];
        let currCharCount:number = 0;
        // Iterate through the array of sorted characters.
        for (const c of sortedChars) {
            if (c === currChar) { // Increment the count of the current character.
                currCharCount++;
            } else { // If a new character is found, add a new frequency record.
                freqQueue.add(new CharFreqRecord(currChar, currCharCount));
                currChar = c; // Process the new character, reset the counter.
                currCharCount = 1;
            }
        } // Add the remaining data to the queue after the loop ends.
        freqQueue.add(new CharFreqRecord(currChar, currCharCount));
        return freqQueue; // Return the result.
    }
};
