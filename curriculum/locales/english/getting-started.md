# Getting Started

Install Rust, write a "Hello, world!" program, and use Cargo.

## 0

### --description--

Welcome! The first step as a Rustacean is to install Rust.

This is commonly done by installing `rustup`, a command line tool for managing Rust versions and associated tools.

Open a new terminal, and run the following command:

```bash
$ curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh -s -- -y
```

### --tests--

Run the above command in a new terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(
  lastCommand?.trim(),
  "curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh -s -- -y"
);
```

## 1

### --description--

Confirm you have successfully installed Rust by running the following command:

```bash
rustc --version
```

### --tests--

Run `rustc --version` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'rustc --version');
```

## 2

### --description--

`rustc` is the Rust compiler. It is used to compile Rust code into machine code.

Run the following command to see all the available commands:

```bash
rustc --help
```

### --tests--

Run `rustc --help` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'rustc --help');
```

## 3

### --description--

A new version of Rust is released every six weeks. To update Rust, run the following command:

```bash
rustup update
```

### --tests--

Run `rustup update` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'rustup update');
```

## 4

### --description--

Now that Rust is installed, write your first Rust program 🚀

Change into the `getting-started` directory by running the following command:

```bash
cd getting-started
```

### --tests--

You should be in the `getting-started/` directory.

```js
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'getting-started');
```

## 5

### --description--

Create a new file called `hello.rs`.

### --tests--

The `getting-started/hello.rs` file should exist.

```js
const pathExists = await __helpers.fileExists(
  join(project.dashedName, 'hello.rs')
);
assert.isTrue(pathExists);
```

## 6

### --description--

Add the following code to the `hello.rs` file:

```rust
fn main() {
  println!("Hello, world!");
}
```

### --tests--

The `getting-started/hello.rs` file should contain the above code:

```js
const fileContents = await __helpers.getFile(project.dashedName, 'hello.rs');
assert.include(fileContents, 'fn main() {');
assert.include(fileContents, 'println!("Hello, world!");');
assert.include(fileContents, '}');
```

## 7

### --description--

Compile the `hello.rs` file by running the following command:

```bash
rustc hello.rs
```

### --tests--

Run `rustc hello.rs` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'rustc hello.rs');
```

## 8

### --description--

Run the compiled `hello` file by running the following command:

```bash
./hello
```

You should see `Hello, world!` printed to the terminal.

### --tests--

Run `./hello` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), './hello');
```

## 9

### --description--

Along with `rustc`, `rustup` also installs the `cargo` package. Cargo is Rust's build system and package manager. Most _Rustaceans_ use Cargo to manage their Rust projects.

Confirm you have successfully installed Cargo by running the following command:

```bash
cargo --version
```

### --tests--

Run `cargo --version` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'cargo --version');
```

## 10

### --description--

Remove the `hello` and `hello.rs` files from the `getting-started` directory.

### --tests--

The `getting-started/hello` file should not exist.

```js
const pathExists = await __helpers.fileExists(
  join(project.dashedName, 'hello')
);
assert.isFalse(pathExists);
```

The `getting-started/hello.rs` file should not exist.

```js
const pathExists = await __helpers.fileExists(
  join(project.dashedName, 'hello.rs')
);
assert.isFalse(pathExists);
```

## 11

### --description--

Use Cargo to create a new project called `hello_cargo` by running the following command:

```bash
cargo new hello_cargo
```

### --tests--

Run `cargo new hello_cargo` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'cargo new hello_cargo');
```

## 12

### --description--

Cargo has created a new directory and project called `hello_cargo`.

Change into the `hello_cargo` directory.

### --tests--

You should be in the `getting-started/hello_cargo/` directory.

```js
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'getting-started/hello_cargo');
```

## 13

### --description--

Use the following command to list the contents of the `hello_cargo` directory:

```bash
ls
```

### --tests--

