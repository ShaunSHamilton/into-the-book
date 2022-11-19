# Rust - Program a Guessing Game

## 1

### --description--

Open a new terminal, and into the `program-a-guessing-game/` directory.

### --tests--

The terminal working directory should be `program-a-guessing-game/`

```js
assert.fail();
```

## 2

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

## 3

### --description--

Change into the `guessing_game` directory.

### --tests--

The terminal working directory should be `guessing_game/`

```js
assert.fail();
```

## 4

### --description--

Use `cargo` to compile and run the program in the same step.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 5

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

## 6

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

## 7

### --description--

Use `cargo` to compile and run the program in the same step.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 8

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

## 9

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

## 10

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

## 11

### --description--

The `read_line` method returns a value of the `io::Result` type. The `Result` type is an enumeration, more commonly referred to as an <dfn title="a type that can be in one of multiple possible states">enum</dfn>.

The purpose of the `Result` type is to encode error-handling information. The `Result` type has two <dfn>variants</dfn>: `Ok` and `Err`. The `Ok` variant indicates the operation was successful, and, inside is the successfully generated value. The `Err` variant means the operation failed, and, inside is information about how or why the operation failed.

Run `cargo build` to see what the compiler says about not doing anything with the `Result` value.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 12

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

## 13

### --description--

Re-build the program with `cargo build` to confirm the program now successfully compiles without warnings.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 14

### --description--

Run the program, and enter a value in the terminal as prompted, then hit the `Enter` key.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 15

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

## 16

### --description--

Run the program again, and enter a value in the terminal as prompted, then hit the `Enter` key.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 17

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

## 18

### --description--

Build the project, to fetch the latest versions of everything dependencies need from the <dfn>registry</dfn>. The registry is a copy of all the code that has been published to <dfn title="where people in the Rust ecosystem post their open source Rust projects for others to use">crates.io</dfn>.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 19

Cargo knows the `rand` crate has already been downloaded and compiled its dependencies, so it will not download it again. Instead, it will use the cached version.

Re-build the project, and notice the output is much faster than the first time.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 20

### --description--

Cargo uses SemVer for crate versioning. `0.8.3` is shorthand for `^0.8.3`.

If `rand` releases a new version, `cargo update` can be used to update the version used to the latest version that is compatible with the version specified in the `Cargo.toml` file.

Run `cargo update`.

### --tests--

`cargo update` should be used to update the version of `rand` used.

```js
assert.fail();
```

## 21

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

## 22

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

## 23

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

## 24

### --description--

Build the project, and read the error message.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 25

### --description--

As mentioned in a previous lesson, the `gen_range` method is only available on types that implement the `Rng` trait. However, the `Rng` trait is not in scope.

Follow the compiler's advice to bring the `Rng` trait into scope.

### --tests--

The `Rng` trait should be brought into scope with `use rand::Rng;`.

```js
assert.fail();
```

## 26

### --description--

Re-build the project to confirm the project successfully compiles.

### --tests--

`cargo build` should be used to compile the program.

```js
assert.fail();
```

## 27

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

## 28

### --description--

Run the program to see the secret number printed to the terminal. Remember to enter a value, and hit the `Enter` key.

### --tests--

`cargo run` should be used to compile and run the program.

```js
assert.fail();
```

## 29

### --description--

To compare two values, bring the `std::cmp::Ordering` enum into scope.

### --tests--

The `Ordering` enum should be brought into scope with `use std::cmp::Ordering;`.

```js
assert.fail();
```

## 30

### --description--

The `std::cmp::Ordering` enum has three variants: `Less`, `Greater`, and `Equal`.

Use a `match` expression to compare the `secret_number` to the `guess` variable:

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

## 31

### --description--

## --fcc-end--
