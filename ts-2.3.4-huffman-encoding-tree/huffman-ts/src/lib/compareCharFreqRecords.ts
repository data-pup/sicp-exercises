import { ICharFreqRecord } from '../interfaces/ICharFreqRecord';

// Compare CharFrequency objects, this is used to build the priority queue.
export const compareCharFreqRecords = (a:ICharFreqRecord, b:ICharFreqRecord)
                                        : number => {
    // Find the number of occurences stored in each record.
    const [aCount, bCount] = [a.getOccurences(), b.getOccurences()];
    // Compare the two values and return the corresponding result.
    if (aCount > bCount) {
        return  1;
    } else if (aCount < bCount) {
        return -1;
    } else {
        return  0;
    }
};
