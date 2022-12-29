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

## 28

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

## 29

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

## 30

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

## 31

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

## 32

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

## 33

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

## 34

### --description--

**Ways Variables and Data Interact: Move**

Within the `main` function, bind the value `5` to a variable named `x`.

### --tests--

The `main` function should contain `let x = 5;`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {

}
```

## 35

### --description--

Within the `main` function, bind the value `x` to a variable named `y`.

### --tests--

The `main` function should contain `let y = x;`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let x = 5;

}
```

## 36

### --description--

Use a single `println!` expression to print the values of `x` and `y` to the console.

### --tests--

The `main` function should contain `println!("x = {x}, y = {y}");`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let x = 5;
    let y = x;

}
```

## 37

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
    let x = 5;
    let y = x;
    println!("x = {x}, y = {y}");

}
```

## 38

### --description--

Integers are simple values with a known, fixed size. The values of `x` and `y` are pushed onto the stack.

Now, bind the value `String::from("hello")` to a variable named `s1`.

### --tests--

The `main` function should contain `let s1 = String::from("hello");`.

```js
assert.fail('Tests not implemented');
```

## 39

### --description--

Bind the value `s1` to a variable named `s2`.

### --tests--

The `main` function should contain `let s2 = s1;`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let x = 5;
    let y = x;
    println!("x = {x}, y = {y}");

    let s1 = String::from("hello");

}
```

## 40

### --description--

Use a single `println!` expression to print the values of `s1` and `s2` to the console.

### --tests--

The `main` function should contain `println!("s1 = {s1}, s2 = {s2}");`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let x = 5;
    let y = x;
    println!("x = {x}, y = {y}");

    let s1 = String::from("hello");
    let s2 = s1;

}
```

## 41

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
    let x = 5;
    let y = x;
    println!("x = {x}, y = {y}");

    let s1 = String::from("hello");
    let s2 = s1;
    println!("s1 = {s1}, s2 = {s2}");
}
```

## 42

### --description--

It seems like the code should compile, because the use of `s1` and `s2` looks very similar to the use of `x` and `y`. However, the `borrow of moved value: \`s1\`` error is back.

A `String` is made up of three parts:

- pointer
  - location of the memory on the heap holding the contents
- length
  - how much memory, in bytes, received from the allocator
- capacity
  - size of the memory, in bytes, that was allocated

Assigning `s1` to `s2`, the `String` data is copied, meaning the pointer, length, and capacity on the stack are copied. However, the data on the heap that the pointer refers to is not copied. The data representation in meory looks like:

![The Rust Book - Figure 4-2](https://doc.rust-lang.org/book/img/trpl04-02.svg)

Build the code again to re-read the error.

### --tests--

`cargo build` should be run in the `understanding-ownership/ownership/` directory.

```js
assert.fail('Tests not implemented');
```

## 43

### --description--

**Ways Variables and Data Interact: Clone**

Rust considers `s1` to no longer be valid, in order to prevent a <dfn title="two data pointers pointing to the same location, going out of scope, and trying to free the same memory twice">double free</dfn> error.

Instead of just performing a <dfn>shallow copy</dfn>, Rust invalidates the first variable, which is known as a <dfn>move</dfn>. `s1` is moved into `s2`. Rust never automatically creates <dfn>deep copies</dfn> of your data. Therefore, any automatic copying can be assumed to be inexpensive in terms of runtime performance.

To get a deep copy of the `String` data, call the `clone` method.

```rust
let s1 = String::from("hello");
let s2 = s1.clone();
```

### --tests--

The `main` function should contain `let s2 = s1.clone();`.

```js
assert.fail('Tests not implemented');
```

## 44

### --description--

The `clone` method makes a full copy of all the data on the heap for the variable. This may be expensive, so it is not always the best solution.

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
    let x = 5;
    let y = x;
    println!("x = {x}, y = {y}");

    let s1 = String::from("hello");
    let s2 = s1.clone();
    println!("s1 = {s1}, s2 = {s2}");
}
```

## 45

### --description--

Instead of copying `s1` to `s2`, use the reference operator `&` to create a reference to `s1` and bind it to `s2`.

### --tests--

The `main` function should contain `let s2 = &s1;`.

```js
assert.fail('Tests not implemented');
```

## 46

### --description--

Making `s2` a reference to `s1` allows Rust to use the same memory location for both variables, and prevents a double free error, by invalidating the variables in the correct order, when they go out of scope: `s2` first, then `s1`.

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
    let x = 5;
    let y = x;
    println!("x = {x}, y = {y}");

    let s1 = String::from("hello");
    let s2 = &s1;
    println!("s1 = {s1}, s2 = {s2}");
}
```

