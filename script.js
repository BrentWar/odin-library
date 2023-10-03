
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("test1", "test1", 1, true);
addBookToLibrary("test2", "test2", 2, false);
addBookToLibrary("test3", "test3", 3, true);
addBookToLibrary("test4", "test4", 4, false);

myLibrary.forEach(element => {
    let body = document.querySelector("body");
    let temp = document.createElement("div");
    temp.textContent = element.info();
    body.appendChild(temp);
        
});