Run `ls` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'ls');
```

## 14

### --description--

Cargo has created a `Cargo.toml` and a `src/main.rs` file. Also, Cargo initialised a Git repository.

Run the following command to run the `hello_cargo` project:

```bash
cargo run
```

### --tests--

Run `cargo run` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'cargo run');
```

## 15

### --description--

Cargo has compiled the `hello_cargo` project and run it. You should see `Hello, world!` printed to the terminal.

Open the `Cargo.toml` file. The first line, `[package]`, is a section heading that indicates that the following statements are configuring a package.

Add the following line directly below the `[package]` heading:

```toml
author = "<YOUR_NAME>"
```

### --tests--

Add `author = "<YOUR_NAME>"` to the `Cargo.toml` file.

```js
const fileContents = await __helpers.getFile(
  project.dashedName,
  'hello_cargo/Cargo.toml'
);
assert.notInclude(
  fileContents,
  'author = "<YOUR_NAME>"',
  'Do not literally add `author = "<YOUR_NAME>"` to the `Cargo.toml` file. Replace `<YOUR_NAME>` with your name.'
);
assert.match(fileContents, /author\s*=\s*"[^"]+"/);
```

## 16

### --description--

Re-run the `hello_cargo` project by running the following command:

```bash
cargo run
```

### --tests--

Run `cargo run` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'cargo run');
```

## 17

### --description--

There is a bit more output in the terminal than just the expected `Hello, world!`. The output comes from Cargo building the project.

Instead of building and executing the project at the same time, use the following command to just build the project:

```bash
cargo build
```

### --tests--

Run `cargo build` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'cargo build');
```

## 18

### --description--

The `cargo build` command creates an executable file in `target/debug/hello_cargo`.

You can manually run the executable file by running the following command:

```bash
./target/debug/hello_cargo
```

### --tests--

Run `./target/debug/hello_cargo` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), './target/debug/hello_cargo');
```

## 19

### --description--

Cargo has also created a `Cargo.lock` file. This file keeps track of the exact versions of dependencies in the project. This project doesn't have dependencies, so the file is a bit sparse. You won't ever need to change this file manually; Cargo manages its contents for you.

Build and execute the `hello_cargo` project with a single command.

### --tests--

Run `cargo run` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'cargo run');
```

## 20

### --description--

Cargo also provides a command to quickly check the code to make sure it compiles, but doesn't produce an executable.

Run the following command to check the code:

```bash
cargo check
```

### --tests--

Run `cargo check` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'cargo check');
```

## 21

### --description--

Recall, Cargo builds the project in a `target` directory. Currently, the executable is in the `debug` subdirectory. You can also build the project in a `release` configuration.

A _'release'_ build compiles with optimizations that make the Rust code run faster, but turning them on lengthens the time it takes for the program to compile. This is why there are two different profiles: one for development, when you want to rebuild quickly and often, and another for building the final program you'll give to a user that won't be rebuilt repeatedly and that will run as fast as possible.

Build a release version of the `hello_cargo` project by running the following command:

```bash
cargo build --release
```

### --tests--

Run `cargo build --release` in the terminal.

```js
const lastCommand = await __helpers.getLastCommand();
assert.equal(lastCommand?.trim(), 'cargo build --release');
```

## 22

### --description--

**Summary**

You're already off to a great start on your Rust journey! In this chapter, you've learned how to:

- Install the latest stable version of Rust using rustup
- Update to a newer Rust version
- Open locally installed documentation
- Write and run a "Hello, world!" program using rustc directly
- Create and run a new project using the conventions of Cargo

This is a great time to build a more substantial program to get used to reading and writing Rust code. So, in Chapter 2, we'll build a guessing game program. If you would rather start by learning how common programming concepts work in Rust, see Chapter 3 and then return to Chapter 2.

### --tests--

🦀 🚀

```js
assert.fail('Chapter 1 complete!');
```

## --fcc-end--
