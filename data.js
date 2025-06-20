const faqData = [
    {
        "id": 1,
        "question": "What is Rust, and what are its primary design goals?",
        "answer": "Rust is a systems programming language focused on safety, performance, and concurrency. Its primary design goals are memory safety without a garbage collector, zero-cost abstractions, and safe concurrency to prevent data races.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 2,
        "question": "Explain the concept of ownership in Rust.",
        "answer": "Ownership is Rust’s core feature for memory management. Every value has a single owner, and when the owner goes out of scope, the value is dropped. This ensures memory safety without a garbage collector.",
        "difficulty": "Easy",
        "topic": "Ownership"
    },
    {
        "id": 3,
        "question": "What are the rules of ownership in Rust?",
        "answer": "1. Each value in Rust has an owner. 2. There can only be one owner at a time. 3. When the owner goes out of scope, the value is dropped.",
        "difficulty": "Easy",
        "topic": "Ownership"
    },
    {
        "id": 4,
        "question": "What is borrowing in Rust?",
        "answer": "Borrowing allows a function to use a value without taking ownership, using references (`&` for immutable, `&mut` for mutable). Borrowing follows strict rules to prevent data races and ensure safety.",
        "difficulty": "Easy",
        "topic": "Borrowing"
    },
    {
        "id": 5,
        "question": "What is the difference between `&` and `&mut` references?",
        "answer": "`&` creates an immutable reference, allowing read-only access. `&mut` creates a mutable reference, allowing modification, but only one `&mut` can exist at a time for a given value.",
        "difficulty": "Easy",
        "topic": "Borrowing"
    },
    {
        "id": 6,
        "question": "What is a lifetime in Rust?",
        "answer": "Lifetimes are annotations (e.g., `'a`) that specify how long references are valid, ensuring they don’t outlive the data they point to, preventing dangling pointers.",
        "difficulty": "Medium",
        "topic": "Lifetimes"
    },
    {
        "id": 7,
        "question": "What is the purpose of the `Copy` trait in Rust?",
        "answer": "The `Copy` trait marks types that can be duplicated by copying their bits, like integers. Types implementing `Copy` are copied instead of moved when assigned or passed to functions.",
        "difficulty": "Easy",
        "topic": "Traits"
    },
    {
        "id": 8,
        "question": "What is the `Clone` trait, and how does it differ from `Copy`?",
        "answer": "`Clone` allows explicit duplication of a value via the `.clone()` method, potentially with overhead. Unlike `Copy`, which is implicit and cheap, `Clone` is explicit and used for types like `String`.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 9,
        "question": "What is a `struct` in Rust, and how is it defined?",
        "answer": "A `struct` is a custom data type that groups related data. It’s defined using the `struct` keyword, e.g., `struct Point { x: i32, y: i32 }`.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 10,
        "question": "What is an `enum` in Rust, and how is it used?",
        "answer": "An `enum` defines a type with a fixed set of variants, e.g., `enum Color { Red, Blue }`. It’s used for pattern-matching and representing disjoint states, like `Option` or `Result`.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 11,
        "question": "What is the `Option` enum, and when is it used?",
        "answer": "`Option<T>` represents an optional value: `Some(T)` for a value or `None` for absence. It’s used to handle cases where a value might not exist, avoiding null pointer issues.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 12,
        "question": "What is the `Result` enum, and how is it used?",
        "answer": "`Result<T, E>` represents a computation that may succeed (`Ok(T)`) or fail (`Err(E)`). It’s used for error handling, encouraging explicit error management.",
        "difficulty": "Easy",
        "topic": "Error Handling"
    },
    {
        "id": 13,
        "question": "How does Rust handle errors compared to exceptions in other languages?",
        "answer": "Rust avoids exceptions, using `Result` and `Option` for explicit error handling. The `?` operator propagates errors, making code concise and safe.",
        "difficulty": "Medium",
        "topic": "Error Handling"
    },
    {
        "id": 14,
        "question": "What is the `Drop` trait in Rust?",
        "answer": "The `Drop` trait defines custom cleanup logic for a type when it goes out of scope, like closing a file or freeing resources. It’s implemented by defining the `drop` method.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 15,
        "question": "What is a trait in Rust?",
        "answer": "A trait defines shared behavior for types, like an interface. It’s implemented using the `impl Trait for Type` syntax, enabling polymorphism, e.g., `Display` for formatting.",
        "difficulty": "Easy",
        "topic": "Traits"
    },
    {
        "id": 16,
        "question": "What is the difference between `String` and `&str`?",
        "answer": "`String` is an owned, growable string type stored on the heap. `&str` is an immutable string slice, typically a view into a `String` or static string, with a fixed length.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 17,
        "question": "What is the purpose of the `unsafe` keyword in Rust?",
        "answer": "`unsafe` allows bypassing Rust’s safety guarantees for operations like dereferencing raw pointers, calling C functions, or modifying mutable static variables, requiring careful use to avoid undefined behavior.",
        "difficulty": "Medium",
        "topic": "Unsafe Rust"
    },
    {
        "id": 18,
        "question": "What is a closure in Rust, and how is it used?",
        "answer": "A closure is an anonymous function that captures its environment. Its defined with `|args| expression`, used for concise function-like behavior, and supports capturing variables by reference or move.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 19,
        "question": "What is the `Box` type, and when is it used?",
        "answer": "`Box<T>` is a smart pointer that allocates memory on the heap and owns its data. Its used for recursive types, large data, or when ownership needs to be transferred without copying.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": "Hannah",
        "question": "What is the `Rc` type, and how does it differ from `Box`?",
        "answer": "`Rc<T>` is a reference-counted smart pointer for shared ownership, allowing multiple references to the same data. Unlike `Box`, which has single ownership, `Rc` tracks references and drops data when the last reference is gone.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 21,
        "question": "What is the `Arc` type, and when is it used?",
        "answer": "`Arc<T>` is an atomic reference-counted smart pointer, safe for sharing across threads. It’s used in concurrent programs where multiple threads need shared access to data.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 22,
        "question": "What is the `Mutex` type in Rust?",
        "answer": "`Mutex<T>` provides mutual exclusion, allowing only one thread to access the data at a time. It’s used to protect shared data in concurrent programs, with `lock()` to access the data.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 23,
        "question": "What is the `RwLock` type, and how does it differ from `Mutex`?",
        "answer": "`RwLock<T>` allows multiple readers or one writer, optimizing for read-heavy scenarios. Unlike `Mutex`, which allows only one accessor, `RwLock` supports concurrent reads but exclusive writes.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 24,
        "question": "What is the `Send` trait in Rust?",
        "answer": "`Send` marks types that can be safely transferred to another thread. Types with interior mutability (e.g., `Mutex`) are typically not `Send`, while most owned types are.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 25,
        "question": "What is the `Sync` trait, and when is it used?",
        "answer": "`Sync` marks types that can be safely shared between threads via references. Types like `Mutex` and `Arc` are `Sync`, allowing safe concurrent access.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 26,
        "question": "What is a `match` expression in Rust?",
        "answer": "A `match` expression is used for pattern matching, allowing control flow based on the structure of a value, like matching `Option` or `enum` variants. It must be exhaustive, covering all possible cases.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 27,
        "question": "What is the `?` operator in Rust?",
        "answer": "The `?` operator propagates errors in functions returning `Result` or `Option`. If the value is `Err` or `None`, it returns early; otherwise, it unwraps the `Ok` or `Some` value.",
        "difficulty": "Medium",
        "topic": "Error Handling"
    },
    {
        "id": 28,
        "question": "What is a `macro` in Rust?",
        "answer": "A macro is a way to write reusable code patterns that generate code at compile time. Rust has declarative macros (`macro_rules!`) and procedural macros for advanced code generation.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 29,
        "question": "What is the difference between `panic!` and returning a `Result`?",
        "answer": "`panic!` causes the program to crash with an error message, used for unrecoverable errors. `Result` allows graceful error handling, letting the caller decide how to proceed.",
        "difficulty": "Easy",
        "topic": "Error Handling"
    },
    {
        "id": 30,
        "question": "What is the `std` crate in Rust?",
        "answer": "The `std` crate is Rust’s standard library, providing core functionality like data types, I/O, threading, and collections, included by default in most Rust programs.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 31,
        "question": "What is the `cargo` tool, and what does it do?",
        "answer": "`cargo` is Rust’s build system and package manager. It handles project creation, dependency management, building, testing, and running Rust applications.",
        "difficulty": "Easy",
        "topic": "Tooling"
    },
    {
        "id": 32,
        "question": "What is the difference between `move` and `ref` in closures?",
        "answer": "`move` forces a closure to take ownership of captured variables, while `ref` (or default behavior) borrows them. `move` is used when the closure outlives the variables’ scope.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 33,
        "question": "What is the `Vec` type in Rust?",
        "answer": "`Vec<T>` is a growable, heap-allocated array, similar to a dynamic array. It supports adding, removing, and accessing elements, with automatic memory management.",
        "difficulty": "Easy",
        "topic": "Collections"
    },
    {
        "id": 34,
        "question": "What is the `HashMap` type, and how is it used?",
        "answer": "`HashMap<K, V>` is a key-value store using hashing for fast lookups. It’s used for associative data, with methods like `insert`, `get`, and `remove`.",
        "difficulty": "Easy",
        "topic": "Collections"
    },
    {
        "id": 35,
        "question": "What is the `Option::unwrap` method, and why is it risky?",
        "answer": "`Option::unwrap` returns the value inside `Some` or panics if `None`. It’s risky because it assumes a value exists, potentially crashing the program if it doesn’t.",
        "difficulty": "Easy",
        "topic": "Error Handling"
    },
    {
        "id": 36,
        "question": "What is the `Deref` trait in Rust?",
        "answer": "`Deref` allows types to be dereferenced with the `*` operator, enabling automatic dereferencing for smart pointers like `Box` or `Rc` to access their inner value.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 37,
        "question": "What is the `AsRef` trait, and how is it used?",
        "answer": "`AsRef` allows types to be converted to a reference of another type, e.g., `String` to `&str`. It’s used for flexible function arguments accepting multiple types.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 38,
        "question": "What is the `Borrow` trait, and how does it differ from `AsRef`?",
        "answer": "`Borrow` provides a way to borrow a type as another type with the same data representation, ensuring hash consistency. Unlike `AsRef`, it’s stricter for use in collections like `HashMap`.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 39,
        "question": "What is a generic type in Rust?",
        "answer": "A generic type allows writing code that works with multiple types, e.g., `Vec<T>`. It’s defined with `<T>` and constrained by traits for type safety.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 40,
        "question": "What is a trait object in Rust?",
        "answer": "A trait object (`&dyn Trait` or `Box<dyn Trait>`) allows dynamic dispatch, enabling runtime polymorphism by storing a reference to any type implementing a trait.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 41,
        "question": "What is the `Sized` trait, and why is it important?",
        "answer": "`Sized` marks types with a known size at compile time. It’s required for most generic types unless `?Sized` is used, allowing flexibility for trait objects.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 42,
        "question": "What is the `static` lifetime in Rust?",
        "answer": "The `'static` lifetime indicates a reference that lives for the entire program duration, often used for static data or string literals.",
        "difficulty": "Medium",
        "topic": "Lifetimes"
    },
    {
        "id": 43,
        "question": "What is the `const` keyword in Rust?",
        "answer": "`const` defines compile-time constants with fixed values, evaluated at compile time. Unlike `static`, it’s not stored in memory and can’t be mutable.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 44,
        "question": "What is the `static` keyword in Rust?",
        "answer": "`static` defines global variables with a fixed memory location and `'static` lifetime. It can be mutable but requires `unsafe` for modification.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 45,
        "question": "What is the `async` keyword in Rust?",
        "answer": "`async` marks a function or block that returns a `Future`, enabling asynchronous programming. It’s used with `await` to handle non-blocking operations.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 46,
        "question": "What is a `Future` in Rust?",
        "answer": "A `Future` is a trait representing an asynchronous computation that may produce a value later. It’s used with `async/await` for non-blocking tasks.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 47,
        "question": "What is the `tokio` crate, and what does it provide?",
        "answer": "`tokio` is a popular async runtime crate, providing an event loop, async I/O, timers, and utilities for building asynchronous applications in Rust.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 48,
        "question": "What is the `serde` crate used for?",
        "answer": "`serde` is a serialization/deserialization framework for Rust, used to convert Rust data structures to/from formats like JSON, YAML, or TOML.",
        "difficulty": "Easy",
        "topic": "Tooling"
    },
    {
        "id": 49,
        "question": "What is the `unsafe` block, and when is it needed?",
        "answer": "An `unsafe` block allows operations that bypass Rust’s safety checks, like dereferencing raw pointers or calling unsafe functions. It’s needed for low-level systems programming.",
        "difficulty": "Medium",
        "topic": "Unsafe Rust"
    },
    {
        "id": 50,
        "question": "What is the `Pin` type, and why is it used in async Rust?",
        "answer": "`Pin<T>` ensures a value stays at a fixed memory location, preventing moves that could invalidate self-referential async structures like `Future`s.",
        "difficulty": "Hard",
        "topic": "Concurrency"
    },
    {
        "id": 51,
        "question": "What is the `macro_rules!` macro system in Rust?",
        "answer": "`macro_rules!` defines declarative macros, allowing pattern-based code generation. It’s used for simple, reusable code patterns without procedural macro complexity.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 52,
        "question": "What is the `proc_macro` crate used for?",
        "answer": "`proc_macro` enables procedural macros, which are functions that generate Rust code at compile time, used for custom derives or complex transformations.",
        "difficulty": "Hard",
        "topic": "Core Concepts"
    },
    {
        "id": 53,
        "question": "What is the `const fn` in Rust?",
        "answer": "`const fn` defines functions that can be evaluated at compile time, used for `const` expressions or initializing `const` values.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 54,
        "question": "What is the `no_std` attribute in Rust?",
        "answer": "`#[no_std]` disables the standard library, used for bare-metal or embedded systems programming where minimal dependencies are needed.",
        "difficulty": "Hard",
        "topic": "Core Concepts"
    },
    {
        "id": 55,
        "question": "What is the `core` crate in Rust?",
        "answer": "The `core` crate is a minimal subset of the standard library, used in `no_std` environments like embedded systems, providing basic types and traits.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 56,
        "question": "What is the `unsafe` trait, and how is it used?",
        "answer": "An `unsafe` trait requires implementers to uphold specific safety invariants. It’s used for traits with unsafe methods, like `Send` or `Sync`, ensuring correct usage.",
        "difficulty": "Hard",
        "topic": "Traits"
    },
    {
        "id": 57,
        "question": "What is the `Default` trait in Rust?",
        "answer": "`Default` provides a default value for a type via the `default()` method, useful for initializing structs or collections.",
        "difficulty": "Easy",
        "topic": "Traits"
    },
    {
        "id": 58,
        "question": "What is the `From` trait, and how is it used?",
        "answer": "`From` defines how to convert one type into another, e.g., `String` from `&str`. It’s used for ergonomic type conversions in APIs.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 59,
        "question": "What is the `Into` trait, and how does it relate to `From`?",
        "answer": "`Into` defines a conversion into another type, typically implemented via `From`. It’s used in generic contexts to accept types convertible to the target type.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 60,
        "question": "What is the `Iterator` trait in Rust?",
        "answer": "`Iterator` defines a sequence of values, with a `next()` method returning `Option<Item>`. It’s used for iterating over collections like `Vec` or custom types.",
        "difficulty": "Easy",
        "topic": "Traits"
    },
    {
        "id": 61,
        "question": "What is the `for` loop syntax for iterators in Rust?",
        "answer": "Rust’s `for` loop works with types implementing `IntoIterator`, e.g., `for x in vec![1, 2, 3] { println!('{}', x); }`, iterating over the collection’s elements.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 62,
        "question": "What is the `Cow` type in Rust?",
        "answer": "`Cow` (Clone-on-Write) is a smart pointer that holds either an owned or borrowed value, allowing lazy cloning only when needed for ownership.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 63,
        "question": "What is the `RefCell` type, and when is it used?",
        "answer": "`RefCell<T>` provides interior mutability, allowing mutable borrows at runtime with dynamic checks. It’s used when static borrow checking is too restrictive.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 64,
        "question": "What is the `Cell` type, and how does it differ from `RefCell`?",
        "answer": "`Cell<T>` allows interior mutability for `Copy` types, with `get` and `set` methods. Unlike `RefCell`, it doesn’t support borrowing, only copying, and is simpler.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 65,
        "question": "What is the `OnceCell` type in Rust?",
        "answer": "`OnceCell<T>` is a thread-safe cell initialized once, used for lazy initialization of global or static data, ensuring single initialization.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 66,
        "question": "What is the `lazy_static` crate, and how is it used?",
        "answer": "`lazy_static` defines static variables initialized at runtime, using a macro to ensure thread-safe lazy initialization, e.g., for global configuration.",
        "difficulty": "Medium",
        "topic": "Tooling"
    },
    {
        "id": 67,
        "question": "What is the `cfg` attribute in Rust?",
        "answer": "`#[cfg]` conditionally compiles code based on configuration predicates, like `#[cfg(target_os = \"linux\")]`, enabling platform-specific or feature-based code.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 68,
        "question": "What is the `derive` attribute in Rust?",
        "answer": "`#[derive]` automatically implements traits like `Debug`, `Clone`, or `PartialEq` for structs and enums, reducing boilerplate code.",
        "difficulty": "Easy",
        "topic": "Traits"
    },
    {
        "id": 69,
        "question": "What is the `unsafe` fn, and when is it needed?",
        "answer": "An `unsafe fn` declares a function that performs unsafe operations, requiring callers to use an `unsafe` block, used for low-level or C-interfacing code.",
        "difficulty": "Hard",
        "topic": "Unsafe Rust"
    },
    {
        "id": 70,
        "question": "What is the `thread::spawn` function in Rust?",
        "answer": "`thread::spawn` creates a new thread, running a closure in parallel. It returns a `JoinHandle` to wait for the thread’s completion.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 71,
        "question": "What is the `std::sync::mpsc` module in Rust?",
        "answer": "`mpsc` (multiple producer, single consumer) provides channels for thread communication, allowing multiple threads to send messages to one receiver.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 72,
        "question": "What is the `unsafe impl` in Rust?",
        "answer": "`unsafe impl` implements an unsafe trait, requiring the implementer to guarantee safety invariants, like `Send` or `Sync`, for the type.",
        "difficulty": "Hard",
        "topic": "Traits"
    },
    {
        "id": 73,
        "question": "What is the `const` generics feature in Rust?",
        "answer": "Const generics allow types to be parameterized by constant values, e.g., `struct Array<T, const N: usize>`, enabling type-safe fixed-size arrays.",
        "difficulty": "Hard",
        "topic": "Core Concepts"
    },
    {
        "id": 74,
        "question": "What is the `try` block in Rust?",
        "answer": "The `try` block (unstable) is a proposed feature for scoping `?` operator usage, allowing early returns within a block, improving error handling ergonomics.",
        "difficulty": "Hard",
        "topic": "Error Handling"
    },
    {
        "id": 75,
        "question": "What is the `std::mem` module in Rust?",
        "answer": "`std::mem` provides low-level memory operations, like `swap`, `replace`, or `size_of`, for manual memory management or optimization.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 76,
        "question": "What is the `std::ptr` module, and when is it used?",
        "answer": "`std::ptr` provides raw pointer operations, like `read` or `write`, used in `unsafe` code for low-level memory manipulation, such as FFI.",
        "difficulty": "Hard",
        "topic": "Unsafe Rust"
    },
    {
        "id": 77,
        "question": "What is the `std::rc` module in Rust?",
        "answer": "`std::rc` provides single-threaded reference counting with `Rc` and `Weak`, enabling shared ownership without thread safety, used for non-threaded data sharing.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 78,
        "question": "What is the `std::sync` module in Rust?",
        "answer": "`std::sync` provides synchronization primitives like `Mutex`, `RwLock`, `Arc`, and `mpsc` for safe concurrent programming across threads.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 79,
        "question": "What is the `std::thread` module in Rust?",
        "answer": "`std::thread` provides thread management functions like `spawn`, `park`, and `yield_now`, used for creating and controlling threads.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 80,
        "question": "What is the `std::future` module in Rust?",
        "answer": "`std::future` defines the `Future` trait and utilities for asynchronous programming, used with `async/await` for non-blocking operations.",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 81,
        "question": "What is the `std::collections` module in Rust?",
        "answer": "`std::collections` provides data structures like `Vec`, `HashMap`, `BTreeMap`, and `LinkedList`, used for managing collections of data.",
        "difficulty": "Easy",
        "topic": "Collections"
    },
    {
        "id": 82,
        "question": "What is the `std::io` module in Rust?",
        "answer": "`std::io` provides input/output functionality, like reading/writing files, stdin/stdout, and error handling with `std::io::Error`.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 83,
        "question": "What is the `std::fs` module in Rust?",
        "answer": "`std::fs` provides filesystem operations, like reading/writing files, creating directories, and querying metadata, used for file-based I/O.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 84,
        "question": "What is the `std::path` module in Rust?",
        "answer": "`std::path` provides types like `Path` and `PathBuf` for handling filesystem paths, used for cross-platform path manipulation.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 85,
        "question": "What is the `std::process` module in Rust?",
        "answer": "`std::process` provides functions for spawning and managing OS processes, like `Command` for running external programs.",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 86,
        "question": "What is the `std::time` module in Rust?",
        "answer": "`std::time` provides types like `Instant` and `SystemTime` for measuring time and durations, used for timing operations or scheduling.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 87,
        "question": "What is the `std::env` module in Rust?",
        "answer": "`std::env` provides access to environment variables, command-line arguments, and the current working directory, used for interacting with the program’s environment.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 88,
        "question": "What is the `std::error` module in Rust?",
        "answer": "`std::error` defines the `Error` trait for custom error types, used to create robust error handling for libraries and applications.",
        "difficulty": "Medium",
        "topic": "Error Handling"
    },
    {
        "id": 89,
        "question": "What is the `std::fmt` module in Rust?",
        "answer": "`std::fmt` provides formatting traits like `Display`, `Debug`, and `Write` for string formatting and output, used for custom type formatting.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 90,
        "question": "What is the `std::result` module in Rust?",
        "answer": "`std::result` defines the `Result` type for error handling, used to represent computations that may fail with an error.",
        "difficulty": "Easy",
        "topic": "Error Handling"
    },
    {
        "id": 91,
        "question": "What is the `std::option` module in Rust?",
        "answer": "`std::option` defines the `Option` type for optional values, used to handle cases where a value may or may not exist.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 92,
        "question": "What is the `std::boxed` module in Rust?",
        "answer": "`std::boxed` defines the `Box` type for heap-allocated data with single ownership, used for recursive types or transferring ownership.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 93,
        "question": "What is the `std::cell` module in Rust?",
        "answer": "`std::cell` provides `Cell` and `RefCell` for interior mutability, used to mutate data in contexts where static borrow checking is restrictive.",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 94,
        "question": "What is the `std::marker` module in Rust?",
        "answer": "`std::marker` defines marker traits like `Send`, `Sync`, `Copy`, and `Sized`, used to constrain types for safety and behavior.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 95,
        "question": "What is the `std::ops` module in Rust?",
        "answer": "`std::ops` defines operator traits like `Add`, `Sub`, `Mul`, and `Deref`, used to overload operators for custom types.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 96,
        "question": "What is the `std::convert` module in Rust?",
        "answer": "`std::convert` defines traits like `From`, `Into`, `AsRef`, and `AsMut` for type conversions, used for ergonomic API design.",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 97,
        "question": "What is the `std::iter` module in Rust?",
        "answer": "`std::iter` defines the `Iterator` and `IntoIterator` traits, used for iterating over collections or custom sequences.",
        "difficulty": "Easy",
        "topic": "Traits"
    },
    {
        "id": 98,
        "question": "What is the `std::slice` module in Rust?",
        "answer": "`std::slice` provides utilities for working with slices (`&[T]`), like iteration, searching, or sorting, used for array-like data access.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 99,
        "question": "What is the `std::str` module in Rust?",
        "answer": "`std::str` provides utilities for string slices (`&str`), like searching, splitting, or parsing, used for string manipulation.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 100,
        "question": "What is the `std::string` module in Rust?",
        "answer": "`std::string` defines the `String` type and its methods, used for owned, growable strings with heap allocation.",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 101,
        "question": "Write a Rust program to calculate the factorial of a number.",
        "answer": "fn factorial(n: u32) -> u64 {\n    if n == 0 || n == 1 {\n        1\n    } else {\n        n as u64 * factorial(n - 1)\n    }\n}\n\nfn main() {\n    let n = 5;\n    println!(\"Factorial of {} is {}\", n, factorial(n));\n}",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 102,
        "question": "Write a Rust program to check if a string is a palindrome.",
        "answer": "fn is_palindrome(s: &str) -> bool {\n    let s = s.to_lowercase();\n    s.chars().eq(s.chars().rev())\n}\n\nfn main() {\n    let s = \"Racecar\";\n    println!(\"Is {} a palindrome? {}\", s, is_palindrome(s));\n}",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 103,
        "question": "Write a Rust program to reverse a string.",
        "answer": "fn reverse_string(s: &str) -> String {\n    s.chars().rev().collect()\n}\n\nfn main() {\n    let s = \"hello\";\n    println!(\"Reversed string: {}\", reverse_string(s));\n}",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 104,
        "question": "Write a Rust program to find the sum of an array of integers.",
        "answer": "fn sum_array(arr: &[i32]) -> i32 {\n    arr.iter().sum()\n}\n\nfn main() {\n    let arr = [1, 2, 3, 4, 5];\n    println!(\"Sum: {}\", sum_array(&arr));\n}",
        "difficulty": "Easy",
        "topic": "Collections"
    },
    {
        "id": 105,
        "question": "Write a Rust program to find the maximum element in an array.",
        "answer": "fn max_element(arr: &[i32]) -> Option<i32> {\n    arr.iter().max().copied()\n}\n\nfn main() {\n    let arr = [1, 5, 3, 8, 2];\n    println!(\"Max: {}\", max_element(&arr).unwrap_or(0));\n}",
        "difficulty": "Easy",
        "topic": "Collections"
    },
    {
        "id": 106,
        "question": "Write a Rust program to implement a simple counter struct.",
        "answer": "struct Counter {\n    count: i32,\n}\n\nimpl Counter {\n    fn new() -> Self {\n        Counter { count: 0 }\n    }\n    fn increment(&mut self) {\n        self.count += 1;\n    }\n    fn get_count(&self) -> i32 {\n        self.count\n    }\n}\n\nfn main() {\n    let mut counter = Counter::new();\n    counter.increment();\n    println!(\"Count: {}\", counter.get_count());\n}",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 107,
        "question": "Write a Rust program to demonstrate ownership with a String.",
        "answer": "fn take_ownership(s: String) {\n    println!(\"Received: {}\", s);\n}\n\nfn main() {\n    let s = String::from(\"hello\");\n    take_ownership(s);\n    // println!(\"{}\", s); // This would cause a compile error\n}",
        "difficulty": "Easy",
        "topic": "Ownership"
    },
    {
        "id": 108,
        "question": "Write a Rust program to demonstrate borrowing with references.",
        "answer": "fn print_length(s: &str) {\n    println!(\"Length: {}\", s.len());\n}\n\nfn main() {\n    let s = String::from(\"hello\");\n    print_length(&s);\n    println!(\"Still usable: {}\", s);\n}",
        "difficulty": "Easy",
        "topic": "Borrowing"
    },
    {
        "id": 109,
        "question": "Write a Rust program to demonstrate mutable borrowing.",
        "answer": "fn append_world(s: &mut String) {\n    s.push_str(\" world\");\n}\n\nfn main() {\n    let mut s = String::from(\"hello\");\n    append_world(&mut s);\n    println!(\"Modified: {}\", s);\n}",
        "difficulty": "Easy",
        "topic": "Borrowing"
    
    },
    {
        "id": 112,
        "question": "Write a Rust program to demonstrate a simple enum.",
        "answer": "enum Direction {\n    Up,\n    Down,\n    Left,\n    Right,\n}\n\nfn describe(dir: Direction) -> &'static str {\n    match dir {\n        Direction::Up => \"Up\",\n        Direction::Down => \"Down\",\n        Direction::Left => \"Left\",\n        Direction::Right => \"Right\",\n    }\n}\n\nfn main() {\n    let dir = Direction::Up;\n    println!(\"Direction: {}\", describe(dir));\n}",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 113,
        "question": "Write a Rust program to demonstrate pattern matching with `match`.",
        "answer": "fn describe_number(n: i32) -> &'static str {\n    match n {\n        0 => \"Zero\",\n        1..=10 => \"Small\",\n        11..=100 => \"Medium\",\n        _ => \"Large\",\n    }\n}\n\nfn main() {\n    let num = 42;\n    println!(\"Number is: {}\", describe_number(num));\n}",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 114,
        "question": "Write a Rust program to demonstrate a simple closure.",
        "answer": "fn main() {\n    let add_one = |x: i32| x + 1;\n    println!(\"Result: {}\", add_one(5));\n}",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    },
    {
        "id": 115,
        "question": "Write a Rust program to use `Vec` to store and print numbers.",
        "answer": "fn main() {\n    let mut v = Vec::new();\n    v.push(1);\n    v.push(2);\n    v.push(3);\n    for x in &v {\n        println!(\"{}\", x);\n    }\n}",
        "difficulty": "Easy",
        "topic": "Collections"
    },
    {
        "id": 116,
        "question": "Write a Rust program to use `HashMap` to store key-value pairs.",
        "answer": "use std::collections::HashMap;\n\nfn main() {\n    let mut map = HashMap::new();\n    map.insert(\"one\", 1);\n    map.insert(\"two\", 2);\n    println!(\"Value for 'one': {}\", map.get(\"one\").unwrap());\n}",
        "difficulty": "Easy",
        "topic": "Collections"
    },
    {
        "id": 117,
        "question": "Write a Rust program to demonstrate the `Copy` trait.",
        "answer": "#[derive(Copy, Clone)]\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = p1; // Copy, not move\n    println!(\"p1: ({}, {}), p2: ({}, {})\", p1.x, p1.y, p2.x, p2.y);\n}",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 118,
        "question": "Write a Rust program to demonstrate the `Clone` trait.",
        "answer": "#[derive(Clone)]\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nfn main() {\n    let p1 = Point { x: 1, y: 2 };\n    let p2 = p1.clone();\n    println!(\"p1: ({}, {}), p2: ({}, {})\", p1.x, p1.y, p2.x, p2.y);\n}",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 119,
        "question": "Write a Rust program to demonstrate the `Drop` trait.",
        "answer": "struct Resource {\n    name: String,\n}\n\nimpl Drop for Resource {\n    fn drop(&mut self) {\n        println!(\"Dropping {}\", self.name);\n    }\n}\n\nfn main() {\n    let _r = Resource { name: String::from(\"test\") };\n    // Resource dropped at end of scope\n}",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 120,
        "question": "Write a Rust program to use `Box` for heap allocation.",
        "answer": "fn main() {\n    let b = Box::new(42);\n    println!(\"Value: {}\", *b);\n}",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 121,
        "question": "Write a Rust program to demonstrate `Rc` for shared ownership.",
        "answer": "use std::rc::Rc;\n\nfn main() {\n    let data = Rc::new(42);\n    let data2 = Rc::clone(&data);\n    println!(\"Value: {}, Count: {}\", *data, Rc::strong_count(&data));\n}",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 122,
        "question": "Write a Rust program to demonstrate `RefCell` for interior mutability.",
        "answer": "use std::cell::RefCell;\n\nfn main() {\n    let data = RefCell::new(42);\n    *data.borrow_mut() += 1;\n    println!(\"Value: {}\", *data.borrow());\n}",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 123,
        "question": "Write a Rust program to demonstrate `Mutex` for thread safety.",
        "answer": "use std::sync::Mutex;\nuse std::thread;\n\nfn main() {\n    let counter = Mutex::new(0);\n    let mut handles = vec![];\n    for _ in 0..10 {\n        let counter = Mutex::clone(&counter);\n        handles.push(thread::spawn(move || {\n            *counter.lock().unwrap() += 1;\n        }));\n    }\n    for handle in handles {\n        handle.join().unwrap();\n    }\n    println!(\"Counter: {}\", *counter.lock().unwrap());\n}",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 124,
        "question": "Write a Rust program to demonstrate `Arc` for thread-safe shared ownership.",
        "answer": "use std::sync::Arc;\nuse std::thread;\n\nfn main() {\n    let data = Arc::new(42);\n    let mut handles = vec![];\n    for _ in 0..5 {\n        let data = Arc::clone(&data);\n        handles.push(thread::spawn(move || {\n            println!(\"Value: {}\", *data);\n        }));\n    }\n    for handle in handles {\n        handle.join().unwrap();\n    }\n}",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 125,
        "question": "Write a Rust program to demonstrate a simple async function.",
        "answer": "use tokio::time::{sleep, Duration};\n\nasync fn say_hello() {\n    sleep(Duration::from_secs(1)).await;\n    println!(\"Hello, async!\");\n}\n\n#[tokio::main]\nasync fn main() {\n    say_hello().await;\n}",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 126,
        "question": "Write a Rust program to demonstrate `mpsc` channels.",
        "answer": "use std::sync::mpsc;\nuse std::thread;\n\nfn main() {\n    let (tx, rx) = mpsc::channel();\n    thread::spawn(move || {\n        tx.send(\"Hello from thread\").unwrap();\n    });\n    println!(\"Received: {}\", rx.recv().unwrap());\n}",
        "difficulty": "Medium",
        "topic": "Concurrency"
    },
    {
        "id": 127,
        "question": "Write a Rust program to implement a simple trait.",
        "answer": "trait Printable {\n    fn print(&self);\n}\n\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nimpl Printable for Point {\n    fn print(&self) {\n        println!(\"({}, {})\", self.x, self.y);\n    }\n}\n\nfn main() {\n    let p = Point { x: 1, y: 2 };\n    p.print();\n}",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 128,
        "question": "Write a Rust program to demonstrate trait objects.",
        "answer": "trait Drawable {\n    fn draw(&self);\n}\n\nstruct Circle;\nimpl Drawable for Circle {\n    fn draw(&self) { println!(\"Drawing Circle\"); }\n}\n\nstruct Square;\nimpl Drawable for Square {\n    fn draw(&self) { println!(\"Drawing Square\"); }\n}\n\nfn main() {\n    let shapes: Vec<Box<dyn Drawable>> = vec![Box::new(Circle), Box::new(Square)];\n    for shape in shapes {\n        shape.draw();\n    }\n}",
        "difficulty": "Medium",
        "topic": "Traits"
    },
    {
        "id": 129,
        "question": "Write a Rust program to demonstrate lifetimes with references.",
        "answer": "fn longest<'a>(s1: &'a str, s2: &'a str) -> &'a str {\n    if s1.len() > s2.len() { s1 } else { s2 }\n}\n\nfn main() {\n    let s1 = String::from(\"short\");\n    let s2 = String::from(\"longer\");\n    println!(\"Longest: {}\", longest(&s1, &s2));\n}",
        "difficulty": "Medium",
        "topic": "Lifetimes"
    },
    {
        "id": 130,
        "question": "Write a Rust program to demonstrate a custom error type.",
        "answer": "use std::error::Error;\nuse std::fmt;\n\n#[derive(Debug)]\nstruct MyError;\n\nimpl fmt::Display for MyError {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, \"My custom error\")\n    }\n}\n\nimpl Error for MyError {}\n\nfn risky_op() -> Result<(), MyError> {\n    Err(MyError)\n}\n\nfn main() {\n    if let Err(e) = risky_op() {\n        println!(\"Error: {}\", e);\n    }\n}",
        "difficulty": "Medium",
        "topic": "Error Handling"
    },
    {
        "id": 133,
        "question": "Write a Rust program to demonstrate `macro_rules!`.",
        "answer": "macro_rules! say_hello {\n    () => {\n        println!(\"Hello, macro!\")\n    };\n}\n\nfn main() {\n    say_hello!();\n}",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 134,
        "question": "Write a Rust program to demonstrate `lazy_static`.",
        "answer": "use lazy_static::lazy_static;\n\nlazy_static! {\n    static ref GLOBAL: i32 = 42;\n}\n\nfn main() {\n    println!(\"Global: {}\", *GLOBAL);\n}",
        "difficulty": "Medium",
        "topic": "Tooling"
    },
    {
        "id": 135,
        "question": "Write a Rust program to demonstrate `const fn`.",
        "answer": "const fn square(n: i32) -> i32 {\n    n * n\n}\n\nfn main() {\n    const RESULT: i32 = square(5);\n    println!(\"Square: {}\", RESULT);\n}",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 136,
        "question": "Write a Rust program to demonstrate `serde` for JSON serialization.",
        "answer": "use serde::{Serialize, Deserialize};\nuse serde_json;\n\n#[derive(Serialize, Deserialize)]\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nfn main() -> Result<(), serde_json::Error> {\n    let p = Point { x: 1, y: 2 };\n    let serialized = serde_json::to_string(&p)?;\n    println!(\"Serialized: {}\", serialized);\n    let deserialized: Point = serde_json::from_str(&serialized)?;\n    println!(\"Deserialized: ({}, {})\", deserialized.x, deserialized.y);\n    Ok(())\n}",
        "difficulty": "Medium",
        "topic": "Tooling"
    },
    {
        "id": 137,
        "question": "Write a Rust program to demonstrate `Cow` for efficient string handling.",
        "answer": "use std::borrow::Cow;\n\nfn process_string(s: &str) -> Cow<str> {\n    if s.contains(' ') {\n        Cow::Owned(s.replace(' ', \"_\"))\n    } else {\n        Cow::Borrowed(s)\n    }\n}\n\nfn main() {\n    let s1 = \"hello world\";\n    let s2 = \"hello\";\n    println!(\"Processed: {}\", process_string(s1));\n    println!(\"Processed: {}\", process_string(s2));\n}",
        "difficulty": "Medium",
        "topic": "Smart Pointers"
    },
    {
        "id": 138,
        "question": "Write a Rust program to demonstrate `unsafe` code with raw pointers.",
        "answer": "fn main() {\n    let mut x = 42;\n    let ptr = &mut x as *mut i32;\n    unsafe {\n        *ptr = 100;\n    }\n    println!(\"Value: {}\", x);\n}",
        "difficulty": "Hard",
        "topic": "Unsafe Rust"
    },
    {
        "id": 139,
        "question": "Write a Rust program to implement a linked list.",
        "answer": "use std::rc::Rc;\nuse std::cell::RefCell;\n\ntype Link = Option<Rc<RefCell<Node>>>;\n\nstruct Node {\n    value: i32,\n    next: Link,\n}\n\nstruct List {\n    head: Link,\n}\n\nimpl List {\n    fn new() -> Self {\n        List { head: None }\n    }\n\n    fn push(&mut self, value: i32) {\n        let new_node = Rc::new(RefCell::new(Node {\n            value,\n            next: self.head.take(),\n        }));\n        self.head = Some(new_node);\n    }\n}\n\nfn main() {\n    let mut list = List::new();\n    list.push(1);\n    list.push(2);\n    if let Some(head) = &list.head {\n        println!(\"Head value: {}\", head.borrow().value);\n    }\n}",
        "difficulty": "Hard",
        "topic": "Smart Pointers"
    },

    {
        "id": 141,
        "question": "Write a Rust program to demonstrate associated types in traits.",
        "answer": "trait Container {\n    type Item;\n    fn get_item(&self) -> Self::Item;\n}\n\nstruct Boxed<T> {\n    value: T,\n}\n\nimpl Container for Boxed<i32> {\n    type Item = i32;\n    fn get_item(&self) -> i32 {\n        self.value\n    }\n}\n\nfn main() {\n    let b = Boxed { value: 42 };\n    println!(\"Item: {}\", b.get_item());\n}",
        "difficulty": "Hard",
        "topic": "Traits"
    },
    {
        "id": 142,
        "question": "Write a Rust program to demonstrate `Pin` in async context.",
        "answer": "use std::pin::Pin;\nuse std::future::Future;\n\nstruct MyFuture {\n    value: i32,\n}\n\nimpl Future for MyFuture {\n    type Output = i32;\n    fn poll(self: Pin<&mut Self>, _cx: &mut std::task::Context) -> std::task::Poll<Self::Output> {\n        std::task::Poll::Ready(self.value)\n    }\n}\n\n#[tokio::main]\nasync fn main() {\n    let fut = MyFuture { value: 42 };\n    println!(\"Future result: {}\", fut.await);\n}",
        "difficulty": "Hard",
        "topic": "Concurrency"
    },
    {
        "id": 144,
        "question": "Write a Rust program to demonstrate `unsafe` trait implementation.",
        "answer": "struct MyType(i32);\n\nunsafe impl Send for MyType {}\n\nfn main() {\n    let value = MyType(42);\n    std::thread::spawn(move || {\n        println!(\"Value in thread: {}\", value.0);\n    }).join().unwrap();\n}",
        "difficulty": "Hard",
        "topic": "Traits"
    },
    {
        "id": 145,
        "question": "Write a Rust program to demonstrate `std::mem::swap`.",
        "answer": "fn main() {\n    let mut x = 42;\n    let mut y = 100;\n    std::mem::swap(&mut x, &mut y);\n    println!(\"x: {}, y: {}\", x, y);\n}",
        "difficulty": "Medium",
        "topic": "Core Concepts"
    },
    {
        "id": 146,
        "question": "Write a Rust program to demonstrate `std::ptr::read`.",
        "answer": "fn main() {\n    let x = 42;\n    let ptr = &x as *const i32;\n    let value = unsafe { std::ptr::read(ptr) };\n    println!(\"Read value: {}\", value);\n}",
        "difficulty": "Hard",
        "topic": "Unsafe Rust"
    },

    {
        "id": 148,
        "question": "Write a Rust program to demonstrate `std::thread::park`.",
        "answer": "use std::thread;\n\nfn main() {\n    let handle = thread::spawn(|| {\n        println!(\"Thread parking\");\n        thread::park();\n        println!(\"Thread unparked\");\n    });\n    std::thread::sleep(std::time::Duration::from_secs(1));\n    handle.thread().unpark();\n    handle.join().unwrap();\n}",
        "difficulty": "Hard",
        "topic": "Concurrency"
    },
    {
        "id": 150,
        "question": "Write a Rust program to demonstrate `std::env::args`.",
        "answer": "use std::env;\n\nfn main() {\n    for arg in env::args().skip(1) {\n        println!(\"Argument: {}\", arg);\n    }\n}",
        "difficulty": "Easy",
        "topic": "Core Concepts"
    }
];