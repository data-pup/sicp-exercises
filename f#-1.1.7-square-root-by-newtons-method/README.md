# SICP Exercise 1.1.7

This directory contains work Chapter 1.1.7 in Structure and Interpretation
of Computer Programs (SICP), covering the example of Newton's Method for
estimating the square root of a value.

The code in this directory implements the same algorithm, using F# rather
than Lisp. Some notes will quote sections of the book, and may display the
original Lisp implementation for comparison.

With all that covered, let's jump into things!

## Problem Overview

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

## Solution Implementation (F#)

### Creating a New Project

I am using F# on .NET Core to solve these problems. So, we will first use this
command in order to create a new F# project.

```bash
dotnet new console --language F# --name "NewtonSqrtApproxF#"
```

This will create a Program.fs file that looks like this:


```fsharp
open System

[<EntryPoint>]
let main argv =
    printfn "Hello World from F#!"
    0 // return an integer exit code

```

To recap what we saw in the Lisp implementation, we will need to write
a few different functions to accomplish our goal:

1.  A function to check the quality of the current guess.
2.  A function to improve the guess.
3.  A function that will repeat (1) and (2) until a satisfactory guess is found.
4.  A function that will generate an initial approximation.

### 1. Checking the Quality of an Approximation:

Before we do anything else, we should understand how to check the accuracy of
a given approximation of the square root of a value. Only after this should we
move on to improving approximations, and doing so within a recursive loop.

The syntax of this will look slightly different in F#, but the same process
is used: Square the guess, and find the absolute value of the difference.

That function could be implemented in many ways, but here's how I did it:

```fsharp
let checkGuess (guess : float, x : float) =
    guess
    |> square
    |> fun i -> x - i
    |> System.Math.Abs
    |> fun i -> i < 0.001
```

This might look impossibly foreign to somebody who is primarily acquainted
with imperative programming languages. The function is essentially one
statement, with the input value `guess` passed through a pipeline containing
a series of function calls.

If you visualize this as a flow of data, with `guess` being passed as the
input, it might make more sense. This then proceeds to the `square` function,
which passes the value `guess * guess` to a lambda function `x - i`.

The difference between `x` and `i` is then passed into the `System.Math.Abs`
function, a public static .NET method. Finally, the absolute value is compared
to the threshold, a hardcoded `0.001`. The boolean result of that comparison
is the result of this statement, and functions as the return value of
`checkGuess` because it is the final statement in the function.

### 2. Improving the Quality of an Approximation

Next we will need to write a function that will improve the quality
of an approximation, since we probably won't be correct on our first
guess. (Especially since our implementation starts with a guess of 1!)

Let's review the Lisp implementation once more before we do this in F#:

```lisp
(define (improve guess x)
  (average guess (/ x guess)))
```

In plainer math terms for those unfamiliar with Lisp, if we are trying
to approximate the square root of `x`, and have determined that our guess
is not sufficiently close to the actual square root of `x`, we can find
an improved guess by finding the average of `guess` and `x/guess`.

So, how to do that in F#? Easy!

```fsharp
// Find the average of two numbers.
let average x y = ((x + y) / 2.0)


// Improve an approximation.
let improveGuess (guess : float, x : float) = x / guess |> average guess
```

The first function `average` does what you might expect. It receives two
parameters, and returns the average. What about the `improveGuess`
function?

We could rewrite it like this, to break things up a little bit:

```fsharp
let improveGuess (guess : float, x : float) =
  x / guess
  |> average guess
```

The first expression calculates `x/guess`, which is straightforward enough.
The result of this expression is sent through the pipeline to the next
expression, which is a simple example of currying. This might look strange
at first, but I will try to provide a brief explanation.

The `average` function above is of type `float -> float -> float`. If we had
defined it with a statement like `let average (x: float, y: float)`, it would
be a function of type `float * float -> float`.

This distinction might seem subtle, but the former function of type
`float -> float -> float` will allow us to use the function in a pipeline
using statements like `|> average guess`. Why? Well, you can think of
`average guess` as a funcntion of type `float -> float`, because one of the
parameters has been given already. Neat!

So, that is an overview of the process used to improve an approximation of
the square root of a number.

### 3 & 4. Generating an Initial Guess, and Repeatedly Improving Approximations

Now, we have functions defined that will check the accuracy of an approximation,
and a procedure that will reliably improve an approximation. All that remains
is to implement a procedure that will repeat this process until the guess
is within a given threshold of accuracy, and a way to generate an initial guess.

```fsharp
// Recursively identify the approximate square root of x.
let rec sqrtIter (guess : float, x : float) =
    match checkGuess(guess, x) with
    | true -> guess
    | false ->
        let improvedGuess = improveGuess(guess, x)
        sqrtIter (improvedGuess, x)
```

One difference might stand out to you here initially, the `rec` keyword. This
is a special keyword that specifies whether a function is allowed to invoke
itself within the body of the function. The rest of it should be decently
clear at this point. The logic of the function is as follows:

1.  Check whether the given parameter `guess` is a sufficiently accurate
approximation of the square root of `x`, using the `checkGuess` function.
2a.  If the guess is within the threshold, return the guess.
2b.  If the guess is not within the threshold, find an improved guess, and return the
result of a recursive call to the function using the improved guess.

And now, we tie it all up in a function that can be called by a user! The
`sqrt` function below will receive a single input, and invoke the recursive
function shown above using an initial guess of 1.0.

```fsharp
// Find the approximation of the square root, beginning with a guess of 1.
let sqrt (x : float) = sqrtIter (1.0, x)
```

## Conclusion

Hopefully this overview provided an interesting glimpse into the functional
programming world if you were not previously familiar, or an interesting
comparison of Lisp and F# otherwise.
