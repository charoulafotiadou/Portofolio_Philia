document.addEventListener('DOMContentLoaded', function () {
    const cv_tiles = document.querySelectorAll('.cv_tiles');
    const details = document.querySelectorAll('.tiles_details');
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');

    const toggleDetail = (tile, detail) => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        if (isMobile) {
            // In mobile view, toggle the details below the tile
            const isDetailVisible = detail.style.display === 'block' || getComputedStyle(detail).display === 'block';
            details.forEach((d) => d.style.display = 'none'); // Hide all details
            cv_tiles.forEach((t) => t.style.height = 'auto'); // Reset tile height

            if (!isDetailVisible) {
                detail.style.display = 'block'; // Show the clicked detail
                tile.style.height = 'auto'; // Extend the tile
                detail.style.top = 'auto'; // Adjust the position in mobile view
            } else {
                detail.style.display = 'none'; // Hide the detail
            }
        } else {
            // In laptop view, toggle the details next to the tile
            const isDetailVisible = detail.style.display === 'block' || getComputedStyle(detail).display === 'block';

            if (isDetailVisible) {
                detail.style.display = 'none'; // Hide the detail if it's already visible
            } else {
                details.forEach((d) => d.style.display = 'none'); // Hide all other details
                detail.style.display = 'block'; // Show the clicked detail
            }
        }
    };

    cv_tiles.forEach((tile) => {
        tile.addEventListener('click', (event) => {
            const detailsId = tile.dataset.details;
            const detail = document.getElementById(detailsId);
            toggleDetail(tile, detail);
        });
    });

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
