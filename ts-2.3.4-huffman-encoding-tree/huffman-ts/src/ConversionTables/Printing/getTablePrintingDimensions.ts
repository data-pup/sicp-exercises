import {
    ColumnValueTuple,
    ColumnWidthTuple,
    ConversionTable,
} from './printingHelperTypes';

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
