# Programming a Guessing Game

Learn about common programming concepts by writing a simple guessing game.

## 0

### --description--

Open a new terminal, and into the `program-a-guessing-game/` directory.

### --tests--

The terminal working directory should be `program-a-guessing-game/`

```js
assert.fail();
```

## 1

### --description--

Create a new project by running:

```bash
cargo new guessing_game
```

### --tests--

Cargo should be used to create a new project named `guessing_game`

```js
assert.fail();
```

## 2

### --description--

Change into the `guessing_game` directory.

### --tests--

The terminal working directory should be `guessing_game/`

```js
assert.fail();
```

## 3

### --description--

Use `cargo` to compile and run the program in the same step.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 4

### --description--

By default, Rust has a set of items defined in the standard library that it brings into the scopr of every program. This set is called the _prelude_, and you can see everything in it in the standard library documentation: <https://doc.rust-lang.org/std/prelude/index.html>

If a desired type is not in the prelude, it can be brought into scope explicitly with a `use` statement.

To obtain user input and then print the result as output, the `io` (input/output) library is brought into scope.

The `io` library comes from the standard library, known as `std`.

At the top of the `src/main.rs` file, add the following code:

```rust
use std::io;
```

### --tests--

The `src/main.rs` file should contain `use std::io;`.

```js
assert.fail();
```

## 5

### --description--

The `main` function is the entry point into the program.

- The `fn` syntax declares a new function
- The empty parentheses (`()`) indicate there are no parameters
- The curly bracket pair `{}` start and end the body of the function

Replace the contents of the `main` function with:

```rust
println!("Guess the number!");
println!("Please input your guess.");
```

### --tests--

The `main` function should contain the above code.

```js
assert.fail();
```

The `main` function should **not** contain the `Hello, world!` expression.

```js
assert.fail();
```

## 6

### --description--

Use `cargo` to compile and run the program in the same step.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 7

### --description--

In Rust, variables are <dfn title="the bound value will not change">immutable</dfn> by default.

To make a variable mutable, add the `mut` keyword before the variable name.

Within the `main` function, after the two `println!` expressions, create a mutable variable to store the user input with:

```rust
let mut guess = String::new();
```

`String::new` is a function that retuns a new instance of the `String` type, which is a growable, UTF-8 encoded string.

The `::` syntax indicates that `new` is an <dfn title="a function that is implemented on a type">associated function</dfn> of the `String` type.

### --tests--

A variable named `guess` should be declared with the `let` keyword.

```js
assert.fail();
```

The `guess` variable should be declared within the `main` function.

```js
assert.fail();
```

The `guess` variable should be declared after the two `println!` expressions.

```js
assert.fail();
```

The `guess` variable should be declared with the `mut` keyword.

```js
assert.fail();
```

The `guess` variable should be assigned the value of `String::new()`.

```js
assert.fail();
```

## 8

### --description--

The `io::stdin` function returns an instance of `std::io::Stdin`, which is a type that represents a handle to the standard input for your terminal.

Call the `stdin` function from the `io` module, and assign the return value to a variable named `stdin_handle`:

```rust
let stdin_handle = io::stdin();
```

### --tests--

A variable named `stdin_handle` should be declared with the `let` keyword.

```js
assert.fail();
```

The `stdin_handle` variable should be declared within the `main` function.

```js
assert.fail();
```

The `stdin_handle` variable should be declared after the `guess` variable.

```js
assert.fail();
```

The `stdin_handle` variable should be assigned the value of `io::stdin()`.

```js
assert.fail();
```

## 9

### --description--

The `Stdin` type has a `read_line` method which takes whatever is typed into standard input, and appends that into a string passed to it as an argument.

Call the `read_line` method on the `stdin_handle` variable, passing `&mut guess` as an argument:

```rust
stdin_handle.read_line(&mut guess);
```

The `&` indicates that this argument is a <dfn title="lets multiple parts of code access one pice of data without needing to copy that data into memory multiple times">reference</dfn>. References are a complex feature; a lot of those details do not need to be known to finish this program.

