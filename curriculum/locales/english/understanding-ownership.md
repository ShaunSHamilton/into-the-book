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

Move the print of `t` expression to be after the inner block expression.

### --tests--

`println!("{t}");` should be moved to outside the inner block expression.

```js
assert.fail('Tests not implemented');
```

## 16

### --description--

Build the program.

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
    {
        println!("{s}");
        let t = "world";
    }
    println!("{t}");
}
```

## 17

### --description--

The program fails to compile, because the print expression tries to access the variable `t` outside of its scope.

Adjust the code such that the program compiles again.

### --tests--

The code should successfully compile.

```js
assert.fail('Tests not implemented');
```

## 18

### --description--

**The `String` Type**

The `String` type is an example of a data type stored on the heap. The `String` type is different to the string literals already used, in that string literals are convenient when a known, immutable value is needed. However, the `String` type manages data allocated on the heap, and, as such, is able to store an amount of text unknown at compile time.

Within the `main` function, create a `String` from a string literal using the `from` function:

```rust
let s = String::from("hello");
```

The double colon (`::`) operator allows the `from` function to be <dfn>namespaced</dfn> under the `String` type.

### --tests--

The `main` function should contain the above code.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {

}
```

## 19

### --description--

This kind of _string_ can be mutated. First, the variable needs to be declared as mutable.

Do so.

### --tests--

The `s` variable should be declared as `mut`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
  let s = String::from("hello");
}
```

## 20

### --description--

The `push_str` method appends a string literal to the `String`.

```rust
my_string.push_str("a string literal");
```

Append the string literal `" world"` to `s`.

### --tests--

`s.push_str(" world");` should be added to the `main` function.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
  let mut s = String::from("hello");

}
```

## 21

### --description--

Print the `s` variable to the console.

### --tests--

`println!("{s}");` should be added to the `main` function.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
  let mut s = String::from("hello");
  s.push_str(" world");

}
```

## 22

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
  let mut s = String::from("hello");
  s.push_str(" world");
  println!("{s}");
}
```

## 23

### --description--

**Memory and Allocation**

The `String` type is allocated on the heap, and as such, is able to store an amount of text unknown at compile time. The `String` type is also able to grow and shrink as needed.

In order to correctly handle memory allocation and deallocation, Rust has a special function called `drop` that is called when a variable goes out of scope. The `drop` function is called automatically at the closing curly bracket.

```rust
{
    let my_variable = 25;
} // my_variable goes out of scope and `drop` is called
```

```rust
{
    let my_variable = 25;
    drop(my_variable); // `drop` is manually called
}
```

Manually call the `drop` function on `s`, at the end of the `main` function.

### --tests--

`s` should be passed to the `drop` function.

```js
assert.fail('Tests not implemented');
```

`drop` should be called at the end of the `main` function.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
  let mut s = String::from("hello");
  s.push_str(" world");
  println!("{s}");

}
```

## 24

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
  let mut s = String::from("hello");
  s.push_str(" world");
  println!("{s}");
  drop(s);
}
```

## 25

### --description--

Move the `drop` call to immediately before the print expression.

### --tests--

`s` should be passed to the `drop` function.

```js
assert.fail('Tests not implemented');
```

`drop` should be called immediately before the print expression.

```js
assert.fail('Tests not implemented');
```

## 26

### --description--

Build the program.

### --tests--

`cargo build` should be run in the `understanding-ownership/ownership/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
  let mut s = String::from("hello");
  s.push_str(" world");
  drop(s);
  println!("{s}");
}
```

## 27

### --description--

Make the code compile, by moving the `drop` call.

### --tests--

The `drop` call should be moved to the end of the `main` function.

```js
assert.fail('Tests not implemented');
```

## 27

### --description--

The error `borrow of moved value: \`s\``is a result of the`drop`function being called on`s` before the print expression.

This hints at how the `drop` function works: it takes ownership of (<dfn>moves</dfn>) the variable, and, thus, causes the variable to be deallocated at the end of the `drop` function.

Create a new function named `take_ownership` that takes a `String` as a parameter and returns nothing.

### --tests--

The `take_ownership` function should be defined.

```js
assert.fail('Tests not implemented');
```

The `take_ownership` function should take a `String` as a parameter.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
  let mut s = String::from("hello");
  s.push_str(" world");
  println!("{s}");
  drop(s);
}


```

## 28

### --description--

Replace the `drop` call with a call to the `take_ownership` function.

### --tests--

`s` should be passed to the `take_ownership` function.

```js
assert.fail('Tests not implemented');
```

The `take_ownership` function should be called.

```js
assert.fail('Tests not implemented');
```

The `drop` function should not be called.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
  let mut s = String::from("hello");
  s.push_str(" world");
  println!("{s}");
  drop(s);
}

fn take_ownership(_some_string: String) {}
```

## 29

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
  let mut s = String::from("hello");
  s.push_str(" world");
  println!("{s}");
  take_ownership(s);
}

fn take_ownership(_some_string: String) {}
```

## 30

### --description--

The program should have compiled and successfully run.

Now, move the `take_ownership` call to immediately before the print expression.

### --tests--

`s` should be passed to the `take_ownership` function.

```js
assert.fail('Tests not implemented');
```

The `take_ownership` function should be called immediately before the print expression.

```js
assert.fail('Tests not implemented');
```

## 31

### --description--

Build the program.

### --tests--

`cargo build` should be run in the `understanding-ownership/ownership/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
  let mut s = String::from("hello");
  s.push_str(" world");
  take_ownership(s);
  println!("{s}");
}

fn take_ownership(_some_string: String) {}
```

## 32

### --description--

Notice the error is the same as before: `borrow of moved value: \`s\``.

It may seem like the `take_ownership` function does nothing. However, without using the variable passed to it, it still takes ownership of the variable, and, thus, deallocates it at the end of the `take_ownership` closing curly brace.

```rust
fn take_ownership(_some_string: String) {
} // `_some_string` goes out of scope and `drop` is called. The memory is freed.
```

Make the program compile by moving the `take_ownership` call.

### --tests--

The `take_ownership` call should be moved to the end of the `main` function.

```js
assert.fail('Tests not implemented');
```

## 33

### --description--

**Ways Variables and Data Interact: Move**

### --tests--

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {

}
```

## --fcc-end--
