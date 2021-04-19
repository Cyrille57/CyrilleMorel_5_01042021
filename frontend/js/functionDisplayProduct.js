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

    /**
     * Création de la box qui vas contenir le produit:
     */
    // Box:
    let divBox = createTag('div')
    addClass(divBox, 'box')

    // BoxProduct
    let divBoxProduct = createTag('div')
    addClass(divBoxProduct, 'box__product')

    /**
     * Création des éléments de la box :
     */
    // Card:
    let divCard = createTag('div')
    addClass(divCard, 'card')
    addClass(divCard, 'text-center')

    // Card-body:
    let divCardBody = createTag('div')
    addClass(divCardBody, 'card-body')
    addClass(divCardBody, 'card-body-product')

    /**
     * Partie gauche de la box:
     */
    // PictureBox:
    let divPictureBox = createTag('div')
    addClass(divPictureBox, 'picture-box')

    // PictureProduct:
    let divPictureProduct = createTag('img')
    addClass(divPictureProduct, 'picture__product')

    // Récupére l'imageUrl
    divPictureProduct.src = result2.imageUrl
    // Alt de l'image:
    divPictureProduct.alt = 'Image de nounours de la gamme Orinoco'

    // ColorTitle
    let divColorTitle = createTag('div')
    addClass(divColorTitle, 'color__title')
    divColorTitle.innerHTML = "Choix des couleurs:"

    // PictureColor:
    let divPictureColor = createTag('div')
    addClass(divPictureColor, 'picture__color')

    // Color:
    let divColor = createTag('div')
    addClass(divColor, 'color')

    // Choice:
    let divChoice = createTag('div')
    addClass(divChoice, 'choice')

    // Recupére l'objet colors:
    let colors = result2.colors

    for (var i = 0; i < colors.length; i++) {

        // Création du divColorChoice:
        let divColorChoice = createTag('a')
        addClass(divColorChoice, 'color--choice')

        divColorChoice.setAttribute("href", "#")
        divColorChoice.setAttribute("data-toggle", "tooltip")
        divColorChoice.setAttribute("data-placement", "bottom")
        divColorChoice.setAttribute("title", colors[i])
        divColorChoice.appendChild = ""

        // Récupére les couleurs une a une:
        let selectColors = colors[i]

        // Convertit dark et pale brown et met le background adéquate:
        switch (selectColors) {
            case 'Dark brown':
                divColorChoice.style.backgroundColor = "#341c02"
                break;
            case 'Pale brown':
                divColorChoice.style.backgroundColor = "#755847"
                break;
            default:
                divColorChoice.style.backgroundColor = colors[i]
        }

        //divPictureColor.appendChild(divColorTitle)
        divChoice.appendChild(divColorChoice)
        //divColorChoice.innerHTML = selectColors

    }

    // Séparation:
    let divSeparation = createTag('div')
    addClass(divSeparation, 'separation')

    /**
     * Partie droite de la box:
     */
    // DescritionBox:
    let divDescriptionBox = createTag('div')
    addClass(divDescriptionBox, 'description-box')

    // CardHeaderDescription:
    let divCardHeaderDescription = createTag('div')
    addClass(divCardHeaderDescription, 'card-header')

    // DescriptionTitle
    let divDescriptionTitle = createTag('h3')
    addClass(divDescriptionTitle, 'description__title')

    // DescriptionProduct:
    let divDescriptionProduct = createTag('p')
    addClass(divDescriptionProduct, 'description__product')

    // DescriptionPrice:
    let divDescriptionPrice = createTag('p')
    addClass(divDescriptionPrice, 'description__price')

    // CardFooter:
    let divCardFooter = createTag('div')
    addClass(divCardFooter, 'card-footer')
    addClass(divCardFooter, 'card-footer--height')

    // ButtonBox:
    let divButtonBox = createTag('div')
    addClass(divButtonBox, 'button-box')

    // a:
    let divA = createTag('a')
    addClass(divA, 'btn')
    addClass(divA, 'panier')
    addClass(divA, 'rounded-pill')
    addClass(divA, 'btn-dark')
    addClass(divA, 'btn-lg')
    addClass(divA, 'mb-2')
    divA.textContent = "Ajouter au panier"
    divA.setAttribute("href", "../panier.html")
    

    // Ajoute la reponse trouvé dans l'objet:
    divDescriptionTitle.innerHTML = result2.name
    console.log(divDescriptionTitle.innerHTML)
    divDescriptionProduct.innerHTML = result2.description
    console.log(divDescriptionProduct.innerHTML)
    divDescriptionPrice.innerHTML = result2.price + "€"
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
    divPictureBox.appendChild(divPictureProduct)

    divPictureBox.appendChild(divPictureColor)
    divPictureColor.appendChild(divColor)
    divPictureColor.appendChild(divChoice)
    divColor.appendChild(divColorTitle)



    divCardBody.appendChild(divSeparation)

    divCardBody.appendChild(divDescriptionBox)
    divDescriptionBox.appendChild(divCardHeaderDescription)
    divDescriptionBox.appendChild(divDescriptionTitle)
    divDescriptionBox.appendChild(divDescriptionProduct)
    divDescriptionBox.appendChild(divDescriptionPrice)
    divDescriptionBox.appendChild(divCardFooter)

    divCardFooter.appendChild(divButtonBox)
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