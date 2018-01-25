// ----------------------------------------------------------------------------
// This program will find the approximate square root of a number supplied
// as a command line argument via argv.
// ----------------------------------------------------------------------------


// Find the square of a number x.
let square x = x * x


// Find the average of two numbers.
let average x y = ((x + y) / 2.0)


// Improve an approximation.
let improveGuess (guess : float, x : float) = x / guess |> average guess


// Check if the square root approximation is within a satisfactory threshold.
let checkGuess (guess : float, x : float) =
    guess
    |> square
    |> fun i -> x - i
    |> System.Math.Abs
    |> fun i -> i < 0.001


// Recursively identify the approximate square root of x.
let rec sqrtIter (guess : float, x : float) =
    match checkGuess(guess, x) with
    | true -> guess
    | false ->
        let improvedGuess = improveGuess(guess, x)
        sqrtIter (improvedGuess, x)


// Find the approximation of the square root, beginning with a guess of 1.
let sqrt (x : float) = sqrtIter (1.0, x)


// Check that the number of arguments given to the program is correct.
let checkArgumentCount (argv : string[]) =
    match argv.Length with
    | 1 -> true
    | _ -> false


[<EntryPoint>]
let main argv =
    checkArgumentCount argv |> ignore
    printfn "%s" argv.[0]
    let x = 2.0
    x |> sqrt |> printfn "Appoximation of sqrt(%f) = %f" x
    0 // return an integer exit code
