var link = document.querySelector(".feedback-link");

var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".modal-close");

var login = popup.querySelector("[name=name]")

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
