const dialog = document.querySelector('.dialog')
const addBookBtn = document.querySelector('.btn-add')
const submitBtn = document.querySelector('.btn-submit')
const closeBtn = document.querySelector('.btn-close')


let myLibrary = [
    {"title" : "Lov na vjestice", "author": "J.K. Kotlin", "pages": 123, "read":"notread"}, 
    {"title" : "Vlak u snijegu", "author": "Orman Lokus", "pages": 223, "read":"notread"}, 

];

function Book(title, author, pages, read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.readToggle = function () {
        this.read = this.read === "notread" ? "read" : "notread";
    }
}

// Add Book button opens modal dialog
addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})

// Form close button closes the dialog box
closeBtn.addEventListener('click', () => {
    dialog.close();
})

// Library functions 
// Save book in library
function addBookToLibrary(book) {
    myLibrary.push(book)
  }