## 47

### --description--

**Ownership and Functions**

Going back to functions where the parameters are passed by value, it is clearer when ownership is taken, and when a type is copied.

Define a function `takes_ownership` that takes a `String` as a parameter and prints the value.

### --tests--

A function named `takes_ownership` should be defined.

```js
assert.fail('Tests not implemented');
```

`takes_ownership` should take a `String` as a parameter.

```js
assert.fail('Tests not implemented');
```

`takes_ownership` should print the value of the `String` parameter.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = String::from("hello");

    println!("s = {s}");

    let x = 5;

    println!("x = {x}");
}


```

## 48

### --description--

Define a function `makes_copy` that takes an `i32` as a parameter and prints the value.

### --tests--

A function named `makes_copy` should be defined.

```js
assert.fail('Tests not implemented');
```

`makes_copy` should take an `i32` as a parameter.

```js
assert.fail('Tests not implemented');
```

`makes_copy` should print the value of the `i32` parameter.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s = String::from("hello");

    println!("s = {s}");

    let x = 5;

    println!("x = {x}");
}

fn takes_ownership(some_string: String) {
    println!("some_string = {some_string}");
}


```

## 49

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
    let s = String::from("hello");

    println!("s = {s}");

    let x = 5;

    println!("x = {x}");
}

fn takes_ownership(some_string: String) {
    println!("some_string = {some_string}");
}

fn makes_copy(some_integer: i32) {
    println!("some_integer = {some_integer}");
}
```

## 50

### --description--

Immediately after the declaration of `s`, call the `takes_ownership` function with `s` as an argument.

### --tests--

The `main` function should contain `takes_ownership(s);`.

```js
assert.fail('Tests not implemented');
```

`takes_ownership(s)` should be called immediately after the declaration of `s`.

```js
assert.fail('Tests not implemented');
```

## 51

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
    let s = String::from("hello");
    takes_ownership(s);
    println!("s = {s}");

    let x = 5;

    println!("x = {x}");
}

fn takes_ownership(some_string: String) {
    println!("some_string = {some_string}");
}

fn makes_copy(some_integer: i32) {
    println!("some_integer = {some_integer}");
}
```

## 52

### --description--

After the call to `takes_ownership`, `s` is no longer valid, so the program does not compile.

Comment out the line that prints `s`.

### --tests--

The `main` function should contain `// println!("s = {s}");`.

```js
assert.fail('Tests not implemented');
```

## 53

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
    let s = String::from("hello");
    takes_ownership(s);
    // println!("s = {s}");

    let x = 5;

    println!("x = {x}");
}

fn takes_ownership(some_string: String) {
    println!("some_string = {some_string}");
}

fn makes_copy(some_integer: i32) {
    println!("some_integer = {some_integer}");
}
```

## 54

### --description--

Immediately after the declaration of `x`, call the `makes_copy` function with `x` as an argument.

### --tests--

The `main` function should contain `makes_copy(x);`.

```js
assert.fail('Tests not implemented');
```

`makes_copy(x)` should be called immediately after the declaration of `x`.

```js
assert.fail('Tests not implemented');
```

## 55

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
    let s = String::from("hello");
    takes_ownership(s);
    // println!("s = {s}");

    let x = 5;
    makes_copy(x);
    println!("x = {x}");
}

fn takes_ownership(some_string: String) {
    println!("some_string = {some_string}");
}

fn makes_copy(some_integer: i32) {
    println!("some_integer = {some_integer}");
}
```

