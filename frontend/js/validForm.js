///////////////////////////////////////////////////////////
///////////// Formulaire validation et envoie /////////////
///////////////////////////////////////////////////////////

/**
 * Pour les routes POST,
 * l’objet contact envoyé au serveur doit contenir les champs
 * firstName,lastName,address,cityetemail.
 * 
 * Le tableau des produit senvoyé au backend doit être un array de
 * strings product_id.
 * 
 * Les types de ces champs et leur présence doivent être validés avant
 * l’envoi des données au serveur.
 */



// Selectionne le boutton valider la commande:
let submitButton = document.getElementById('buttonSubmit')
console.log(buttonSubmit)

// Ecoute le boutton:
submitButton.addEventListener('click', validation)
    function validation (event) {
        // Si le champ
    }



// Recherche un nombre entre 0 et 9 5 fois:
let masqueZip = /^\d{5}/
