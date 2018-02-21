import { getSchemeKeyValueColumnNames } from './getTableColumnNames';
import { getTableColumnDimensions } from './getTablePrintingDimensions';
import {
    getTableStrings,
    getTableRuling,
} from './printingHelperMethods';
import {
    ColumnValueTuple,
    ColumnWidthTuple,
    ConversionTable,
} from './printingHelperTypes';

// Print an encoding table or a decoding table.
export const getTableString = (table:ConversionTable) : string => {

    // Define a padding value.
    const paddingAmount = 1;

    // Get type type, table method, create column names, find column widths.
    const columnNames:ColumnValueTuple = getSchemeKeyValueColumnNames(table);
    const columnWidths:ColumnWidthTuple = getTableColumnDimensions(
        table, columnNames, paddingAmount);

    // Initialize a string to store a horizontal ruling.
    const horizontalRuling:string = getTableRuling(columnWidths);

    return getTableStrings( // Return a single string representing the table.
        table, columnNames, columnWidths, paddingAmount, horizontalRuling,
    ).join('\n');
};
