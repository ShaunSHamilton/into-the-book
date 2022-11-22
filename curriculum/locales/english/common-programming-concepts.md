# Rust - Common Programming Concepts

## 1

### --description--

Open a new terminal, and change into the `common-programming-concepts/` directory.

### --tests--

The terminal working directory should end in `common-programming-concepts`.

```js
assert.fail();
```

## 2

### --description--

Create a new Rust project called `variables` using `cargo`.

### --tests--

`cargo new varaibles` should be run in the terminal.

```js
assert.fail();
```

## 3

### --description--

As previously mentioned, by default, variables are immutable. When a variable is immutable, once a value is bound ot a name, the value cannot change.

To illustrate this, replace the contents of the `src/main.rs` file with the following:

```rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

### --tests--

The `src/main.rs` file should contain the code above.

```js
assert.fail();
```

## 4

### --description--

Run the program to see the error.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 5

### --description--

Compiler errors can be frustrating, but they only mean the program is not safely doing what it is intended to do yet.

The previous error message indicates a second value is being assigned to the immutable `x` variable.

Although variables are immutable by default, adding the `mut` keyword in front of the variable name makes them mutable.

Add the `mut` keyword to the `x` variable declaration in the `src/main.rs` file:

```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

### --tests--

The `src/main.rs` file should contain `let mut x = 5;`

```js
assert.fail();
```

## 6

### --description--

Run the program again.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 7

### --description--

Another kind of variable is a constant. Constants are like immutable variables, but are not allowed to be used with the `mut` keyword - they are always immutable.

Constants are declared using the `const` keyword, and the type of the value must be explicitly annotated. Constants can be declared in any scope, and may only be set to a constant expression - not the result of a value that could only be computed at runtime.

Outside of the `main` function, add the following constant variable declaration:

```rust
const THREE_HOURS_IN_SECONDS: u32 = 3 * 60 * 60;
```

### --tests--

The `src/main.rs` file should contain the above code.

```js
assert.fail();
```

The `THREE_HOURS_IN_SECONDS` constant should be declared in the global scope.

```js
assert.fail();
```

## 8

### --description--

In Rust, `let` variables can be <dfn title="reusing a variable name within the same scope">shadowing</dfn>.

Replace the content of the `src/main.rs` file with the following:

```rust
let x = 5;

let x = x + 1;

{
    let x = x * 2;
    println!("The value of x in the inner scope is: {x}");
}

println!("The value of x is: {x}");
```

The program first binds `x` to `5`, then creates a new variable `x` taking the original value and adding `1`. Then, within an inner scope, the third `let` statement also shadows `x`.

### --tests--

The `src/main.rs` file should contain the above code.

```js
assert.fail();
```

## 9

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 10

### --description--

Shadowing is different from marking a variable as `mut`, because a compile-time error will be thrown if the variable is accidentally reassigned without using the `let` keyword.

To illustrate this, adjust the `main` function to be:

```rust
fn main() {
  let mut not_shadowing = "    ";
  not_shadowing = not_shadowing.len();
  println!("not_shadowing: {not_shadowing}");
}
```

### --tests--

The `src/main.rs` file should contain the above code.

```js
assert.fail();
```

## 11

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 12

### --description--

This error comes about because the `not_shadowing` variable is declared with a string type, but then is re-assigned a number type value.

To fix this, add the `let` keyword to the second `not_shadowing` variable assignment:

```rust
fn main() {
  let mut not_shadowing = "    ";
  let not_shadowing = not_shadowing.len();
  println!("not_shadowing: {not_shadowing}");
}
```

### --tests--

The `src/main.rs` file should contain the above code.

```js
assert.fail();
```

## 13

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 14

### --description--

Now, this is shadowing! Rename both variables to `shadowing`.

### --tests--

All mentions of `not_shadowing` should be replaced with `shadowing`.

```js
assert.fail();
```

## 15

### --description--

Notice the first variable does not need to be declared as `mut` because it is not being re-assigned - the name is just being reused.

Fix the compiler warning, by not declaring the first `shadowing` variable as mutable.

### --tests--

The first `shadowing` variable should not be declared as `mut`.

```js
assert.fail();
```

## 16

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 17

### --description--

Every value is of a certain data type. Rust is a <dfn>statically typed</dfn> language, but the compiler can still infer a type based on the value and how it is used.

Replace all code in the `src/main.rs` file with the following:

```rust
fn main() {
  let guess = "42".parse().expect("Not a number!");
}
```

### --tests--

The `src/main.rs` file should contain the above code.

```js
assert.fail();
```

## 18

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 19

### --description--

The error message is saying the compiler needs more information to know which type to use for the `guess` variable.

