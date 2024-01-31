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
