//document.addEventListener('DOMContentLoaded', function(){
//
//    navegacionFija()
//    resaltarEnlace()
//
//})
//
////function navegacionFija(){
////    const header = document.querySelector('.header')
////    const inicio = document.querySelector('.inicio')
////
////    window.addEventListener('scroll', function(){
////        if(inicio.getBoundingClientRect().bottom < 1){
////            header.classList.add('fixed')
////        }else{
////            header.classList.remove('fixed')
////        }
////    })
////}
//
//function resaltarEnlace() {
//    document.addEventListener('scroll', function() {
//        const sections = document.querySelectorAll('section')
//        const navLinks = document.querySelectorAll('.navegacion_principal a')
// 
//        let actual = '';
//        sections.forEach( section => {
//            const sectionTop = section.offsetTop
//            const sectionHeight = section.clientHeight
//            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ) {
//                actual = section.id
//            }
//        })
// 
//        navLinks.forEach(link => {
//            link.classList.remove('active')
//            if(link.getAttribute('href') === '#' + actual) {
//                link.classList.add('active')
//            }
//        })
//    })
//}