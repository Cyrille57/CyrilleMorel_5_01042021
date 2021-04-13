///////////////////////////////////////////////////////////
/// Fonction pour afficher les produits sur index.html: ///
///////////////////////////////////////////////////////////


// Déclaration des variables:
let main              = []
let box               = []
let boxCarte          = []
let divCarte          = []
let divCarteTurned    = []
let divCarteFront     = []
let divCardPicture    = []
let divCarteOverlay   = []
let divCarteTitle     = []
let divCarteBack      = []
let divCarteHeader    = []
let divCarteBody      = []
let pCarteDescription = []
let price             = []
let strongPrice       = []
let carteFooter       = []
let button            = []
let _id               = []
let icone             = []
//console.log(_id)



async function display (result) {


  //Selectionne l'id parent:
    main = document.querySelector('main')

  /**
   * Création des éléments enfants:
   */

  // Box:
    box = createTag('div')
    addClass(box, 'box')

  // BoxCarte:
    boxCarte = createTag('div')
    addClass(boxCarte, 'box__carte')

  // Boucle qui parcour result:
    for (var i = 0; i < result.length; i++) {

  /**
   * Création des éléments enfants a chaque tour du tableau:
   */

  // Carte:
    divCarte = createTag('div')
    addClass(divCarte, 'carte')

  // CarteTurned:
    divCarteTurned = createTag('div')
    addClass(divCarteTurned, 'carte__turned')

  // Front:
    divCarteFront = createTag('label')
    addClass(divCarteFront, 'carte__front')

  /**
   * Intérieur du Front:
   */

  // Image:
    divCardPicture = createTag('img')
    addClass(divCardPicture, 'carte--picture')
    divCardPicture.src = result[i].imageUrl
    divCardPicture.alt = 'Image de nounours de la gamme Orinoco'

  // Overlay:
    divCarteOverlay = createTag('div')
    addClass(divCarteOverlay, 'carte--overlay')

  // Titre du Front:
    divCarteTitle = createTag('h3')
    addClass(divCarteTitle, 'carte--title')

  // Back:
    divCarteBack = createTag('label')
    addClass(divCarteBack, 'carte__back')
    addClass(divCarteBack, 'text-center')
    addClass(divCarteBack, 'bg-gradient')

  /**
   * Intérieur du Back:
   */

  // Header:
    divCarteHeader = createTag('div')
    addClass(divCarteHeader, 'card-header')

  // Body:
    divCarteBody = createTag('div')
    addClass(divCarteBody, 'card-body')

  /**
   * Intérieur de Card-body:
   */

  // Description:
    pCarteDescription = createTag('p')
    addClass(pCarteDescription, 'card-text')
    addClass(pCarteDescription, 'text-black-50')

  // Price:
    price = createTag('p')
    addClass(price, 'card-text')

  // Intérieur de Price:
    strongPrice = createTag('strong')
    addClass(strongPrice, 'text-light')
    addClass(strongPrice, 'font-weight-normal')

  // Carte Footer
    carteFooter = createTag('div')
    addClass(carteFooter, 'card-footer')

  /**
   * Intérieur de CardFooter:
   */

  // Button:
    button = createTag('a')
    addClass(button, 'btn')
    addClass(button, 'rounded-pill')
    addClass(button, 'btn-dark')
    button.textContent = "Ajouter au panier"

  //Récupére l'id pour le mettre dans le href:
    _id[i] = result[i]._id
    //console.log(_id)
    //button.setAttribute("href", "../product.html?_id")
 



   //console.log(_id)

  /**
   * Intérieur du Button:
   */

  // Icone:
    icone = createTag('i');
    addClass(icone, 'fas')
    addClass(icone, 'fa-shopping-cart')

  // Ajoute la reponse trouvé de la boucle result:
    divCardPicture.innerHTML      = result[i].imageurl
    divCarteTitle.innerHTML       = result[i].name
    pCarteDescription.innerHTML   = result[i].description
    price.innerHTML               = result[i].price
    //console.log(result)

  /**
   * Ajout des élément dans le index.html
   */

    // Ajout des élément de base:
    main.appendChild            (box)
    box.appendChild             (boxCarte)
    boxCarte.appendChild        (divCarte)
    divCarte.appendChild        (divCarteTurned)

    // Ajoute le Front de la carte:
    divCarteTurned.appendChild  (divCarteFront)
    divCarteFront.appendChild   (divCardPicture)
    divCarteFront.appendChild   (divCarteOverlay)
    divCarteOverlay.appendChild (divCarteTitle)

    // Ajoue le Back de la carte:
    divCarteTurned.appendChild  (divCarteBack)
    divCarteBack.appendChild    (divCarteHeader)
    divCarteBack.appendChild    (divCarteBody)
    divCarteBody.appendChild    (pCarteDescription)
    divCarteBody.appendChild    (price)
    divCarteBody.appendChild    (carteFooter)
    carteFooter.appendChild     (button)
    button.appendChild          (icone)

  }
}
