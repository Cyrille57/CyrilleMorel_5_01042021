///////////////////////////////////////////////////////////
/////// Affiche les produits contenue dans le panier //////
///////////////////////////////////////////////////////////


// 1) ////////////////////////////////////////////////////////
// Récupére les produit dans localStorager: //////////////////
let productLocalStorage = JSON.parse(localStorage.getItem("product"))
console.log(productLocalStorage)
console.log(productLocalStorage.length)


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
            console.log(productData);

            // envoie le productData a la fonction displayPanier:
            displayPanier(productData)
            countArticle (productData)

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
// Affichage html ////////////////////////////////////////////

///////////////////////////////////////////////////////////
// I) Sélectionne le Parent: ******************************
    //Selectionne l'id parent:
    let main = document.querySelector('main')
    //console.log(main)

///////////////////////////////////////////////////////////
// I) A) Création des éléments de base enfants: ***********
    // Panier:
    let divSectionPanier = createTag('section')

    // Card:
    let divCard = createTag('div')
    addClass(divCard, 'card')
    addClass(divCard, 'divCardPanier')

    // Row:
    let divRow = createTag('div')
    addClass(divRow, 'divRow')
    addClass(divRow, 'row')

    // col-md-8
    let divCol = createTag('div')
    addClass(divCol, 'col-md-8')
     addClass(divCol, 'cart')
     divCol.setAttribute("id", "parentCardProduct")

///////////////////////////////////////////////////////////
// I) B) Création intérieur box: **************************
    // Entete
    //  Title:
    let divHeadCardTitle = createTag('div')
    addClass(divHeadCardTitle, 'title')

    // Row:
    let divRowTitle = createTag('div')
    addClass(divRowTitle, 'row')

    // Col:
    let divColTitle = createTag('div')
    addClass(divColTitle, 'col')
    addClass(divColTitle, 'divColTitle')

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
// ESSAIE: ************************************************




///////////////////////////////////////////////////////////
// I) D) Pied de la carte: ********************************
    // Div Back to shop:
    let divBackShop = createTag('div')
    addClass(divBackShop, 'back-to-shop')

    // Box lien et texte backShop:
    let boxBackShop = createTag('div')
    addClass(boxBackShop, 'boxBackShop')

    // Lien fléché Back to shop:
    let linkBackShop = createTag('a')
    addClass(linkBackShop , 'linkBackShop')
    linkBackShop.setAttribute("href", "../../frontend/index.html")
     linkBackShop.innerHTML = "&leftarrow;"

    // Texte Back to shop:
    let textBackShop = createTag('span')
    addClass(textBackShop, 'textBackShop')
    addClass(textBackShop, 'text-muted')
     textBackShop.innerHTML = "Retour à la boutique"

     // Box lien et texte delete all:
     let boxDeleteAll= createTag('div')
     addClass(boxDeleteAll, 'boxDeleteAll')

    // lien delete all:
    let linkDeleteAll = createTag('a')
    addClass(linkDeleteAll, 'linkDeleteAll')
    linkDeleteAll.setAttribute("href", "#")
    linkDeleteAll.innerHTML= "&#8634;"

    // Supprimer tout le panier:
    let textDeleteAll = createTag('a')
    addClass(textDeleteAll, 'textDelete')
    addClass(textDeleteAll, 'text-muted')
    textDeleteAll.setAttribute("href", "#")
    textDeleteAll.innerHTML = "Vider le panier"