The `mut` after the `&` indicates that the reference is mutable, which allows the value that it refers to be changed.

### --tests--

The `stdin_handle` variable should have the `read_line` method called on it.

```js
assert.fail();
```

The `read_line` method should be called with `&mut guess` as an argument.

```js
assert.fail();
```

## 10

### --description--

The `read_line` method returns a value of the `io::Result` type. The `Result` type is an enumeration, more commonly referred to as an <dfn title="a type that can be in one of multiple possible states">enum</dfn>.

The purpose of the `Result` type is to encode error-handling information. The `Result` type has two <dfn>variants</dfn>: `Ok` and `Err`. The `Ok` variant indicates the operation was successful, and, inside is the successfully generated value. The `Err` variant means the operation failed, and, inside is information about how or why the operation failed.

Run `cargo build` to see what the compiler says about not doing anything with the `Result` value.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 11

### --description--

There are many ways to handle potential failures - indicated by the `Err` variant. For simplicity, call the `expect` method on the `Result` value, and pass a string as an argument.

The `expect` method will cause the program to crash and display the message that you passed as an argument if the `Result` value is the `Err` variant.

```rust
stdin_handle.read_line(&mut guess).expect("Failed to read line");
```

### --tests--

The `expect` method should be called on the return value of the `read_line` method.

```js
assert.fail();
```

The `expect` method should be called with `"Failed to read line"` as an argument.

```js
assert.fail();
```

## 12

### --description--

Re-build the program with `cargo build` to confirm the program now successfully compiles without warnings.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 13

### --description--

Run the program, and enter a value in the terminal as prompted, then hit the `Enter` key.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 14

### --description--

Currently, it does not _look_ like anything is happening after entering a guess and hitting `Enter`.

Print the value of the `guess` variable to the console:

```rust
println!("You guessed: {guess}");
```

The set of curly brackets is a placeholder: think of `{}` as little crab pincers that hold a value in place.

### --tests--

A `println!` expression should be added to the program.

```js
assert.fail();
```

The `println!` expression should be called with `"You guessed: {guess}"` as an argument.

```js
assert.fail();
```

The `println!` expression should be called after the `read_line` call.

```js
assert.fail();
```

## 15

### --description--

Run the program again, and enter a value in the terminal as prompted, then hit the `Enter` key.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 16

### --description--

Printing the value of the `guess` variable is not quite a _Guessing Game_...

To generate a random number, the `rand` <dfn>crate</dfn> can be used. In order to use code from an external crate, it must be added as a dependency to the `Cargo.toml` file.

Within the `Cargo.toml` file, add version `0.8.3` of the `rand` crate to the `[dependencies]` section:

```toml
[dependencies]
rand = "0.8.3"
```

### --tests--

The `rand` crate should be added as a dependency to the `Cargo.toml` file.

```js
assert.fail();
```

## 17

### --description--

Build the project, to fetch the latest versions of everything dependencies need from the <dfn>registry</dfn>. The registry is a copy of all the code that has been published to <dfn title="where people in the Rust ecosystem post their open source Rust projects for others to use">crates.io</dfn>.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 18

Cargo knows the `rand` crate has already been downloaded and compiled its dependencies, so it will not download it again. Instead, it will use the cached version.

Re-build the project, and notice the output is much faster than the first time.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 19

### --description--

Cargo uses SemVer for crate versioning. `0.8.3` is shorthand for `^0.8.3`.

If `rand` releases a new version, `cargo update` can be used to update the version used to the latest version that is compatible with the version specified in the `Cargo.toml` file.

Run `cargo update`.

### --tests--

`cargo update` should be used to update the version of `rand` used.

```js
assert.fail();
```

## 20

### --description--

Within `src/main.rs`, use the `use` keyword to bring the `rand` crate into scope.

```rust
use rand;
```

### --tests--

The `use` keyword should be used to bring the `rand` crate into scope.

```js
assert.fail();
```

## 21

### --description--

