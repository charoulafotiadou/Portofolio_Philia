document.addEventListener('DOMContentLoaded', function () {
    const cv_tiles = document.querySelectorAll('.cv_tiles');
    const details = document.querySelectorAll('.tiles_details');
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');
    const events = document.querySelectorAll('.event');

    let isNavActive = false;

    cv_tiles.forEach((tile, index) => {
        tile.addEventListener('click', (event) => {
            if (isNavActive || nav.classList.contains('active')) {
                event.preventDefault(); // Prevent default behavior if navigation is active
                return;
            }

            const detailsId = tile.dataset.details;
            details.forEach((detail) => {
                detail.style.display = detail.id === detailsId ? 'block' : 'none';
            });
        });
    });

    events.forEach(event => {
        const subevents = event.querySelectorAll('.subevent');
        if (subevents.length > 0) {
            event.addEventListener('click', () => {
                subevents.forEach(subevent => {
                    subevent.style.display = subevent.style.display === 'none' ? 'block' : 'none';
                });
            });
        }
    });
/*
    $(document).ready(function () {
        function isMobileDevice() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        }

        function setTilePositions() {
            var cumulativeHeight = 0;

            $('.cv_tiles').each(function (index) {
                var tileHeight = $(this).outerHeight(true);
                var offset = isMobileDevice() ? 30 : 70;

                var topPosition = cumulativeHeight + offset;
                $(this).css({
                    'top': topPosition + 'px',
                    'margin-bottom': '1%'
                });

                cumulativeHeight += tileHeight;
            });
        }

        setTilePositions();

        $(window).resize(function () {
            setTilePositions();
        });
    });

    menuIcon.addEventListener('click', function () {
        isNavActive = !isNavActive;
        nav.classList.toggle('active');

        cv_tiles.forEach(tile => {
            tile.classList.toggle('deactivated', isNavActive);
        });

        details.forEach(detail => {
            detail.classList.toggle('deactivated', isNavActive);
        });
    });
});