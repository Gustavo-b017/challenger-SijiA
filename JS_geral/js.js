// Animando o menu do mobile
const menuMobile  = document.getElementById("menu-mobile");
const burgerMenu  = document.getElementById("btn-menu");

// Animando o menu mobile
menuMobile.addEventListener('click', animarMenu);

// Função pra abrir o menu no mobile e animar o burger
function animarMenu(){
  // Caso não exista a classe determinanda nos (''), o toggle irá adicionar
  menuMobile.classList.toggle('abrirMenu');
  burgerMenu.classList.toggle('active');
}
