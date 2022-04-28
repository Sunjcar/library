let myLibrary = [];

console.log(myLibrary)
function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  myLibrary.push (author);
  myLibrary.push (title);
  myLibrary.push (pages);
  display.textContent = myLibrary.join(' ');
  console.log(myLibrary);
  return false;
}

const display = document.getElementById('display')


document.getElementById("display").textContent = myLibrary.join(", ")

const newBook = document.querySelector(".new-book")
newBook.addEventListener('click', addBook)
const author = document.getElementById('author')
const title = document.getElementById('title')
const pages = document.getElementById('pages')
const submit = document.getElementById('submit')
submit.addEventListener('click', hideInput);

function addBook(){
    author.style.display = 'block';
    title.style.display = 'block';
    pages.style.display = 'block';
    submit.style.display = 'block';
    display.style.display = 'none';
    document.getElementById('myForm').reset();
    myLibrary = []

}

const body =document.querySelector('body')
function hideInput(){
    author.style.display = 'none'
    title.style.display = 'none';
    pages.style.display = 'none';
    submit.style.display = 'none';
    display.style.display = 'block';
    display.style.alignItems = 'center'
   /*  const div = document.createElement('div');
    div.className = 'card';
    const cards = div.setAttribute('id','cards')
    body.appendChild(div);
    cards.textContent = myLibrary.join(' ') */
    
}

