
// ----- Url des informations a recuperer:
const url = "http://localhost:3000/api/teddies";


// ----- Selectionne mes id:
let displayId =             document.getElementById("id")
let displayPicture =        document.getElementById("picture")
let displayName =           document.getElementById("name")
let displayDescription =    document.getElementById("description")
let displayPrice =          document.getElementById("price")
let displayColor =          document.getElementById("color")

//console.log(displayId)

// ----- Requête:
const promise = fetch(url);

promise
    .then((response) => {
        console.log(response);

        // Reçoit une promesse et la convertit en json:
        const products = response.json();

        console.log(products);

        // Traitement des données:
        products.then((response) => {
            let id = response[0]._id
            let picture = response[0].imageUrl
            let name = response[0].name
            let description = response[0].description
            let price = response[0].price
            let color = response[0].colors[1]


        for (let elt of response) {
            displayName.innerHTML = "Le nom de la peluche est " + elt.name + " et sa description: " + elt.description;
        }

            displayId.innerHTML = id
            displayPicture.innerHTML = picture
            //displayName.innerHTML = name
            displayDescription.innerHTML = description
            displayPrice.innerHTML = price
            displayColor.innerHTML = color
            console.log()
        })
    })
    .catch((erreur) => {
        console.log(erreur);
    });






/*
let callBack = function(){

    elt.innerHTML = " le nom est : " + name;
}
/*
function retrieveName () {
    for (let elt of reponse) {
        console.log('Le nom de la peluche est  ' + elt.name + ' et sa description: ' + elt.description);

     }
}

retrieveName();

/* recuperation de noms:
for (let i in response) {
    console.log("Je m'appele " + response[i]);
 }
*/