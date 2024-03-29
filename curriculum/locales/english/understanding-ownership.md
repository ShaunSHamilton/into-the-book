# Understanding Ownership

Learn about ownership as well as several related features: borrowing, slices, and how Rust lays data out in memory.

## 0

### --description--

<dfn title="a set of rules governing how a Rust program manages memory">Ownership</dfn> is Rust's most unique feature. It enables Rust to make memory safety guarantees without needing a <dfn>garbage collector</dfn>.

**Ownership Rules**

- Each value has an owner
- There can only be one owner at a time
- When the owner goes out of scope, the value will be dropped

To begin, open a new terminal, and change into the `understanding-ownership/` directory:

### --tests--

The active terminal should be in the `understanding-ownership/` directory.

```js
assert.fail('Tests not implemented');
```

## 1

### --description--

Create a new project named `ownership`.

### --tests--

`cargo new ownership` should be run in the `understanding-ownership/` directory.

```js
assert.fail('Tests not implemented');
```

## 2

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

## 3

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

## 4

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

## 5

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

## 6

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

## 7

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

## 8

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

## 9

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

## 10

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

## 11

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

## 12

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

## 13

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

## 14

### --description--

Even though `println!("{s}");` is within the inner block expression - a separate block to where `s` is declared - the `println!` is still able to access the value of `s`.

Move the print of `t` expression to be after the inner block expression.

### --tests--

`println!("{t}");` should be moved to outside the inner block expression.

```js
assert.fail('Tests not implemented');
```

## 15

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

## 16

### --description--

The program fails to compile, because the print expression tries to access the variable `t` outside of its scope.

Adjust the code such that the program compiles again.

### --tests--

The code should successfully compile.

```js
assert.fail('Tests not implemented');
```

## 17

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

## 18

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

## 19

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

## 20

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

## 21

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

## 22

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

## 23

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

## 24

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

## 25

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

## 26

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

## 34

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

## 35

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

## 36

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

## 37

### --description--

Integers are simple values with a known, fixed size. The values of `x` and `y` are pushed onto the stack.

Now, bind the value `String::from("hello")` to a variable named `s1`.

### --tests--

The `main` function should contain `let s1 = String::from("hello");`.

```js
assert.fail('Tests not implemented');
```

## 38

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

## 39

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

## 40

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

## 41

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

## 42

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

## 43

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

## 44

### --description--

Instead of copying `s1` to `s2`, use the reference operator `&` to create a reference to `s1` and bind it to `s2`.

### --tests--

The `main` function should contain `let s2 = &s1;`.

```js
assert.fail('Tests not implemented');
```

## 45

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

## 46

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

## 47

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

## 48

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

## 49

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

## 50

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

## 51

### --description--

After the call to `takes_ownership`, `s` is no longer valid, so the program does not compile.

Comment out the line that prints `s`.

### --tests--

The `main` function should contain `// println!("s = {s}");`.

```js
assert.fail('Tests not implemented');
```

## 52

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

## 53

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

## 54

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

## 55

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

## 56

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

## 57

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

## 58

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

## 59

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

## 60

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

## 61

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

## 62

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

## 63

### --description--

Notice the compiler error mentioning `s2` has been moved.

Fix the error by changing the `println!` expression to use `s3` instead of `s2`.

### --tests--

`println!("s2 = {s2}");` should be changed to `println!("s3 = {s3}");` in the `main` function.

```js
assert.fail('Tests not implemented');
```

## 64

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

## 65

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

## 66

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

## 67

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

## 68

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

## 69

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

## 70

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

## 71

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

## 72

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

## 73

### --description--

Run the program to see the output.

**Note:** The opposite of referencing by using `&` is <dfn title="">dereferencing</dfn>, which is accomplished with the dereference operator, `*`.

### --tests--

`cargo run` should be run in the `understanding-ownership/references/` directory.

```js
assert.fail('Tests not implemented');
```

## 74

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

## 75

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

## 76

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

## 77

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

## 78

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

## 79

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

## 80

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

## 81

### --description--

Remember, multiple immutable references are allowed, but only one mutable reference is allowed. Fix the code by changing `r3` to be an immutable reference.

### --tests--

The `main` function should declare `r3` as an immutable reference.

```js
assert.fail('Tests not implemented');
```

## 82

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

## 83

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

## 84

### --description--

Within `dangle`, define a variable named `s` that is a new `String` with the value `"hello"`.

### --tests--

The `dangle` function should declare `let s = String::from("hello");`.

```js
assert.fail('Tests not implemented');
```

## 85

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

## 86

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

## 87

### --description--

The error mentions a concept in Rust called <dfn title="">lifetimes</dfn>. These will be covered in detail later, but for now, it is important to know that the Rust compiler is trying to prevent dangling references.

