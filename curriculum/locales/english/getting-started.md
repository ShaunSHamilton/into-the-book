# Rust - Getting Started

## 1

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

## 2

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

## 3

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

## 4

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

## 5

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

## 6

### --description--

Create a new file called `hello.rs`.

### --tests--

The `getting-started/hello.rs` file should exist.

```js
const pathExists = __helpers.fileExists('getting-started/hello.rs');
assert.isTrue(pathExists);
```

## 7

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
const fileContents = await __helpers.getFile('getting-started/hello.rs');
assert.include(fileContents, 'fn main() {');
assert.include(fileContents, 'println!("Hello, world!");');
assert.include(fileContents, '}');
```

## 8

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

## 9

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

## 10

### --description--

Congratulations! You have written your first Rust program 🎉

### --tests--

🦀 🚀

```js
assert.fail();
```

## --fcc-end--
