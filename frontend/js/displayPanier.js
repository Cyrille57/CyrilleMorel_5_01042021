///////////////////////////////////////////////////////////
/////// Affiche les produits contenue dans le panier //////
///////////////////////////////////////////////////////////


// 1) ////////////////////////////////////////////////////////
// Récupére les produit dans localStorager: //////////////////
let productLocalStorage = JSON.parse(localStorage.getItem("product"))
//console.log(productLocalStorage)
//réponse : tableau des objets
//console.log(productLocalStorage.length)
//réponse : 3


// 2) ////////////////////////////////////////////////////////
// Récupére l'id un a un: ////////////////////////////////////
let idProductPanier = ""
function getId (productLocalStorage) {
    for (var i = 0; i < productLocalStorage.length; i++) {

     let idProductPanier = productLocalStorage[i].idProduct
    //console.log(idProductPanier)
    // Réponse 1 seul id par produit
    assemblyId(idProductPanier)
    }
}
getId (productLocalStorage)


// 3) /////////////////////////////////////////////////////////
// Concaténe l'url de l'API avec l'id récupéré: ///////////////

async function assemblyId(idProductPanier) {
   //console.log(idProductPanier)
    //réponse : 5beaaa8f1c9d440000a57d95

    // Déclaration des variables:
    const url = "http://localhost:3000/api/teddies";
    const urlProduct = url + "/" + idProductPanier;
    //console.log(urlProduct)
    // reponse http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95

    takeProductInPanier(urlProduct);
}


// 4) /////////////////////////////////////////////////////////
// XMLHttpRequest se connecte avec l'url?récupére les données:/
async function takeProductInPanier(urlProduct) {
    //console.log(urlProduct)
    // reponse http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95

    // Creer un nouvel objet Ajax de type XMLHttpRequest:
    let xhr = new XMLHttpRequest();

    // Détecte de la requête:
    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            // Envoie terminé et contenu bien recue et convertit en Json:
            var productData = JSON.parse(this.responseText);
            //console.log(productData);

            // envoie le productData a la fonction displayPanier:
            displayPanier(productData);
            //console.log(displayPanier)
        } else if (this.readyState == XMLHttpRequest.DONE && this.status == 500) {
            console.log("Erreur 500");

        }
    };

    // Ouvre la connexion en précisant la méthode:
    xhr.open("GET", urlProduct, true);

    // Envoie la requête:
    xhr.send();
}

// 5) ////////////////////////////////////////////////////////
// Affichage html /////////////////////////////////////

///////////////////////////////////////////////////////////
// I) Création Panier: ////////////////////////////////////
    //Selectionne l'id parent:
    let main = document.querySelector('main')
    //console.log(main)

///////////////////////////////////////////////////////////
// I) A) Création des éléments de base enfants: ///////////
    // Panier:
    let divSectionPanier = createTag('section')

    // Card:
    let divCard = createTag('div')
    addClass(divCard, 'card')

    // Row:
    let divRow = createTag('div')
    addClass(divRow, 'row')

    // col-md-8
    let divCol = createTag('div')
    addClass(divCol, 'col-md-8')
     addClass(divCol, 'cart')

///////////////////////////////////////////////////////////
// I) B) Création intérieur box: //////////////////////////
    // Entete
    //  Title:
    let divHeadCardTitle = createTag('div')
    addClass(divHeadCardTitle, 'title')

    // Row:
    let divRowTitle = createTag('div')
    addClass(divRowTitle, 'row')
     addClass(divRowTitle, 'row')

    // Col:
    let divColTitle = createTag('div')
    addClass(divColTitle, 'col')

    // H2:
    let divSubTitle = createTag('h2')

    // Strong:
    let strongTitle = createTag('strong')
    strongTitle.innerHTML = 'Panier:'

    // Item principale:
    let divCountitem = createTag('div')
    addClass(divCountitem, 'col')
     addClass(divCountitem, 'align-self-center')
      addClass(divCountitem, 'text-right')
       addClass(divCountitem, 'text-muted')

    // Border top:
    let divBorderTop = createTag('div')
    addClass(divBorderTop, 'border-top')

///////////////////////////////////////////////////////////
// I) D) Pied de la carte: ////////////////////////////////
    // Div Back to shop:
    let divBackShop = createTag('div')
    addClass(divBackShop, 'back-to-shop')

    // Lien fléché Back to shop:
    let linkBackShop = createTag('a')
    linkBackShop.setAttribute("href", "../index.html")
     linkBackShop.innerHTML = "&leftarrow;"

    // Texte Back to shop:
    let textBackShop = createTag('span')
    addClass(textBackShop, 'text-muted')
     textBackShop.innerHTML = "Retour à la boutique"

