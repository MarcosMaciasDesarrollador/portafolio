//   ##############################  toggle icon navbar  ########################
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header-nav');
{/* <i class='bx bx-x'></i> */}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

  //   ##############################  scroll sections active link  ########################
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    //   ##############################  sticky navbar  ########################
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    //   ############################## remove toggle icon and navbar when clcik navbar link (scroll)  ########################
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
//   ##############################  scroll revel  ########################
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-contenido, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-imagene, .services-contenedor, .portafolio-box, .cursos-contenido , .contacto-container form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contenido h1, .about-imagene, .cursos-caja ', { origin: 'left' });
ScrollReveal().reveal('.home-contenido p, .about-contenido, .formacion-caja ', { origin: 'right' });

