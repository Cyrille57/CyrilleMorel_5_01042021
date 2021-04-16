///////////////////////////////////////////////////////////
/// Fonction pour afficher le produit sur product.html: ///
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
/**
 * Récupére l'id de l'url
 * avec la propriété .search de window.location:
 */
const getIdUrl = window.location.search;
//console.log(getIdUrl)
// réponse : ?id=XXXXXXXX


///////////////////////////////////////////////////////////
/**
 *  Purge getIdUrl de ?id= et recupere uniquement l'id
 *  avec la méthode .slice:
 */
const getId = getIdUrl.slice(4);
//console.log(getId)
// réponse : xxxxxxxxx


///////////////////////////////////////////////////////////
/**
 * Fonction qui concaténe l'url de l'API
 * avec l'id récupéré et filtré
 */
async function assemblyId(getId) {
    //console.log(getId);
    //réponse : 5beaaa8f1c9d440000a57d95

    // Déclaration des variables:
    const url = "http://localhost:3000/api/teddies";
    const urlProduct = url + "/" + getId;
    //console.log(urlProduct)
    // reponse http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95

    connect2(urlProduct);
}
assemblyId(getId);


///////////////////////////////////////////////////////////
/**
 * Fonction XMLHttpRequest qui se connecte avec l'url précédent
 *  et récupére les données:
 */
async function connect2(urlProduct) {
    //console.log(urlProduct)
    // reponse http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95

    // Creer un nouvel objet Ajax de type XMLHttpRequest:
    let xhr = new XMLHttpRequest();

    // Détecte de la requête:
    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            // Envoie terminé et contenu bien recue et convertit en Json:
            var result2 = JSON.parse(this.responseText);
            //console.log(result2);

            // envoie le result a la fonction display:
            displayProduct(result2);
            //console.log(displayProduct)
        } else if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
            console.log("Erreur 404");
        }
    };

    // Ouvre la connexion en précisant la méthode:
    xhr.open("GET", urlProduct, true);

    // Envoie la requête:
    xhr.send();
}
connect2();


///////////////////////////////////////////////////////////
/**
 * Fonction qui affiche les données
 * par rapport a l'id du produit:
 */


