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

Add the `mut` keyword to the `x` variable declaration in the `src/main.rs` file.

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

## --fcc-end--
