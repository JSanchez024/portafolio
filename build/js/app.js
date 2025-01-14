var swiperCard = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    //loop: true,
    rotate: true,
    mousewheel: {
        invert: false,
    }
})

/*Mostrar menu*/
const nav_menu = document.getElementById('nav_menu'),
      nav_barras = document.getElementById('nav_barras'),
      nav_cerrar = document.getElementById('nav_cerrar')

/* Menu show */
if(nav_barras){
    nav_barras.addEventListener('click', () =>{
        nav_menu.classList.add('show_menu')
   })
}

/* Menu hidden */
if(nav_cerrar){
    nav_cerrar.addEventListener('click', () =>{
        nav_menu.classList.remove('show_menu')
   })
}