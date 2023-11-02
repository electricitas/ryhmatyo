document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const etunimi = document.querySelector('input[name="etunimi"]').value;
        if (etunimi === "") {
            alert("Etunimi on pakollinen. T�yt� se ennen l�hett�mist�.");
            return;
        }
        const sukunimi = document.querySelector('input[name="sukunimi"]').value;
        if (sukunimi === "") {
            alert("Sukunimi on pakollinen. T�yt� se ennen l�hett�mist�.");
            return;
        }
        const email = document.querySelector('input[name="email"]').value;
        if (!isValidEmail(email)) {
            alert("S�hk�postiosoite ei ole kelvollinen. Tarkista se ennen l�hett�mist�.");
            return;
        }
        const allergiat = document.querySelector('textarea[name="allergiat"]').value;
        if (allergiat.trim() === "") {
            alert("Ruoka-aineallergiat eiv�t voi olla tyhji�. T�yt� ne ennen l�hett�mist�.");
            return;
        }
        const lihaValinta = document.querySelector('input[name="Liha"]:checked');
        if (!lihaValinta) {
            alert("Valitse, oletko lihansy�j� vai kasvissy�j�.");
            return;
        }
        const valitutRuoat = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="box"]:checked');
        checkboxes.forEach(function (checkbox) {
            valitutRuoat.push(checkbox.value);
        });
        const tulossivu = window.open("", "Tulokset", "width=400,height=400");
        tulossivu.document.write("<h1>Sy�mistottumukset</h1>");
        tulossivu.document.write("<p>Etunimi: " + etunimi + "</p>");
        tulossivu.document.write("<p>Sukunimi: " + sukunimi + "</p>");
        tulossivu.document.write("<p>S�hk�postiosoite: " + email + "</p>");
        tulossivu.document.write("<p>Ruoka-aineallergiat: " + allergiat + "</p>");
        tulossivu.document.write("<p>Olen: " + lihaValinta.value + "</p>");
        tulossivu.document.write("<p>Sy�dyt ruoat: " + valitutRuoat.join(", ") + "</p");
    });
});

function isValidEmail(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}
