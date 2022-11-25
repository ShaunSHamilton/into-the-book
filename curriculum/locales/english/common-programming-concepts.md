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

**Data Types**

Every value is of a certain data type. Rust is a <dfn>statically typed</dfn> language, but the compiler can still infer a type based on the value and how it is used.

Within the `common-programming-concepts` directory, create a new project called `data-types`:

### --tests--

`cargo new data-types` should be run in the terminal.

```js
assert.fail();
```

## 18

### --description--

Adjust the `main` function to the following:

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

## 19

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 20

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

## 21

### --description--

Run the program to confirm there is no longer a type error.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 22

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

## 23

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

## 24

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 25

### --description--

The `num` variable is of type `u8`, which means it can only store numbers between 0 and 255. The `b'A'` literal is a byte literal, which is a number between 0 and 255. The `b'A'` literal is the number 65, which is the ASCII character for `A`.

Change the `num` variable annotation to any of the other number literal types.

### --tests--

The `num` variable should be of a different number literal type.

```js
assert.fail();
```

## 26

### --description--

**Floating-Point Types**

Rust has two primitive types for <dfn>floating-point numbers</dfn>: `f32` and `f64`. The default type is `f64` because on modern CPUs it is roughly the same speed as `f32` but is capable of more precision.

Change the `num` variable to a floating-point type.

### --tests--

The `num` variable should be of a floating-point type.

```js
assert.fail();
```

## 27

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

## 28

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 29

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

## 30

### --description--

Print the value of the `difference` variable to the console.

### --tests--

The `difference` variable should be printed to the console.

```js
assert.fail();
```

## 31

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 32

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

## 33

### --description--

Print the value of the `product` variable to the console.

### --tests--

The `product` variable should be printed to the console.

```js
assert.fail();
```

## 34

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 35

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

## 36

### --description--

Print the value of the `quotient` variable to the console.

### --tests--

The `quotient` variable should be printed to the console.

```js
assert.fail();
```

## 37

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 38

### --description--

Within the `main` function, declare a variable named `floored`, and set it equal to `2` divided by `3`.

### --tests--

A `floored` variable should be declared.

```js
assert.fail();
```

The `floored` variable should be declared within the `main` function.

```js
assert.fail();
```

The `floored` variable should be the division of two integers.

```js
assert.fail();
```

The `quotient` variable should not be changed.

```js
assert.fail();
```

## 39

### --description--

Print the value of the `floored` variable to the console.

### --tests--

The `floored` variable should be printed to the console.

```js
assert.fail();
```

## 40

### --description--

Run the program to see the output.

_Notice that the result is `0` instead of `0.6666666666666666`._

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 41

### --description--

Within the `main` function, declare a variable named `remainder`, and set it equal to the remainder of two integers.

### --tests--

A `remainder` variable should be declared.

```js
assert.fail();
```

The `remainder` variable should be declared within the `main` function.

```js
assert.fail();
```

The `remainder` variable should be the remainder of two integers.

```js
assert.fail();
```

The `floored` variable should not be changed.

```js
assert.fail();
```

## 42

### --description--

Print the value of the `remainder` variable to the console.

### --tests--

The `remainder` variable should be printed to the console.

```js
assert.fail();
```

## 43

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 44

### --description--

**The Boolean Type**

Rust has a Boolean type, which can only be `true` or `false`.

Adjust the contents of the `main` function to be the following:

```rust
fn main() {
  let waar = true;
  let onwaar: bool = !waar;
  println!("onwaar: {onwaar}");
}
```

`!` is the logical negation operator.

### --tests--

The `main` function should be adjusted to the above code.

```js
assert.fail();
```

## 45

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 46

### --description--

Rust's `char` type is the most primitive alphabetic type. `char` literals are specified with single quotes, as opposed to double quotes, which are for string literals.

Adjust the contents of the `main` function to be the following:

```rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ';
    let heart_eyed_cat = '😻';
}
```

### --tests--

The `main` function should be adjusted to the above code.

```js
assert.fail();
```

## 47

