///////////////////////////////////////////////////////////
/////// Affiche les produits contenue dans le panier //////
///////////////////////////////////////////////////////////

// Récupére les produits dans le panier:
let productLocalStorage = JSON.parse(localStorage.getItem("product"))
console.log(productLocalStorage)



///////////////////////////////////////////////////////////
/**
 * Panier
 */
    //Selectionne l'id parent:
    let main = document.querySelector('main')

    /**
     * Création des éléments de base enfants:
     */
    // Panier:
    let divPanier= createTag('section')
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
    

    /**
     * Création intérieur box:
     */
    // Title:
    let divTitle = createTag('div')
    addClass(divTitle, 'title')

    // Row:
    let divRowTitle = createTag('div')
    addClass(divRowTitle, 'row')

    // Col
    let divColTitle = createTag('div')
    addClass(divColTitle, 'col')

    // H1
    let divSubTitle = createTag('h2')

    // Strong
    let strong = createTag('strong')

    // Item principale
    let divCountitem = createTag('div')
    addClass(divCountitem, 'col')
    addClass(divCountitem, 'align-self-center')
    addClass(divCountitem, 'text-right')
    addClass(divCountitem, 'text-muted')

    // Border top:
    let divBorderTop = createTag('div')
    addClass(divBorderTop, 'border-top')

    // Ajout des élément de base:
    main.appendChild(divPanier)
    divPanier.appendChild(divCard)
    //main.appendChild(divCard)
    divCard.appendChild(divRow)
    divRow.appendChild(divCol)

    // Ajout intérieur box:
    divCol.appendChild(divTitle)
    divTitle.appendChild(divRowTitle)
    divRowTitle.appendChild(divColTitle)

    // Titre:
    divColTitle.appendChild(divSubTitle)
    divSubTitle.appendChild(strong)

    // Item principale:
    divRowTitle.appendChild(divCountitem)

    // Border top^
    divCol.appendChild(divBorderTop)

    divTitle.appendChild
    strong.innerHTML = 'Panier:'

    // A AJOUTER DYNAMIQUEMENT:
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
    let divCol2=createTag('div')
    addClass(divCol2, "col-2")

    // Image:
    let img = createTag('img')
    addClass(img, "img-fluid")
    addClass(img, "hidden-mobile")
    // Récupére l'imageUrl
    //img.src =
    img.alt = 'Image du produit'

    // Col Titre du produit:
    let divColTitleProduct = createTag('div')
    addClass(divColTitleProduct, 'col')

    // Titre du produit:
    let divTitleProduct = createTag('div')
    addClass(divTitleProduct, 'row')
    divTitleProduct.innerHTML = "Stallone"
    // Div amount:
    let divColAmount = createTag('div')
    addClass(divColAmount, 'col')
    divColAmount.setAttribute("style", " display:flex; ")


    // Less:
    let less = createTag ('a')
    less.setAttribute("id", "less");
    less.setAttribute("href", "#")
    less.innerHTML= "-"

    // Input Amount:
    let inputAmount = createTag ('input')
    addClass(inputAmount, 'text-center')
    inputAmount.setAttribute("id", "amount")
    inputAmount.setAttribute("value", "")

    // More:
    let more = createTag ('a')
    more.setAttribute("id", "more");
    more.setAttribute("href", "#")
    more.innerHTML= "+"

    //Div Price:
    let divPrice = createTag('div')
    addClass(divPrice, 'col')
    divPrice.setAttribute("id", "price");
    divPrice.innerHTML= "25"

    // Delete:
    let deleteProduct = createTag('span')
    addClass(deleteProduct, 'close')
    deleteProduct.innerHTML = "&#10005;"


    // NE PAS AJOUTER DINAMIQUEMENT:
    // Div Back to shop:
    let divBackShop = createTag ('div')
    addClass(divBackShop, 'back-to-shop')

    // Lien fléché Back to shop:
    let linkBackShop = createTag ('a')
    linkBackShop.setAttribute("href", "../../frontend/index.html")
    linkBackShop.innerHTML = "&leftarrow;"

    // Texte Back to shop:
    let textBackShop = createTag ('span')
    addClass(textBackShop, 'text-muted')
    textBackShop.innerHTML = "Retour à la boutique"

    // Box Récapitulatif:
    let divBoxRecap = createTag ('div')
    addClass(divBoxRecap, 'col-md-4')
    addClass(divBoxRecap, 'summary')
    addClass(divBoxRecap, 'bg-gradient')

    // Div title récapitulatif:
    let divTitleRecap = createTag ('div')

    // Title recapitulatif:
    let titleRecap = createTag ('h2')

    // Strong title:
    let titleStrongRecap = createTag ('b')
    titleStrongRecap.innerHTML = "Récapitulatif:"

    // Trait recapitulatif:
    let separationRecap = createTag('hr')

    // Div boxItemRecap:
    let divBoxItemRecap = createTag('div')
    addClass(divBoxItemRecap, 'row')
    divBoxItemRecap.setAttribute("style", " padding: 2vh 0;")

    // Div Item recapitulatif:
    let divItemRecap = createTag ('div')
    addClass(divItemRecap, 'col')
    divItemRecap.setAttribute("style", "padding-left:0; margin-top: 5%;")
    divItemRecap.innerHTML = "items 3"

    // Price recapitulatif:
    let divPriceRecap = createTag ('div')
    addClass(divPriceRecap, 'col')
    addClass(divPriceRecap, 'text-right')
    divPriceRecap.setAttribute("style", "margin-top: 5%;")
    divPriceRecap.innerHTML = 55 +" €"

    // Div box total recap:
    let divBoxTotal = createTag ('div')
    addClass(divBoxTotal, 'row')
    divBoxTotal.setAttribute("style", "border-top: 1px solid #fff; padding: 2vh 0;")

    // Div text price total:
    let divTextPriceTotal = createTag ('div')
    addClass(divTextPriceTotal, 'col')
    divTextPriceTotal.innerHTML= "Prix Total:"

    // Div price total:
    let divPriceTotal = createTag ('div')
    addClass(divPriceTotal, 'col')
    addClass(divPriceTotal, 'text-right')
    divPriceTotal.innerHTML= 137 +" €"

    // button valider la commande:
    let buttonConfirm = createTag ('button')
    addClass(buttonConfirm, 'btn')
    addClass(buttonConfirm, 'rounded-pill')
    addClass(buttonConfirm, 'btn-dark')
    buttonConfirm.innerHTML = "Valider la commande"



    // Row Article:
    divCol.appendChild(divRowArticle)

    // Row principale:
    divRowArticle.appendChild(divRowMain)

    // Col Image:
    divRowMain.appendChild(divCol2)

    // Img:
    divCol2.appendChild(img)

    // Col Titre du produit:
    divRowMain.appendChild(divColTitleProduct)

    // Titre du produit:
    divColTitleProduct.appendChild(divTitleProduct)

    //  Div amount:
    divRowMain.appendChild(divColAmount)

    // Less:
    divColAmount.appendChild(less)

    // Input Amount:
    divColAmount.appendChild(inputAmount)

    // More:
    divColAmount.appendChild(more)

    // Div Price:
    divRowMain.appendChild(divPrice)

    // Delete:
    divRowMain.appendChild(deleteProduct)

    // Div Back to shop:
    divCol.appendChild(divBackShop)

    // Lien fléché Back to shop:
    divBackShop.appendChild(linkBackShop)

    // Texte Back to shop:
    divBackShop.appendChild(textBackShop)

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


