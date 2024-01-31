document.addEventListener("DOMContentLoaded", function() {
    const list = document.querySelector('.infinite-carousel .list');
    const items = document.querySelectorAll('.infinite-carousel .item');

    // Calcula la altura total de los elementos, incluyendo márgenes
    let totalHeight = Array.from(items).reduce((total, item) => {
        return total + item.offsetHeight + parseInt(window.getComputedStyle(item).marginBottom);
    }, 0);

    // Duplica el contenido
    list.innerHTML += list.innerHTML;

    let currentTop = 0;

    function moveItems() {
        currentTop -= 1; // Ajusta esta velocidad según sea necesario

        if (Math.abs(currentTop) >= totalHeight) {
            currentTop = 0;
        }

        list.style.top = `${currentTop}px`;

        requestAnimationFrame(moveItems);
    }

    moveItems();
});
