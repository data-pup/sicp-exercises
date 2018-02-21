import {
    ColumnValueTuple,
    ColumnWidthTuple,
    ConversionTable,
} from './printingHelperTypes';

// Convenience function used to calculate the width of a header row.
export const getHeaderRowWidth = (widths:ColumnWidthTuple) : number => {
    return widths[0] + widths[1] + 1;
};

// Convenience function used to calculate the width of a body row.
// NOTE: Add length + 1 to the sum, to account for the first, middle, and
// last '|' dividers separating columns.
export const getBodyRowWidth = (widths:ColumnWidthTuple) : number => {
    return widths[0] + widths[1] + widths.length + 1;
};

// TODO: This function should find the column names, and the length of the
// longest value in each of the columns for a given table.
/* tslint:disable-next-line:no-unused-variable */
export const getTableColumnDimensions = (table:ConversionTable,
                                         columnNames:ColumnValueTuple,
                                         padding:number=1)
                                        : ColumnWidthTuple => {
    let [leftColumnMaxWidth, rightColumnMaxWidth]:number[] = [0, 0];
    const widthArray:ColumnWidthTuple[] = getKeyValueWidthArray(
        table, columnNames, padding);
    for (const currWidthTuple of widthArray) {
        const [currLeftWidth, currRightWidth] = [
            currWidthTuple[0],
            currWidthTuple[1],
        ];
        if (currLeftWidth > leftColumnMaxWidth) {
            leftColumnMaxWidth = currLeftWidth;
        }
        if (currRightWidth > rightColumnMaxWidth) {
            rightColumnMaxWidth = currRightWidth;
        }
    }
    return [leftColumnMaxWidth, rightColumnMaxWidth];
};

const getKeyValueWidthArray = (table:ConversionTable,
                               columnNames:ColumnValueTuple,
                               padding:number)
                              : ColumnWidthTuple[] => {
    // Initialize a new array to store each row's width.
    const widthArray:ColumnWidthTuple[] = new Array();

    // Get the width of the header row.
    widthArray.push(getColumnWidthTupleForRow(columnNames, padding));

    // Get the width of each row in the table.
    table.getScheme().forEach(
        (key:string, value:string) : void => {
            widthArray.push(
                getColumnWidthTupleForRow(
                    [key, value],
                    padding,
                ),
            );
        },
    );

    return widthArray; // Return the width array.
};

const getColumnWidthTupleForRow = (columnNames:ColumnValueTuple, padding:number)
                                  : ColumnWidthTuple => {
    const [keyColumnName, valueColumnName] = columnNames;
    const totalPadding = padding * 2;
    return [
        keyColumnName.length + totalPadding,
        valueColumnName.length + totalPadding,
    ];
};
