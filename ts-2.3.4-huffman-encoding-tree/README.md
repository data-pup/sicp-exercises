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

## Background

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




### TypeScript Implementation

todo ...
