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

export const getConversionSchemeString = (t1:ConversionTable,
                                          t2:ConversionTable,
                                          spacing:number=4) : string => {
    const t1Strings:string[] = getTableStrings(t1);
    const t2Strings:string[] = getTableStrings(t2);

    if (t1Strings.length != t2Strings.length) {
        throw new Error(TablePrintingErrorMessages.schemesDoNotMatch);
    }

    const tableSpacing:string = createStringOfLength(' ', spacing);
    const joinedStrings:string[] = new Array<string>();
    const loopMax = t1Strings.length;

    for (let i = 0; i < loopMax; i++) {
        joinedStrings.push(
            [
                t1Strings[i],
                t2Strings[i],
            ].join(tableSpacing),
        );
    }

    return joinedStrings.join('\n');
};
