///////////////////////////////////////////////////////////
//// Ajouter le produit seléctionner dans localstorage ////
///////////////////////////////////////////////////////////


/**
 * Fonction pour ajouter au panier:
 */
function sendCaddy(objectProduct) {

    // Selectionne le bouton envoyer au panier:
    let btn_panier = document.querySelector("a.btn")

    // Ecoute le bouton :
    btn_panier.addEventListener("click", (event) => {

        // Annule l'action par défaut:
        event.preventDefault();


        ///////////////////////////////////////////////////////////
        // fonction pour afficher une pop up de confirmation:
        const popConfirmation = () => {
            if (window.confirm(
                    "Votre produit a bien été ajouté au panier ! Consultez le panier OK ou revenir a l'accueil ANNULER")) {
                window.location.href = "panier.html"
            } else {
                window.location.href = "index.html"
            }
        }


        ///////////////////////////////////////////////////////////
        // Fonction pour ajouté un produit selectionné dans le localstorage:
        const addProduct = () => {
            // Pousse l'objet produit dans le tableau:
            productLocalStorage.push(objectProduct)
            // Envoie dans local storage avec la méthode setItem dans le format json:
            localStorage.setItem("product", JSON.stringify(productLocalStorage))
        }


        ///////////////////////////////////////////////////////////
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
