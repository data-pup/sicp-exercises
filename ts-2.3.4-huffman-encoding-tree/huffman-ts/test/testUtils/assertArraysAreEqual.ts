import { assert } from 'chai';

export function assertArraysAreEqual<T>(a:T[], b:T[]) : void {
    // Check that the two arrays are of equal length, then compare each element.
    assert.equal(a.length, b.length);
    for (let currIndex = 0; currIndex < a.length; currIndex++) {
        assert.equal(a[currIndex], b[currIndex]);
    }
}