## 56

### --description--

As the `i32` type implements the `Copy` <dfn>trait</dfn>, it is valid to use `x` after the call to `makes_copy`.

Uncomment the line that prints `s`, and make the program valid by using the `clone` method on the `s` variable.

### --tests--

The `main` function should contain `println!("s = {s}");` uncommented.

```js
assert.fail('Tests not implemented');
```

`s.clone()` should be passed to `takes_ownership`.

```js
assert.fail('Tests not implemented');
```

## 57

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
    let s = String::from("hello");
    takes_ownership(s.clone());
    println!("s = {s}");

    let x = 5;
    makes_copy(x);
    println!("x = {x}");
}

fn takes_ownership(some_string: String) {
    println!("some_string = {some_string}");
}

fn makes_copy(some_integer: i32) {
    println!("some_integer = {some_integer}");
}
```

## 58

### --description--

**Return Values and Scope**

Returning values can also transfer ownership. The ownership of a variable follows the same pattern every time: assigning a value to another variable moves it. When a variable that includes data on the heap goes out of scope, the value will be cleaned up by `drop`, unless ownership of the data has been moved to another variable.

Define a function `gives_ownership` that returns a `String`.

### --tests--

The `main.rs` file should contain a function named `gives_ownership`.

```js
assert.fail('Tests not implemented');
```

The `gives_ownership` function should return a `String`.

```js
assert.fail('Tests not implemented');
```

`String::from("yours")` should be returned from the `gives_ownership` function.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s1 = gives_ownership();
}

```

## 59

### --description--

Print the value of `s1` to the console.

### --tests--

`println!("s1 = {s1}");` should be called in the `main` function.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s1 = gives_ownership();

}

fn gives_ownership() -> String {
    String::from("yours")
}

```

## 60

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
    let s1 = gives_ownership();
    println!("s1 = {s1}");
}

fn gives_ownership() -> String {
    String::from("yours")
}

```

## 61

### --description--

Define a function `takes_and_gives_back` that takes a `String` and returns a `String`. In the body of the function, return the argument.

### --tests--

The `main.rs` file should contain a function named `takes_and_gives_back`.

```js
assert.fail('Tests not implemented');
```

The `takes_and_gives_back` function should take a `String` and return a `String`.

```js
assert.fail('Tests not implemented');
```

The argument should be returned from the `takes_and_gives_back` function.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s1 = gives_ownership();
    println!("s1 = {s1}");

    let s2 = String::from("yours");
    let s3 = takes_and_gives_back(s2);
}

fn gives_ownership() -> String {
    String::from("yours")
}

```

## 62

### --description--

Print the value of `s2` to the console.

### --tests--

`println!("s2 = {s2}");` should be called in the `main` function.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"ownership/src/main.rs"--

```rust
fn main() {
    let s1 = gives_ownership();
    println!("s1 = {s1}");

    let s2 = String::from("yours");
    let s3 = takes_and_gives_back(s2);

}

fn gives_ownership() -> String {
    String::from("yours")
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string
}
```

## 63

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
    let s1 = gives_ownership();
    println!("s1 = {s1}");

    let s2 = String::from("yours");
    let s3 = takes_and_gives_back(s2);
    println!("s2 = {s2}");
}

fn gives_ownership() -> String {
    String::from("yours")
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string
}
```

## 64

### --description--

Notice the compiler error mentioning `s2` has been moved.

Fix the error by changing the `println!` expression to use `s3` instead of `s2`.

### --tests--

`println!("s2 = {s2}");` should be changed to `println!("s3 = {s3}");` in the `main` function.

```js
assert.fail('Tests not implemented');
```

## 65

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
    let s1 = gives_ownership();
    println!("s1 = {s1}");

    let s2 = String::from("yours");
    let s3 = takes_and_gives_back(s2);
    println!("s3 = {s3}");
}

