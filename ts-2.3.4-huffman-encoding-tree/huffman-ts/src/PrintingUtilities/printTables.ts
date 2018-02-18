import { isNullOrUndefined } from 'util';
import { IDecodingTable } from '../TableInterfaces/IDecodingTable';
import { IEncodingTable } from '../TableInterfaces/IEncodingTable';

// Print an object that implements the decoding table interface.
export const printEncodingTable = (table:IEncodingTable) : void => {
    throw new Error('Not Implemented Yet!');
};

// Print an object that implements the decoding table interface.
export const printDecodingTable = (table:IDecodingTable) : void => {
    throw new Error('Not Implemented Yet!');
};

// Print the header for an encoding table.
const printEncodingTableHeader = () : void => {
    throw new Error('Not Implemented Yet!');
};

// Print the header for an encoding table.
const printDecodingTableHeader = () : void => {
    throw new Error('Not Implemented Yet!');
};

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
            .every((value) => { return (value === true) });
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
