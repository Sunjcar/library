let myLibrary = [];

function Book (title,author,pages,){
  this.title = title
  this.author = author
  this.pages = pages
}

console.log(myLibrary)

function addBookToLibrary(){
  modal.style.display = 'none';
//Creating new book via user input
  const addBook = new Book(
  document.getElementById('title').value,  
  document.getElementById('author').value,
  document.getElementById('pages').value,

);


//Creating container for new books

const books = document.getElementById('books')
const div = document.createElement('div');
div.className= 'cards'
books.appendChild(div);
const Title = document.createElement('p');
const Author = document.createElement('p');
const Pages = document.createElement('p');

div.appendChild(Title);
div.appendChild(Author);
div.appendChild(Pages);

Title.textContent = "Title:" + addBook.title
Author.textContent = "Author:" + addBook.author
Pages.textContent = "Pages:" + addBook.pages
myLibrary.push(addBook);

}


const submit = document.getElementById('submit')
submit.addEventListener('click', addBookToLibrary);
const modal = document.getElementById('modal')
const newBook = document.querySelector(".new-book");
newBook.addEventListener('click', addBook)
//Displays modal with inputs, resets form data and array
function addBook(){
    modal.style.display ='block'
    document.getElementById('myForm').reset();
    myLibrary = []
}

window.onclick= function(event) {
  if (event.target ==modal) {
    modal.style.display = 'none'
  }
}

