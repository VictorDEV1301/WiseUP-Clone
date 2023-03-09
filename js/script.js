const botao = document.getElementById("botao-mobile");
const botaob = document.getElementById("botao-back")
const menu = document.getElementById("menu-mobile");

botao.addEventListener("click", function(){
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        botaob.style.display = "none";
        botao.style.display = "block";
      } else {
        menu.style.display = "flex";
        botaob.style.display = "block";
        botao.style.display = "none";
      }
})

botaob.addEventListener("click", function(){
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        botaob.style.display = "none";
        botao.style.display = "block";
      } else {
        menu.style.display = "flex";
        botaob.style.display = "block";
        botao.style.display = "none";
      }
})