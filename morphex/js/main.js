// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
var popup = document.getElementById("popUp");
var popupBtn = document.getElementById("popupBtn");
var popupOuter = document.getElementById("popupOuter");
var checkbox = document.getElementById("checkbox");
var progress = document.getElementById("progress");
var lock = document.getElementById("lock");
var lockInner = document.getElementById("lockInner");
var lockBtn = document.getElementById("lockBtn");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  if (popup) {
    popup.classList.remove("active");
    popupOuter.classList.remove("active");
  }
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
  if (event.target == popupOuter && popupOuter) {
    popup.classList.remove("active");
    popupOuter.classList.remove("active");
    body.classList.remove("active");
  }
  if (event.target == lock) {
    lock.classList.remove("active");
    lockInner.classList.remove("active");
    body.classList.remove("active");
  }
};

if (popupBtn) {
  popupBtn.onclick = function () {
    popup.classList.toggle("active");
    popupOuter.classList.toggle("active");
    body.classList.toggle("active");
  };
}
if (popupBtn) {
  popupBtn.onclick = function () {
    popup.classList.toggle("active");
    popupOuter.classList.toggle("active");
    body.classList.toggle("active");
  };
}
if (checkbox && progress) {
  checkbox.onclick = function (e) {
    if (e.target.checked) {
      progress.style = "width: 100%;";
    } else {
      progress.style = "width: 65%;";
    }
    // progress.classList.toggle("active");
  };
}

// menu end
if (lockBtn) {
  lockBtn.onclick = function () {
    lock.classList.toggle("active");
    lockInner.classList.toggle("active");
    body.classList.toggle("active");
  };
}
