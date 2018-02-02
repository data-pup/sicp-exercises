"use strict";

export const printHello = () => {
    process.stdout.write("Imported a function!\n");
};

// export const getCharacterFrequencies = (input: string): Array<String> => {
export const getCharacterFrequencies = (input: string) => {
    const inputChars = input.split("");

    for (const currChar of inputChars) {
        const printString = `${currChar}\n`;
        process.stdout.write(printString);
    }
};
