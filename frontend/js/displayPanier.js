///////////////////////////////////////////////////////////
/////// Affiche les produits contenue dans le panier //////
///////////////////////////////////////////////////////////


// 1) ////////////////////////////////////////////////////////
// Récupére les tableau produits dans le panier:
let productLocalStorage = JSON.parse(localStorage.getItem("product"))
console.log(productLocalStorage)


// 2) ////////////////////////////////////////////////////////
// Récupére l'id des objets dans un tableau:
for (var i = 0; i < productLocalStorage.length; i++) {
    let idProductPanier = productLocalStorage[i].idProduct
    console.log(idProductPanier)
    assemblyId(idProductPanier)
    
}


// 3) /////////////////////////////////////////////////////////
/**
 * Fonction qui concaténe l'url de l'API
 * avec l'id récupéré et filtré
 */

async function assemblyId(idProductPanier) {
    console.log(idProductPanier)
    //réponse : 5beaaa8f1c9d440000a57d95

    // Déclaration des variables:
    const url = "http://localhost:3000/api/teddies";
    const urlProduct = url + "/" + idProductPanier;
    console.log(urlProduct)
    // reponse http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95

    takeProductInPanier(urlProduct);

}
assemblyId(idProductPanier)


// 4) /////////////////////////////////////////////////////////
/**
 * Fonction XMLHttpRequest qui se connecte avec l'url précédent
 *  et récupére les données:
 */

async function takeProductInPanier(urlProduct) {
    console.log(urlProduct)
    // reponse http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95

    // Creer un nouvel objet Ajax de type XMLHttpRequest:
    let xhr = new XMLHttpRequest();

    // Détecte de la requête:
    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            // Envoie terminé et contenu bien recue et convertit en Json:
            var productData = JSON.parse(this.responseText);
            console.log(productData);

            // envoie le productData a la fonction displayPanier:
            displayPanier(productData);
            //console.log(displayPanier)
        } else if (this.readyState == XMLHttpRequest.DONE && this.status == 500) {
            console.log("Erreur 500");
            window.location.href = '../page404.html'
        }
    };

    // Ouvre la connexion en précisant la méthode:
    xhr.open("GET", urlProduct, true);

    // Envoie la requête:
    xhr.send();
}


// 4) /////////////////////////////////////////////////////////
/**
 *  Verifie si le panier est vide:
 */
