var publicationsIndex = 0;
showPublication();

function showPublication() {
    var i;
    var publications = document.getElementsByClassName("publication");

    for (i = 0; i < publications.length; i++) {
        publications[i].style.display = "none";
    }

    publicationsIndex++;
    if (publicationsIndex > publications.length - 2) {
        publicationsIndex = 1;
    }

    for (i = publicationsIndex - 1; i < publicationsIndex + 2; i++) {
        publications[i].style.display = "block";
    }

    setTimeout(showPublication, 5000); // Change image every 5 seconds
}

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


    