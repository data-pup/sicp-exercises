# SICP Exercise 2.3.4

This directory contains work following Chapter 2.3.4 in Structure and
Interpretation of Computer Programs (SICP), covering the example of
using Huffman Encoding Trees to represent data.

The code in this directory will be using TypeScript rather than Lisp to
implement solutions to the problem. Some notes will quote sections of the
book, and may display the original Lisp implementation detailed in the book.

## Problem Overview

Let's start with discussing why Huffman Encoding Trees are a valuable
concept to understand for aspiring computer scientists. Huffman coding is
a good example of a nontrivial data abstraction, and is an efficient method for
implementing lossless data compression.

### Background

For those interested in CS [trivia|history], here's a little bit of
background on the algorithm. David Huffman created the algorithm for an MIT
information theory course, attempting to find the most efficient binary code.

The algorithm functions by using a frequency-sorted binary tree, with more
common symbols being placed higher in the tree. To briefly summarize, this
means more common symbols are generally represented using fewer bits
than less common symbols, which helps conserve space in a more reliable way
than previous methods that used a bottom-up sorting.

## Simple Example

The best way to get an understanding of this is to go through a simple example
of a 1:1 encoding method, and a simple example using the Huffman Coding Tree.
Let's imagine that we are encoding the string "PET THE GOOD DOG" into binary.

This string includes the following unique characters: P, E, T, H, G, O, D

So, if we have 7 characters, we will need 3 bits to represent each character
in a naive encoding scheme. We could use the following table:

```
Symbol   -   Encoding
D            000
E            001
G            010
H            011
O            100
P            101
T            110
```

Using this table, we could encode the string into a binary representation like
so:

```
P   E   T   T   H   E   G   O   O   D   D   O   G
101 001 110 110 011 001 010 100 100 000 000 100 010
```

This example doesn't take spaces into account, that will be left as an
exercise for the reader. (There is a leftover space in the encoding table above,
so it is not an especially difficult exercise.)

### Example (Huffman)

I would like to note that we will only loosely cover the algorithm for
creating the encoding tree here, in the interest of keeping things brief.

...


## TypeScript Implementation

### Difficulties Encountered

This problem was one of my first deep forrays into TypeScript (TS), so there
were some difficulties encountered during the process. This is the fun part
of learning a new language however, if you have the right attitude.

First, we do need to explicitly install the node package for TypeScript, by
specifying it as a dependency in the package.json file. The standard library
modules being unrecognized from my TS was confusing at first, but it is
important to keep the distinction between TS and Node.js in mind when
developing in this language.

While the code will be transpiled into JavaScript in order to run on Node.js,
we do need to make the typing information available to VS Code in order for
it to recognize the modules in the Node.js API.

In order for the Node API to be recognized by our editor within TypeScript,
import the typing information by including the `@types/node` package in the
development dependencies. Note that this package is a development dependency
because it is not required to run the code that we write, it is just used
to help us during the development process.

### Counting the occurence of each character

First, we need to count the number of occurences of each unique character in
the input string. To do this, we will need to iterate through each character
in the string, and increment the corresponding entry in a dictionary.

I used the `typescript-collections` module from npm to do this. This includes
TypeScript implementations of a number of data structures. Two functions are
shown below which will do this.

```javascript
// todo ...
```

### Using a priority queue

Once we have created a dictionary of frequency values in the plaintext for each
character, we will need to sort the dictionary. We can do this using a priority
queue, where the value is the character, and the priority is the number of
times that the character occurs. This is necessary because dictionaries are not
sorted. A detail that we will need to remember is that this will mean adding
a comparison function for the priority queue, so that it can correctly sort
our entries. Otherwise, they will end up being placed in the queue relative
to their alphabetical order.*

* Sort of. They will be in descending order, because the queue is using the
string value as the means of specifying the priority. So, `z` will be placed
ahead of `a` and so forth.