///////////////////////////////////////////////////////////
// I) E) Récapitulatif: ***********************************
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
    addClass(divBoxItemRecap, 'divBoxItemRecap')

    // Div Item recapitulatif:
    let divItemRecap = createTag('div')
    //addClass(divItemRecap, 'col')
    divItemRecap.setAttribute("id", "numberArticle")
      //divItemRecap.innerHTML = "items 3"

    // Price recapitulatif:
    let divPriceRecap = createTag('div')
    addClass(divPriceRecap, 'col')
     addClass(divPriceRecap, 'text-right')
      divPriceRecap.setAttribute("style", "margin-top: 5%;")

    // Div box total recap:
    let divBoxTotal = createTag('div')
    addClass(divBoxTotal, 'row')
    addClass(divBoxTotal, 'divBoxTotal')

    // Div text price total:
    let divTextPriceTotal = createTag('div')
    addClass(divTextPriceTotal, 'col')
    addClass(divTextPriceTotal, 'divTextPriceTotal')
     divTextPriceTotal.innerHTML = "Prix Total: "

    // Div price total:
    let divPriceTotal = createTag('div')
    addClass(divPriceTotal, 'col')
     divPriceTotal.setAttribute("id", "total")

    // button valider la commande:
    let buttonConfirm = createTag('button')
     addClass(buttonConfirm, 'btn')
     addClass(buttonConfirm, 'btnConfirmation')
      addClass(buttonConfirm, 'rounded-pill')
       addClass(buttonConfirm, 'btn-dark')
        buttonConfirm.innerHTML = "Confirmer la commande"

///////////////////////////////////////////////////////////
// I) F) Ajout Panier: ************************************
    main.appendChild(divSectionPanier)
    // Card:
    divSectionPanier.appendChild(divCard)
    // Row:
    divCard.appendChild(divRow)
    // col-md-8
    divRow.appendChild(divCol)

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



///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////




