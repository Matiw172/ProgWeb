window.addEventListener('resize', onResize);

setInterval(function() {
    document.querySelectorAll('.carousel video').forEach(function(video) {
        if (!video.closest('.carousel-cell').classList.contains('is-selected')) {
            video.pause();
        }
    });
}, 100); // Ejecuta esta verificación cada 100 milisegundos

var player = videojs('my-video', {
    controlBar: {
        fullscreenToggle: false
    }
});

player.on('dblclick', function(e) {
    e.preventDefault();
    // Puedes dejar esto vacío o agregar alguna otra funcionalidad si lo deseas
});


function onResize() {
document.addEventListener("DOMContentLoaded", function() {
    var galleries = document.querySelectorAll('.main-gallery');

    galleries.forEach(gallery => {
        var dots = gallery.querySelector('.flickity-page-dots');
        var carousel = gallery.querySelector('.carousel');

        if (dots && carousel) {
            // Mover los puntos al final del body o a otro contenedor adecuado
            document.body.appendChild(dots);

            // Función para actualizar la posición de los puntos
            var updateDotsPosition = function() {
                var rect = carousel.getBoundingClientRect();
                dots.style.position = 'absolute';
                dots.style.top = rect.bottom + 'px'; // Posición justo debajo del carrusel
                dots.style.left = rect.left + 'px'; // Alineado con el lado izquierdo del carrusel
                dots.style.width = carousel.offsetWidth + 'px'; // Mismo ancho que el carrusel
                dots.style.zIndex = '10'; // Asegúrate de que los puntos estén por encima de otros elementos
            };

            // Actualizar la posición de los puntos al cargar y al cambiar el tamaño de la ventana
            updateDotsPosition();
            window.addEventListener('resize', updateDotsPosition);
        }
    });
});
}

onResize();

document.addEventListener("DOMContentLoaded", function() {
    var flkty = new Flickity('.carousel', {
        // Otras opciones de Flickity
        pageDots: true
    });

    function updateDraggable() {
        var isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;

        if (isMobile) {
            // Habilitar draggable para móviles
            flkty.options.draggable = true;
        } else {
            // Deshabilitar draggable para pantallas más grandes
            flkity.options.draggable = false;
        }
        flkty.updateDraggable();
    }

    // Actualizar draggable al cargar y al cambiar el tamaño de la ventana
    updateDraggable();
    window.addEventListener('resize', updateDraggable);
});
