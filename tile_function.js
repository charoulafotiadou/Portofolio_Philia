document.addEventListener('DOMContentLoaded', function () {
    const cv_tiles = document.querySelectorAll('.cv_tiles');
    const details = document.querySelectorAll('.tiles_details');
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');

    cv_tiles.forEach((tile) => {
        tile.addEventListener('click', (event) => {
            const detailsId = tile.dataset.details;
            const detail = document.getElementById(detailsId);

            detail.style.display = (detail.style.display === 'block' || getComputedStyle(detail).display === 'block') ? 'none' : 'block';

            // Toggle the display of the clicked detail
            if (detail.style.display === 'block' || getComputedStyle(detail).display === 'block') {
                detail.style.display = 'none'; // Hide the detail if it's already visible
            } else {
                details.forEach((d) => d.style.display = 'none'); // Hide all other details
                detail.style.display = 'block'; // Show the clicked detail
            }
        });
    });
});
