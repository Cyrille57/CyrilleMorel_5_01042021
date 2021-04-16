///////////////////////////////////////////////////////////
/// Fonction pour afficher les produits sur index.html: ///
///////////////////////////////////////////////////////////





async function display(result) {

  console.log(result)
  //Selectionne l'id parent:
  let main = document.querySelector('main')

  /**
   * Création des éléments enfants:
   */

  // Box:
  let box = createTag('div')
  addClass(box, 'box')

  // BoxCarte:
  let boxCarte = createTag('div')
  addClass(boxCarte, 'box__carte')

  // Boucle qui parcour result:
  for (var i = 0; i < result.length; i++) {

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

    /**
     * Intérieur du Back:
     */

    // Header:
    let divCarteHeader = createTag('div')
    addClass(divCarteHeader, 'card-header')

    // Body:
    let divCarteBody = createTag('div')
    addClass(divCarteBody, 'card-body')

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

    /**
     * Intérieur de CardFooter:
     */

    // Button:
    let button = createTag('a')
    addClass(button, 'btn')
    addClass(button, 'rounded-pill')
    addClass(button, 'btn-dark')
    button.textContent = "En savoir plus"


    //Récupére l'id pour le mettre dans le href:
    let id = result[i]._id
    //console.log(id)

    button.setAttribute("href", "../../frontend/product.html?id=" + id)
    //console.log(id)

    /**
     * Intérieur du Button:
     */

    // Icone:
    /*
      icone = createTag('i');
      addClass(icone, 'fas')
      addClass(icone, 'fa-shopping-cart')
    */

    // Ajoute la reponse trouvé de la boucle result:
    divCardPicture.innerHTML = result[i].imageurl
    divCarteTitle.innerHTML = result[i].name
    pCarteDescription.innerHTML = result[i].description
    price.innerHTML = result[i].price
    //console.log(result)

    /**
     * Ajout des élément dans le index.html
     */

    // Ajout des élément de base:
    main.appendChild(box)
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