### --description--

To get an idea of the size of a `char`, add the following code to the `main` function:

```rust
println!("c: {}, z: {}, heart_eyed_cat: {}", std::mem::size_of_val(&c), std::mem::size_of_val(&z), std::mem::size_of_val(&heart_eyed_cat));
```

The `size_of_val` function from the `mem` module returns the size of the pointed-to value in bytes.

### --tests--

The `main` function should be adjusted to the above code.

```js
assert.fail();
```

## 48

### --description--

Run the program to see the output.

_Notice that the size of a `char` is always 4 bytes._

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 49

### --description--

**Compound Types**

Rust has two primitive compound types: tuples and arrays.

**The Tuple Type**

A tuple is a general way of grouping together a number of values with a variety of types into one compound type.

Adjust the contents of the `main` function to be the following:

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
```

### --tests--

The `main` function should be adjusted to the above code.

```js
assert.fail();
```

## 50

### --description--

The variable `tup` binds to the entire tuple, because a tuple is considered a single compound element.

To get the individual values out, use pattern matching to destructure the tuple value:

```rust
let (x, y, z) = tup;
```

### --tests--

The `main` function should contain `let (x, y, z) = tup;`.

```js
assert.fail();
```

## 51

### --description--

Print the values of `x`, `y`, and `z` to the console.

### --tests--

The `println!` macro should be used to print the values of `x`, `y`, and `z` to the console.

```js
assert.fail();
```

## 52

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 53

### --description--

To directly access a tuple element, use a period (`.`) followed by the index of the value wanted:

```rust
let five_hundred = tup.0;
let six_point_four = tup.1;
let one = tup.2;
```

### --tests--

The `main` function should contain `let five_hundred = tup.0;`.

```js
assert.fail();
```

The `main` function should contain `let six_point_four = tup.1;`.

```js
assert.fail();
```

The `main` function should contain `let one = tup.2;`.

```js
assert.fail();
```

## 54

### --description--

Print the values of `five_hundred`, `six_point_four`, and `one` to the console.

### --tests--

The `println!` macro should be used to print the values of `five_hundred`, `six_point_four`, and `one` to the console.

```js
assert.fail();
```

## 55

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 56

### --description--

Use the dot (`.`) operator to try change the value of the first element of the tuple to `6`.

### --tests--

The `main` function should contain `tup.0 = 6;`.

```js
assert.fail();
```

## 57

### --description--

Run the program to see what the compiler says.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 58

### --description--

Follow the compiler's advice to make the program compile.

### --tests--

The `tup` variable should be declared as mutable.

```js
assert.fail();
```

## 59

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 60

### --description--

A tuple without any values has a special name: <dfn>unit</dfn>. This value and its corresponding type are both written `()`, and represent an empty value or an empty return type.

Expressions implicitly return the unit value if they do not return any other value.

Within `main`, declare a variable `x` and set it to the unit value.

### --tests--

The `main` function should contain `let x = ();`.

```js
assert.fail();
```

## 61

### --description--

**The Array Type**

Arrays contains a collection of multiple values. Unlike tuples, every element of an array must have the same type.

```rust
let a = [1, 2, 3, 4, 5];
```

Arrays are useful when the data can be <dfn>stack allocated</dfn>. Arrays are useful when the number of elements will not need to change.

Adjust the contents of the `main` function to **only** contain a variable `months` that is an array of 12 string elements made up of the full names of the months.

### --tests--

The `main` function should contain a variable named `months`.

```js
assert.fail();
```

The `months` variable should be an array of 12 string elements.

```js
assert.fail();
```

The `months` variable should be an array of 12 string elements made up of the full names of the months.

```js
assert.fail();
```

## 62

### --description--

An array is a single chunk of memory of a known, fixed size that can be allocated on the stack. Elements of an array can be accessed using indexing:

```rust
let a = [1, 2, 3, 4, 5];
let first = a[0];
let second = a[1];
```

Within `main`, declare a variable `may`, and set it to the appropriate 😉 element of the `months` array.

### --tests--

The `main` function should contain a variable named `may`.

```js
assert.fail();
```

The `may` variable should be set to `months[4]`.

```js
assert.fail();
```

## 63

### --description--

Print the value of `may` to the console.

### --tests--

The `println!` macro should be used to print the value of `may` to the console.

```js
assert.fail();
```

## 64

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 65

### --description--

An array can be initialised with the same value for each element by specifying the initial value, followed by a semicolon, then the number of elements in the array in square brackets:

```rust
let a: [i32; 5] = [3; 5];
```

Within `main`, declare a variable `four_ones`, and set it to an array of 4 elements, each of which is the number `1`.

### --tests--

The `main` function should contain a variable named `four_ones`.

```js
assert.fail();
```

The `four_ones` variable should be set to `[1; 4]`.

```js
assert.fail();
```

## 66

### --description--

Print the value of `four_ones` to the console.

### --tests--

The `println!` macro should be used to print the value of `four_ones` to the console.

```js
assert.fail();
```

## 67

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 68

### --description--

An array's size is fixed. If you try to access an element using an index that is greater than or equal to the size of the array, the program will panic.

Within `main`, try to access the 5th element of the `four_ones` array.

### --tests--

The `main` function should contain `four_ones[4];`.

```js
assert.fail();
```

## 69

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 70

### --description--

**Functions**

So far, only the `main` function has been used. As it is the entry point of the program, it does not need to be explicitly called.

Within the `common-programming-concepts/` directory, create a new project named `functions`.

### --tests--

`cargo new functions` should be run in the terminal.

```js
assert.fail();
```

## 71

### --description--

Define a function named `another_function` that prints the string `Another function.` to the console.

### --tests--

The `main` function should contain a function named `another_function`.

```js
assert.fail();
```

The `another_function` function should print the string `Another function.` to the console.

```js
assert.fail();
```

## 72

### --description--

Functions defined in the same scope as `main` are called top-level functions. They can be called from anywhere within the scope of `main`. This is similar to the way some interpreted languages hoist functions to the top of the file.

Call the `another_function` function within the `main` function.

### --tests--

The `main` function should contain a call to the `another_function` function.

```js
assert.fail();
```

## 73

**Parameters**

Functions can accept arguments which are specified in the function's signature. These are called <dfn title="A variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.">parameters</dfn>.

```rust
fn print_number(a: String) {
    println!("a is: {}", a);
}
```

Adjust the definition of the `another_function` function to accept a parameter named `x` of type `i32`, and adjust the `println!` macro to print the value of `x` to the console.

### --tests--

The `another_function` function should accept a parameter named `x` of type `i32`.

```js
assert.fail();
```

The `println!` macro should be used to print the value of `x` to the console.

```js
assert.fail();
```

## 74

### --description--

Multiple parameters can be specified in a function's signature. The parameters are separated by commas.

```rust
fn print_sum(a: i32, b: i32) {
    println!("sum is: {}", a + b);
}
```

Define a new function named `print_labeled_measurement` that accepts two parameters: `value` of type `i32`, and `unit_label` of type `char`. The function should print `"The measurement is: {value}{unit_label}"` to the console.

### --tests--

A new function named `print_labeled_measurement` should be declared.

```js
assert.fail();
```

The `print_labeled_measurement` function should accept two parameters: `value` of type `i32`, and `unit_label` of type `char`.

```js
assert.fail();
```

The `println!` macro should be used to print `"The measurement is: {value}{unit_label}"` to the console.

```js
assert.fail();
```

## 75

### --description--

Call the `print_labeled_measurement` function within the `main` function, passing in correct values for the parameters.

### --tests--

The `main` function should contain a call to the `print_labeled_measurement` function.

```js
assert.fail();
```

## 76

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 77

### --description--

**Statements and Expressions**

Function bodies are made up of a series of <dfn title="instructions that perform some action and do not return a value">statements</dfn> optionally ending in an <dfn title="code evaluating to a value">expression</dfn>. Rust is an expression-based language.

Declare two new functions: `statement` and `expression`.

### --tests--

Two new functions named `statement` and `expression` should be declared.

```js
assert.fail();
```

## 78

### --description--

Creating a variable and assigning a value to it with the `let` keyword is an example of a statement.

Within the `statement` function, declare a variable named `y` and set it to the value `6`.

### --tests--

The `statement` function should contain a variable named `y`.

```js
assert.fail();
```

The `y` variable should be set to the value `6`.

```js
assert.fail();
```

## 79

### --description--

Function definitions are also statements. As statements do not return values, a `let` statement cannot be assigned to another variable.

Within the `statement` function, add the following line:

```rust
let x = (let y = 6);
```

### --tests--

The `statement` function should contain the line `let x = (let y = 6);`.

```js
assert.fail();
```

## 80

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 81

### --description--

Remove the incorrect line from the `statement` function.

### --tests--

The `statement` function should not contain the line `let x = (let y = 6);`.

```js
assert.fail();
```

## 82

### --description--

Expressions evaluate to a value. Calling a function is an example of an expression.

Within the `expression` function, add the following code:

```rust
let y = {
    let x = 3;
    x + 1
};
println!("The value of y is: {}", y);
```

### --tests--

The `expression` function should contain the above code.

```js
assert.fail();
```

## 83

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 84

### --description--

Call the `statement` and `expression` functions within the `main` function.

### --tests--

The `main` function should contain a call to the `statement` function.

```js
assert.fail();
```

The `main` function should contain a call to the `expression` function.

```js
assert.fail();
```

## 85

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 86

### --description--

**Return Values**

Functions can return values to the code that calls them. In Rust, the return value of the function is synonymous with the value of the final expression in the block of the body of a function. You can return early from a function by using the return keyword and specifying a value, but most functions return the last expression implicitly:

```rust
fn return_string() -> String {
    let s = String::from("hello");
    s
}
// Equivalent to:
fn return_string() -> String {
    let s = String::from("hello");
    return s;
}
```

Define a new function named `five` that returns the value `5`.

### --tests--

A new function named `five` should be declared.

```js
assert.fail();
```

The `five` function should return the value `5`.

```js
assert.fail();
```

The `five` function should be typed to return `-> i32`.

```js
assert.fail();
```

## 87

### --description--

Call the `five` function within the `main` function, and assign it to a variable named `five_returned`.

### --tests--

The `main` function should contain a call to the `five` function.

```js
assert.fail();
```

The `main` function should contain a variable named `five_returned`.

```js
assert.fail();
```

## 88

Within `main`, print the value of `five_returned` to the console.

### --tests--

The `main` function should contain a call to the `println!` macro.

```js
assert.fail();
```

## 89

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 90

### --description--

**Comments**

In Rust, the idiomatic comment style starts a comment with two slashes, and the comment continues until the end of the line. For comments that extend beyond a single line, include `//` on each line.

