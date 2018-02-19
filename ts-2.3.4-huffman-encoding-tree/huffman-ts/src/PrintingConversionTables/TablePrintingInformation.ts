import { isNullOrUndefined } from 'util';
import { ColumnPrintingInformation } from './ColumnPrintingInformation';

export class TableColumnPrintingInformation {

    public readonly columns:ColumnPrintingInformation[];

    // Construct an array of column printing information objects.
    constructor(columns:ColumnPrintingInformation[]) {
        this.columns = columns;
        if (!this.validate()) {
            throw new Error('Error initializing table printing information');
        }
    }

    // Private helper function will validate that the column is at least as
    // wide as its name. No value checks are done in this function, this should
    // be done elsewhere. This is merely a safeguard function.
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
