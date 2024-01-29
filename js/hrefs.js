document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento de desplazamiento por defecto

        const targetId = this.getAttribute('href'); // Obtiene el ID de la sección destino
        const targetElement = document.querySelector(targetId); // Selecciona el elemento de destino

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - window.innerHeight * 0.10; // Calcula la posición de desplazamiento
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Añade un efecto de desplazamiento suave
            });

            document.querySelectorAll('.timeline-point').forEach(point => {
                point.classList.remove('timeline-point-selected');
            });

            const point = this.querySelector('.timeline-point');
            if (point) {
                point.classList.add('timeline-point-selected');
            }
        }


    });
});


document.querySelectorAll('.scroll-link').forEach(anchor => {
    const title = anchor.querySelector(".point-title");

    if (title) {
        title.style.display = "none";
    }

    anchor.addEventListener('mouseenter', function() {
        if (title) {
            title.style.display = "inline-block";
        }
    });

    anchor.addEventListener('mouseleave', function() {
        if (title) {
            title.style.display = "none";
        }
    });
});
