# Projet OpenClassrooms / P5 Orinoco

<p> 
  Dans le cadre de ma formation développeur web avec OpenClassrooms, différents projets sont à realiser.
</p>

<p> 
  Le scénario de ce projet numéro 5, en tant que développeur front-end chez Orinoco, une entreprise de 
  commerce en ligne, est de créer un premier MVP (produit minimum viable) pour démontrer le fonctionnement
  de ses applications à ses investisseurs.
</p>

<p> 
  Pour ce faire, <a href="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/P5_Spe%CC%81cifications%20fonctionnelles%20Orinoco%20(2).pdf">les spécifications </a> du cahier MVP, me sont fournies.
</p>

<p>
  <img alt="orinoco.html" 
       src="https://github.com/Cyrille57/CyrilleMorel_5_01042021/blob/master/frontend/screenshot/orinoco.png">
</p>

<h2> Général:</h2>

<p>
  L’application web sera composée de 4 pages:
</p>

<ul>
  <li>
    Une page de vue sous forme de liste, montrant tous les articles disponibles à la vente.
  </li>
  <li>
    Une page “produit”, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet 
    de personnaliser le produit et de l'ajouter à son panier, mais celle-ci ne sera ni envoyée au serveur ni reflétée
    dans la réponse du serveur.
  </li>
  <li>
    Une page “panier” contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer 
    une commande.
    Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end.
  </li>
  <li>
    Une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant
    de commande envoyé par le serveur.
  </li>
</ul>

<h2> Technologies demandées: </h2>

<p> Uniquement en Html,Css et javascript (sans framework).</p>

<h2> Les consignes / fonctionnalités: </h2>

<ul>
  <li>
    Le code source devra être indenté et utiliser des commentaires. Il devra également utiliser des fonctions globales.
  </li>
  <li>
    Concernant l’API, des promesses devront être utilisées pour éviter les rappels.
  </li>
  <li>
    Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.
  </li>
  <li>
    Planifiez une suite de tests unitaires.
  </li>
</ul>

<h2> Rendu: </h2>

<h3> Prérequis: </h3>

<p>
  Node et npm (<code>npm install</code> en fessant <code> cd backend</code>) doivent être installés localement sur votre machine.
</p>

<h3>Installation:</h3>

<p>
  Clonez le dépôt, exécutez <code>npm install</code>.</br>
  
  Pour lancer le serveur accéder au répertoire backend avec <code>cd backend</code> puis <code>node server</code>.
  
</p>

<h2> Contact </h2>
<p> Vous pouvez me contacter sur <a href="https://discord.gg/At8T9HD">discord</a>, <a href="https://twitter.com/Cyril2101">twitter</a> et <a href="mailto:cyril_dev@outlook.fr">mail</a>
