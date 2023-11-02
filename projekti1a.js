document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const etunimi = document.querySelector('input[name="etunimi"]').value;
        if (etunimi === "") {
            alert("Etunimi on pakollinen. Täytä se ennen lähettämistä.");
            return;
        }
        const sukunimi = document.querySelector('input[name="sukunimi"]').value;
        if (sukunimi === "") {
            alert("Sukunimi on pakollinen. Täytä se ennen lähettämistä.");
            return;
        }
        const email = document.querySelector('input[name="email"]').value;
        if (!isValidEmail(email)) {
            alert("Sähköpostiosoite ei ole kelvollinen. Tarkista se ennen lähettämistä.");
            return;
        }
        const allergiat = document.querySelector('textarea[name="allergiat"]').value;
        if (allergiat.trim() === "") {
            alert("Ruoka-aineallergiat eivät voi olla tyhjiä. Täytä ne ennen lähettämistä.");
            return;
        }
        const lihaValinta = document.querySelector('input[name="Liha"]:checked');
        if (!lihaValinta) {
            alert("Valitse, oletko lihansyöjä vai kasvissyöjä.");
            return;
        }
        const valitutRuoat = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="box"]:checked');
        checkboxes.forEach(function (checkbox) {
            valitutRuoat.push(checkbox.value);
        });
        const tulossivu = window.open("", "Tulokset", "width=400,height=400");
        tulossivu.document.write("<h1>Syömistottumukset</h1>");
        tulossivu.document.write("<p>Etunimi: " + etunimi + "</p>");
        tulossivu.document.write("<p>Sukunimi: " + sukunimi + "</p>");
        tulossivu.document.write("<p>Sähköpostiosoite: " + email + "</p>");
        tulossivu.document.write("<p>Ruoka-aineallergiat: " + allergiat + "</p>");
        tulossivu.document.write("<p>Olen: " + lihaValinta.value + "</p>");
        tulossivu.document.write("<p>Syödyt ruoat: " + valitutRuoat.join(", ") + "</p");
    });
});

function isValidEmail(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}
