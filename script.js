class book {
  constructor(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
  }
  addToTable() {
    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    const title = document.createElement("th");
    const author = document.createElement("th");
    const year = document.createElement("th");
    const pages = document.createElement("th");
    const read = document.createElement("th");
    title.textContent = this.title;
    author.textContent = this.author;
    year.textContent = this.year;
    pages.textContent = this.pages;
    read.innerHTML = `<input type="checkbox" class="cyberpunk-checkbox" ${
      this.read ? "checked" : ""
    }>`;
    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(year);
    tr.appendChild(pages);
    tr.appendChild(read);
    tbody.appendChild(tr);
  }
}
const book1 = new book("The Hobbit", "J.R.R. Tolkien", 1937, 310, true);
const book2 = new book(
  "The Fellowship of the Ring",
  "J.R.R. Tolkien",
  1954,
  423,
  false
);
const book3 = new book("The Two Towers", "J.R.R. Tolkien", 1954, 352, true);
book1.addToTable();
book2.addToTable();
book3.addToTable();
const dialog = document.querySelector("dialog");
const newBook = document.querySelector("#newBook");
const cancel = document.querySelector("#cancel");
newBook.addEventListener("click", () => {
  dialog.showModal();
});
const addBook = document.querySelector("#addBook");
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  if (!title || !author || !year || !pages) {
    alert("All fields must be filled out");
    return;
  }
  const newBook = new book(title, author, year, pages, read);
  newBook.addToTable();
  resetForm();
  dialog.close();
});
function resetForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#year").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read").checked = false;
}
cancel.addEventListener("click", (e) => {
  e.preventDefault();
  resetForm();
  dialog.close();
});
