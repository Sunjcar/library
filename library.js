let myLibrary = [];

class Book {
  constructor(title,author,pages,read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
}
/* const submit = document.getElementById('submit')
submit.addEventListener('click', submitBook.addBookToLibrary); */

//Add book module
const  submitBook = (()=>{
  submit.addEventListener('click', (e) => {
  //Cache Dom
  //Creating new book via user input,
    const addBook = new Book(
    document.getElementById('title').value,  
    document.getElementById('author').value,
    document.getElementById('pages').value,
    document.getElementById('read'),
  );
  

  //Creating container for new books
    const books = document.getElementById('books')
    const div = document.createElement('div');
  //Creates container for individual cards  
    div.className= 'cards'
    books.appendChild(div);
    const Title = document.createElement('p');
    const Author = document.createElement('p');
    const Pages = document.createElement('p');
    const read = document.createElement('button');
    const status = document.getElementById('status')
    read.textContent = 'Read';
    read.classList.add('btn')
    read.onclick = readToggle
  //Remove button
    const remove = document.createElement('button');
    remove.textContent = 'Remove'
    remove.style.backgroundColor = '#ef4444'
    remove.className = ('delete')
    //Add Button
    const modal = document.getElementById('modal')
    const newBook = document.querySelector(".new-book");
  //Adding each section of the book card
    div.appendChild(Title);
    div.appendChild(Author);
    div.appendChild(Pages);
    div.appendChild(read);
    div.appendChild(remove);

    //Bind events
    const submit = document.getElementById('submit')
    remove.addEventListener('click', removeBook)

    //Functions
    function removeBook(){
    div.parentNode.removeChild(div) ;
    }

    function readToggle(){
      if(read.textContent === "Read"){
      read.style.backgroundColor = 'lightpink'
      read.textContent = 'Not Read'
    }else if (read.textContent === "Not Read"){
      read.style.backgroundColor = 'lightgreen'
      read.textContent = 'Read'
    }
  }
  if( status.value === 'Read'){
    read.textContent = status.value
    read.style.backgroundColor = 'lightgreen'
    }else if (status.value === 'Not Read'){
    read.textContent  = status.value
    read.style.backgroundColor = 'lightpink'
    }

  //Dom creation   
  //Updates current array information 
    Title.textContent = "Title:" + addBook.title
    Author.textContent = "Author:" + addBook.author
    Pages.textContent = "Pages:" + addBook.pages
    status.value = addBook.read
    myLibrary.push(addBook);
    modal.style.display = 'none'  
  })

})();

//modal and form reset module
//Displays modal with inputs, resets form data and array
const formReset = (() => {
  const modal = document.getElementById('modal')
  const addBook = document.querySelector(".new-book");
  addBook.addEventListener('click',(e)=>{
    modal.style.display ='block'
    document.getElementById('myForm').reset();
    myLibrary = []
  })
})();

window.onclick= function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