The problem is that `s` is created inside `dangle`, and when `dangle` finishes, `s` will be deallocated. Returning a reference to `s` would be a dangling reference, because the value it refers to would go out of scope.

Fix this by returning the `String` directly rather than a reference to the `String`.

### --tests--

The `dangle` function should return `s` instead of `&s`.

```js
assert.fail('Tests not implemented');
```

## 88

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
    s
}
```

## 89

### --description--

**The Slice Type**

A <dfn title="A kind of reference - it is not owned">slice</dfn> allows you to reference a contiguous sequence of elements in a collection rather than the whole collection.

Within `understanding-ownership/`, create a new project called `slices`.

### --tests--

`cargo new slices` should be run in the `understanding-ownership/` directory.

```js
assert.fail('Tests not implemented');
```

## 90

### --description--

Try this small programming challenge by yourself:

Write a function that takes a string of words separated by spaces and returns the first word it finds in that string. If the function does not find a space in the string - the whole string must be one word - the entire string should be returned.

Once you are done, type `done` to continue.

### --tests--

Type `done` in the terminal to continue.

```js
const lastCommand = await __helpers.getLastCommand();
assert.include(lastCommand, 'done');
```

### --seed--

#### --cmd--

```bash
cargo new slices
```

## 91

### --description--

The boilerplate provides a basic implementation of the function, but it returns just the index of the first space. This could work, but is not exactly what is desired.

Within the `main` function, declare a mutable variable named `s`, and assign a string consisting of at least two words to it.

### --tests--

The `main` function should declare `let mut s = String::from("hello world");`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {

}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 92

### --description--

Within the `main` function, call the `first_word` function with the `s` variable as an argument, assigning the return value to a variable named `word`.

### --tests--

The `main` function should have `let word = first_word(&s);`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");

}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 93

### --description--

Within the `main` function, call the `clear` method on the `s` variable to clear the string.

### --tests--

The `main` function should have `s.clear();`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);

}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 94

### --description--

Check the program to ensure there are no errors.

### --tests--

`cargo check` should be run in the `understanding-ownership/slices/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);
    s.clear();
}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 95

### --description--

Now the problem might be clearer: the `word` variable indicates the index of the first word in the string, but the `s` variable is empty. So, using it to get the first word will not work.

Within the `main` function, print the character of `s` at the `word` index.

### --tests--

The `main` function should have `println!("The first word is: {}", s[word]);`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);
    s.clear();

}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 96

### --description--

Run the program to see the error.

### --tests--

`cargo run` should be run in the `understanding-ownership/slices/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);
    s.clear();
    println!("The first word is: {}", s[word]);
}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 97

### --description--

**String Slices**

A _string slice_ is a reference to part of a `String`, and it looks like this:

```rust
let string = String::from("the quick brown fox");
let quick = &string[4..9];
```

The type of `string` is `String`, which is a growable, mutable, owned, UTF-8 encoded string type. The type of `quick` is `&str`, which is a string slice.

Within the `main` function, declare a `hello` variable with the value of the first 5 characters of the `s` variable, using a string slice.

### --tests--

The `main` function should have `let hello = &s[0..5];`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");

}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 98

### --description--

Within the `main` function, declare a `world` variable with the value of the last 5 characters of the `s` variable, using a string slice.

### --tests--

The `main` function should have `let world = &s[6..11];`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let hello = &s[0..5];

}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 99

### --description--

The `..` range syntax can leave out the start index - defaulting to `0`.

Drop the `0` from the range of the `hello` variable value.

### --tests--

The `main` function should have `let hello = &s[..5];`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let hello = &s[0..5];
    let world = &s[6..11];
}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 100

### --description--

The `..` range syntax can leave out the end index - defaulting to the length of the string.

Drop the `11` from the range of the `world` variable value.

### --tests--

The `main` function should have `let world = &s[6..];`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let hello = &s[..5];
    let world = &s[6..11];
}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 101

### --description--

Rewrite the `first_word` function to return a string slice (`&str`) instead of a `usize` value.

### --tests--

The `first_word` function should have the signature `fn first_word(s: &String) -> &str`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let hello = &s[..5];
    let world = &s[6..];
}

fn first_word(s: &String) -> usize {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 102

### --description--

Instead of returning the index of the space, return the string slice of the first word.

### --tests--

The `first_word` function should have `return &s[0..i]`.

```js
assert.fail('Tests not implemented');
```

The `first_word` function should end with `&s[..]`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let hello = &s[..5];
    let world = &s[6..];
}

fn first_word(s: &String) -> &str {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return i;
        }
    }

    // If there is no space, the whole string is one word
    s.len()
}
```

## 103

### --description--

The `first_word` function is now returning a string slice that references a `String` value.

