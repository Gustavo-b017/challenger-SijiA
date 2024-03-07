const mostar = document.querySelector("#menu_icone")
const menu = document.querySelector(".esconder")
const fechar = document.querySelector(".ultimo_menu")



mostar.addEventListener("click", function(){
  menu.classList.add("block")
})

fechar.addEventListener("click", function(){
  menu.classList.remove("block")
})
