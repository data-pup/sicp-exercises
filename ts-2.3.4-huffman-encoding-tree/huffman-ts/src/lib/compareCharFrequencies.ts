import { ICharFrequency } from "../interfaces/ICharFrequency";

// Compare CharFrequency objects, this is used to build the priority queue.
export const compareCharFrequencies = (a: ICharFrequency, b: ICharFrequency)
                                        : number => {
    const [aCount, bCount] = [a.getOccurences(), b.getOccurences()];
    if (aCount > bCount) {
        return  1;
    } else if (aCount < bCount) {
        return -1;
    } else {
        return  0;
    }
};
