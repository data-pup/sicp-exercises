import { suite, test } from 'mocha-typescript';
import {
    getSortedUniqueCharArray,
} from '../../src/ConversionTables/NaiveTables/EncodingLogic/generateSortedUniqueCharacterArray';
import { assertArraysAreEqual } from '../testUtils/assertArraysAreEqual';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestGenerateEncodingString {

    @test public testUndefinedValueReturnsEmptyArray() {
        const inputString:string = undefined;
        const charArray:string[] = getSortedUniqueCharArray(inputString);
        const expectedCharArray:string[] = new Array<string>();
        assertArraysAreEqual(charArray, expectedCharArray);
    }

    @test public testEmptyValueReturnsEmptyArray() {
        const inputString:string = '';
        const charArray:string[] = getSortedUniqueCharArray(inputString);
        const expectedCharArray:string[] = new Array<string>();
        assertArraysAreEqual(charArray, expectedCharArray);
    }

    @test public testHelloWorld() {
        const inputString:string = 'hello world';
        const charArray:string[] = getSortedUniqueCharArray(inputString);
        const expectedCharArray:string[] = [
            ' ',
            'd',
            'e',
            'h',
            'l',
            'o',
            'r',
            'w',
        ];
        assertArraysAreEqual(charArray, expectedCharArray);
    }

}
