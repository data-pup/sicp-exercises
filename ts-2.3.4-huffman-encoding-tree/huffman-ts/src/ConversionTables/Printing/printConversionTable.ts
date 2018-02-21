import { getTableStrings } from './printingHelperMethods';
import { ConversionTable } from './printingHelperTypes';

// Print an encoding table or a decoding table.
export const getTableString = (table:ConversionTable) : string => {
    return getTableStrings(table).join('\n');
};