/*
if (productLocalStorage === null) {
    divRowMain.innerHTML = " panier est vide"
} else {

}
*/
// 5) /////////////////////////////////////////////////////////
async function displayPanier(productData) {
    console.log(productData)

    ///////////////////////////////////////////////////////////
    /**
     * Panier
     */
    //Selectionne l'id parent:
    let main = document.querySelector('main')
    //console.log(main)

    ///////////////////////////////////////////////////////////
    /**
     * Création des éléments de base enfants:
     */
    // Panier:
    let divSectionPanier = createTag('section')
    //console.log(divSectionPanier)

    // Card:
    let divCard = createTag('div')
    addClass(divCard, 'card')
    //console.log(divCard)
    // Row:
    let divRow = createTag('div')
    addClass(divRow, 'row')
    //console.log(divRow)

    // col-md-8
    let divCol = createTag('div')
    addClass(divCol, 'col-md-8')
    addClass(divCol, 'cart')
    //console.log(divCol)

    ///////////////////////////////////////////////////////////
    /**
     * Création intérieur box:
     */
    // Entete
    //  Title:
    let divHeadCardTitle = createTag('div')
    addClass(divHeadCardTitle, 'title')
    //console.log(divHeadCardTitle)

    // Row:
    let divRowTitle = createTag('div')
    addClass(divRowTitle, 'row')
    addClass(divRowTitle, 'row')
    //console.log(divRowTitle )

    // Col:
    let divColTitle = createTag('div')
    addClass(divColTitle, 'col')
    //console.log(divColTitle)

    // H2:
    let divSubTitle = createTag('h2')
    //console.log(divSubTitle)

    // Strong:
    let strongTitle = createTag('strong')
    strongTitle.innerHTML = 'Panier:'
    //console.log(strongTitle)

    // Item principale:
    let divCountitem = createTag('div')
    addClass(divCountitem, 'col')
    addClass(divCountitem, 'align-self-center')
    addClass(divCountitem, 'text-right')
    addClass(divCountitem, 'text-muted')
    //console.log(divCountitem)

    // Border top:
    let divBorderTop = createTag('div')
    addClass(divBorderTop, 'border-top')
    //console.log(divBorderTop)

    ///////////////////////////////////////////////////////////
    // Boucle qui parcours productData:
    for (var i = 0; i < productData.length; i++) {
        console.log("productData.length")

        ///////////////////////////////////////////////////////////
        // Corps
        // Row Article:
        let divRowArticle = createTag('div')
        addClass(divRowArticle, "row")
        console.log(divRowArticle)
        // Row principale:
        let divRowMain = createTag('div')
        addClass(divRowMain, "row")
        addClass(divRowMain, "main")
        addClass(divRowMain, "align-items-center")
        addClass(divRowMain, "border-bottom")
        console.log()
        // Col Image:
        let divCol2 = createTag('div')
        addClass(divCol2, "col-2")
        console.log()
        // Image:
        let img = createTag('img')
        addClass(img, "img-fluid")
        addClass(img, "hidden-mobile")
        // Récupére l'imageUrl
        img.src = productData.imageUrl
        img.alt = 'Image du produit'
        console.log(productData.imageUrl)
        // Col Titre du produit:
        let divColTitleProduct = createTag('div')
        addClass(divColTitleProduct, 'col')
        console.log()
        // Titre du produit:
        let divTitleProduct = createTag('div')
        addClass(divTitleProduct, 'row')
        divTitleProduct.innerHTML = productData.name
        console.log()
        // Div amount:
        let divColAmount = createTag('div')
        addClass(divColAmount, 'col')
        divColAmount.setAttribute("style", " display:flex; ")
        console.log()
        // Less:
        let less = createTag('a')
        less.setAttribute("id", "less");
        less.setAttribute("href", "#")
        less.innerHTML = "-"
        console.log()
        // Input Amount:
        let inputAmount = createTag('input')
        addClass(inputAmount, 'text-center')
        inputAmount.setAttribute("id", "amount")
        inputAmount.setAttribute("value", "1")
        console.log()
        // More:
        let more = createTag('a')
        more.setAttribute("id", "more");
        more.setAttribute("href", "#")
        more.innerHTML = "+"
        console.log()
        //Div Price:
        let divPrice = createTag('div')
        addClass(divPrice, 'col')
        divPrice.setAttribute("id", "price");
        divPrice.innerHTML = productData.price
        console.log()
        // Delete:
        let deleteProduct = createTag('span')
        addClass(deleteProduct, 'close')
        deleteProduct.innerHTML = "&#10005;"
        console.log()

        ///////////////////////////////////////////////////////////
        // Pied de la carte
        // Div Back to shop:
        let divBackShop = createTag('div')
        addClass(divBackShop, 'back-to-shop')
        console.log()
        // Lien fléché Back to shop:
        let linkBackShop = createTag('a')
        linkBackShop.setAttribute("href", "../../frontend/index.html")
        linkBackShop.innerHTML = "&leftarrow;"
        console.log()
        // Texte Back to shop:
        let textBackShop = createTag('span')
        addClass(textBackShop, 'text-muted')
        textBackShop.innerHTML = "Retour à la boutique"
        console.log()
        ///////////////////////////////////////////////////////////
        // Récapitulatif:
        // Box Récapitulatif:
        let divBoxRecap = createTag('div')
        addClass(divBoxRecap, 'col-md-4')
        addClass(divBoxRecap, 'summary')
        addClass(divBoxRecap, 'bg-gradient')
        console.log()
        // Div title récapitulatif:
        let divTitleRecap = createTag('div')
        console.log()
        // Title recapitulatif:
        let titleRecap = createTag('h2')
        console.log()
        // Strong title:
        let titleStrongRecap = createTag('b')
        titleStrongRecap.innerHTML = "Récapitulatif:"
        console.log()
        // Trait recapitulatif:
        let separationRecap = createTag('hr')
        console.log()
        // Div boxItemRecap:
        let divBoxItemRecap = createTag('div')
        addClass(divBoxItemRecap, 'row')
        divBoxItemRecap.setAttribute("style", " padding: 2vh 0;")
        console.log()
        // Div Item recapitulatif:
        let divItemRecap = createTag('div')
        addClass(divItemRecap, 'col')
        divItemRecap.setAttribute("style", "padding-left:0; margin-top: 5%;")
        divItemRecap.innerHTML = "items 3"
        console.log()
        // Price recapitulatif:
        let divPriceRecap = createTag('div')
        addClass(divPriceRecap, 'col')
        addClass(divPriceRecap, 'text-right')
        divPriceRecap.setAttribute("style", "margin-top: 5%;")
        divPriceRecap.innerHTML = 55 + " €"
        console.log()
        // Div box total recap:
        let divBoxTotal = createTag('div')
        addClass(divBoxTotal, 'row')
        divBoxTotal.setAttribute("style", "border-top: 1px solid #fff; padding: 2vh 0;")
        console.log()
        // Div text price total:
        let divTextPriceTotal = createTag('div')
        addClass(divTextPriceTotal, 'col')
        divTextPriceTotal.innerHTML = "Prix Total:"
        console.log()
        // Div price total:
        let divPriceTotal = createTag('div')
        addClass(divPriceTotal, 'col')
        addClass(divPriceTotal, 'text-right')
        divPriceTotal.innerHTML = 137 + " €"
        console.log()
        // button valider la commande:
        let buttonConfirm = createTag('button')
        addClass(buttonConfirm, 'btn')
        addClass(buttonConfirm, 'rounded-pill')
        addClass(buttonConfirm, 'btn-dark')
        buttonConfirm.innerHTML = "Valider la commande"
        console.log()

        ///////////////////////////////////////////////////////////
        // Panier:
        main.appendChild(divSectionPanier)
        console.log()
        // Card:
        divSectionPanier.appendChild(divCard)
        console.log()
        // Row:
        divCard.appendChild(divRow)
        console.log()
        // col-md-8
        divRow.appendChild(divCol)
        console.log()

        // Entete
        //  Title:
        divCol.appendChild(divHeadCardTitle)
        console.log()
        // Row:
        divHeadCardTitle.appendChild(divRowTitle)
        console.log()
        // Col:
        divRowTitle.appendChild(divColTitle)
        console.log()
        // H2:
        divColTitle.appendChild(divSubTitle)
        console.log()
        // Strong:
        divSubTitle.appendChild(strongTitle)
        console.log()
        // Item principale:
        divRowTitle.appendChild(divCountitem)
        console.log()
        // Border top:
        divCol.appendChild(divBorderTop)
        console.log()


        ///////////////////////////////////////////////////////////
        // Corps
        // Row Article:
        divCol.appendChild(divRowArticle)
        // Row principale:
        divRowArticle.appendChild(divRowMain)
        // Col Image:
        divRowMain.appendChild(divCol2)
        // Image:
        divCol2.appendChild(img)
        // Col Titre du produit:
        divRowMain.appendChild(divColTitleProduct)
        // Titre du produit:
        divColTitleProduct.appendChild(divTitleProduct)
        // Div amount:
        divRowMain.appendChild(divColAmount)
        // Less:
        divColAmount.appendChild(less)
        // Input Amount:
        divColAmount.appendChild(inputAmount)
        // More:
        divColAmount.appendChild(more)
        //Div Price:
        divRowMain.appendChild(divPrice)
        // Delete:
        divRowMain.appendChild(deleteProduct)


        ///////////////////////////////////////////////////////////
        // Pied de la carte
        // Div Back to shop:
        divCol.appendChild(divBackShop)
        // Lien fléché Back to shop:
        divBackShop.appendChild(linkBackShop)
        // Texte Back to shop:
        divBackShop.appendChild(textBackShop)

        ///////////////////////////////////////////////////////////
        // Récapitulatif:
        // Box Récapitulatif:
        divRow.appendChild(divBoxRecap)
        // Div title récapitulatif:
        divBoxRecap.appendChild(titleRecap)
        // Strong title:
        titleRecap.appendChild(titleStrongRecap)
        // Trait recapitulatif:
        divBoxRecap.appendChild(separationRecap)
        // divBoxItemRecap:
        divBoxRecap.appendChild(divBoxItemRecap)
        divBoxItemRecap.appendChild(divItemRecap)
        // Price recapitulatif:
        divBoxItemRecap.appendChild(divPriceRecap)
        // Div box total recap:
        divBoxRecap.appendChild(divBoxTotal)
        // Div text price total:
        divBoxTotal.appendChild(divTextPriceTotal)
        // Div price total:
        divBoxTotal.appendChild(divPriceTotal)
        // button valider la commande:
        divBoxRecap.appendChild(buttonConfirm)

    }
}