///////////////////////////////////////////////////////////
// I) E) Récapitulatif: ///////////////////////////////////
    // Box Récapitulatif:
    let divBoxRecap = createTag('div')
    addClass(divBoxRecap, 'col-md-4')
     addClass(divBoxRecap, 'summary')
      addClass(divBoxRecap, 'bg-gradient')

    // Div title récapitulatif:
    let divTitleRecap = createTag('div')

    // Title recapitulatif:
    let titleRecap = createTag('h2')

    // Strong title:
    let titleStrongRecap = createTag('b')
    titleStrongRecap.innerHTML = "Récapitulatif:"

    // Trait recapitulatif:
    let separationRecap = createTag('hr')

    // Div boxItemRecap:
    let divBoxItemRecap = createTag('div')
    addClass(divBoxItemRecap, 'row')
     divBoxItemRecap.setAttribute("style", " padding: 2vh 0;")

    // Div Item recapitulatif:
    let divItemRecap = createTag('div')
    addClass(divItemRecap, 'col')
     divItemRecap.setAttribute("style", "padding-left:0; margin-top: 5%;")
      divItemRecap.innerHTML = "items 3"

    // Price recapitulatif:
    let divPriceRecap = createTag('div')
    addClass(divPriceRecap, 'col')
     addClass(divPriceRecap, 'text-right')
      divPriceRecap.setAttribute("style", "margin-top: 5%;")

    // Div box total recap:
    let divBoxTotal = createTag('div')
    addClass(divBoxTotal, 'row')
     divBoxTotal.setAttribute("style", "border-top: 1px solid #fff; padding: 2vh 0;")

    // Div text price total:
    let divTextPriceTotal = createTag('div')
    addClass(divTextPriceTotal, 'col')
     divTextPriceTotal.innerHTML = "Prix Total:"

    // Div price total:
    let divPriceTotal = createTag('div')
    addClass(divPriceTotal, 'col')
     addClass(divPriceTotal, 'text-right')
      divPriceTotal.innerHTML = 137 + " €"

    // button valider la commande:
    let buttonConfirm = createTag('button')
     addClass(buttonConfirm, 'btn')
      addClass(buttonConfirm, 'rounded-pill')
       addClass(buttonConfirm, 'btn-dark')
        buttonConfirm.innerHTML = "Valider la commande"

///////////////////////////////////////////////////////////
// II) Ajout Panier: //////////////////////////////////////
    main.appendChild(divSectionPanier)
    // Card:
    divSectionPanier.appendChild(divCard)
    // Row:
    divCard.appendChild(divRow)
    // col-md-8
    divRow.appendChild(divCol)

///////////////////////////////////////////////////////////
// II) A) Entete: /////////////////////////////////////////
    //  Title:
    divCol.appendChild(divHeadCardTitle)
    // Row:
    divHeadCardTitle.appendChild(divRowTitle)
    // Col:
    divRowTitle.appendChild(divColTitle)
    // H2:
    divColTitle.appendChild(divSubTitle)
    // Strong:
    divSubTitle.appendChild(strongTitle)
    // Item principale:
    divRowTitle.appendChild(divCountitem)
    // Border top:
    divCol.appendChild(divBorderTop)
/*
///////////////////////////////////////////////////////////
// II) D) Pied de la carte: ///////////////////////////////
    // Div Back to shop:
    divCol.appendChild(divBackShop)
    // Lien fléché Back to shop:
    divBackShop.appendChild(linkBackShop)
    // Texte Back to shop:
    divBackShop.appendChild(textBackShop)
*/
///////////////////////////////////////////////////////////
// II) E) Récapitulatif: //////////////////////////////////
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
    // Div Item recapitulatif:
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