function displayPanier(productData) {


    ///////////////////////////////////////////////////////////
    // I) C) Corps: *******************************************
    // Row Article:
    let divRowArticle = createTag('div')
    addClass(divRowArticle, "divRowArticle")
    addClass(divRowArticle, "row")
     divRowArticle.setAttribute("id", "row_" + productData._id)

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

    // Box pour col title et col div amount:
    let boxTitleAmount= createTag('div')
    addClass(boxTitleAmount, 'boxTitleAmount')

    // Col Titre du produit:
    let divColTitleProduct = createTag('div')
    addClass(divColTitleProduct, 'col')
    addClass(divColTitleProduct, 'modifyWidth')

    // Titre du produit:
    let divTitleProduct = createTag('div')
    addClass(divTitleProduct, 'row')
     addClass(divTitleProduct, 'childrenCardProduct')
      divTitleProduct.setAttribute("id","title")
       divTitleProduct.setAttribute("data-idtitre",productData._id)

    // Div amount:
    let divColAmount = createTag('div')
    addClass(divColAmount, 'col')
    addClass(divColAmount, 'modifyWidth')
     divColAmount.setAttribute("style", " display:flex; ")

    // Less:
    let less = createTag('a')
    less.setAttribute("id", "less")
     less.setAttribute("href", "#")
      less.innerHTML = "-"
       less.setAttribute("data-idproduct",productData._id)

    // Input Amount:
    let inputAmount = createTag('input')
    addClass(inputAmount, 'inputAmount')
    addClass(inputAmount, 'text-center')
     inputAmount.setAttribute("id", "amount_" + productData._id)
      inputAmount.setAttribute("value", "1")
      inputAmount.setAttribute("data-inputamount", productData._id )

    // More:
    let more = createTag('a')
    more.setAttribute("id", "more")
     more.setAttribute("href", "#")
      more.innerHTML = "+"
       more.setAttribute("data-idproduct", productData._id )

    // Box pour Div Price et Delete:
    let boxPriceDelete= createTag('div')
    addClass(boxPriceDelete, 'boxPriceDelete')

    //Div Price:
    let divPrice = createTag('div')
    addClass(divPrice, 'col')
    addClass(divPrice, 'price')
     divPrice.setAttribute("id", "price_" + productData._id)
     //console.log(divPrice)

    // Delete:
    let deleteProduct = createTag('a')
    deleteProduct.setAttribute("id", "delete")
     deleteProduct.setAttribute("href", "#")
      deleteProduct.innerHTML = "&#10005"
       deleteProduct.setAttribute("data-iddelete",productData._id)


    // Corps: ////////////////////////////////////////////////
    // Row Article:
    divCol.appendChild(divRowArticle)

    // Row principale:
    divRowArticle.appendChild(divRowMain)

    // Col Image:
    divRowMain.appendChild(divCol2)
    // Image:
    divCol2.appendChild(img)

    // Box pour col title et col div amount:
    divRowMain.appendChild(boxTitleAmount)
    // Col Titre du produit:
    boxTitleAmount.appendChild(divColTitleProduct)
    // Titre du produit:
    divColTitleProduct.appendChild(divTitleProduct)

    // Div amount:
    boxTitleAmount.appendChild(divColAmount)

    // Less:
    divColAmount.appendChild(less)
    // Input Amount:
    divColAmount.appendChild(inputAmount)
    // More:
    divColAmount.appendChild(more)

    // Box pour Div Price et Delete:
    divRowMain.appendChild(boxPriceDelete)
    //Div Price:
    boxPriceDelete.appendChild(divPrice)

    // Delete:
    boxPriceDelete.appendChild(deleteProduct)

    // Pied de la carte: //////////////////////////////////////
    // Div Back to shop:
    divCol.appendChild(divBackShop)
    // Box lien et texte backShop:
    divBackShop.appendChild(boxBackShop)
    // Lien fléché Back to shop:
    boxBackShop.appendChild(linkBackShop)
    // Texte Back to shop:
    boxBackShop.appendChild(textBackShop)
    // Box lien et texte delete all:
    divBackShop.appendChild(boxDeleteAll)
    // lien fleché delete all:
    boxDeleteAll.appendChild(linkDeleteAll)
    // texte delete all:
    boxDeleteAll.appendChild(textDeleteAll)

    //////////////////////////////////////////////////////////
    // I) E) Récupére et affiche les données: ****************
    // Récupére l'imageUrl
    img.src = productData.imageUrl
     //console.log(productData.imageUrl)

    // Récupére le titre du produit:
    divTitleProduct.innerHTML = productData.name
     //console.log(productData.name)

    //Récupére le prix du produit:
    divPrice.innerHTML = productData.price + " €"
    console.log(divPrice.innerHTML)

///////////////////////////////////////////////////////////
// Ecoute les +,- et * : //////////////////////////////////

        // Ecoute le boutton -:
         less.addEventListener('click', (event) => {
            //console.log(event)
            // Cible l'id du less utilisé:
            let idProduct = event.target.getAttribute('data-idproduct')
            console.log(idProduct)

            //
            getValue = modifyQuantity(idProduct, -1)
            console.log(getValue)

           // Envoie idProduct et getValue à la fonction modifyPrice:
           modifyPrice(idProduct,getValue)
           countArticle (getValue)
           

           // Envoie idProduct à la fonction deleteProduct:
           //deleteProduct(idProduct)

        })

        // Ecoute le boutton +:
        more.addEventListener('click', (event) => {
            //console.log(event)
            // Cible l'id du more utilisé:
            let idProduct = event.target.getAttribute('data-idproduct')
            console.log(idProduct)
            //
            getValue = modifyQuantity(idProduct, 1)
            console.log(getValue)

            // Envoie idProduct et getValue à la fonction modifyPrice
            modifyPrice(idProduct,getValue)
            countArticle (getValue)
        })


        // Ecoute le boutton delete:
        deleteProduct.addEventListener('click', (event) => {

            // Cible l'id du delete utilisé:
            let idDelete = event.target.getAttribute('data-iddelete')
            console.log(idDelete)
            location.reload()

            // Envoie idDelete (l'id) aux fonctions:
            deleteRowProduct(idDelete)
            deleteProductLocalStorage(idDelete)
        })
}