///////////////////////////////////////////////////////////
/**
 * Formulaire
 */

    //Selectionne l'id parent:
    //let main = document.querySelector('main')

    /**
     * Création des éléments de base enfants:
     */
    // Container:
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
    let divBoxRecapLeft = createTag ('div')
    addClass(divBoxRecapLeft, 'col-md-4')
    addClass(divBoxRecapLeft, 'summary')
    addClass(divBoxRecapLeft, 'bg-gradient')

     // Ajout des élément de base:
     //main.appendChild(divForm)
     main.appendChild(divContainer)
     main.appendChild(divForm)
     divForm.appendChild(divContainer)
     divContainer.appendChild(divRowPrincipale)
     divRowPrincipale.appendChild(divColPrincipale)
     divColPrincipale.appendChild(boxForm)

     boxForm.appendChild(divCard)
     divCard.appendChild(divRow)
     //divRow.appendChild(divBoxRecapLeft)
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
    labelCity.innerHTML= "Ville:"

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
    labelZip.innerHTML= "Code Postal:"

    // Input Zip:
    let inputZip = createTag('input')
    addClass(inputZip, 'form-control')
    inputZip.setAttribute("type", "text")
    inputZip.setAttribute("id", "inputZip")





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

    //
    divFormRowLocation.appendChild(divFormGroupzip)

    //
    divFormGroupzip.appendChild(labelZip)

    //
    divFormGroupzip.appendChild(inputZip)

///////////////////////////////////////////////////////////
/**
 * Fonction qui ajoute ou diminue la quantité
 */

function modifyValue() {

    // Récupére la valeur de l'element et l'initialise:
    let getValue = document.getElementById('amount').value = "1"

    let nbActuel = getValue

    //Selectionne et ecoute le boutton -:
    let buttonLess = document.getElementById('less')
    buttonLess.addEventListener('click', () => {

        let getValue = --nbActuel

        // Modifie la valeur de l'element:
        getValue = document.getElementById('amount').value = getValue
        modifyPrice( getValue)
    })

    //Selectionne et ecoute le boutton +:
    let buttonMore = document.getElementById('more')
    buttonMore.addEventListener('click', () => {

        let getValue = ++nbActuel

        // Modifie la valeur de l'element:
        getValue = document.getElementById('amount').value = getValue
        modifyPrice( getValue)
    })
}
modifyValue()


///////////////////////////////////////////////////////////
/**
 * Fonction qui modifie le prix en fonction de la quantité:
 */
function modifyPrice(getValue) {
    console.log(getValue)

    // Selectionne le prix:
    let getPrice = document.getElementById("price")
    console.log(getPrice)

    let price = getPrice.innerHTML= 50
    console.log(price)

    // Multiplie la quantité par le prix:
    let result = getValue*price
    console.log(result)

    // Affiche le resultat de la multiplication:
    getPrice.innerHTML = result + "€"
}
modifyPrice()

/*
// Récupére la valeur de l'element et l'initialise:
let getValue = document.getElementById('amount').value = "1"

let nbActuel = getValue

//Selectionne et ecoute le boutton -:
let buttonLess = document.getElementById('less')

//Selectionne et ecoute le boutton +:
let buttonMore = document.getElementById('more')

if (buttonLess.onclick) {
    buttonLess.addEventListener('click', () => {

        let getValue = --nbActuel

        // Modifie la valeur de l'element:
        getValue = document.getElementById('amount').value = getValue
    })
}else if(buttonMore.onclick) {
    buttonMore.addEventListener('click', () => {

        let getValue = ++nbActuel

        // Modifie la valeur de l'element:
        getValue = document.getElementById('amount').value = getValue
    })
}
*/