Within the `main` function, declare a variable `word` assigning the value of calling `first_word` with the `s` variable as an argument.

### --tests--

The `main` function should have `let word = first_word(&s);`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");

}

fn first_word(s: &String) -> &str {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return &s[0..i];
        }
    }

    // If there is no space, the whole string is one word
    &s[..]
}
```

## 104

### --description--

Within the `main` function, print the value of `word`.

### --tests--

The `main` function should have `println!("the first word is: {}", word);`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);

}

fn first_word(s: &String) -> &str {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return &s[0..i];
        }
    }

    // If there is no space, the whole string is one word
    &s[..]
}
```

## 105

### --description--

Run the program to see the output.

### --tests--

`cargo run` should be run in the `understanding-ownership/slices/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);

    println!("the first word is: {}", word);
}

fn first_word(s: &String) -> &str {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return &s[0..i];
        }
    }

    // If there is no space, the whole string is one word
    &s[..]
}
```

## 106

### --description--

Once again, before the `println!` statement, clear the `s` variable.

### --tests--

The `main` function should have `s.clear();`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);

    println!("the first word is: {}", word);
}

fn first_word(s: &String) -> &str {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return &s[0..i];
        }
    }

    // If there is no space, the whole string is one word
    &s[..]
}
```

## 107

### --description--

Check the program to see the error.

### --tests--

`cargo check` should be run in the `understanding-ownership/slices/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);

    s.clear();

    println!("the first word is: {}", word);
}

fn first_word(s: &String) -> &str {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return &s[0..i];
        }
    }

    // If there is no space, the whole string is one word
    &s[..]
}
```

## 108

### --description--

The error is because the `s` variable is cleared, and the `word` variable is referencing the `s` variable.

If there is an immutable reference to something, it cannot be taken as a mutable reference. The `println!` after the call to `clear` uses the reference in` word`, so the immutable reference must still be active at that point. Rust disallows the mutable reference in `clear` and the immutable reference in `word` from existing at the same time, and compilation fails.

Fix the error, by removing the call to `clear`.

### --tests--

The `main` function should not have `s.clear();`.

```js
assert.fail('Tests not implemented');
```

## 109

### --description--

Instead of declaring `s` to be a `String`, declare it to be a `&str` type:

```rust
let my_str = "example string slice";
```

`my_str` is a _string literal_. **Note:** String literals are immutable.

### --tests--

The `main` function should have `let s = "hello world";`.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let mut s = String::from("hello world");
    let word = first_word(&s);

    println!("the first word is: {}", word);
}

fn first_word(s: &String) -> &str {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return &s[0..i];
        }
    }

    // If there is no space, the whole string is one word
    &s[..]
}
```

## 110

### --description--

Check the program to see the error.

### --tests--

`cargo check` should be run in the `understanding-ownership/slices/` directory.

```js
assert.fail('Tests not implemented');
```

### --seed--

#### --"slices/src/main.rs"--

```rust
fn main() {
    let s = "hello world";
    let word = first_word(&s);

    println!("the first word is: {}", word);
}

fn first_word(s: &String) -> &str {
    // Convert the string to an array of bytes
    let bytes = s.as_bytes();

    // Iterate over the array of bytes
    for (i, &item) in bytes.iter().enumerate() {
        // If the byte is a space, return the index
        if item == b' ' {
            return &s[0..i];
        }
    }

    // If there is no space, the whole string is one word
    &s[..]
}
```

## 111

### --description--

The error is because the `first_word` function is expecting a `&String` type, but we are passing in a reference to an `&str` type.

Change the `first_word` function to accept a `&str` type, and the call to pass by value.

### --tests--

The `main` function should have `let word = first_word(s);`.

```js
assert.fail('Tests not implemented');
```

The `first_word` function should have a signature of `fn first_word(s: &str) -> &str`.

```js
assert.fail('Tests not implemented');
```

## 112

### --description--

The `first_word` function now accepts a `&str` type, and the call to `first_word` passes by value.

Run the program.

### --tests--

`cargo run` should be run in the `understanding-ownership/slices/` directory.

```js
assert.fail('Tests not implemented');
```

## 113

### --description--

**Summary**

The concepts of ownership, borrowing, and slices ensure memory safety in Rust programs at compile time. The Rust language gives you control over your memory usage in the same way as other systems programming languages, but having the owner of data automatically clean up that data when the owner goes out of scope means you do not have to write and debug extra code to get this control.

Ownership affects how lots of other parts of Rust work, so we will talk about these concepts further throughout the rest of the book. Let us move on to Chapter 5 and look at grouping pieces of data together in a `struct`.

### --tests--

🦀 🚀

```js
assert.fail('Chapter 4 complete!');
```

## --fcc-end--