///////////////////////////////////////////////////////////
// Modifie les quantité: //////////////////////////////////
function modifyQuantity(idProduct, nQuantity) {
    console.log(nQuantity)
    // Cible data de more et less:
    //let idProduct = event.target.getAttribute('data-idproduct')
    console.log(idProduct)
    // Réponse : 5beaaa8f1c9d440000a57d95

    // Récupére la valeur de l'element et l'initialise:
    let getValue = parseInt(document.getElementById('amount_' + idProduct).value)
    console.log(getValue)
    // Réponse : 1

    getValue = getValue + nQuantity
    console.log(getValue)
    // Réponse: 2

    if (getValue >= 0) {
    // Modifie la valeur de l'element:
    document.getElementById('amount_' + idProduct).value = getValue
    return getValue
   }
   //console.log(getValue)
   return 0
}


///////////////////////////////////////////////////////////
// Modifie le prix en fonction de la quantité: ////////////
function modifyPrice(idProduct, getValue) {

    console.log(idProduct)
    // Réponse: id
    console.log(getValue)
    // Réponse: 2

    // Récupére la valeur de l'element et l'initialise:
    let getPrice = parseInt(document.getElementById('price_' + idProduct).innerHTML)
    //console.log(getPrice)

    //getPrice = getValue * getPrice
    let newPrice = getValue * getPrice
    //console.log(newPrice)

    // Récupére la valeur de l'element et l'initialise:
    let getNewPrice = document.getElementById('price_'+ idProduct)
    //console.log(getNewPrice)
    getNewPrice.innerHTML= newPrice + " €"
    //console.log(getNewPrice)


}

///////////////////////////////////////////////////////////
// Suprime la ligne de l' article: ////////////////////////
function deleteRowProduct(idDelete) {
///////////////////////////////////////////////////////////
// Supprime la ligne coté client: /////////////////////////
    console.log(idDelete)
    // Réponse : l'id du delete sélectionner

    let getDelete = document.getElementById('row_' + idDelete)
    console.log(getDelete)
    // Réponse: selectionne le row en fonction de l'id

    // supprime la ligne:
    getDelete.remove(idDelete)
}

///////////////////////////////////////////////////////////
// Supprime la ligne coté localStorage: ///////////////////
function deleteProductLocalStorage (idDelete) {

    //console.log(productLocalStorage)
    // Réponse : tableu des objet

    let arrayproductLocalStorage = JSON.parse(localStorage.getItem("product"))
    console.log(arrayproductLocalStorage)

    // Récupère l'index de l'objet avec l'id (idDelete)
    var removeIndex = arrayproductLocalStorage.map(function(item) { return item.idProduct; }).indexOf(idDelete);
    console.log(removeIndex)
    // Réponse: retourne l'index de l'objet du tableau

    // Supprime l'objet grace à son index:
    arrayproductLocalStorage.splice(removeIndex, 1)
    console.log(arrayproductLocalStorage)

    // Réponse: retourne le tableau avec les objet restant
    localStorage.setItem("product", JSON.stringify(arrayproductLocalStorage))

}



// 2) /////////////////////////////////////////////////////////
// Affiche le nombre d'article: ///////////////////////////////


