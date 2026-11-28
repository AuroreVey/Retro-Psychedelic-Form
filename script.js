const formulaire = document.querySelector("form");
const telephone = document.getElementById("telephone");
const erreurTelephone = document.getElementById("erreurTelephone");

function validerFormulaire(event) {

    erreurTelephone.textContent = "";

    if (telephone.validity.valid === false) {
        event.preventDefault();
        const messageErreur = document.createElement("p");
        messageErreur.classList.add("message-erreur");

        if (telephone.validity.valueMissing) {
            messageErreur.textContent = "Allez, promis, on ne t'appellera pas !";
        } else if (telephone.validity.patternMismatch) {
            messageErreur.textContent = "Respecte le format 987-654-3210.";
        }

        erreurTelephone.appendChild(messageErreur);
    }
}

function verifierTelephone() {

    if (telephone.validity.valid) {
        erreurTelephone.textContent = "";
    }
}

formulaire.addEventListener("submit", validerFormulaire);
telephone.addEventListener("input", verifierTelephone);