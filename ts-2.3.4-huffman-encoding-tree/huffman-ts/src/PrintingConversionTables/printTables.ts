// import { ColumnPrintingInformation } from './ColumnPrintingInformation';
import { TableColumnPrintingInformation } from './TablePrintingInformation';
import { IDecodingTable } from '../TableInterfaces/IDecodingTable';
import { IEncodingTable } from '../TableInterfaces/IEncodingTable';

// Define a type union for the two sorts of tables that we may need to print.
type ConversionTable = IEncodingTable | IDecodingTable;

// Define a helper type that will store two numbers, representing the width
// of two columns that we expect to print.
type ColumnWidthTuple = [number, number];

// Print an encoding table or a decoding table.
/* tslint:disable-next-line:no-unused-variable */
export const getTableString = (table:ConversionTable) : string => {
    switch (table.type) {
        case 'encoding' : return getEncodingTableString(<IEncodingTable>table);
        case 'decoding' : return getDecodingTableString(<IDecodingTable>table);
        default: throw new Error('Could not identify table!');
    }
};

// Print an object that implements the decoding table interface.
/* tslint:disable-next-line:no-unused-variable */
const getEncodingTableString = (table:IEncodingTable) : string => {
    throw new Error('Not Implemented Yet!');
};

// Print an object that implements the decoding table interface.
/* tslint:disable-next-line:no-unused-variable */
const getDecodingTableString = (table:IDecodingTable) : string => {
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

// This function will create a string containing the generic section of the
// table printing header. This should contain the type of the table being
// printed, and what the encoding method used to generate the scheme was.
/* tslint:disable-next-line:no-unused-variable */
const getGenericTableHeaderSectionString = (table:ConversionTable)
                                           : string => {
    throw new Error('Not Implemented Yet!');
};

// TODO: This function should find the column names, and the length of the
// longest value in each of the columns for a given table.
/* tslint:disable-next-line:no-unused-variable */
const getSchemeKeyValueColumnWidths = (table:ConversionTable)
                                      : ColumnWidthTuple => {
    throw new Error('Not Implemented Yet!');
};

// Get the total width of the table, given a table printing information object.
/* tslint:disable-next-line:no-unused-variable */
const getTableTotalWidth = (tableInfo:TableColumnPrintingInformation)
                           : number => {
    throw new Error('Not Implemented Yet!');
};
