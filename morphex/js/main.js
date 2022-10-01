// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
var popup = document.getElementById("popUp");
var popupBtn = document.getElementById("popupBtn");
var popupOuter = document.getElementById("popupOuter");
var checkbox = document.getElementById("checkbox");
var progress = document.getElementById("progress");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  // popup.classList.remove("active");
  popupOuter.classList.remove("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
  if (event.target == popupOuter) {
    popup.classList.remove("active");
    popupOuter.classList.remove("active");
    body.classList.remove("active");
  }
};
popupBtn.onclick = function () {
  popup.classList.toggle("active");
  popupOuter.classList.toggle("active");
  body.classList.toggle("active");
};
checkbox.onclick = function () {
  progress.classList.toggle("active");
};
// menu end