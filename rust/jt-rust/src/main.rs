mod utils;
mod tests;
use utils::hello::hello::respond_hello as respond_hello;

fn main() {
    println!("Hello There!");
    respond_hello();
}
