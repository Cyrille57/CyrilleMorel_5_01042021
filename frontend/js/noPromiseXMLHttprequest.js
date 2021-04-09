const url = "http://localhost:3000/api/teddies";


async function connect(url) {

  // Creer un nouvel objet Ajax de type XMLHttpRequest:
  let xhr = new XMLHttpRequest()

  // Détecte de la requête:
  xhr.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

      // Envoie terminé et contenu bien recue et convertit en Json:
      var result = JSON.parse(this.responseText)

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


async function display(result) {

  //Selectionne les id:
  let main = document.querySelector('main')

  // Création des éléments:
  // Box:
  let box = document.createElement('div')
  box.classList.add('box')
  let boxCarte = document.createElement('div')
  boxCarte.classList.add('box__carte')

  // Boucle qui parcoure result:
  for (var i = 0; i < result.length; i++) {

    // Carte:
    let divCarte = document.createElement('div')
    divCarte.classList.add('carte')
    let divCarteTurned = document.createElement('div')
    divCarteTurned.classList.add('carte__turned')

    // Front:
    let divCarteFront = document.createElement('label')
    divCarteFront.classList.add('carte__front')

    /**
     * Intérieur du Front:
     * Image:
     */
    let divCardPicture = document.createElement('img')
    divCardPicture.classList.add('carte--picture')
    divCardPicture.src = result[i].imageUrl
    divCardPicture.alt = 'Image de nounours de la gamme Orinoco'

    // Overlay:
    let divCarteOverlay = document.createElement('div')
    divCarteOverlay.classList.add('carte--overlay')

    // Titre du Front:
    let divCarteTitle = document.createElement('h3')
    divCarteTitle.classList.add('carte--title')

    // Back:
    let divCarteBack = document.createElement('label')
    divCarteBack.classList.add('carte__back')
    divCarteBack.classList.add('text-center')
    divCarteBack.classList.add('bg-gradient')

    /**
     * Intérieur du Back:
     * Header:
     */
    let divCarteHeader = document.createElement('div')
    divCarteHeader.classList.add('card-header')
    // Body:
    let divCarteBody = document.createElement('div')
    divCarteBody.classList.add('card-body')

    /**
     * Intérieur de Card-body:
     * Description:
     */
    let pCarteDescription = document.createElement('p')
    pCarteDescription.classList.add('card-text')
    pCarteDescription.classList.add('text-black-50')
    // Price:
    let price = document.createElement('p')
    price.classList.add('card-text')

    // Intérieur de Price:
    let strongPrice = document.createElement('strong')
    strongPrice.classList.add('text-light')
    strongPrice.classList.add('font-weight-normal')

    // Carte Footer
    let carteFooter = document.createElement('div')
    carteFooter.classList.add('card-footer')

    /**
     * Intérieur de CardFooter:
     * Button:
     */
    let button = document.createElement('a')
    button.classList.add('btn')
    button.classList.add('rounded-pill')
    button.classList.add('btn-dark')
    button.href = 'page2.html'
    button.textContent = "Ajouter au panier"

    /**
     * Intérieur du Button:
     * Icone:
     */
    let icone = document.createElement('i')
    icone.classList.add('fas')
    icone.classList.add('fa-shopping-cart')

    // Ajoute la reponse trouvé de la boucle result:
    divCardPicture.innerHTML    = result[i].imageurl
    divCarteTitle.innerHTML     = result[i].name
    pCarteDescription.innerHTML = result[i].description
    price.innerHTML             = result[i].price
    //console.log(result)

    // Ajout des éléments
    main.appendChild(box)
    box.appendChild(boxCarte)
    boxCarte.appendChild(divCarte)
    divCarte.appendChild(divCarteTurned)

    // Ajoute le Front:
    divCarteTurned.appendChild(divCarteFront)
    divCarteFront.appendChild(divCardPicture)
    divCarteFront.appendChild(divCarteOverlay)
    divCarteOverlay.appendChild(divCarteTitle)

    // Ajoue le Back:
    divCarteTurned.appendChild(divCarteBack)
    divCarteBack.appendChild(divCarteHeader)
    divCarteBack.appendChild(divCarteBody)
    divCarteBody.appendChild(pCarteDescription)
    divCarteBody.appendChild(price)
    divCarteBody.appendChild(carteFooter)
    carteFooter.appendChild(button)
    button.appendChild(icone)

  }
}


//console.log (result)
connect(url)