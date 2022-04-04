gsap.registerPlugin(ScrollTrigger);

const ufo = document.querySelectorAll(".ufo");
const sun = document.querySelectorAll(".sun");
const saturn = document.querySelectorAll(".saturn");
const jupiter = document.querySelectorAll(".jupiter");
const mars = document.querySelectorAll(".mars");
const moon = document.querySelectorAll(".moon");
const earth = document.querySelectorAll(".earth");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container__animation", //Contenedor de la animación donde se hará el scroll infinito (Muy importante!!)
    pin: true, //Ancla el contenedor para que se ejecute la animación infinita (sin el pin la animación no tiene scroll infinito)(Muy importante!!)
    markers: false, //Marcas que indican donde empieza y acaba tanto el scroll como la animación
    start: "top top", //Inicio de las marcas arriba del todo del contenedor de la animación y de la pantalla
    end: "100% 100%", //Final de las marcas abajo del todo del contenedor de la animación y de la pantalla
    scrub: true, //
  },
});

tl.to(ufo, { scale: 0.5, y: "65vh", duration: 4 }); //con el .to le indicamos a la linea del tiempo que la animación empiece por el inicio (start)
tl.to(sun, { opacity: 1, y: "-50vh", scale: 1.5, duration: 3.5 });
tl.to(saturn, { opacity: 1, y: "-90vh", scale: 1, duration: 3.5}, "-=2.5");
tl.to(ufo, { rotate: 45, duration: 3.5 });
tl.to(ufo, { x: "-35vw", duration: 4 }, "-=2.5");
tl.to(saturn, { y: "-150vh", duration: 3.5 }, "-=4");
tl.to(ufo, { rotate: -45, duration: 3.5 });
tl.to(sun, { y: "-150vh", duration: 3.5 }, "-=2");
tl.to(ufo, { x: "40vw", duration: 5 }, "-=2.5");
tl.to(jupiter, { x: "-120vw", opacity: 1, duration: 8 }, "-=5");
tl.to(ufo, { rotate: 45, duration: 5 });
tl.to(ufo, { x: "-35vw", y: "80vh", duration: 8 }, "-=2.5");
tl.to(jupiter, { x: "100vw", duration: 8 }, "-=5");
tl.to(mars, { x: "180vw", opacity: 1, duration: 8 }, "-=9");
tl.to(ufo, { rotate: -45, duration: 3.5 }, "-=3");
tl.to(mars, { y: "-50vh", duration: 8 }, "-=3");
/* tl.to(ufo, { x: "-10vw", duration: 8 }); */
tl.to(moon, { opacity: 1, y: "-70vh", duration: 8 });
tl.to(moon, { y: "-200vh", duration: 8 });
tl.to(ufo, { x: "42vw", duration: 5 });
tl.to(earth, { opacity: 1, y: "-190vh", duration: 8 });
tl.to(ufo, { x: "15vw", y: "21vh", duration: 8 }, "-=2");
tl.to(ufo, { scale: 0.2, duration: 8 }, "-=8");