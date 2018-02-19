import { isNullOrUndefined } from 'util';
import { IDecodingTable } from '../TableInterfaces/IDecodingTable';
import { IEncodingTable } from '../TableInterfaces/IEncodingTable';

// Define a type union for the two sorts of tables that we may need to print.
type ConversionTable = IEncodingTable | IDecodingTable;

// Print an encoding table or a decoding table.
/* tslint:disable-next-line:no-unused-variable */
export const getTableString = (table:ConversionTable) : string => {
    switch (table.type) {
        case 'encoding' : return printEncodingTable(<IEncodingTable>table);
        case 'decoding' : return printDecodingTable(<IDecodingTable>table);
        default: throw new Error('Could not identify table!');
    }
};

// Print an object that implements the decoding table interface.
/* tslint:disable-next-line:no-unused-variable */
const printEncodingTable = (table:IEncodingTable) : string => {
    throw new Error('Not Implemented Yet!');
};

// Print an object that implements the decoding table interface.
/* tslint:disable-next-line:no-unused-variable */
const printDecodingTable = (table:IDecodingTable) : string => {
    throw new Error('Not Implemented Yet!');
};

// Print the header for an encoding table.
/* tslint:disable-next-line:no-unused-variable */
const getEncodingTableHeaderString = () : void => {
    throw new Error('Not Implemented Yet!');
};

// Print the header for an encoding table.
/* tslint:disable-next-line:no-unused-variable */
const getDecodingTableHeaderString = () : void => {
    throw new Error('Not Implemented Yet!');
};

// TODO: This function should find the column names, and the length of the
// longest value in each of the columns for a given table.
/* tslint:disable-next-line:no-unused-variable */
const getSchemeKeyValueColumnWidths = () : void => {
    throw new Error('Not Implemented Yet!');
};

/* tslint:disable-next-line:no-unused-variable */
class TableColumnPrintingInformation {

    public columns:ColumnInfo[];

    constructor(columns:ColumnInfo[]) {
        this.columns = columns;
        if (!this.validate()) {
            throw new Error('Error initializing table printing information');
        }
    }

    private validate() : boolean {
        if (isNullOrUndefined(this.columns)) { return false; }
        const noColumnsFailedBasicValidation = this.columns
            .map((currColumn) : boolean => { // Check if the column passes
                const colName:string = currColumn.name; // a basic width check.
                const colWidth:number = currColumn.width;
                const widthSeemsValid:boolean = (colName.length < colWidth);
                return widthSeemsValid;
            }) // Check that all of the columns seemed valid.
            .every((value) => (value === true));
        return noColumnsFailedBasicValidation;
    }
}

class ColumnInfo {
    public readonly name:string;
    public readonly width:number;

    constructor(columnName:string, columnWidth:number) {
        this.name = columnName;
        this.width = columnWidth;
    }
}
