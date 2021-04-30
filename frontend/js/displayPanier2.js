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
// Récupére l'id des objets dans un tableau:
for (var i = 0; i < productLocalStorage.length; i++) {
    let idProductPanier = productLocalStorage[i].idProduct
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

    //takeProductInPanier(urlProduct);
    takeProductInPanier(urlProduct)

}


function essPoussIdDsTab(urlProduct) {
    //console.log(urlProduct)
    // reponse http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95

    var tab = [urlProduct]
    console.log(tab)
    //Selectionne l'id parent:
    //let main = document.querySelector('main')


    takeProductInPanier(tab)

}


async function takeProductInPanier(urlProduct) {
    //console.log(tab)
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
    xhr.open("GET", tab, true);

    // Envoie la requête:
    xhr.send();
}


async function displayPanier(productData) {
    console.log(productData)

    for (var i = 0; i < productData.length; i++) {
        let main = document.querySelector('main')
        main.innerHTML = productData[i].name
        console.log(main.innerHTML)
    }
}

// 3) /////////////////////////////////////////////////////////
/**
 * Fonction qui concaténe l'url de l'API
 * avec l'id récupéré et filtré
 */
/*
 async function assemblyId(tab) {
    console.log(tab)
    //réponse : 5beaaa8f1c9d440000a57d95

    // Déclaration des variables:
    const url = "http://localhost:3000/api/teddies";
    const urlProduct = url + "/" + tab;
    console.log(urlProduct)
    // reponse http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95

    //takeProductInPanier(urlProduct);

}
assemblyId(tab)

*/