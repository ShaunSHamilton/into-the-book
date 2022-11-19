use rand::Rng;
use std::io;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    println!("Please input your guess.");
    let mut guess = String::new();
    let stdin_handle = io::stdin();

    stdin_handle
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}");
}
