const menuBurguer = document.getElementById('burguerMenu');

menuBurguer.addEventListener("click", () => {
    let menu = document.getElementById('listaMenu');
    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
})

