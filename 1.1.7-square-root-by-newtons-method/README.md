# SICP Exercise 1.1.7

This directory contains work Chapter 1.1.7 in Structure and Interpretation
of Computer Programs (SICP), covering the example of Newton's Method for
estimating the square root of a value.

The code in this directory implements the same algorithm, using F# rather
than Lisp. Some notes will quote sections of the book, and may display the
original Lisp implementation for comparison.

With all that covered, let's jump into things!

### Problem Overview

This problem is a good example of learning to understand what procedures are.
The contrast between mathematical functions and computer procedures is "a
reflection of the general distinction between describing properties of things
and describing how to do things, or, as it is sometimes referred to, the
distinction between declarative knowledge and imperative knowledge." (pg. 22)

This is a good distinction to understand, as it points to the different
concerns mathematicians and computer scientists have when solving a problem.
As computer scientists, we are often most concerned with describing how to
do something, rather than what something is.

So, how do we compute square roots? Newton's method of successive
approximations is a common way to achieve this. We will start with a guess,
`y` that we will check first. If that guess does not fall within a minumum
threshold, we will find the average of `x` and `y`, and check that next guess.

This process will be repeated until our guess `y = sqrt(x)` falls within an
acceptable threshold. Here is some of the Lisp implementation shown in the
book to achieve this:

```lisp
(define (sqrt-iter guess x)
(if (good-enough? guess x)
  guess
(sqrt-iter (improve guess x)
            x)))
```

This assumes the following functions exist:

```lisp
(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))
```

Finally, we need a way to generate an initial guess. A simple way to do this
would be guessing that the square root of a number is 1, like so:

```lisp
(define (sqrt x)
  (sqrt-iter 1.0 x))
```

Now, in our Lisp interpreter, we could find an approximation of a square root
by invoking the `sqrt` command like this:

```lisp
(sqrt 9)
3.0000915
```

### Solution Implementation (F#)

I am using .NET Core to solve these problems. So, we will first use this
command in order to create a new F# project.

```
dotnet new console --language F# --name "NewtonSqrtApproxF#"
```



