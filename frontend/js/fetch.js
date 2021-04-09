const url = "http://localhost:3000/api/teddies"


/**
 * Fonction qui se connecte a l'API:
 */


fetch(url)
.then( response => response.json() 
    .then(response => display(response))
    )

function display(result) {

    console.log(result)
    //Selectionne les id:
    let y = document.querySelector('main')

    for (var i = 0; i < result.length; i++) {

        // Création des éléments:
        var containerProducts = document.createElement('div.container')
        var articleProduct = document.createElement('article')
        var nameProduct = document.createElement('h2')
        var descriptionProduct = document.createElement('p')
        //console.log(articleProduct)

        nameProduct.innerHTML = result[i].name
        descriptionProduct.innerHTML = result[i].description
        //console.log(result)

        // Ajout des éléments
        y.appendChild(articleProduct)
        articleProduct.appendChild(nameProduct)
        articleProduct.appendChild(descriptionProduct)

    }
}