Within the `common-programming-concepts/` directory, create a new project named `comments`.

### --tests--

`cargo new comments` should be run in the terminal.

```js
assert.fail();
```

## 91

### --description--

Here is a simple comment:

```rust
// hello, world
```

Within the `main` function, add a comment directly above the `println!` macro.

### --tests--

The `main` function should contain a comment directly above the `println!` macro.

```js
assert.fail();
```

## 92

### --description--

Comments can also be added to the end of a line of code:

```rust
let x = 5; // this is a comment
```

Within the `main` function, add a comment on the same line as the `println!` macro.

### --tests--

The `main` function should contain a comment on the same line as the `println!` macro.

```js
assert.fail();
```

## 93

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 94

### --description--

**Control Flow**

The ability to run some code depending on if a condition is true, or run some code repeatedly while a condition is true, are basic building blocks in most programming languages. The most common constructs that let you control the flow of execution of Rust code are `if` expressions and loops.

Within the `common-programming-concepts/` directory, create a new project named `control-flow`.

### --tests--

`cargo new control-flow` should be run in the terminal.

```js
assert.fail();
```

## 95

### --description--

**`if` Expressions**

An `if` expression allows code to branch depending on conditions. All `if` expressions start with the keyword `if`, followed by a condition. Sometimes, blocks of code associated with the conditions are called _arms_:

```rust
if condition {
    // code to run if the condition is true
} else { // optional else expression
    // code to run if the condition is false
}
```

Within the `main` function, declare a variable named `number` and assign it the value `3`. Then, add an `if` expression that prints `"condition was true"` if `number < 5`, and prints `"condition was false"` otherwise.

### --tests--

The `main` function should contain a variable named `number`.

```js
assert.fail();
```

The `main` function should contain an `if` expression.

```js
assert.fail();
```

The `if` expression should print `"condition was true"` if `number < 5`.

```js
assert.fail();
```

The `if` expression should print `"condition was false"` otherwise.

```js
assert.fail();
```

## 96

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 97

### --description--

Conditions must be a `bool`.

Change the `if` condition to just `number` - _some languages allow implicit conversion of non-boolean values to boolean values, but Rust does not_.

### --tests--

The `if` expression should start `if number {`.

```js
assert.fail();
```

## 98

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 99

### --description--

Multiple conditions can be combined using `else if`:

```rust
if condition_1 {

} else if condition_2 {

} else {

}
```

Within the `main` function, add an `else if` expression that prints `"number is divisible by 4"` if `number % 4 == 0`, and prints `"number is not divisible by 4"` otherwise.

### --tests--

The `main` function should contain an `else if` expression.

```js
assert.fail();
```