function displayPanier(productData) {

    ///////////////////////////////////////////////////////////
    // I) C) Corps: ///////////////////////////////////////////
    // Row Article:
    let divRowArticle = createTag('div')
    addClass(divRowArticle, "row")

    // Row principale:
    let divRowMain = createTag('div')
    addClass(divRowMain, "row")
     addClass(divRowMain, "main")
      addClass(divRowMain, "align-items-center")
       addClass(divRowMain, "border-bottom")

    // Col Image:
    let divCol2 = createTag('div')
    addClass(divCol2, "col-2")

    // Image:
    let img = createTag('img')
    addClass(img, "img-fluid")
     addClass(img, "hidden-mobile")
     img.alt = 'Image du produit'

    // Col Titre du produit:
    let divColTitleProduct = createTag('div')
    addClass(divColTitleProduct, 'col')

    // Titre du produit:
    let divTitleProduct = createTag('div')
    addClass(divTitleProduct, 'row')

    // Div amount:
    let divColAmount = createTag('div')
    addClass(divColAmount, 'col')
     divColAmount.setAttribute("style", " display:flex; ")

    // Less:
    let less = createTag('a')
    less.setAttribute("id", "less")
     less.setAttribute("href", "#")
      less.innerHTML = "-"

    // Input Amount:
    let inputAmount = createTag('input')
    addClass(inputAmount, 'text-center')
     inputAmount.setAttribute("id", "amount")
      inputAmount.setAttribute("value", "1")

    // More:
    let more = createTag('a')
    more.setAttribute("id", "more")
     more.setAttribute("href", "#")
      more.innerHTML = "+"

    //Div Price:
    let divPrice = createTag('div')
    addClass(divPrice, 'col')
     divPrice.setAttribute("id", "price")

    // Delete:
    let deleteProduct = createTag('span')
    addClass(deleteProduct, 'close')
     deleteProduct.innerHTML = "&#10005;"

    //////////////////////////////////////////////////////////
    // II) C) Ajout Corps: ///////////////////////////////////
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
    // II) D) Pied de la carte: ///////////////////////////////
    // Div Back to shop:
    divCol.appendChild(divBackShop)
    // Lien fléché Back to shop:
    divBackShop.appendChild(linkBackShop)
    // Texte Back to shop:
    divBackShop.appendChild(textBackShop)

    //////////////////////////////////////////////////////////
    // III) Récupére et affiche les données: /////////////////
    // Récupére l'imageUrl
    img.src = productData.imageUrl
     //console.log(productData.imageUrl)

    // Récupére le titre du produit:
    divTitleProduct.innerHTML = productData.name
     //console.log(productData.name)

    //Récupére le prix du produit:
    divPrice.innerHTML = productData.price + " €"

    ///////////////////////////////////////////////////////////
    // Ajoute ou diminue la quantité: /////////////////////////

    function modifyValue() {

        // Selectionne le boutton -:
        let buttonLess = document.getElementById('less')
        console.log(buttonLess)

        // Ecoute le boutton -:
         buttonLess.addEventListener('click', () => {

         // Récupére la valeur de l'element et l'initialise:
         let getValue = document.getElementById('amount').value
         console.log(getValue)

         --getValue

         if (getValue >= 0) {
            // Modifie la valeur de l'element:
            getValue = document.getElementById('amount').value = getValue
            modifyPrice(getValue)
            console.log(getValue)
           }
        })

        //Selectionne le boutton +:
        let buttonMore = document.getElementById('more')
        console.log(buttonMore)

        // Ecoute le boutton +:
        buttonMore.addEventListener('click', () => {

        // Récupére la valeur de l'element et l'initialise:
        let getValue = document.getElementById('amount').value

        ++getValue

        // Modifie la valeur de l'element:
        getValue = document.getElementById('amount').value = getValue
        //modifyPrice(getValue)
        })
   }
   modifyValue()

/*
   ///////////////////////////////////////////////////////////
// Modifie le prix en fonction de la quantité: ////////////

function modifyPrice(getValue = 1 ) {
    console.log(getValue)

    // Selectionne le prix:
    let getPrice = document.getElementById("price")
    console.log(getPrice)

    let price = getPrice.innerHTML = productData.price + "€"
    //console.log(price)

    // Multiplie la quantité par le prix:
    let result = getValue * price
    console.log(result)

    // Affiche le resultat de la multiplication:
    getPrice.innerHTML = result + "€"
}
modifyPrice()
*/

}

/*
///////////////////////////////////////////////////////////
// Ajoute ou diminue la quantité: /////////////////////////

    function modifyValue() {

        // Selectionne le boutton -:
        let buttonLess = document.getElementById('less')
        console.log(buttonLess)

        // Ecoute le boutton -:
         buttonLess.addEventListener('click', () => {

         // Récupére la valeur de l'element et l'initialise:
         let getValue = document.getElementById('amount').value
         console.log(getValue)

         --getValue

         if (getValue >= 0) {
            // Modifie la valeur de l'element:
            getValue = document.getElementById('amount').value = getValue
            modifyPrice(getValue)
           }
        })

        //Selectionne le boutton +:
        let buttonMore = document.getElementById('more')
        console.log(buttonMore)

        // Ecoute le boutton +:
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
// Modifie le prix en fonction de la quantité: ////////////

    function modifyPrice(getValue = 1 ) {
        console.log(getValue)

        // Selectionne le prix:
        let getPrice = document.getElementById("price")
        console.log(getPrice)

        let price = getPrice.innerHTML = productData.price + "€"
        //console.log(price)

        // Multiplie la quantité par le prix:
        let result = getValue * price
        console.log(result)

        // Affiche le resultat de la multiplication:
        getPrice.innerHTML = result + "€"
}
modifyPrice()
*/