/**
 *
 * Fonction qui envoie une requéte et retourne une réponse
 * avec la version XMLHttpRequest
 */

const url = "http://localhost:3000/api/teddies";

function connect(url) {
    return new Promise(function (response) {

        // Creer un nouvel objet Ajax de type XMLHttpRequest:
        let xhr = new XMLHttpRequest()

        // Vérifie l'état de la requête:
        xhr.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                // Envoie terminé et contenu bien recue et convertit en Json:
                //let response = JSON.parse(this.responseText)
                 let result = JSON.parse(this.responseText)
                 console.log(result)

                 //Selectionne les id:
                 let y = document.querySelector('main')
                 console.log(y)

                for (var i =0; i< result.length; i++){

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


            } else if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
                console.log("Erreur 404")
            }
        }

        // Ouvre la connexion en précisant la méthode:
        xhr.open("GET", url, true)

        // Envoie la requête:
        xhr.send()

    })
}

connect(url)

//console.log(connect(url))
//let c = connect(url)





//displayProducts()

/*

    var nameProduct = document.createElement('h1')
    var descriptionProduct = document.createElement('p')

    nameProduct.textContent = response[i].name
    descriptionProduct.textContent = response[i].description



*/

/*
function displayProducts (jsonObj){



        var articleProduct = document.createElement('article')
        var nameProduct = document.createElement('h1')
        var descriptionProduct = document.createElement('p')

        nameProduct.textContent = response[i].name
        descriptionProduct.textContent = response[i].description

        articleProduct.appendChild(nameProduct)

    }
}
*/