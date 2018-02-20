import { getSchemeKeyValueColumnNames } from './getTableColumnNames';
import { getTableColumnDimensions } from './getTablePrintingDimensions';
import { TablePrintingErrorMessages } from './TablePrintingErrorMessages';
import {
    ColumnValueTuple,
    ColumnWidthTuple,
    ConversionTable,
} from './printingHelperTypes';

// Print an encoding table or a decoding table.
/* tslint:disable-next-line:no-unused-variable */
export const getTableString = (table:ConversionTable) : string => {

    // Define a padding value.
    const paddingAmount = 1;

    // Get type type, table method, create column names, find column widths.
    const columnNames:ColumnValueTuple = getSchemeKeyValueColumnNames(table);
    const columnWidths:ColumnWidthTuple = getTableColumnDimensions(
        table, columnNames, paddingAmount);

    // Initialize a string to store a horizontal ruling.
    const horizontalRuling:string = getHorizontalRuling(columnWidths);

    // Calculate the string representation of the table, and return.
    const headerString:string = getHeaderString( // Get the header string.
        table, columnNames, columnWidths, paddingAmount, horizontalRuling);
    const bodyString = getBodyString( // Get the body string.
        table, columnWidths, paddingAmount, horizontalRuling);
    return [headerString, bodyString].join('\n');
};

// This function will create a string containing the generic section of the
// table printing header. This should contain the type of the table being
// printed, and what the encoding method used to generate the scheme was.
const getHeaderString = (table:ConversionTable,
                         columnNames:ColumnValueTuple,
                         columnWidths:ColumnWidthTuple,
                         padding:number,
                         horizontalRuling:string) : string => {
    // Initialize header row strings, and the values of the header.
    const headerStrings = [`Type:${table.type}`, `Method:${table.method}`];
    const headerWidth:number = getHeaderRowWidth(columnWidths);

    // Pad the row strings in the header, and wrap in '|' characters.
    const headerContents:string[] = headerStrings.map(
        (row) : string => {
            const paddedHeaderRow:string = getCellString(row, headerWidth);
            return addBordersToRowString(paddedHeaderRow);
        },
    );

    return [ // Join the rows, and add a ruling above and below the contents.
        horizontalRuling,
        ...headerContents,
        horizontalRuling,
    ].join('\n');
};

// This will create a string representation of the body of a table.
const getBodyString = (table:ConversionTable,
                       columnWidths:ColumnWidthTuple,
                       padding:number,
                       horizontalRuling:string)
                      : string => {
    const rowStrings:string[] = new Array<string>();
    table.getScheme().forEach(
        (key, value) : void => {
            rowStrings.push(getRowString([key, value], columnWidths));
        },
    );
    rowStrings.push(horizontalRuling);
    return rowStrings.join('\n');
};

// This function will return the string representation of a row, using the
// values of the row, and the widths of each column.
const getRowString = (values:ColumnValueTuple,
                      widths:ColumnWidthTuple) : string => {
    // Get the cell string for each column.
    const cellStrings:string[] = new Array<string>();
    for (let currIndex = 0; currIndex < 2; currIndex++) {
        cellStrings.push(
            getCellString(values[currIndex], widths[currIndex]),
        );
    }

    return [ // Add dividers between the cells, and before/after the row.
        '|', cellStrings.join('|'), '|',
    ].join('');
};

// Helper function used to get the string representation of a cell.
const getCellString = (contents:string,
                       width:number) : string => {
    // Calculate the left and right padding space.
    const remainingSpace = (width - contents.length);
    const leftSpace = Math.floor((remainingSpace / 2));
    const rightSpace = remainingSpace - leftSpace;

    return [ // Create padding strings and join them with the cell contents.
        createCharacterStringOfLength(' ', leftSpace),
        contents,
        createCharacterStringOfLength(' ', rightSpace),
    ].join('');
};

// Helper function used to create a horizontal ruling for printing.
const getHorizontalRuling = (columnWidths:ColumnWidthTuple) : string => {
    const totalWidth:number = getBodyRowWidth(columnWidths);
    const rulingWidth:number = totalWidth - 2;
    return [
        '|', createCharacterStringOfLength('-', rulingWidth), '|',
    ].join('');
};

// Helper function used to create padding and ruling strings.
const createCharacterStringOfLength = (character:string,
                                       length:number) : string => {
    if (length <= 0) { // Check that the length is not negative.
        throw new Error(TablePrintingErrorMessages.invalidWidthValue);
    }

    // Create a new array, fill it with `length` characters, and join.
    const charArray:string[] = new Array<string>();
    let counter = 0;
    while (counter < length) { charArray.push(character); counter++; }
    return charArray.join('');
};

// Add a border character to the beginning and end of the string.
const addBordersToRowString = (rowString:string) : string => {
    return [
        '|', rowString, '|',
    ].join('');
};

// Convenience function used to calculate the width of a header row.
const getHeaderRowWidth = (widths:ColumnWidthTuple) : number => {
    return widths[0] + widths[1] + 1;
};

// Convenience function used to calculate the width of a body row.
const getBodyRowWidth = (widths:ColumnWidthTuple) : number => {
    // NOTE: Add length + 1 to the sum, to account for the first,
    // middle, and last '|' dividers separating columns.
    return widths[0] + widths[1] + widths.length + 1;
};
