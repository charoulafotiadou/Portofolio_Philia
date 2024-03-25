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
//new TypeIt('#typeit-container', {
//    strings: ['Καθηγήτρια Συμβουλευτικής Ψυχολογίας', 'Διευθύντρια Εργαστηρίου Ποιοτικής Έρευνας στην Ψυχολογία και την Ψυχική Υγεία', 'Καθηγήτρια Συμβουλευτικής Ψυχολογίας, Τμήμα Ψυχολογίας στο Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών'],
//    speed: 70,
//    breakLines: false,
//    waitUntilVisible: true,
//}).go();

// Initialize TypeIt
var typeitInstance = new TypeIt("#typeit-container", {
    speed: 60,
    waitUntilVisible: true,
});

// Typing the initial text
typeitInstance
    .type("Καθηγη", { delay: 300 })
    .delete(1)
    .type("ή")
    .type("τρια Συμβουλευτικής Ψυχολογι")
    .pause(400)
    .delete(1)
    .type("ίας")
    .pause(600)
    .delete(103)
    .type("Διευθύντρια Εργαστηρίου ")
    .pause(300)
    .type("Ποιοτικής Έρευνας στην Ψυχολογία και την ψυχι")
    .pause(500)
    .move(-3)
    .delete(1)
    .type("Ψ")
    .move({ to: "END" })
    .type("κή Υγεία")
    .pause(300)
    .move(-77)
    .break()
    .type('Καθηγήτρια Συμβουλευτικής Ψυχολογίας')
    .go();