To fix this, add a type annotation to the `guess` variable:

```rust
fn main() {
  let guess: u32 = "42".parse().expect("Not a number!");
}
```

### --tests--

The `src/main.rs` file should contain the above code.

```js
assert.fail();
```

## 20

### --description--

Run the program to confirm there is no longer a type error.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 21

### --description--

Rust has four primary scalar types:

- Integers
- Floating-point numbers
- Booleans
- Characters

**Integer Types**

An integer is a number without a fractional component. The `gyess` variable is annotated as an unsigned, 32-bit integer. Here is a table of the different integer types:

| Length  | Signed  | Unsigned |
| ------- | ------- | -------- |
| 8-bit   | `i8`    | `u8`     |
| 16-bit  | `i16`   | `u16`    |
| 32-bit  | `i32`   | `u32`    |
| 64-bit  | `i64`   | `u64`    |
| 128-bit | `i128`  | `u128`   |
| arch    | `isize` | `usize`  |

Change the `guess` variable annotation to any one of the signed integer types.

### --tests--

The `guess` variable should be of a signed integer type.

```js
assert.fail();
```

## 22

### --description--

Integer literals can be written in any of the following forms:

| Number literals  | Example       |
| ---------------- | ------------- |
| Decimal          | `98_222`      |
| Hex              | `0xff`        |
| Octal            | `0o77`        |
| Binary           | `0b1111_0000` |
| Byte (`u8` only) | `b'A'`        |

Replace the code in `src/main.rs` with the following:

```rust
fn main() {
  let num = b'A';
  println!("num: {num}");
}
```

### --tests--

The `src/main.rs` file should contain the above code.

```js
assert.fail();
```

## 23

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 24

### --description--

The `num` variable is of type `u8`, which means it can only store numbers between 0 and 255. The `b'A'` literal is a byte literal, which is a number between 0 and 255. The `b'A'` literal is the number 65, which is the ASCII character for `A`.

Change the `num` variable annotation to any of the other number literal types.

### --tests--

The `num` variable should be of a different number literal type.

```js
assert.fail();
```

## 25

### --description--

**Floating-Point Types**

Rust has two primitive types for <dfn>floating-point numbers</dfn>: `f32` and `f64`. The default type is `f64` because on modern CPUs it is roughly the same speed as `f32` but is capable of more precision.

Change the `num` variable to a floating-point type.

### --tests--

The `num` variable should be of a floating-point type.

```js
assert.fail();
```

## 26

### --description--

**Numeric Operations**

Rust supports all the basic mathematical operations you’d expect for all number types:

| Operator       | Example |
| -------------- | ------- |
| Addition       | `+`     |
| Subtraction    | `-`     |
| Multiplication | `*`     |
| Division       | `/`     |
| Remainder      | `%`     |

Replace the code in `src/main.rs` with the following:

```rust
fn main() {
  let sum = 5 + 10;
  println!("sum: {sum}");
}
```

### --tests--

The `src/main.rs` file should contain the above code.

```js
assert.fail();
```

## 27

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 28

### --description--

Within the `main` function, declare a variable named `difference` and set it equal to the difference of two floating-point numbers.

### --tests--

A `difference` variable should be declared.

```js
assert.fail();
```

The `difference` variable should be declared within the `main` function.

```js
assert.fail();
```

The `difference` variable should be the difference of two floating-point numbers.

```js
assert.fail();
```

The `sum` variable should not be changed.

```js
assert.fail();
```

## 29

### --description--

Print the value of the `difference` variable to the console.

### --tests--

The `difference` variable should be printed to the console.

```js
assert.fail();
```

## 30

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 31

### --description--

Within the `main` function, declare a variable named `product` and set it equal to the product of two integers.

### --tests--

A `product` variable should be declared.

```js
assert.fail();
```

The `product` variable should be declared within the `main` function.

```js
assert.fail();
```

The `product` variable should be the product of two integers.

```js
assert.fail();
```

The `difference` variable should not be changed.

```js
assert.fail();
```

## 32

### --description--

Print the value of the `product` variable to the console.

### --tests--

The `product` variable should be printed to the console.

```js
assert.fail();
```

## 33

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 34

### --description--

Within the `main` function, declare a variable named `quotient` and set it equal to the quotient of two floating-point numbers.

### --tests--

A `quotient` variable should be declared.

```js
assert.fail();
```

The `quotient` variable should be declared within the `main` function.

```js
assert.fail();
```

The `quotient` variable should be the quotient of two floating-point numbers.

```js
assert.fail();
```

The `product` variable should not be changed.

```js
assert.fail();
```

## --fcc-end--