///////////////////////////////////////////////////////////
/**
 * Formulaire
 */

///////////////////////////////////////////////////////////
//Selectionne l'id parent:
//let main = document.querySelector('main')
//console.log(main)
///////////////////////////////////////////////////////////
/**
 * Création des éléments de base enfants:
 */
// Container:
/*
let divContainer = createTag('div')
addClass(divContainer, 'container')

// Row:
let divRowPrincipale = createTag('div')
addClass(divRowPrincipale, 'row')

// Col-12
let divColPrincipale = createTag('div')
addClass(divColPrincipale, 'col-12')

// Formulaire:
divForm = createTag('section')
addClass(divForm, 'section--modify')
divForm.setAttribute("style", "padding-top: 5%;")

// Box panier:
let boxForm = createTag('div')
addClass(boxForm, 'box-form')

// Card:
divCard = createTag('div')
addClass(divCard, 'card')
divCard.setAttribute("style", "box-shadow: -1px 2px 10px 3px #e9ecef inset;")

// Row:
divRow = createTag('div')
addClass(divRow, 'row')
addClass(divRow, 'row--modify')

// col-md-8
divCol = createTag('div')
addClass(divCol, 'col-md-10')
addClass(divCol, 'cart')
addClass(divCol, 'cart--modify')

// Box Récapitulatif:
let divBoxRecapLeft = createTag('div')
addClass(divBoxRecapLeft, 'col-md-4')
addClass(divBoxRecapLeft, 'summary')
addClass(divBoxRecapLeft, 'bg-gradient')

///////////////////////////////////////////////////////////
// Ajout des élément de base:
main.appendChild(divContainer)
main.appendChild(divForm)
divForm.appendChild(divContainer)
divContainer.appendChild(divRowPrincipale)
divRowPrincipale.appendChild(divColPrincipale)
divColPrincipale.appendChild(boxForm)

boxForm.appendChild(divCard)
divCard.appendChild(divRow)
divRow.appendChild(divCol)

// Div Form:
let formCheckOut = createTag('form')

// Form Row:
let formRow = createTag('div')
addClass(formRow, 'form-row')

// Form group name:
let formGroupName = createTag('div')
addClass(formGroupName, 'form-group')
addClass(formGroupName, 'col-md-6')

// Label name customer:
let labelName = createTag('label')
labelName.setAttribute("for", "inputName4")
labelName.innerHTML = "Nom:"

// Input name:
let inputName = createTag('input')
addClass(inputName, 'form-control')
inputName.setAttribute("type", "text")
inputName.setAttribute("id", "inputName4")

// Form group last name:
let formGroupLastName = createTag('div')
addClass(formGroupLastName, 'form-group')
addClass(formGroupLastName, 'col-md-6')

// Label last name customer:
let labelLastName = createTag('label')
labelLastName.setAttribute("for", "inputLastName4")
labelLastName.innerHTML = "Prénom:"

// Input last name:
let inputLastName = createTag('input')
addClass(inputLastName, 'form-control')
inputLastName.setAttribute("type", "text")
inputLastName.setAttribute("id", "inputLastName4")

// Form group adresse:
let formGroupAddress = createTag('div')
addClass(formGroupAddress, 'form-group')

// Label address customer:
let labelAddress = createTag('label')
labelAddress.setAttribute("for", "inputAddress")
labelAddress.innerHTML = "Adresse:"

// Input address:
let inputAddress = createTag('input')
addClass(inputAddress, 'form-control')
inputAddress.setAttribute("type", "text")
inputAddress.setAttribute("id", "inputAddress")

// Div form row location
let divFormRowLocation = createTag('div')
addClass(divFormRowLocation, 'form-row')

// Div form group city:
let divFormGroupLocation = createTag('div')
addClass(divFormGroupLocation, 'form-group')
addClass(divFormGroupLocation, 'col-md-6')

// Label Location City:
let labelCity = createTag('label')
labelCity.setAttribute("for", "inputCity")
labelCity.innerHTML = "Ville:"

// Input city:
let inputLocationCity = createTag('input')
addClass(inputLocationCity, 'form-control')
inputLocationCity.setAttribute("type", "text")
inputLocationCity.setAttribute("id", "inputCity")

// Div form group zip:
let divFormGroupzip = createTag('div')
addClass(divFormGroupzip, 'form-group')
addClass(divFormGroupzip, 'col-md-6')

// Label zip:
let labelZip = createTag('label')
labelZip.setAttribute("for", "inputZip")
labelZip.innerHTML = "Code Postal:"

// Input Zip:
let inputZip = createTag('input')
addClass(inputZip, 'form-control')
inputZip.setAttribute("type", "text")
inputZip.setAttribute("id", "inputZip")

///////////////////////////////////////////////////////////
// Div Form:
divCol.appendChild(formCheckOut)

// Form Row:
formCheckOut.appendChild(formRow)

// Form group name:
formRow.appendChild(formGroupName)

// Label name customer:
formGroupName.appendChild(labelName)

// Input name:
formGroupName.appendChild(inputName)

// Form group last name:
formRow.appendChild(formGroupLastName)

// Label last name customer:
formGroupLastName.appendChild(labelLastName)

// Input last name:
formGroupLastName.appendChild(inputLastName)

// Form group adresse:
formCheckOut.appendChild(formGroupAddress)

// Label address customer:
formGroupAddress.appendChild(labelAddress)

// Input address:
formGroupAddress.appendChild(inputAddress)

// Div form row location
formCheckOut.appendChild(divFormRowLocation)

// Div form group location:
divFormRowLocation.appendChild(divFormGroupLocation)

// Label Location City:
divFormGroupLocation.appendChild(labelCity)

// Input city:
divFormGroupLocation.appendChild(inputLocationCity)

// Div form group zip:
divFormRowLocation.appendChild(divFormGroupzip)

// Label zip:
divFormGroupzip.appendChild(labelZip)

// Input Zip:
divFormGroupzip.appendChild(inputZip)
*/
///////////////////////////////////////////////////////////
/**
 * Fonction qui ajoute ou diminue la quantité
 */