function countArticle (getValue) {

    // selectionne l'élément ou inscrire le résultat:
    let numberRecap = document.getElementById("numberArticle")
    //console.log(numberRecap)

    console.log(getValue)
    console.log(productLocalStorage)
    console.log(productLocalStorage.lenght)

    let nbProductLocalStorage = productLocalStorage.length
    console.log(nbProductLocalStorage)

    //********************************************************** */
    //*********************** EN COURS ************************* */
    //********************************************************** */
    // Sélectionne tout les input amount :
    let getValueAmount = document.querySelectorAll('[data-inputamount]')
    console.log(getValueAmount)
    // Convertit getValueAmount en tableau:
    //let getValueAmountInTab = Array.from(getValueAmount)
    //console.log(getValueAmountInTab)
/*
    for (let i=0; i<getValueAmountInTab.length; i++){
        console.log(getValueAmountInTab[i].value)
        let totalValueAmount = getValueAmountInTab[i].value
        console.log(totalValueAmount)
    }
*/
    let nb2 = getValue + nbProductLocalStorage -1
    //console.log(nb2)


    if (getValue>1 && productLocalStorage.length>1) {
        // Si productLocalStorage et getValue supérieure à 1 mettre au pluriel et rajouter getValue:
        numberRecap.innerHTML = "Nombre d'articles:  " + nb2
    }else if (productLocalStorage.length>1) {
        // Si productLocalStorage supérieure à 1 mettre au pluriel:
        numberRecap.innerHTML = "Nombre d'articles:  " + productLocalStorage.length
    }else {
        // Si productLocalStorage inférieuree à 1 mettre au singulier:
        numberRecap.innerHTML = "Nombre d'article:  " + productLocalStorage.length
    }



 }
countArticle ()


///////////////////////////////////////////////////////////
// Prix total: ////////////

// Selectionne le prix:
function totalPrice (){

    // Sélectionne la div ou le total vas s'afficher:
    let sommeTotale = document.getElementById("total")
    //console.log(sommeTotale)

    // Sélectionne les div price:
   let getPrice = document.querySelectorAll('.price')
   console.log(getPrice)
   // Répoonse une NodeList avec mes div price


   //let price = "price_" + productData._id.length

/*
   for (let entry of getPrice.entries()) {
       console.log(entry)
       //console.log(entry[1].innerHTML)

       // Sélectionne les prix des NodeList au format string:
       let allPrice = entry[1].innerHTML
       //console.log(typeof allPrice)
       // Réponse : retourne les prix en string

       // Selectionne l'index de €:
       let allPriceIndexEuro = allPrice.indexOf('€')
       //console.log(allPriceIndexEuro)
       // Réponse : retourne l'index

       // Enleve le €:
       let allPriceWithoutEuro = allPrice.slice(0,5)
       //console.log(allPriceWithoutEuro)
       // Réponse : retourne le string sans €

       // Convertit le srting en number:
       let allPriceNumber = parseInt(allPriceWithoutEuro, 10)
       console.log(allPriceNumber)

//**************************************************************
///////////////////// En cours /////////////////////////////////

       // Renvoie les number dans un tableau: 
       for (let i = 0; i<getPrice.length ; i++){
           asx = allPriceNumber
           //asx.push(allPriceNumber)
           console.log(asx)
       }


       // Créer un tableau avec les number:
       let tabOfNumbers = []
       tabOfNumbers.push(allPriceNumber)
       console.log(tabOfNumbers)

       for ( let i = 0; i< allPriceNumber.length; i++){
        //let tab = tabOfNumbers.concat(tabOfNumbers[i])
       console.log(allPriceNumber.length)
       }

       /*
       // Adittionne les tarifs:
       for (let i = 0; i<allPriceNumber.length; i++){
           console.log(allPriceNumber.length)
           let sumPrice = allPriceNumber + allPriceNumber[i]
            console.log(sumPrice)
       }



   }
*/
}
totalPrice ()




///////////////////////////////////////////////////////////
// II) Création Formulaire: ///////////////////////////////

///////////////////////////////////////////////////////////
// I) Sélectionne le Parent: ******************************
    //Selectionne l'id parent:
    //let main = document.querySelector('main')
    //console.log(main)

///////////////////////////////////////////////////////////
// II) A) Création des éléments de base enfants: **********
    // Container:

    let divContainer = createTag('div')
    addClass(divContainer, 'container')

    divContainer.setAttribute("id", "animation")

    let form = document.getElementById('animation')
    buttonConfirm.addEventListener('click', () => {
        addClass(divContainer, 'runAnimation')
    })

    // Row:
    let divRowPrincipale = createTag('div')
    addClass(divRowPrincipale, 'row')

    // Col-12
    let divColPrincipale = createTag('div')
    addClass(divColPrincipale, 'col-12')

