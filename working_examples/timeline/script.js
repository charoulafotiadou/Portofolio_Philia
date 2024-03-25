const events = document.querySelectorAll('.event-description');
events.forEach(event => {
    event.addEventListener('click', () => {
        event.classList.toggle('active');
    });
});