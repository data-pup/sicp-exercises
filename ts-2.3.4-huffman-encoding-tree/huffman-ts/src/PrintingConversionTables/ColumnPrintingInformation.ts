export class ColumnPrintingInformation {
    public readonly name:string;
    public readonly width:number;

    constructor(columnName:string, columnWidth:number) {
        this.name = columnName;
        this.width = columnWidth;
    }
}
