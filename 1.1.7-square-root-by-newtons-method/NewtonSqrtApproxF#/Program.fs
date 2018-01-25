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


let rec sqrtIter(guess : float, x : float) =
    0


[<EntryPoint>]
let main argv =
    printfn "Hello World from F#!"

    0 // return an integer exit code
