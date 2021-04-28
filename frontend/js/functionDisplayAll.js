///////////////////////////////////////////////////////////
////////// Afficher les produits sur index.html: //////////
///////////////////////////////////////////////////////////


// 1) ////////////////////////////////////////////////////////
/**
 * Fonction XMLHttpRequest qui se connecte
 * et récupére les données:
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
      var result = JSON.parse(this.responseText)
      //console.log(result)

      // envoie le result a la fonction display:
      displayAll(result)
      //console.log(display)

    } else if (this.readyState == XMLHttpRequest.DONE && this.status == 500) {
      console.log("Erreur 500")
    }
  }

  // Ouvre la connexion en précisant la méthode:
  xhr.open("GET", url, true)

  // Envoie la requête:
  xhr.send()
}

//console.log(result)
connect(url)

// 2) ////////////////////////////////////////////////////////
/**
 * Fonction qui affiche les produit:
 */

async function displayAll(result) {
  //console.log(result)

  //Selectionne l'id parent:
  let main = document.querySelector('main')

  ///////////////////////////////////////////////////////////
  /**
   * Création des éléments de base enfants:
   */
  // Container:
  let divContainer = createTag('div')
  addClass(divContainer, 'container')

  // Row:
  let divRow = createTag('div')
  addClass(divRow, 'row')

  // Col-12
  let divCol = createTag('div')
  addClass(divCol, 'col-12')

  // Box:
  let box = createTag('div')
  addClass(box, 'box')

  // BoxCarte:
  let boxCarte = createTag('div')
  addClass(boxCarte, 'box__carte')

  ///////////////////////////////////////////////////////////
  // Boucle qui parcour result:
  for (var i = 0; i < result.length; i++) {

    ///////////////////////////////////////////////////////////
    /**
     * Création des éléments enfants a chaque tour du tableau:
     */

    // Carte:
    let divCarte = createTag('div')
    addClass(divCarte, 'carte')

    // CarteTurned:
    let divCarteTurned = createTag('div')
    addClass(divCarteTurned, 'carte__turned')

    // Front:
    let divCarteFront = createTag('label')
    addClass(divCarteFront, 'carte__front')

    ///////////////////////////////////////////////////////////
    /**
     * Intérieur du Front:
     */

    // Image:
    let divCardPicture = createTag('img')
    addClass(divCardPicture, 'carte--picture')
    divCardPicture.src = result[i].imageUrl
    divCardPicture.alt = 'Image de nounours de la gamme Orinoco'

    // Overlay:
    let divCarteOverlay = createTag('div')
    addClass(divCarteOverlay, 'carte--overlay')

    // Titre du Front:
    let divCarteTitle = createTag('h3')
    addClass(divCarteTitle, 'carte--title')

    // Back:
    let divCarteBack = createTag('label')
    addClass(divCarteBack, 'carte__back')
    addClass(divCarteBack, 'text-center')
    addClass(divCarteBack, 'bg-gradient')

    ///////////////////////////////////////////////////////////
    /**
     * Intérieur du Back:
     */

    // Header:
    let divCarteHeader = createTag('div')
    addClass(divCarteHeader, 'card-header')

    // Body:
    let divCarteBody = createTag('div')
    addClass(divCarteBody, 'card-body')

    ///////////////////////////////////////////////////////////
    /**
     * Intérieur de Card-body:
     */

    // Description:
    let pCarteDescription = createTag('p')
    addClass(pCarteDescription, 'card-text')
    addClass(pCarteDescription, 'text-black-50')

    // Price:
    let price = createTag('p')
    addClass(price, 'card-text')

    // Intérieur de Price:
    let strongPrice = createTag('strong')
    addClass(strongPrice, 'text-light')
    addClass(strongPrice, 'font-weight-normal')

    // Carte Footer
    let carteFooter = createTag('div')
    addClass(carteFooter, 'card-footer')

    ///////////////////////////////////////////////////////////
    /**
     * Intérieur de CardFooter:
     */

    // Button:
    let button = createTag('a')
    addClass(button, 'btn')
    addClass(button, 'rounded-pill')
    addClass(button, 'btn-dark')
    button.textContent = "En savoir plus"

    ///////////////////////////////////////////////////////////
    //Récupére l'id pour le mettre dans le href:
    let id = result[i]._id
    //console.log(id)

    button.setAttribute("href", "../../frontend/product.html?id=" + id)
    //console.log(id)


    ///////////////////////////////////////////////////////////
    // Ajoute la reponse trouvé de la boucle result:
    divCardPicture.innerHTML = result[i].imageurl
    divCarteTitle.innerHTML = result[i].name
    pCarteDescription.innerHTML = result[i].description
    price.innerHTML = result[i].price + "€"
    //console.log(result)

    ///////////////////////////////////////////////////////////
    /**
     * Ajout des élément dans le index.html
     */

    // Ajout des élément de base:
    main.appendChild(divContainer)
    divContainer.appendChild(divRow)
    divRow.appendChild(divCol)

    divCol.appendChild(box)
    box.appendChild(boxCarte)
    boxCarte.appendChild(divCarte)
    divCarte.appendChild(divCarteTurned)

    // Ajoute le Front de la carte:
    divCarteTurned.appendChild(divCarteFront)
    divCarteFront.appendChild(divCardPicture)
    divCarteFront.appendChild(divCarteOverlay)
    divCarteOverlay.appendChild(divCarteTitle)

    // Ajoue le Back de la carte:
    divCarteTurned.appendChild(divCarteBack)
    divCarteBack.appendChild(divCarteHeader)
    divCarteBack.appendChild(divCarteBody)
    divCarteBody.appendChild(pCarteDescription)
    divCarteBody.appendChild(price)
    divCarteBody.appendChild(carteFooter)
    carteFooter.appendChild(button)
    //button.appendChild          (icone)

  }

}