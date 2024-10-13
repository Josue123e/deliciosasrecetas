const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Inicializa la opacidad de los slides
slides.forEach(slide => {
    slide.style.opacity = 0;
});
slides[currentSlide].style.opacity = 1; // Muestra el primer slide

function showSlide() {
    slides[currentSlide].style.opacity = 0; // Desaparece el slide actual
    currentSlide = (currentSlide + 1) % slides.length; // Cambia al siguiente slide
    slides[currentSlide].style.opacity = 1; // Muestra el nuevo slide
}

setInterval(showSlide, 2000); // Cambia de slide cada 2 segundos

const titulos = document.querySelectorAll('.titulo');
const imagenHover = document.getElementById('imagen-hover');
const imgReceta = document.getElementById('img-receta');

titulos.forEach(titulo => {
    titulo.addEventListener('mouseenter', () => {
        const imgSrc = titulo.getAttribute('data-img');
        imgReceta.src = imgSrc;
        imagenHover.style.display = 'block';
    });

    titulo.addEventListener('mouseleave', () => {
        imagenHover.style.display = 'none';
    });
});


document.getElementById('comentario-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Crear un nuevo elemento para el comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'comentario';
    nuevoComentario.innerHTML = `<strong>${nombre}</strong>: ${comentario}`;

    // Agregar el nuevo comentario a la lista
    document.getElementById('comentarios-lista').appendChild(nuevoComentario);

    // Limpiar el formulario
    document.getElementById('comentario-form').reset();
});