The `rand` crate exposes a function named `thread_rng` which retrieves the thread-local random number generator seeded by the system.

Between the first two `println!` calls, declare a new variable named `secret_number` and set it equal to the result of calling the `thread_rng` function from the `rand` crate.

### --tests--

A new variable named `secret_number` should be declared.

```js
assert.fail();
```

`secret_number` should be declared within `main`.

```js
assert.fail();
```

`let secret_number = rand::thread_rng();` should be between the first two `println!` calls.

```js
assert.fail();
```

## 22

### --description--

The `thread_rng` function returns a random number generator, which is a type that implements the `Rng` trait.

The `Rng` trait defines methods that random number generators implement, including the `gen_range` method, which generates a random number within a range.

Chain the `gen_range` method to the `thread_rng` function call, passing `1..=100` as arguments to `gen_range`, to generate a random number between 1 and 100 inclusive:

```rust
let secret_number = rand::thread_rng().gen_range(1..=100);
```

### --tests--

The `gen_range` method should be called on the `thread_rng` function call.

```js
assert.fail();
```

The `gen_range` method should be called with `1..=100` as an argument.

```js
assert.fail();
```

## 23

### --description--

Build the project, and read the error message.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 24

### --description--

As mentioned in a previous lesson, the `gen_range` method is only available on types that implement the `Rng` trait. However, the `Rng` trait is not in scope.

Follow the compiler's advice to bring the `Rng` trait into scope.

### --tests--

The `Rng` trait should be brought into scope with `use rand::Rng;`.

```js
assert.fail();
```

## 25

### --description--

Re-build the project to confirm the project successfully compiles.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 26

### --description--

Below the `secret_number` declaration, add the following print statement:

```rust
println!("The secret number is: {}", secret_number);
```

Notice an alternative syntax for printing variables within the `println!` macro - the `{}` placeholder is used, and the variable name is passed as an argument to the macro.

### --tests--

The above `println!` expression should be added to the program.

```js
assert.fail();
```

The `println!` expression should be added directly below the `secret_number` declaration.

```js
assert.fail();
```

## 27

### --description--

Run the program to see the secret number printed to the terminal. Remember to enter a value, and hit the `Enter` key.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 28

### --description--

To compare two values, bring the `std::cmp::Ordering` enum into scope.

### --tests--

The `Ordering` enum should be brought into scope with `use std::cmp::Ordering;`.

```js
assert.fail();
```

## 29

### --description--

The `std::cmp::Ordering` enum has three variants: `Less`, `Greater`, and `Equal`.

A `match` expression is made up of _arms_. An arm consists of a pattern to match against, and the code that should be run if the value given to `match` fist the arm's pattern.

Rust takes the value given to `match` and looks through each arm's pattern in turn.

Use a `match` expression to compare the `secret_number` to the `guess` variable.

```rust
match guess.cmp(&secret_number) {
    Ordering::Less => println!("Too small!"),
    Ordering::Greater => println!("Too big!"),
    Ordering::Equal => println!("You win!"),
}
```

### --tests--

The above `match` expression should be used to compare the `secret_number` to the `guess` variable.

```js
assert.fail();
```

The `match` should be used directly below the `println!` statement that prints `guess`.

```js
assert.fail();
```

## 30

### --description--

Build the program to see the error message.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 31

### --description--

