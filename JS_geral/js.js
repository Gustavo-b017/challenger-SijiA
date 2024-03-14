// Animando o menu do mobile
const menu        = document.getElementById("menu");
const burgerMenu  = document.getElementById("btn-menu");

// Animando o menu mobile
menu.addEventListener('click', animarMenu);

// Função pra abrir o menu no mobile e animar o burger
function animarMenu(){
  // Caso não exista a classe determinanda nos (''), o toggle irá adicionar
  menu.classList.toggle('abrirMenu');
  burgerMenu.classList.toggle('active');
}
