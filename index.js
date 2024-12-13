class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Added book: ${book}`);
        this.displayBooks();
    }
    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Removed book: ${book}`);
        } else {
            console.log(`Book not found: ${book}`);
        }
        this.displayBooks();
    }
    searchBook(book) {
        const found = this.books.includes(book);
        console.log(`Book "${book}" is ${found ? 'found' : 'not found'} in the library.`);
    }
    findOccurrences(book) {
        const firstIndex = this.books.indexOf(book);
        const lastIndex = this.books.lastIndexOf(book);
        if (firstIndex === -1) {
            console.log(`Book "${book}" not found in the library.`);
        } else {
            console.log(`Book "${book}" first occurs at index ${firstIndex} and last occurs at index ${lastIndex}.`);
        }
    }
    extractSublist(start, end) {
        const sublist = this.books.slice(start, end);
        console.log(`Extracted sublist (from index ${start} to ${end}):`, sublist);
    }
    sortBooks() {
        this.books.sort((a, b) => a.localeCompare(b));
        console.log('Books sorted alphabetically.');
        this.displayBooks();
    }
    replaceBook(index, newBook) {
        if (index >= 0 && index < this.books.length) {
            const oldBook = this.books.splice(index, 1, newBook);
            console.log(`Replaced "${oldBook}" with "${newBook}" at index ${index}.`);
        } else {
            console.log(`Invalid index: ${index}`);
        }
        this.displayBooks();
    }
    joinBooks() {
        const joined = this.books.join(', ');
        console.log(`All books in the library: ${joined}`);
    }
    displayBooks() {
        console.log('Current list of books:', this.books);
    }
}
const myLibrary = new Library();
myLibrary.addBook('Harry Potter');
myLibrary.addBook('The Hobbit');
myLibrary.addBook('1984');
myLibrary.addBook('The Hobbit');
myLibrary.removeBook('1984');
myLibrary.searchBook('The Hobbit');
myLibrary.findOccurrences('The Hobbit');
myLibrary.extractSublist(0, 2);
myLibrary.sortBooks();
myLibrary.replaceBook(1, 'Pride and Prejudice');
myLibrary.joinBooks();
