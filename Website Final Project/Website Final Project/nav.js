function toggleNavBar () {
  var navBar = document.getElementById("mainNav");
  if (document.getElementById("navActivator").getBoundingClientRect().top < 0) {
    navBar.classList.remove("hiddenNav");
    navBar.classList.add("displayNav");
  } else {
    navBar.classList.remove("displayNav");
    navBar.classList.add("hiddenNav");
  } 
}

document.addEventListener("DOMContentLoaded", toggleNavBar);
document.addEventListener("load", toggleNavBar);
document.addEventListener("scroll", toggleNavBar);
document.addEventListener("resize", toggleNavBar);