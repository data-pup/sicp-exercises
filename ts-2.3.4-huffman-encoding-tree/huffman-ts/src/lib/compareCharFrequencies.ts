import { ICharFrequency } from "../interfaces/ICharFrequency";

// Compare CharFrequency objects, this is used to build the priority queue.
export const compareCharFrequency = (a: ICharFrequency, b: ICharFrequency)
                                        : number => {
    const aCount = a.getOccurences();
    const bCount = b.getOccurences();
    if (aCount > bCount) {
        return  1;
    } else if (aCount < bCount) {
        return -1;
    } else {
        return  0;
    }
};