Rust has a strong, static type system. However, it also has type <dfn>inference</dfn>. `guess` is a `String`, and `secret_number` is an `i32` (Rust's default). So, the reason for the error is that Rust cannot compare a string and a number type.

To convert the `String` into a number, first trim the string of whitespace using the `trim` method on the `String` type, assigning the result to a new variable named `guess`. _Rust allows <dfn title="reusing a variable name within the same scope">shadowing</dfn>._

```rust
let guess = guess.trim();
```

### --tests--

The `guess` variable should be shadowed with a new variable named `guess`.

```js
assert.fail();
```

The shadowed `guess` variable should be declared directly above the `println!` statement that prints `guess`.

```js
assert.fail();
```

## 32

### --description--

The `trim` method returns a string type. To convert into a number, chain the `parse` method to the `trim` method call, and add a type annotation of `u32` to the `parse` method call to tell Rust which type of number to parse the string into.

```rust
let guess: u32 = guess.trim().parse().expect("Please type a number!");
```

Type annotations are commonly written in one of two ways:

```rust
let variable_of_type_i32: i32 = "42".parse().expect("Not a number!");
let variable_of_type_i32 = "42".parse::<i32>().expect("Not a number!");
```

The first syntax is more common, and is used in this lesson.

The second syntax is more fun, and is called _turbofish_ syntax.

### --tests--

The `parse` method should be called on the `trim` method call.

```js
assert.fail();
```

The `parse` method should be called with `expect("Please type a number!")` as an argument.

```js
assert.fail();
```

A type annotation of `u32` should be added to the `guess` declaration.

```js
assert.fail();
```

## 33

### --description--

Run the program, and enter a number.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 34

### --description--

Currently, only one guess is allowed. To allow multiple guesses, add a `loop` to the program:

```rust
fn main() {
    // --snip--

    println!("The secret number is: {secret_number}");

    loop {
        println!("Please input your guess.");

        // --snip--

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = guess.trim().parse().expect("Please type a number!");

        println!("You guessed: {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => println!("You win!"),
        }
    }
}
```

### --tests--

A `loop` should be added to the program.

```js
assert.fail();
```

The `loop` should be added directly below the `println!` statement that prints `secret_number`.

```js
assert.fail();
```

The `loop` should be closed at the end of the `main` function.

```js
assert.fail();
```

## 35

### --description--

A `loop` statment creates an infinite loop. The program can be interrupted with `Ctrl + C`.

Otherwise, the program can be exited by crashing it when entering a non-number.

Run the program, and enter something to crash it.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

The program should crash when entering a non-number.

```js
assert.fail();
```

## 36

### --description--

To exit the loop when the correct number is guessed, add a `break` statement to the `match` expression.

```rust
match guess.cmp(&secret_number) {
    Ordering::Less => println!("Too small!"),
    Ordering::Greater => println!("Too big!"),
    Ordering::Equal => {
        println!("You win!");
        break;
    }
}
```

### --tests--

A `break` statement should be added to the `match` expression.

```js
assert.fail();
```

The `break` statement should be added directly below the `println!` statement that prints `"You win!"`.

```js
assert.fail();
```

## 37

### --description--

Run the program, and win the game.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 38

### --description--

Instead of crashing the program when a non-number is entered, the loop can be continued - asking for another input.

To do this, switch the `expect` call to a `match` expression, handling the two variants of the `Result` type returned by `parse`. Then, when the `Result` is an `Err`, invoke the `continue` statement:

```rust
let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
    Err(_) => continue,
};
```

If `parse` is able to successfully turn the string into a number, it will return an `Ok` value that contains the resulting number. That `Ok` value will match the first arm's pattern, and the value is bound to a variable named `num`. The `num` variable is then returned from the match expression and assigned to the `guess` variable.

### --tests--

The `expect` call should be replaced with a `match` expression.

```js
assert.fail();
```

## 39

### --description--

Run the program, and try different inputs.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 40

### --description--

Finally, instead of printing the random number, remove the `println!` statement that prints `secret_number`.

### --tests--

The `println!` statement that prints `secret_number` should be removed.

```js
assert.fail();
```

## 41

### --description--

**Summary**

At this point, you have successfully built the guessing game. 🎉

This project was a hands-on way to introduce you to:

- `let`
- `match`
- Functions
- External crates
- `loop`

Chapter 3 covers concepts that most programming languages have, such as variables, data types, and functions, and shows how to use them in Rust. Chapter 4 explores ownership, a feature that makes Rust different from other languages. Chapter 5 discusses structs and method syntax, and Chapter 6 explains how enums work.

### --tests--

🦀 🚀

```js
assert.fail('Chapter 2 complete!');
```

## --fcc-end--
