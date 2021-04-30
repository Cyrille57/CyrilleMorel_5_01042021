///////////////////////////////////////////////////////////
/////// Affiche les produits contenue dans le panier //////
///////////////////////////////////////////////////////////


// 1) ////////////////////////////////////////////////////////
// Récupére les produit dans localStorager:
let productLocalStorage = JSON.parse(localStorage.getItem("product"))
//console.log(productLocalStorage)
//réponse : tableau des objets
//console.log(productLocalStorage.length)
//réponse : 3


// 2) ////////////////////////////////////////////////////////
// Récupére l'id un a un:
let idProductPanier = ""
for (var i = 0; i < productLocalStorage.length; i++) {
    lidProductPanier = productLocalStorage[i].idProduct
    //console.log(idProductPanier)
    assemblyId(idProductPanier)
}

// 3) /////////////////////////////////////////////////////////
/**
 * Fonction qui concaténe l'url de l'API
 * avec l'id récupéré et filtré
 */

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
assemblyId(idProductPanier)


// 4) /////////////////////////////////////////////////////////
/**
 * Fonction XMLHttpRequest qui se connecte avec l'url précédent
 *  et récupére les données:
 */

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
            window.location.href = '../page404.html'
        }
    };

    // Ouvre la connexion en précisant la méthode:
    xhr.open("GET", urlProduct, true);

    // Envoie la requête:
    xhr.send();
}

///////////////////////////////////////////////////////////
// Panier: ////////////////////////////////////////////////
    //Selectionne l'id parent:
    let main = document.querySelector('main')
    console.log(main)


///////////////////////////////////////////////////////////
// Création des éléments de base enfants: /////////////////
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
// Création intérieur box: ////////////////////////////////
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
        //console.log(divColTitle)

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
// Pied de la carte: //////////////////////////////////////
    // Div Back to shop:
    let divBackShop = createTag('div')
    addClass(divBackShop, 'back-to-shop')

    // Lien fléché Back to shop:
    let linkBackShop = createTag('a')
    linkBackShop.setAttribute("href", "../../frontend/index.html")
     linkBackShop.innerHTML = "&leftarrow;"

    // Texte Back to shop:
    let textBackShop = createTag('span')
    addClass(textBackShop, 'text-muted')
     textBackShop.innerHTML = "Retour à la boutique"

///////////////////////////////////////////////////////////
// Récapitulatif: /////////////////////////////////////////
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
       divPriceRecap.innerHTML = 55 + " €"

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
// Panier: ////////////////////////////////////////////////
    main.appendChild(divSectionPanier)
    // Card:
    divSectionPanier.appendChild(divCard)
    // Row:
    divCard.appendChild(divRow)
    // col-md-8
    divRow.appendChild(divCol)

///////////////////////////////////////////////////////////
// Entete: ////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////
// Pied de la carte: //////////////////////////////////////
    // Div Back to shop:
    divCol.appendChild(divBackShop)
    // Lien fléché Back to shop:
    divBackShop.appendChild(linkBackShop)
    // Texte Back to shop:
    divBackShop.appendChild(textBackShop)

///////////////////////////////////////////////////////////
// Récapitulatif: /////////////////////////////////////////
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
    console.log(productData)
    // cA ca marche :


    //Selectionne l'id parent:
    //let main = document.querySelector('main')
    //console.log(main)


    /**
     * Création des éléments de base enfants:
     */
    // Panier:

    //    let divSectionPanier = createTag('section')
    //console.log(divSectionPanier)


    //divSectionPanier.innerHTML= productData.name
    //main.appendChild(divSectionPanier)



    ///////////////////////////////////////////////////////////
    // Corps
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

    // Récupére l'imageUrl
    img.src = productData.imageUrl
     img.alt = 'Image du produit'
      console.log(productData.imageUrl)

    // Col Titre du produit:
    let divColTitleProduct = createTag('div')
    addClass(divColTitleProduct, 'col')

    // Titre du produit:
    let divTitleProduct = createTag('div')
    addClass(divTitleProduct, 'row')
     divTitleProduct.innerHTML = productData.name
     console.log(productData.name)

    // Div amount:
    let divColAmount = createTag('div')
    addClass(divColAmount, 'col')
     divColAmount.setAttribute("style", " display:flex; ")

    // Less:
    let less = createTag('a')
    less.setAttribute("id", "less");
     less.setAttribute("href", "#")
      less.innerHTML = "-"

    // Input Amount:
    let inputAmount = createTag('input')
    addClass(inputAmount, 'text-center')
     inputAmount.setAttribute("id", "amount")
      inputAmount.setAttribute("value", "1")

    // More:
    let more = createTag('a')
    more.setAttribute("id", "more");
     more.setAttribute("href", "#")
      more.innerHTML = "+"

    //Div Price:
    let divPrice = createTag('div')
    addClass(divPrice, 'col')
     divPrice.setAttribute("id", "price");
      divPrice.innerHTML = productData.price

    // Delete:
    let deleteProduct = createTag('span')
    addClass(deleteProduct, 'close')
     deleteProduct.innerHTML = "&#10005;"

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

  }



