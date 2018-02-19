import {
    ColumnNameTuple,
    ColumnWidthTuple,
    ConversionTable,
} from './printingHelperTypes';

// TODO: This function should find the column names, and the length of the
// longest value in each of the columns for a given table.
/* tslint:disable-next-line:no-unused-variable */
export const getTableColumnDimensions = (table:ConversionTable,
                                         columnNames:ColumnNameTuple)
                                        : ColumnWidthTuple => {
    let [leftColumnMaxWidth, rightColumnMaxWidth]:number[] = [0, 0];
    const widthArray:ColumnWidthTuple[] = getKeyValueWidthArray(
        table, columnNames);
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
                               columnNames:ColumnNameTuple)
                              : ColumnWidthTuple[] => {
    const widthArray:ColumnWidthTuple[] = new Array();
    widthArray.push(getColumnWidthTupleForRow(columnNames));
    table.getScheme().forEach(
        (key:string, value:string) : void => {
            widthArray.push(getColumnWidthTupleForRow([key, value]));
        },
    );
    return widthArray;
};

const getColumnWidthTupleForRow = (columnNames:ColumnNameTuple)
                                  : ColumnWidthTuple => {
    const [keyColumnName, valueColumnName] = columnNames;
    return [keyColumnName.length, valueColumnName.length];
};
