// Learn more about F# at http://fsharp.org

open System


// Find the square of a number x.
let square x = x * x


// Find the average of two numbers.
let average (x, y) = ((x + y) / 2.0)


// Improve an approximation.
let improveGuess (guess : float, x : float) = average ((x/guess), guess)


// Check if the square root approximation is within a satisfactory threshold.
let checkGuess (guess : float, x : float) =
    guess
    |> square
    |> fun i -> x - i
    |> fun i -> i < 0.001


let rec sqrtIter (guess : float, x : float) =
    match checkGuess(guess, x) with
    | true -> guess
    | false ->
        let improvedGuess = improveGuess(guess, x)
        sqrtIter (improvedGuess, x)


// Find the approximation of the square root, beginning with a guess of 1.
let sqrt (x : float) = sqrtIter (1.0, x)


[<EntryPoint>]
let main argv =
    let x = 9.0
    x |> sqrt |> printfn "Appoximation of sqrt(9) = %f"

    0 // return an integer exit code
