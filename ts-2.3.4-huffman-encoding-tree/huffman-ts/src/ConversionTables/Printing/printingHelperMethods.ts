import {
    getBodyRowWidth,
    getHeaderRowWidth,
} from './getTablePrintingDimensions';
import {
    ColumnValueTuple,
    ColumnWidthTuple,
    ConversionTable,
} from './printingHelperTypes';
import { TablePrintingErrorMessages } from './TablePrintingErrorMessages';

export const getTableStrings = (table:ConversionTable,
                                columnNames:ColumnValueTuple,
                                columnWidths:ColumnWidthTuple,
                                padding:number,
                                horizontalRuling:string) : string[] => {
    return [
        ...getHeaderStrings(table, columnNames, columnWidths,
                            padding, horizontalRuling),
        ...getBodyStrings(table, columnWidths, padding, horizontalRuling),
    ];
};

// Helper function used to create a horizontal ruling for printing.
export const getTableRuling = (columnWidths:ColumnWidthTuple) : string => {
    // Calculate the width of the horizontal ruling, then wrap with borders.
    const totalWidth:number = getBodyRowWidth(columnWidths);
    const rulingWidth:number = totalWidth - 2;
    const ruling:string = createStringOfLength('-', rulingWidth);
    return addBordersToRowString(ruling);
};

// This will create a string representation of the body of a table. This
// function will return an array of strings, which can be joined later.
const getBodyStrings = (table:ConversionTable,
                        columnWidths:ColumnWidthTuple,
                        padding:number,
                        horizontalRuling:string) : string[] => {
    const rowStrings:string[] = new Array<string>();
    table.getScheme().forEach(
        (key:string, value:string) : void => {
            rowStrings.push(getRowString([key, value], columnWidths));
        },
    );
    rowStrings.push(horizontalRuling);
    return rowStrings;
};

// This function will create a string containing the generic section of the
// table printing header. This should contain the type of the table being
// printed, and what the encoding method used to generate the scheme was.
const getHeaderStrings = (table:ConversionTable,
                          columnNames:ColumnValueTuple,
                          columnWidths:ColumnWidthTuple,
                          padding:number,
                          horizontalRuling:string) : string[] => {
    // Initialize header row strings, and the values of the header.
    // const columnTitleRow = getRowString(columnNames, columnWidths);
    const unpaddedHeaderValues = [
        `Type:${table.type}`,
        `Method:${table.method}`,
    ];
    const headerWidth:number = getHeaderRowWidth(columnWidths);

    // Pad the row strings in the header, and wrap in '|' characters.
    const headerValues:string[] = unpaddedHeaderValues.map(
        (row) : string => {
            const paddedHeaderRow:string = getCellString(row, headerWidth);
            return addBordersToRowString(paddedHeaderRow);
        },
    );

    // Join the rows, and add a ruling above and below the contents.
    return [
        horizontalRuling,
        ...headerValues,
        horizontalRuling,
        getRowString(columnNames, columnWidths),
        horizontalRuling,
    ];
};

// This function will return the string representation of a row, using the
// values of the row, and the widths of each column.
const getRowString = (values:ColumnValueTuple,
                      widths:ColumnWidthTuple) : string => {
    const cellStrings:string[] = [ // Get the cell string for both columns.
        getCellString(values[0], widths[0]),
        getCellString(values[1], widths[1]),
    ];
    // Add dividers between the cells, and before/after the row.
    return addBordersToRowString(cellStrings.join('|'));
};

// Helper function used to get the string representation of a cell.
const getCellString = (contents:string, width:number) : string => {
    // Calculate the left and right padding space.
    const remainingSpace:number = (width - contents.length);
    const leftPaddingSize:number = Math.floor((remainingSpace / 2));
    const rightPaddingSize:number = remainingSpace - leftPaddingSize;
    // Create the padding strings.
    const leftPadding:string = createStringOfLength(' ', leftPaddingSize);
    const rightPadding:string = createStringOfLength(' ', rightPaddingSize);
    // Join the padding strings and the cell contents together, and return.
    return [leftPadding, contents, rightPadding].join('');
};

// Helper function used to create padding and ruling strings.
const createStringOfLength = (character:string, length:number) : string => {
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
