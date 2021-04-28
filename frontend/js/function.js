///////////////////////////////////////////////////////////
//////////////////// Fonction de base: ////////////////////
///////////////////////////////////////////////////////////


/**
 * Fonction qui crées les balises
 */
function createTag(tag) {
  return document.createElement(tag)
}

/**
 * Fonction qui ajoute des classes aux balises:
 */
function addClass(name, classe) {
  return name.classList.add(classe)
}