The `else if` expression should print `"number is divisible by 4"` if `number % 4 == 0`.

```js
assert.fail();
```

The `else if` expression should print `"number is not divisible by 4"` otherwise.

```js
assert.fail();
```

## 100

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 101

### --description--

Expressions evaluate to a value. So, you can use an `if` expression in a `let` statement:

```rust
let condition = true;
let number = if condition { 5 } else { 6 };
```

Adjust the `main` function to assign the value of `1` to a variable named `bin` if `number` is even, and assign the value of `0` otherwise.

### --tests--

The `main` function should contain a variable named `bin`.

```js
assert.fail();
```

`bin` should be assigned the value of `1` if `number % 2 == 0`.

```js
assert.fail();
```

`bin` should be assigned the value of `0` otherwise.

```js
assert.fail();
```

## 102

### --description--

**Repetition with Loops**

It is often useful to execute a block of code more than once. Rust has three kinds of loops: `loop`, `while`, and `for`.

Within the `common-programming-concepts/` directory, create a new project named `loops`.

### --tests--

`cargo new loops` should be run in the terminal.

```js
assert.fail();
```

## 103

### --description--

**Repeating Code with `loop`**

The `loop` keyword tells Rust to execute a block of code over and over again forver or until explicitly told to stop:

```rust
fn main() {
    loop {
      // code to repeatedly run
    }
}
```

Within the `main` function, add a `loop` expression that prints `"again!"` to the console.

### --tests--

The `main` function should contain a `loop` expression.

```js
assert.fail();
```

The `loop` expression should print `"again!"`.

```js
assert.fail();
```

## 104

### --description--

Run the program to see the output. **Press `Ctrl+C` to stop the program.**

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 105

### --description--

Rust also provides a programatic way to break out of a loop. The `break` keyword tells the program when to stop executing a loop.

Within the `loop` expression, after the `println!` statement, add a `break` statement.

### --tests--

The `loop` expression should contain a `break` statement.

```js
assert.fail();
```

## 106

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 107

### --description--

As `loop` expressions are _expressions_, they can be used to return a value, by placing the value after the `break` keyword.

Within the `main` function, add the following:

```rust
let mut counter = 0;

let result = loop {
    counter += 1;
    if counter == 10 {
        break counter * 2;
    }
}

println!("result: {result}");
```

### --tests--

The `main` function should contain the above code.

```js
assert.fail();
```

## 108

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 109

### --description--

Programs can end up with loops nested within loops. So, in order to early return from a loop, a loop label can be specified that can be used with `break` or `continue` statements.

