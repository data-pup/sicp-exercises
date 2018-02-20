import { isNullOrUndefined } from 'util';
import { ColumnPrintingInformation } from './ColumnPrintingInformation';
import { ConversionTable } from './printingHelperTypes';

export class TableColumnPrintingInformation {

    public readonly keyColumn:ColumnPrintingInformation;
    public readonly tableMethod:string;
    public readonly tableType:string;
    public readonly valueColumn:ColumnPrintingInformation;

    // Construct an array of column printing information objects.
    constructor(table:ConversionTable) {
        // TEMP: TODO: Leave these values undefined for now.
        this.keyColumn = undefined;
        this.valueColumn = undefined;

        if (!this.validate()) {
            throw new Error('Error initializing table printing information');
        }
    }

    // Private helper function will validate that the column is at least as
    // wide as its name. No value checks are done in this function, this should
    // be done elsewhere. This is merely a safeguard function.
    private validate() : boolean {
        const noColumnsFailedBasicValidation = [
                this.keyColumn, this.valueColumn,
            ]
            .map((currColumn) : boolean => { // Check if the column passes
                if (isNullOrUndefined(currColumn)) { return false; }
                const colName:string = currColumn.name; // a basic width check.
                const colWidth:number = currColumn.width;
                const widthSeemsValid:boolean = (colName.length < colWidth);
                return widthSeemsValid;
            }) // Check that all of the columns seemed valid.
            .every((value) => (value === true));
        return noColumnsFailedBasicValidation;
    }
}