fn gives_ownership() -> String {
    String::from("yours")
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string
}
```

## 66

### --description--

**References and Borrowing**

Following a coding pattern of returning any value passed in as an argument in order to re-use it is quite annoying. Luckily, Rust has a feature for using a value **without** transferring ownership called <dfn>references</dfn>.

A reference is a like a pointer in that it is an address to access data stored elsewhere. However, unlike a pointer, a reference is guaranteed to point to a valid value of a particular type for the life of that reference.

Within `understanding-ownership/`, create a new project called `references`.

### --tests--

`cargo new references` should be run in the `understanding-ownership/` directory.

```js
assert.fail('Tests not implemented');
```

## 67

### --description--

Within `references/src/main.rs`, define a function `calculate_length` that takes a `String` and returns a `usize`.

### --tests--

The `main.rs` file should contain a function named `calculate_length`.

```js
assert.fail('Tests not implemented');
```

The `calculate_length` function should take a `String` and return a `usize`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(s1);
    println!("The length of '{}' is {}.", s1, len);
}

```

## 68

### --description--

Within `calculate_length`, use the `len` method on the `String` type to return the length of the `String` argument.

### --tests--

The `calculate_length` function should return `s.len()`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(s1);
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: String) -> usize {

}
```

## 69

### --description--

Use the `cargo check` command to compile the program, and check for errors.

### --tests--

`cargo check` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(s1);
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: String) -> usize {
    s.len()
}
```

## 70

### --description--

Notice the compiler error mentioning `s1` has been moved.

Instead of moving `s1` into `calculate_length`, provide a <dfn title="A reference is like a pointer in that it is an address to access the data stored at that address. Unlike a pointer, a reference is guarenteed to point to a valid value for the life of the reference.">reference</dfn> to the `String` value:

```rust
let my_string = String::from("hello");
my_function(&my_string); // my_string is passed by reference - not moved
```

### --tests--

The call to `calculate_length` should pass `&s1` instead of `s1`.

```js
assert.fail('Tests not implemented');
```

## 71

### --description--

Check the program again.

### --tests--

`cargo check` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: String) -> usize {
    s.len()
}
```

## 72

### --description--

Notice the compiler error about the mismatched types `String` vs `&String`.

Change the function signature to take a reference to a `String` instead of a `String`:

```rust
fn my_function(s: &String) {
    // ...
}
```

### --tests--

The `calculate_length` function should take a reference to a `String` instead of a `String`.

```js
assert.fail('Tests not implemented');
```

## 73

### --description--

Check the program again.

### --tests--

`cargo check` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

## 74

### --description--

Run the program to see the output.

**Note:** The opposite of referencing by using `&` is <dfn title="">dereferencing</dfn>, which is accomplished with the dereference operator, `*`.

### --tests--

`cargo run` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

## 75

### --description--

Within `references/src/main.rs`, define a function `change` that takes a reference to a `String`.

### --tests--

The `main.rs` file should contain a function named `change`.

```js
assert.fail('Tests not implemented');
```

The `change` function should take a reference to a `String`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let s = String::from("hello");
    change(&s);
    println!("s is {}", s);
}

```

## 76

### --description--

Within `change`, use the `push_str` method to add the string `" world"` to the `some_string` argument.

### --tests--

The `change` function should use `some_string.push_str(", world")`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let s = String::from("hello");
    change(&s);
    println!("s is {}", s);
}

fn change(some_string: &String) {

}
```

## 77

### --description--

Check the program.

### --tests--

`cargo check` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let s = String::from("hello");
    change(&s);
    println!("s is {}", s);
}

fn change(some_string: &String) {
    some_string.push_str(", world");
}
```

## 78

### --description--

Notice the compiler error saying _"cannot borrow `*some_string` as mutable"_.

Just as variables are immutable by default, so are references. To make a reference mutable, use the `mut` keyword:

```rust
let mut my_string = String::from("hello"); // my_string is declared as mutable
my_function(&mut my_string); // my_string is passed by mutable reference

fn my_function(string_arg: &mut String) {} // string_arg is typed to be a mutable reference
```

