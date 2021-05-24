///////////////////////////////////////////////////////////
//// Ajouter le produit seléctionner dans localstorage ////
///////////////////////////////////////////////////////////


// 1) /////////////////////////////////////////////////////////
/**
 * Fonction pour ajouter au panier:
 */
function sendCaddy(idProduct) {
    // Selectionne le bouton envoyer au panier:
    let btn_panier = document.querySelector("a.btn")

    // Ecoute le bouton :
    btn_panier.addEventListener("click", (event) => {

        // Annule l'action par défaut:
        event.preventDefault();

        // 2) /////////////////////////////////////////////////////////
        // fonction pour afficher une pop up de confirmation:
        const popConfirmation = () => {
            if (window.confirm(
                    "Votre produit a bien été ajouté au panier ! Consultez le panier OK ou revenir a l'accueil ANNULER")) {
                window.location.href = "panier.html"
            } else {
                window.location.href = "index.html"
            }
        }

        // 3) /////////////////////////////////////////////////////////
        // Fonction pour ajouté un produit selectionné dans le localstorage:
        const addProduct = () => {
            productLocalStorage = verificationIdProductLocalStorage(idProduct, productLocalStorage)

            // Envoie dans local storage avec la méthode setItem dans le format json:
            localStorage.setItem("product", JSON.stringify(productLocalStorage))
        }

        // 4) /////////////////////////////////////////////////////////
        /**
         * Local Storage
         */
        // Initialise de variable pour mettre les clef et values qui vont etre présent dans localstorage,
        // et recupéré product en format javascript:
        let productLocalStorage = JSON.parse(localStorage.getItem("product"))

        // Verifie si déja un article ou non dans le local strorage:
        if (productLocalStorage) {
            addProduct()
            popConfirmation()
        } else {
            // Creer un tableau vide
            productLocalStorage = []
            addProduct()
            popConfirmation()
        }
    })
}

// Vérifie si l'id du produit est déja dans le LocalStorage:
function verificationIdProductLocalStorage (idProduct, productLocalStorage, getValue) {

    console.log(idProduct)
    console.log(productLocalStorage)
    var indexIdProduct = productLocalStorage.map(function(item) { return item.idProduct; }).indexOf(idProduct);
    // Si a une position on vas ajouter 1 quantité sinon on crée l'objet
    if (indexIdProduct >= 0){
       productLocalStorage[indexIdProduct].quantityProduct++
    }else{

        let objectProduct = {

            quantityProduct: 1 ,
            idProduct: idProduct,

        }

        // Pousse l'objet produit dans le tableau:
        productLocalStorage.push(objectProduct)
    }

    return productLocalStorage
}