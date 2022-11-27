# Rust - Understanding Ownership

## 1

### --description--

<dfn title="a set of rules governing how a Rust program manages memory">Ownership</dfn> is Rust's most unique feature. It enables Rust to make memory safety guarantees without needing a <dfn>garbage collector</dfn>.

**Ownership Rules**

- Each value has an owner
- There can only be one owner at a time
- When the owner goes out of scope, the value will be dropped

To begin, open a new terminal, and change into the `undertanding-ownership/` directory:

### --tests--

The active terminal should be in the `understanding-ownership/` directory.

```js
assert.fail();
```

## 2

### --description--

Create a new project named `ownership`.

### --tests--

`cargo new ownership` should be run in the `understanding-ownership/` directory.

```js
assert.fail('Tests not implemented');
```

## 3

### --description--

Within the `main` function, create a variable named `s` with the value `"hello"`.

### --tests--

The `main` function should contain `let s = "hello";`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --cmd--

```bash
cargo new ownership
```

## 4

### --description--

Alter the `println!` macro to **only** print the value of `s`.

### --tests--

The `main` function should contain `println!("{s}");`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = "hello";
    println!("Hello, world!");
}
```

## 5

### --description--

Run the program.

### --tests--

`cargo run` should be run in the `understanding-ownership/ownership/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = "hello";
    println!("{s}");
}
```

## 6

### --description--

The variable `s` refers to a string literal, where the value of the string is hardcoded into the text of the program. It is valid from the point at which it is declared until the end of the current <dfn title="range within a program for which an item is valid">scope</dfn>.

Within the `main` function, create a new scope (block expression), and declare a variable `t` with the value of `"world"` in that scope:

```rust
{
    let t = "world";
}
```

### --tests--

The `main` function should contain `let t = "world";`.

```js
assert.fail('Tests not implemented');
```

`t` should be declared within a new scope.

```js
assert.fail('Tests not implemented');
```

## 7

### --description--

Immediately after the `println!` of `s`, print the value of `t`.

### --tests--

The `main` function should contain `println!("{t}");`.

```js
assert.fail('Tests not implemented');
```

`println!("{t}");` should be immediately after the `println!("{s}");`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = "hello";
    println!("{s}");
    {
        let t = "world";
    }
}
```

## 8

### --description--

Build the program, and notice the compiler error.

### --tests--

`cargo build` should be run in the `understanding-ownership/ownership/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = "hello";
    println!("{s}");
    println!("{t}");
    {
        let t = "world";
    }
}
```

## 9

### --description--

The compiler error is quite explicit, stating the value `t` cannot be found in the `println!` scope.

Move the `println!` of `t` within the inner block expression, but before the `t` variable declaration.

### --tests--

The `main` function should contain `println!("{t}");`.

```js
assert.fail('Tests not implemented');
```

`println!("{t}");` should be within the inner block expression.

```js
assert.fail('Tests not implemented');
```

`t` should be declared after the `println!("{t}");` call.

```js
assert.fail('Tests not implemented');
```

## 10

### --description--

Build the program, and notice the compiler error.

### --tests--

`cargo build` should be run in the `understanding-ownership/ownership/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = "hello";
    println!("{s}");
    {
        println!("{t}");
        let t = "world";
    }
}
```

## 11

### --description--

The error is almost identical to the previous error. Although the `println!` of `t` is within the inner block expression, the `t` variable cannot be used before its declaration.

Move the `println!` of `t` after the `t` variable declaration.

### --tests--

The `main` function should contain `println!("{t}");`.

```js
assert.fail('Tests not implemented');
```

`println!("{t}");` should be after the `let t = "world";` call.

```js
assert.fail('Tests not implemented');
```

## 12

### --description--

Run the program.

### --tests--

`cargo run` should be run in the `understanding-ownership/ownership/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = "hello";
    println!("{s}");
    {
        let t = "world";
        println!("{t}");
    }
}
```

## 13

### --description--

Notice the program now successfully compiles and runs.

Move the print of `s` within the inner block expression before the `t` variable declaration.

### --tests--

The `main` function should contain `println!("{s}");`.

```js
assert.fail('Tests not implemented');
```

`println!("{s}");` should be within the inner block expression.

```js
assert.fail('Tests not implemented');
```

`t` should be declared after the `println!("{s}");` call.

```js
assert.fail('Tests not implemented');
```

## 14

### --description--

Run the program.

### --tests--

`cargo run` should be run in the `understanding-ownership/ownership/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = "hello";
    {
        println!("{s}");
        let t = "world";
        println!("{t}");
    }
}
```

## 15

### --description--

Even though `println!("{s}");` is within the inner block expression - a separate block to where `s` is declared - the `println!` is still able to access the value of `s`.

## --fcc-end--