function modifyValue() {

    //Selectionne et ecoute le boutton -:
    let buttonLess = document.getElementById('less')
    buttonLess.addEventListener('click', () => {

        // Récupére la valeur de l'element et l'initialise:
        let getValue = document.getElementById('amount').value

            --getValue

        if (getValue >= 0) {
            // Modifie la valeur de l'element:
            getValue = document.getElementById('amount').value = getValue
            modifyPrice(getValue)
        }

    })

    //Selectionne et ecoute le boutton +:
    let buttonMore = document.getElementById('more')
    buttonMore.addEventListener('click', () => {

        // Récupére la valeur de l'element et l'initialise:
        let getValue = document.getElementById('amount').value

            ++getValue

        // Modifie la valeur de l'element:
        getValue = document.getElementById('amount').value = getValue
        modifyPrice(getValue)
    })
}
modifyValue()


///////////////////////////////////////////////////////////
/**
 * Fonction qui modifie le prix en fonction de la quantité:
 */
function modifyPrice(getValue = 1) {
    console.log(getValue)

    // Selectionne le prix:
    let getPrice = document.getElementById("price")
    console.log(getPrice)

    let price = getPrice.innerHTML = 50
    console.log(price)

    // Multiplie la quantité par le prix:
    let result = getValue * price
    console.log(result)

    // Affiche le resultat de la multiplication:
    getPrice.innerHTML = result + "€"
}
modifyPrice()