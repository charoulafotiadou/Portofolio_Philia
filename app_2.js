var publicationsIndex = 0;

// Function to update the number of visible images based on screen width
function updateVisibleImages() {
    const publications = document.querySelectorAll('.publication');
    const isMobile = window.innerWidth <= 768;
    const visibleCount = isMobile ? 2 : 3; // Show 2 images on mobile, 3 on larger screens

    // Hide all publications
    publications.forEach(pub => pub.style.display = 'none');

    // Show the required number of publications
    for (let i = 0; i < visibleCount; i++) {
        if (publications[(publicationsIndex + i) % publications.length]) {
            publications[(publicationsIndex + i) % publications.length].style.display = 'block';
        }
    }
}

// Function to show the publications
function showPublication() {
    var publications = document.getElementsByClassName("publication");

    for (var i = 0; i < publications.length; i++) {
        publications[i].style.display = "none";
    }

    publicationsIndex++;
    if (publicationsIndex > publications.length - 1) {
        publicationsIndex = 0;
    }

    updateVisibleImages(); // Ensure the number of visible images is correct

    setTimeout(showPublication, 5000); // Change image every 5 seconds
}

// Call the function on load and on resize
window.addEventListener('load', function() {
    updateVisibleImages();
    showPublication();
});
window.addEventListener('resize', updateVisibleImages);

// Initialize TypeIt
var typeitInstance = new TypeIt("#typeit-container", {
    speed: 60,
    waitUntilVisible: true,
});

// Typing the initial text
typeitInstance
    .type("Διευθύντρια Ποιοτικής Έρευνας στην Ψυχολογία και την ψυχι")
    .pause(500)
    .move(-3)
    .delete(1)
    .type("Ψ")
    .move(3)
    .type("κή Υγεία")
    .pause(1000)
    .delete(66)
    .type("Καθηγη", { delay: 300 })
    .delete(1)
    .type("ή")
    .type("τρια Συμβουλευτικής Ψυχολογι")
    .pause(400)
    .delete(1)
    .type("ίας")
    .pause(600)
    .type(" στο Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών")
    .go()
    .pause(1000);
