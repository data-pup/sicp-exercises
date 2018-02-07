import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';
import { CharFreqRecord } from '../src/classes/CharFreqRecord';
import { initializeQueue } from '../src/lib/initCharFreqQueue';

/* tslint:disable-next-line:no-unused-variable */
@suite class TestInitializeQueue {

    @test public testEmptyString() {
        const inputString = '';
        const resultQueue = initializeQueue(inputString);
        assert.isTrue(resultQueue.isEmpty());
    }

    @test public testSimpleString() {
        // Initialize an input string and create a frequency priority queue.
        const inputString = 'hello';
        const resultQueue = initializeQueue(inputString);
        // Check that the right number of items are in the queue.
        const actualQueueSize = resultQueue.size();
        const expectedQueueSize = 4;
        assert.equal(actualQueueSize, expectedQueueSize,
                     'Queue did not have the correct number of items.');
        // Retrieve the first item at the head of the queue.
        const queueHead = resultQueue.dequeue();
        const actualQueueHeadChar = queueHead.getCharacter();
        const actualQueueHeadOccur = queueHead.getOccurences();
        // Specify the expected head values, and check correctness.
        const expectedQueueHeadChar = 'l';
        const expectedQueueHeadOccur = 2;
        assert.equal(actualQueueHeadChar, expectedQueueHeadChar,
                     'Incorrect character found at head of queue.');
        assert.equal(actualQueueHeadOccur, expectedQueueHeadOccur,
                     'Incorrect occurence count at head of queue.');
        // Checks that rest of the queue is correct.
        const actualRemainingChars:string[] = [];
        const actualRemainingOccurs:number[] = [];
        let currentRecord:CharFreqRecord = undefined;
        while (!resultQueue.isEmpty()) { // Loop while the queue is not empty.
            currentRecord = resultQueue.dequeue();
            actualRemainingChars.push(currentRecord.getCharacter());
            actualRemainingOccurs.push(currentRecord.getOccurences());
        } // Initialize values representing the expected results.
        const expectedRemainingChars:string[] = ['h', 'e', 'o'];
        const expectedRemainingOccurs:number[] = [1, 1, 1];
        // Check that the results are correct.
        assert.sameMembers(actualRemainingChars, expectedRemainingChars);
        assert.sameMembers(actualRemainingOccurs, expectedRemainingOccurs);
    }

}
