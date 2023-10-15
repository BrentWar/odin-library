
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let returnString = "";
        returnString += `${this.title} by ${this.author}, ${this.pages} pages, `
        returnString += `${this.read ? "read" : "not read yet"}`;
        return returnString;
    }


    this.toggleRead = function() {
        this.read = !(this.read);
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}





const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector("#add-book-button");
const bookForm = document.querySelector("#add-book");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    addBookToLibrary(document.querySelector("#title-input").value, document.querySelector("#author-input").value, document.querySelector("#page-input").value, document.querySelector("#read-input").checked);

    document.querySelector("#add-book").reset();


    let body = document.querySelector("body");
    let temp = document.createElement("div");
    temp.dataset.index = myLibrary.length - 1;
    temp.textContent = myLibrary[myLibrary.length - 1].info();

    let removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.classList.add("remove-button");
    temp.dataset.index = myLibrary.length - 1;
    removeButton.dataset.index = myLibrary.length - 1;
    removeButton.addEventListener("click", () => {
        body.removeChild(document.querySelector(`div[data-index="${removeButton.dataset.index}"]`));
        myLibrary.splice(removeButton.dataset.index, 1);
    });


    let readToggleButton = document.createElement("button");
    readToggleButton.textContent = "change read status";
    readToggleButton.classList.add("toggle-button");
    readToggleButton.dataset.index = myLibrary.length - 1;
    readToggleButton.addEventListener("click", () => {
        let toggleIndex = readToggleButton.dataset.index;
        myLibrary[toggleIndex].toggleRead();
        temp.textContent = myLibrary[toggleIndex].info();

        temp.appendChild(removeButton);
        temp.appendChild(readToggleButton);

    });


    temp.appendChild(removeButton);
    temp.appendChild(readToggleButton);
    body.appendChild(temp);


    dialog.close();


});




