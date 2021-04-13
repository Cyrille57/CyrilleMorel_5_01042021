///////////////////////////////////////////////////////////
//////////////////// Fonction de base: ////////////////////
///////////////////////////////////////////////////////////


/**
 * Fonction XMLHttpRequest qui se connecte
 *  et récupére les données:
 */

// Déclaration des variables:


const url = "http://localhost:3000/api/teddies";

async function connect(url) {

    // Creer un nouvel objet Ajax de type XMLHttpRequest:
    let xhr = new XMLHttpRequest()

    // Détecte de la requête:
    xhr.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

        // Envoie terminé et contenu bien recue et convertit en Json:
        let result = JSON.parse(this.responseText)

        // envoie le result a la fonction display:
        display(result)

      } else if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
        console.log("Erreur 404")
      }
    }

    // Ouvre la connexion en précisant la méthode:
    xhr.open("GET", url, true)

    // Envoie la requête:
    xhr.send()
}

  //console.log(result)
  connect(url)



/**
 * Fonction qui crées les balises
 */
function createTag(tag) {
    return document.createElement(tag)
  }

/**
 * Fonction qui ajoute des classes aux balises:
 */
function addClass(name, classe) {
    return name.classList.add(classe)
  }