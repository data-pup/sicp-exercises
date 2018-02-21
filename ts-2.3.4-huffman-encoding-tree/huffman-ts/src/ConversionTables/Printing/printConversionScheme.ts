import {
    createStringOfLength,
    getTableStrings,
} from './printingHelperMethods';
import {
    ConversionTable,
} from './printingHelperTypes';
import {
    TablePrintingErrorMessages,
} from './TablePrintingErrorMessages';
import { isNullOrUndefined } from 'util';

export const getConversionSchemeString = (tableArray:ConversionTable[],
                                          spacing:number=4) : string => {
    return getConversionSchemeStrings(tableArray, spacing).join('\n');
};

export const getConversionSchemeStrings = (tableArray:ConversionTable[],
                                           spacing:number=4) : string[] => {
    const tableStrings:string[][] = tableArray.map(
        (table:ConversionTable) => getTableStrings(table),
    );

    const tableSpacing:string = createStringOfLength(' ', spacing);
    const joinedStrings:string[] = new Array<string>();
    const loopMax = getLoopHeight(tableStrings);

    for (let i = 0; i < loopMax; i++) {
        joinedStrings.push(
            joinCurrentRows(tableStrings, i, tableSpacing),
        );
    }

    return joinedStrings;
};

const joinCurrentRows = (tableStrings:string[][],
                         index:number,
                         spacingString:string) : string => {
    return tableStrings.map(
        (rowStrings) => rowStrings[index],
    ).join(spacingString);
};

const getLoopHeight = (tableStrings:string[][]) : number => {
    if (isNullOrUndefined(tableStrings)) {
        throw new Error(TablePrintingErrorMessages.schemeArrayEmpty);
    }

    if (tableStrings.length === 0) {
        throw new Error(TablePrintingErrorMessages.schemeArrayEmpty);
    }

    const schemeLength = tableStrings[0].length;
    for (const currScheme of tableStrings) {
        if (currScheme.length != schemeLength) {
            throw new Error(TablePrintingErrorMessages.schemesDoNotMatch);
        }
    }

    return schemeLength;
};
