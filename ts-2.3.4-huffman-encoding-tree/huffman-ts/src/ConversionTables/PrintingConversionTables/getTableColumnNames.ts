import { ColumnValueTuple, ConversionTable } from './printingHelperTypes';
import { TablePrintingErrorMessages } from './TablePrintingErrorMessages';

export const getSchemeKeyValueColumnNames = (table:ConversionTable)
                                            : ColumnValueTuple => {
    // Declare variables that we will assign depending on the type of table.
    const keyColumnName:string = getKeyColumnName(table);
    const valueColumnName:string = getValueColumnName(table);
    const names:ColumnValueTuple = [keyColumnName, valueColumnName];
    return names;
};

const getKeyColumnName = (table:ConversionTable) : string => {
    switch (table.type) {
        case 'decoding':
            return 'Encoding';
        case 'encoding':
            return 'Plaintext';
        default:
            throw new Error(TablePrintingErrorMessages.invalidTableType);
    }
};

const getValueColumnName = (table:ConversionTable) : string => {
    switch (table.type) {
        case 'decoding':
            return 'Plaintext';
        case 'encoding':
            return 'Encoding';
        default:
            throw new Error(TablePrintingErrorMessages.invalidTableType);
    }
};
