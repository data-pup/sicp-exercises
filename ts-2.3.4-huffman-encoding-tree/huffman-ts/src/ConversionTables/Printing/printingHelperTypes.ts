import { IDecodingTable } from '../Interfaces/IDecodingTable';
import { IEncodingTable } from '../Interfaces/IEncodingTable';

// Define a type union for the two sorts of tables that we may need to print.
export type ConversionTable = IEncodingTable | IDecodingTable;

// Define a helper type that will store two numbers, representing the width
// of two columns that we expect to print.
export type ColumnWidthTuple = [number, number];
export type ColumnValueTuple = [string, string];
