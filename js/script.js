// Sélection des éléments du DOM
var button = document.querySelector("#ajouterJournal");
var elementJournal = document.querySelector("#journal");
var elementLien = document.querySelector("#lien");
var valeursDiv = document.querySelector("#valeursAffichees");

// Ajout d'un événement click sur le bouton "Ajouter un journal"
button.addEventListener("click", () => {
    // Récupérer les valeurs des champs input
    var valueJournal = elementJournal.value;
    var valueLien = elementLien.value;

    // Vérifier si les deux champs sont remplis
    if (valueJournal && valueLien) {
        // Créer une nouvelle ligne pour afficher les valeurs
        var ligneDiv = document.createElement('div');
        ligneDiv.style.display = 'flex';
        ligneDiv.style.alignItems = 'center';
        ligneDiv.style.marginBottom = '10px';

        // Ajouter les informations du journal
        ligneDiv.innerHTML = `
            <p style="flex-grow: 1; margin: 0;">
                <strong>Titre du journal :</strong> ${valueJournal}<br>
                <strong>Lien du journal :</strong> <a href="${valueLien}" target="_blank">${valueLien}</a>
            </p>
            <button style="margin-left: 10px; background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;" class="buttonSuppr">Supprimer</button>
        `;

        // Ajouter la ligne au conteneur principal
        valeursDiv.append(ligneDiv);

        // Réinitialiser les champs après ajout
        elementJournal.value = '';
        elementLien.value = '';
    } else {
        alert('Veuillez remplir les deux champs');
    }
});

// Gestionnaire d'événements pour le bouton "Supprimer" avec délégation
valeursDiv.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains('buttonSuppr')) {
        // Supprimer la ligne contenant le bouton cliqué
        event.target.parentElement.remove();
    }
});