///////////////////////////////////////////////////////////
// II) B) Création intérieur box: **************************
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
    addClass(divCard, 'divCard')
    divCard.setAttribute("style", "box-shadow: -1px 2px 10px 3px #e9ecef inset;")

    // Row:
    divRow = createTag('div')
    addClass(divRow, 'row')
    addClass(divRow, 'row--modify')

    // col-md-8
    divCol2 = createTag('div')
    addClass(divCol2, 'col-md-10')
    addClass(divCol2, 'cart')
    addClass(divCol2, 'cart--modify')

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
    divRow.appendChild(divCol2)

    // Div Form:
    let formCheckOut = createTag('form')
    formCheckOut.setAttribute("id", "formValidation")
    formCheckOut.setAttribute("action", "../confirmation.html")
    formCheckOut.setAttribute("method", "post")

    // Form Row:
    let formRow = createTag('div')
    addClass(formRow, 'form-row')

    ///////////////////////////////////////////////////////////
    // Form group name:
    let formGroupName = createTag('div')
    addClass(formGroupName, 'form-group')
    addClass(formGroupName, 'col-md-6')

    // Label name customer:
    let labelName = createTag('label')
    labelName.setAttribute("for", "inputName")
    labelName.innerHTML = "Nom:"

    // Input name:
    let inputName = createTag('input')
    addClass(inputName, 'form-control')
    inputName.setAttribute("id", "inputName")
    inputName.setAttribute("type", "text")
    inputName.setAttribute("name", "inputName")
    inputName.setAttribute("style", "margin:0%;")
    inputName.setAttribute("maxlength", "30")
    inputName.required = true;

    ///////////////////////////////////////////////////////////
    // Form group last name:
    let formGroupLastName = createTag('div')
    addClass(formGroupLastName, 'form-group')
    addClass(formGroupLastName, 'col-md-6')

    // Label last name customer:
    let labelLastName = createTag('label')
    labelLastName.setAttribute("for", "inputLastName")
    labelLastName.innerHTML = "Prénom:"

    // Input last name:
    let inputLastName = createTag('input')
    addClass(inputLastName, 'form-control')
    inputLastName.setAttribute("id", "inputLastName")
    inputLastName.setAttribute("type", "text")
    inputLastName.setAttribute("name", "inputLastName")
    inputLastName.setAttribute("maxlength", "30")


    ///////////////////////////////////////////////////////////
    // Form group Email:
    let formGroupEmail = createTag('div')
    addClass(formGroupEmail, 'form-group')

    // Label Email customer:
    let labelEmail = createTag('label')
    labelEmail.setAttribute("for", "inputEmail")
    labelEmail.innerHTML = "E-mail:"

    // Input Email:
    let inputEmail = createTag('input')
    addClass(inputEmail, 'form-control')
    inputEmail.setAttribute("id", "inputEmail")
    inputEmail.setAttribute("type", "email")
    inputEmail.setAttribute("name", "inputEmail")
    inputEmail.required = true;

    ///////////////////////////////////////////////////////////
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
    inputAddress.setAttribute("id", "inputAddress")
    inputAddress.setAttribute("type", "text")
    inputAddress.setAttribute("name", "inputAddress")

    ///////////////////////////////////////////////////////////
    // Div form row location
    let divFormRowLocation = createTag('div')
    addClass(divFormRowLocation, 'form-row')

    ///////////////////////////////////////////////////////////
    // Div form group city:
    let divFormGroupLocation = createTag('div')
    addClass(divFormGroupLocation, 'form-group')
    addClass(divFormGroupLocation, 'divFormGroupLocation')
    addClass(divFormGroupLocation, 'col-md-6')

    // Label Location City:
    let labelCity = createTag('label')
    labelCity.setAttribute("for", "inputCity")
    labelCity.innerHTML = "Ville:"

    // Input city:
    let inputLocationCity = createTag('input')
    addClass(inputLocationCity, 'form-control')
    inputLocationCity.setAttribute("id", "inputCity")
    inputLocationCity.setAttribute("type", "text")
    inputLocationCity.setAttribute("name", "inputLocationCity")

    ///////////////////////////////////////////////////////////
    // Div form group zip:
    let divFormGroupzip = createTag('div')
    addClass(divFormGroupzip, 'form-group')
    addClass(divFormGroupzip, 'divFormGroupzip')
    addClass(divFormGroupzip, 'col-md-6')

    // Label zip:
    let labelZip = createTag('label')
    labelZip.setAttribute("for", "inputZip")
    labelZip.innerHTML = "Code Postal:"

    // Input Zip:
    let inputZip = createTag('input')
    addClass(inputZip, 'form-control')
    inputZip.setAttribute("type", "texte")
    inputZip.setAttribute("id", "inputZip")
    inputZip.setAttribute("name", "inputZip")

    ///////////////////////////////////////////////////////////
    // Div form group bouton:
    let divFormGroupButton = createTag('div')
    addClass(divFormGroupButton, 'form-group')
    addClass(divFormGroupButton, 'boxSubmit')

    // bouton:
    let buttonConfirmation = createTag ('button')
    addClass(buttonConfirmation, 'btn')
    addClass(buttonConfirmation, 'submit')
    addClass(buttonConfirmation, 'rounded-pill')
    addClass(buttonConfirmation, 'bg-gradient')
    addClass(buttonConfirmation, 'justify-content-center')
    
    buttonConfirmation.setAttribute("id", "buttonSubmit")
    buttonConfirmation.setAttribute("type", "submit")
    buttonConfirmation.setAttribute("href", "../confirmation.html")
    buttonConfirmation.setAttribute("border", "transparent")
    buttonConfirmation.innerHTML = "Valider la commande"


