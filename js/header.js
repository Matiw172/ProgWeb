document.addEventListener("DOMContentLoaded", function () {
    var link = document.getElementById('headerBT');
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
    }
});

function showHeader() {
    $('#mobileMenu').animate({ top: "70%", backgroundColor: 'black' });
    $('#mobileMenu .arrow .img-center');
}

function hideHeader() {
    $('#mobileMenu').animate({ top: "-200%", backgroundColor: 'transparent' },);

    $('#mobileMenu .bg-black').animate({ top: "-200%", backgroundColor: 'transparent' },);
    $('#mobileMenu .arrow .img-center');
    
}