Adjust the `main` function to:

```rust
fn main() {
    let mut count = 0;

    // Label the outermost loop as "counting_up"
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                // Early return from the outermost loop
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```

### --tests--

The `main` function should contain the above code.

```js
assert.fail();
```

## 110

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 111

### --description--

**Conditional Loops with `while`**

A program will often need to evaluate a condition within a loop. While the condition is true, the loop runs. When the condition ceases to be true, the program calls `break`, stopping the loop. Whilst possible to implement behavior like this using a combination of `loop`, `if`, `else`, and `break`, Rust has a built-in language construct for this kind of loop: `while`.

Adjust the `main` function to be:

```rust
fn main() {
    let mut number = 3;

    loop {
        println!("{number}!");

        number -= 1;

        if number == 0 {
            break;
        }
    }

    println!("LIFTOFF!!!");
}
```

### --tests--

The `main` function should contain the above code.

```js
assert.fail();
```

## 112

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 113

### --description--

The same logic can be implemented using a `while` loop. Adjust the `main` function to be:

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

This eliminates a lot of nesting, and is clearer; while a condition holds true, the code runs, otherwise it exits the loop.

### --tests--

The `main` function should contain the above code.

```js
assert.fail();
```

## 114

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 115

### --description--

**Looping Through a Collection with `for`**

The `for` loop is used to iterate over a collection (e.g. an array or a vector). The syntax is:

```rust
let collection = [1, 2, 3, 4, 5];

for element in collection {
    // code to execute for each element
}
```

Adjust the `main` function to declare an array `a` with the values `1` through `5` inclusive, and then use a `for` loop to print each element of the array.

### --tests--

The `main` function should contain a variable `a`.

```js
assert.fail();
```

`a` should be `[1, 2, 3, 4, 5]`.

```js
assert.fail();
```

The `main` function should contain a `for` loop.

```js
assert.fail();
```

The `for` loop should print each element of the array.

```js
assert.fail();
```

## 116

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 117

### --description--

Instead of individually declaring each number in the `a` array, Rust provides a range operator `..` that can be used to create a range of values:

```rust
for i in 1..5 {
    println!("i = {i}"); // prints 1, 2, 3, 4
}

for i in 1..=5 {
    println!("i = {i}"); // prints 1, 2, 3, 4, 5
}
```

Adjust the `main` function to use the range operator to create the `a` array.

### --tests--

The `main` function should contain a variable `a`.

```js
assert.fail();
```

`a` should be `(1..=5)`.

```js
assert.fail();
```

The `main` function should contain a `for` loop.

```js
assert.fail();
```

The `for` loop should be `for i in a`.

```js
assert.fail();
```

The `for` loop should print each element of the array.

```js
assert.fail();
```

## 118

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 119

### --description--

A handy method on the `Range` type is `rev`, which reverses the range. Adjust the `a` declaration to use `rev` to print the numbers in reverse order.

### --tests--

The `main` function should contain a variable `a`.

```js
assert.fail();
```

`a` should be `(1..=5).rev()`.

```js
assert.fail();
```

The `main` function should contain a `for` loop.

```js
assert.fail();
```

The `for` loop should be `for i in a`.

```js
assert.fail();
```

The `for` loop should print each element of the array.

```js
assert.fail();
```

## 120

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the terminal.

```js
assert.fail();
```

## 121

### --description--

**Summary**

You made it! That was a sizable chapter: you learned about variables, scalar and compound data types, functions, comments, if expressions, and loops! To practice with the concepts discussed in this chapter, try building programs to do the following:

- Convert temperatures between Fahrenheit and Celsius.
- Generate the nth Fibonacci number.
- Print the lyrics to the Christmas carol "The Twelve Days of Christmas," taking advantage of the repetition in the song.

When you are ready to move on, you will learn about a concept in Rust that does not commonly exist in other programming languages: _ownership_.

### --tests--

🦀 🚀

```js
assert.fail('Chapter 3 complete!');
```

## --fcc-end--