///////////////////////////////////////////////////////////
// Div Form:
divCol2.appendChild(formCheckOut)

// Form Row:
formCheckOut.appendChild(formRow)

///////////////////////////////////////////////////////////
// Form group name:
formRow.appendChild(formGroupName)

// Label name customer:
formGroupName.appendChild(labelName)

// Input name:
formGroupName.appendChild(inputName)

///////////////////////////////////////////////////////////
// Form group last name:
formRow.appendChild(formGroupLastName)

// Label last name customer:
formGroupLastName.appendChild(labelLastName)

// Input last name:
formGroupLastName.appendChild(inputLastName)

///////////////////////////////////////////////////////////
// Form group email:
formCheckOut.appendChild(formGroupEmail)

// Label Email customer:
formGroupEmail.appendChild(labelEmail)

// Input Email:
formGroupEmail.appendChild(inputEmail)

///////////////////////////////////////////////////////////
// Form group adresse:
formCheckOut.appendChild(formGroupAddress)

// Label address customer:
formGroupAddress.appendChild(labelAddress)

// Input address:
formGroupAddress.appendChild(inputAddress)

///////////////////////////////////////////////////////////
// Div form row location
formCheckOut.appendChild(divFormRowLocation)

///////////////////////////////////////////////////////////
// Div form group location:
divFormRowLocation.appendChild(divFormGroupLocation)

// Label Location City:
divFormGroupLocation.appendChild(labelCity)

// Input city:
divFormGroupLocation.appendChild(inputLocationCity)

///////////////////////////////////////////////////////////
// Div form group zip:
divFormRowLocation.appendChild(divFormGroupzip)

// Label zip:
divFormGroupzip.appendChild(labelZip)

// Input Zip:
divFormGroupzip.appendChild(inputZip)

///////////////////////////////////////////////////////////
// Button:
divFormRowLocation.appendChild(divFormGroupButton)

// bouton:
divFormGroupButton.appendChild(buttonConfirmation)


//var formName = document.forms["formValidation"]["inputName"]
//console.log(formName)

