const burger = document.getElementById("burg");
const burger_menu = document.getElementById("burger_menu");
const main= document.querySelector("main");
const footer= document.querySelector("footer");


function toggleBurger() {
  burger_menu.style.display="flex";
  main.classList.add("shadow");
  footer.classList.add("shadow");
}

const hidden = document.getElementById("hidden_menu")

function hiddenMenu(){
  burger_menu.style.display="none";
  main.classList.remove("shadow");
  footer.classList.remove("shadow")
}