async function displayProduct(result2) {
    console.log(result2)

    //Selectionne l'id parent:
    let main = document.querySelector('main')
    console.log(main)

    /**
     * Création des éléments de base enfants:
     */
    // Container:
    let divContainer = createTag('div')
    addClass(divContainer, 'container')
    console.log(divContainer)

    // Row:
    let divRow = createTag('div')
    addClass(divRow, 'row')
    console.log(divRow)

    // Col-12
    let divCol = createTag('div')
    addClass(divCol, 'col-12')
    console.log(divCol)

    /**
     * Création de la box qui vas contenir le produit:
     */
    // Box:
    let divBox = createTag('div')
    addClass(divBox, 'box')
    console.log(divBox)

    // BoxProduct
    let divBoxProduct = createTag('div')
    addClass(divBoxProduct, 'box__product')
    console.log(divBoxProduct)


    /**
     * Création des éléments de la box :
     */
    // Card:
    let divCard = createTag('div')
    addClass(divCard, 'card')
    addClass(divCard, 'text-center')
    console.log(divCard)

    // Card-body:
    let divCardBody = createTag('div')
    addClass(divCardBody, 'card-body')
    addClass(divCardBody, 'card-body-product')
    console.log(divCardBody)

    /**
     * Partie gauche de la box:
     */
    // PictureBox:
    let divPictureBox = createTag('div')
    addClass(divPictureBox, 'picture-box')
    console.log(divPictureBox)

    // CardHeaderPicture:
    //let divCardHeaderPicture = createTag('div')
    //addClass(divCardHeaderPicture, 'card-header')
    //console.log(divCardHeaderPicture)

    // PictureProduct:
    let divPictureProduct = createTag('img')
    addClass(divPictureProduct, 'picture__product')
    console.log(divPictureProduct )
    divPictureProduct.src = result2.imageUrl
    console.log(divPictureProduct.src)
    divPictureProduct.alt = 'Image de nounours de la gamme Orinoco'
    console.log(divPictureProduct.alt)


    // PictureColor:
    let divPictureColor = createTag('div')
    addClass(divPictureColor, 'picture__color')
    console.log(divPictureColor )

    // Séparation:
    let divSeparation = createTag('div')
    addClass(divSeparation, 'separation')
    console.log(divSeparation)

    /**
     * Partie droite de la box:
     */
    // DescritionBox:
    let divDescriptionBox = createTag('div')
    addClass(divDescriptionBox, 'description-box')
    console.log(divDescriptionBox)

    // CardHeaderDescription:
    let divCardHeaderDescription = createTag('div')
    addClass(divCardHeaderDescription, 'card-header')
    console.log(divCardHeaderDescription)

    // DescriptionTitle
    let divDescriptionTitle = createTag('h3')
    addClass(divDescriptionTitle, 'description__title')
    console.log(divDescriptionTitle)


    // DescriptionProduct:
    let divDescriptionProduct = createTag('p')
    addClass(divDescriptionProduct, 'description__product')
    console.log(divDescriptionProduct)


    // DescriptionPrice:
    let divDescriptionPrice = createTag('p')
    addClass(divDescriptionPrice, 'description__price')
    console.log(divDescriptionPrice)


    // CardFooter:
    let divCardFooter = createTag('div')
    addClass(divCardFooter, 'card-footer')
    console.log(divCardFooter)

    // ButtonBox:
    let divButtonBox = createTag('div')
    addClass(divButtonBox, 'button-box')
    console.log(divButtonBox)

    // a:
    let divA = createTag('a')
    addClass(divA, 'btn')
    addClass(divA, 'rounded-pill')
    addClass(divA, 'btn-dark')
    addClass(divA, 'btn-lg')
    addClass(divA, 'mb-2')
    divA.textContent = "Ajouter au panier"
    divA.setAttribute("href", "../panier.html")
    console.log(divA)

    // Ajoute la reponse trouvé dans l'objet:
    divDescriptionTitle.innerHTML = result2.name
    console.log(divDescriptionTitle.innerHTML)
    divDescriptionProduct.innerHTML = result2.description
    console.log(divDescriptionProduct.innerHTML)
    divDescriptionPrice.innerHTML = result2.price
    console.log(divDescriptionPrice.innerHTML)


    // Ajout des élément de base:
    main.appendChild(divContainer)
    divContainer.appendChild(divRow)
    divRow.appendChild(divCol)

    divCol.appendChild(divBox)
    divBox.appendChild(divBoxProduct)

    divBoxProduct.appendChild(divCard)
    divCard.appendChild(divCardBody)

    divCardBody.appendChild(divPictureBox)
    //divPictureBox.appendChild(divCardHeaderPicture)
    divPictureBox.appendChild(divPictureProduct)
    divPictureBox.appendChild(divPictureColor)

    divCardBody.appendChild(divSeparation)

    divCardBody.appendChild(divDescriptionBox)
    divDescriptionBox.appendChild(divCardHeaderDescription)
    divDescriptionBox.appendChild(divDescriptionTitle)
    divDescriptionBox.appendChild(divDescriptionProduct)
    divDescriptionBox.appendChild(divDescriptionPrice)
    divDescriptionBox.appendChild(divCardFooter)

    divCardFooter .appendChild(divButtonBox)
    divButtonBox.appendChild(divA)

}





/*
    async function connect2(urlProduct) {
        console.log(urlProduct)

        // Creer un nouvel objet Ajax de type XMLHttpRequest:
        let xhr = new XMLHttpRequest()

        // Détecte de la requête:
        xhr.onreadystatechange = function () {
          if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            // Envoie terminé et contenu bien recue et convertit en Json:
            var result2 = JSON.parse(this.responseText)
            console.log(result2)

            // envoie le result a la fonction display:
            displayProduct(result2)
            //console.log(displayProduct)

          } else if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
            console.log("Erreur 404")
          }
        }

        // Ouvre la connexion en précisant la méthode:
        xhr.open("GET", urlProduct, true)

        // Envoie la requête:
        xhr.send()
    }

      //console.log(result)
      connect2(urlProduct)



async function displayProduct (product) {
    console.log(product)
}


    async function affiche (product){
        console.log(product)
    let main = document.querySelector('main')
    let box = createTag('h3')
    main.appendChild(box)

    /*
    for (var i = 0; i < result.length; i++){
    box.innerHTML = product[i].name
    }
    */



//console.log(response)
//console.log(result)
//console.log(getId)

//console.log(getId)

//let response = fetch('http://localhost:3000/api/teddies?id='+ getId)
//console.log(response)
/*
function essai(getId) {
    let main = document.querySelector('main')
    let box = createTag('h3')
    main.appendChild(box)
    for (var i = 0; i < getId.length; i++) {

        box.innerHTML = getId.name
    }
}

console.log(box)

box.innerHTML = getId.name
console.log(getId.name)
*/
/*
function displayProduct(result) {
    //Selectionne l'id parent:
    main = document.querySelector('main')

    //Création des éléments enfants:

    // Box:
    box = createTag('div')
    addClass(box, 'box')


    box.innerHTML = getId[i].name
    console.log(getId)

    main.appendChild(box)
    console.log(result)
}


displayProduct()
*/