document.addEventListener("DOMContentLoaded", function() {
    const menuBotao = document.querySelector(".menu__botao");
    const cabecalhoMenu = document.querySelector(".cabecalho__menu");

    menuBotao.addEventListener("click", function() {
        cabecalhoMenu.classList.toggle("active");
    })
})