Change `s` to be mutable, pass it as a mutable reference to `change`, and alter `change` to take a mutable reference to a `String`.

### --tests--

The `main` function should declare `s` as mutable.

```js
assert.fail('Tests not implemented');
```

The `main` function should pass `&mut s` to `change`.

```js
assert.fail('Tests not implemented');
```

The `change` function should take a mutable reference to a `String`.

```js
assert.fail('Tests not implemented');
```

## 79

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello");
    change(&mut s);
    println!("s is {}", s);
}

fn change(some_string: &String) {
    some_string.push_str(", world");
}
```

## 80

### --description--

Mutable references have one big restriction: there may only be one mutable reference to a value.

Check the program to see the error.

### --tests--

`cargo check` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello");
    let r1 = &mut s;
    let r2 = &mut s;
    println!("{}, {}", r1, r2);
}
```

## 81

### --description--

The error says `s` cannot be borrowed as mutable more than once at a time. This restriction allows for mutation but in a very controlled fashion. The benefit of having this restriction is that Rust can prevent <dfn title="When two or more pointers access the same data at the same time, and at least one of the pointers is used to write to the data.">data races</dfn> at compile time.

This also prevents one immutable and one mutable reference to the same data. This is because the immutable reference could be used while the mutable reference is being used, which would cause data to be changed unexpectedly.

Check the program to see the error.

### --tests--

`cargo check` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello");
    let r1 = &s;
    let r2 = &s;
    let r3 = &mut s;
    println!("{}, {}, and {}", r1, r2, r3);
}
```

## 82

### --description--

Remember, multiple immutable references are allowed, but only one mutable reference is allowed. Fix the code by changing `r3` to be an immutable reference.

### --tests--

The `main` function should declare `r3` as an immutable reference.

```js
assert.fail('Tests not implemented');
```

## 83

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello");
    let r1 = &s;
    let r2 = &s;
    let r3 = &s;
    println!("{}, {}, and {}", r1, r2, r3);
}
```

## 84

### --description--

**Dangling References**

In Rust, the compiler guarantees that references will never be <dfn title="">dangling references</dfn>; data will not go out of scope before the reference to the data does.

Define a function named `dangle` that returns a reference to a `String`.

### --tests--

The `dangle` function should return a reference to a `String`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let reference_to_nothing = dangle();
}

```

## 85

### --description--

Within `dangle`, define a variable named `s` that is a new `String` with the value `"hello"`.

### --tests--

The `dangle` function should declare `let s = String::from("hello");`.

```js
assert.fail('Tests not implemented');
```

## 86

### --description--

Return a reference to `s` from `dangle`.

### --tests--

The `dangle` function should return `&s`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let reference_to_nothing = dangle();
}

fn dangle() -> &String {
    let s = String::from("hello");

}
```

## 87

### --description--

Check the program to see the error.

### --tests--

`cargo check` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let reference_to_nothing = dangle();
}

fn dangle() -> &String { // returns a reference to a String
    let s = String::from("hello"); // s is a new String
    &s // a reference to the String, s, is returned
} // s goes out of scope, and is dropped. Its memory goes away.
```

## 88

### --description--

The error mentions a concept in Rust called <dfn title="">lifetimes</dfn>. These will be covered in detail later, but for now, it is important to know that the Rust compiler is trying to prevent dangling references.

The problem is that `s` is created inside `dangle`, and when `dangle` finishes, `s` will be deallocated. Returning a reference to `s` would be a dangling reference, because the value it refers to would go out of scope.

Fix this by returning the `String` directly rather than a reference to the `String`.

### --tests--

The `dangle` function should return `s` instead of `&s`.

```js
assert.fail('Tests not implemented');
```

## 89

### --description--

Check the program to ensure there are no longer errors.

### --tests--

`cargo check` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"references/src/main.rs"--

```rust
fn main() {
    let reference_to_nothing = dangle();
}

fn dangle() -> String {
    let s = String::from("hello");
    &s
}
```

## 90

### --description--

**The Slice Type**

## --fcc-end--
