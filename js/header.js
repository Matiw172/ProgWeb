document.addEventListener("DOMContentLoaded", function () {
    var link = document.getElementById('headerBT');
    var arrow = document.getElementById('CollapseArrow')
    var active = false;
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    }

    if (isTouchDevice()) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            if (active) {
                hideHeader();
                active = false;
            } else {
                showHeader();
                active = true;
            }
            console.log('Dispositivo táctil, ejecutando función especial.');
        });
        arrow.addEventListener('click', function (event) {
            event.preventDefault();
            if (active) {
                hideHeader();
                active = false;
            } else {
                showHeader();
                active = true;
            }
            console.log('Dispositivo táctil, ejecutando función especial.');
        });
    }
});

function showHeader() {
    $('#mobileMenu').animate({ top: "70%", backgroundColor: 'black' });
    $('.collapse-arrow').css('transform', 'scaleY(-1)'); // Gira la flecha
}

function hideHeader() {
    $('#mobileMenu').animate({ top: "-200%", backgroundColor: 'transparent' },);
    $('#mobileMenu .bg-black').animate({ top: "-200%", backgroundColor: 'transparent' },);
    $('.collapse-arrow').css('transform', ''); // Restablece la rotación de la flecha

}
