// selecting popup box, popup overlay, and button
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopupButton = document.getElementById("add-popup-button");

addPopupButton.addEventListener("click", function () {
  // show the popup box and overlay when the button is clicked
  popupOverlay.style.display = "block";
  popupBox.style.display = "block";
});

// selecting cancel button and popup overlay
var cancelButton = document.getElementById("cancel-popup");
cancelButton.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the default action of the button
  // hide the popup box and overlay when the cancel button is clicked
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

//select container, add book, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

addBook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `
       <h2>${bookTitleInput.value}</h2>
       <h5>${bookAuthorInput.value}</h5>
       <p>${bookDescriptionInput.value}</p>
      <button onclick="deleteBook(event)">Delete</button>`;
  container.appendChild(div);
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
});

function deleteBook(event) {
  var bookContainer = event.target.parentElement;
  container.removeChild(bookContainer);
}
