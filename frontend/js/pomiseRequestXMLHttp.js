const url = "http://localhost:3000/api/teddies";


function connect(url) {
    return new Promise((resolve, reject) => {

        // Creer un nouvel objet Ajax de type XMLHttpRequest:
        let xhr = new XMLHttpRequest()

        // Détecte de la requête:
        xhr.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                // Envoie terminé et contenu bien recue et convertit en Json:

                var result = JSON.parse(this.responseText)
                resolve(result)

            } else if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
                reject("Erreur 404")
            }
            //console.log(result)
        }

        // Ouvre la connexion en précisant la méthode:
        xhr.open("GET", url, true)

        // Envoie la requête:
        xhr.send()
        //console.log(result)
    })

}

connect(url)
.then(result => display(result))

function display(result) {

    //Selectionne les id:
    let y = document.querySelector('main')
    console.log(y)

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

display(e)