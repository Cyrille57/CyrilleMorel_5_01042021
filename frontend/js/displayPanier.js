///////////////////////////////////////////////////////////
/////// Affiche les produits contenue dans le panier //////
///////////////////////////////////////////////////////////


// 1) ////////////////////////////////////////////////////////
// Récupére les produit dans localStorager: //////////////////
let productLocalStorage = JSON.parse(localStorage.getItem("product"))
console.log(productLocalStorage)

//réponse : tableau des objets
//console.log(productLocalStorage.length)
//réponse : 3


// 2) ////////////////////////////////////////////////////////
// Récupére l'id un a un: ////////////////////////////////////
let idProductPanier = ""
function getId (productLocalStorage) {
    for (var i = 0; i < productLocalStorage.length; i++) {

        let idProductPanier = productLocalStorage[i].idProduct
        console.log(idProductPanier)
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
            totalPrice (productData)
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

    // Row:
    let divRow = createTag('div')
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
// ESSAIE: ************************************************

// Less:
let less = createTag('a')
less.setAttribute("id", "less")
 less.setAttribute("href", "#")
  less.innerHTML = "-"

// More:
let more = createTag('a')
more.setAttribute("id", "more")
 more.setAttribute("href", "#")
  more.innerHTML = "+"


///////////////////////////////////////////////////////////
// I) D) Pied de la carte: ********************************
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
     divBoxItemRecap.setAttribute("style", " padding: 2vh 0;")

    // Div Item recapitulatif:
    let divItemRecap = createTag('div')
    //addClass(divItemRecap, 'col')
    divItemRecap.setAttribute("id", "numberArticle")
     divItemRecap.setAttribute("style", "padding-left:0; margin-top: 5%;")
      //divItemRecap.innerHTML = "items 3"


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
     divPriceTotal.setAttribute("id", "total")
      //divPriceTotal.innerHTML = 137 + " €"

    // button valider la commande:
    let buttonConfirm = createTag('button')
     addClass(buttonConfirm, 'btn')
      addClass(buttonConfirm, 'rounded-pill')
       addClass(buttonConfirm, 'btn-dark')
        buttonConfirm.innerHTML = "Valider la commande"

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


console.log(productLocalStorage)

function displayPanier(productData) {

    ///////////////////////////////////////////////////////////
    // I) C) Corps: *******************************************
    // Row Article:
    let divRowArticle = createTag('div')
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

    // Col Titre du produit:
    let divColTitleProduct = createTag('div')
    addClass(divColTitleProduct, 'col')

    // Titre du produit:
    let divTitleProduct = createTag('div')
    addClass(divTitleProduct, 'row')
     addClass(divTitleProduct, 'childrenCardProduct')
      divTitleProduct.setAttribute("id","title")
       divTitleProduct.setAttribute("data-idtitre",productData._id)


    //let countEnfant =enfantProduct.length
    //console.log(countEnfant)

/*
    //let parentArticle = document.getElementById("parentCardProduct")
    //console.log(parentArticle)

    //let enfantProduct = document.getElementsByClassName('border-bottom')

    let enfantProduct = document.querySelectorAll(".border-bottom")
    console.log(enfantProduct)

    //let countEnfant = enfantProduct.length
    //console.log(countEnfant)
    numberRecap.innerHTML = enfantProduct.length
*/

    // Div amount:
    let divColAmount = createTag('div')
    addClass(divColAmount, 'col')
     divColAmount.setAttribute("style", " display:flex; ")

    // Less:
    let less = createTag('a')
    less.setAttribute("id", "less")
     less.setAttribute("href", "#")
      less.innerHTML = "-"
       less.setAttribute("data-idproduct",productData._id)

    // Input Amount:
    let inputAmount = createTag('input')
    addClass(inputAmount, 'text-center')
     inputAmount.setAttribute("id", "amount_" + productData._id)
      inputAmount.setAttribute("value", "1")

    // More:
    let more = createTag('a')
    more.setAttribute("id", "more")
     more.setAttribute("href", "#")
      more.innerHTML = "+"
       more.setAttribute("data-idproduct", productData._id )

    //Div Price:
    let divPrice = createTag('div')
    addClass(divPrice, 'col')
    addClass(divPrice, 'price')
     divPrice.setAttribute("id", "price_" + productData._id)
     //console.log(divPrice)

    // Delete:
    let deleteProduct = createTag('a')
    addClass(deleteProduct, 'close')
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

    // Pied de la carte: //////////////////////////////////////
    // Div Back to shop:
    divCol.appendChild(divBackShop)
    // Lien fléché Back to shop:
    divBackShop.appendChild(linkBackShop)
    // Texte Back to shop:
    divBackShop.appendChild(textBackShop)

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

///////////////////////////////////////////////////////////
// Ecoute les +,- et * : //////////////////////////////////

        // Ecoute le boutton -:
         less.addEventListener('click', (event) => {

            // Cible l'id du less utilisé:
            let idProduct = event.target.getAttribute('data-idproduct')

            //
            getValue = modifyQuantity(idProduct, -1)

           // Envoie idProduct et getValue à la fonction modifyPrice:
           modifyPrice(idProduct,getValue)

           // Envoie idProduct à la fonction deleteProduct:
           deleteProduct(idProduct)
        })

        // Ecoute le boutton +:
        more.addEventListener('click', (event) => {

            // Cible l'id du more utilisé:
            let idProduct = event.target.getAttribute('data-idproduct')

            //
            getValue = modifyQuantity(idProduct, 1)

            // Envoie idProduct et getValue à la fonction modifyPrice
            modifyPrice(idProduct,getValue)
        })


        // Ecoute le boutton delete:
        deleteProduct.addEventListener('click', (event) => {

            // Cible l'id du delete utilisé:
            let idDelete = event.target.getAttribute('data-iddelete')
            // Envoie idDelete (l'id) à la fonction deleteRowProduct:
            deleteRowProduct(idDelete)


            // Récupère l'index de l'objet avec l'id (idDelete)
            var removeIndex = productLocalStorage.map(function(item) { return item.idProduct; }).indexOf(idDelete);
            console.log(removeIndex)
            // Réponse: retourne l'index de l'objet du tableau

            // Supprime l'objet grace à son index:
            productLocalStorage.splice(removeIndex, 1)
            console.log(productLocalStorage)
            // Réponse: retourne le tableau avec les objet restant


//**************************************************************
///////////////////// En cours /////////////////////////////////

            // Envoie le tableau à la fonction deleteProductLocalStorage
            //deleteProductLocalStorage (productLocalStorage)

            let objetSepare= ""
            // Extrait les objet du tableau un à un:
            for (let i = 0; i=productLocalStorage.length; i++)
            {
                objetSepare = productLocalStorage.shift()
                console.log(objetSepare)
                // Réponse les objet un à un
            }
        })
}

///////////////////////////////////////////////////////////
// Modifie les quantité: //////////////////////////////////
function modifyQuantity(idProduct, nQuantity) {
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

   return 0
}


///////////////////////////////////////////////////////////
// Modifie le prix en fonction de la quantité: ////////////
function modifyPrice(idProduct,getValue) {
    console.log(idProduct)
    // Réponse: id
    console.log(getValue)
    // Réponse: 2

    // Récupére la valeur de l'element et l'initialise:
    let getPrice = parseInt(document.getElementById('price_' + idProduct).innerHTML)
    console.log(getPrice)

    //getPrice = getValue * getPrice
    let price = getValue * getPrice
    console.log(price)

    // Récupére la valeur de l'element et l'initialise:
    let getNewPrice = document.getElementById('price_'+ idProduct)
    getNewPrice.innerHTML= price + " €"
    console.log(getNewPrice)


}

///////////////////////////////////////////////////////////
// Suprime la ligne de l' article: ////////////////////////
function deleteRowProduct(idDelete) {
///////////////////////////////////////////////////////////
// Supprime la ligne coté client: /////////////////////////
    console.log(idDelete)
    // Réponse : l'id du delete sélectionner
    deleteProductLocalStorage (idDelete)

    let getDelete = document.getElementById('row_' + idDelete)
    console.log(getDelete)
    // Réponse: selectionne le row en fonction de l'id

    // supprime la ligne:
    getDelete.remove(idDelete)
}

///////////////////////////////////////////////////////////
// Supprime la ligne coté localStorage: ///////////////////
function deleteProductLocalStorage (productLocalStorage) {

    //console.log(productLocalStorage)
    // Réponse : tableu des objet

/*
    let erd = idDelete
    console.log(erd)
    //Réponse l'id de la ligne supprimé

    // selectione l'objet avec l'id de la ligne supprimé
    let rfv = op.find(x => x.idProduct === erd)
    console.log(rfv)

    let ess = rfv.remove
    // Supprime l'idProduct de l'objet
    //delete rfv.idProduct

    console.log(ess)
    console.log(op)
*/

}
deleteProductLocalStorage ()

/*
    for (var i = 0; i < productLocalStorage.length; i++){
        console.log(productLocalStorage.length)
        // Réponse: taille du tableau au départ

                // Récupére les différent id des produits:
                let idProductPanier  = productLocalStorage[i].idProduct
                console.log(idProductPanier)

                //Récupére l'index de l'id qui a été supprimer:
                let indexId = idProductPanier.indexOf(idDelete[i])
                //console.log(indexId)

                if (idProductPanier === idDelete){
                    console.log("c'est le cas")

                    let deleteProduct = productLocalStorage.splice (indexId,1)
                    //console.log(deleteProduct)
                    // Réponse: objet du tableau qui a été supprimer

                    console.log(productLocalStorage)
                    let ed = productLocalStorage
                    let eza = ed.length
                    // Réponse: tableau à la sortie

                    //countArticle (eza)
                    prepareObjet(productLocalStorage)
                }
                //console.log(productLocalStorage.length)
                // Réponse: taille du tableau à la sortie

            }*/



// 2) /////////////////////////////////////////////////////////
// Affiche le nombre d'article: ///////////////////////////////

/*
function countArticle ()  {


    // selectionne l'élément ou inscrire le résultat:
    let numberRecap = document.getElementById("numberArticle")
    console.log(numberRecap)

    //selecttionne le parent:
    let parentArticle = document.getElementById("parentCardProduct")
    console.log(parentArticle)

    // selectionne l'élément a compter:
    let enfantProduct = document.getElementsByClassName("border-bottom")
    console.log(enfantProduct)
   // réponse htmlcollection


   let ert = []
    ert.push(enfantProduct)
    console.log(ert.length)
    // Réponse htmlcollection ds un tableau



 }

countArticle ()
*/

// 3) /////////////////////////////////////////////////////////
// Prépare les id des produit restant: ///////////////////////
function prepareObjet(){
    //console.log(productLocalStorage)

    for (var i = 0; i < productLocalStorage.length; i++){
        let idNewProductPanier = productLocalStorage[i].idProduct
        console.log(idNewProductPanier)
    }
}
prepareObjet()


// 3) /////////////////////////////////////////////////////////
// Fonction pour ajouté un produit selectionné dans le localstorage:
/*
function envoieObjet(productLocalStorage){
    console.log(productLocalStorage)

    for (var i = 0; i < productLocalStorage.length; i++){
        let idNewProductPanier = productLocalStorage[i].idProduct
        console.log(idNewProductPanier)

    }
    //addNewProduct (idNewProductPanier)
}

*/

/*
function envoieObjet(productLocalStorage){
    console.log(productLocalStorage)

    for (var i = 0; i < productLocalStorage.length; i++){
        let idNewProductPanier = productLocalStorage[i].idProduct
        console.log(idNewProductPanier)
    }
}

    function addNewProduct () {
        // Pousse l'objet produit dans le tableau:
        productLocalStorage.push(idNewProductPanier)
        // Envoie dans local storage avec la méthode setItem dans le format json:
        localStorage.setItem("product", JSON.stringify(productLocalStorage))

        if (productLocalStorage) {
            addNewProduct ()
        }else {
            // Creer un tableau vide
            productLocalStorage = []
            addNewProduct ()
        }

    }
*/


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

/*
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
       */
       

   }

   

   
}
totalPrice ()
/*
for (i=0; i<getPrice; i++){
let somme = getPrice + getPrice[i]
console.log(somme)

*/




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
divCol2.appendChild(formCheckOut)

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