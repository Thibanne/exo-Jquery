// création de la classe affichage des différents messages
var Afficheur = function(element) {
  var display = element; // cette variable est chargée de prendre l'élement passer au niveau du constructeur

  function setText(message) { // chargée de modifier le contenu de l'element passé dans le constructeur par un message qui lui sera passé
  display.innerHTML = message; // methode qui change le texte htlm de l'élement par le message
}
return {sendMessage : setText};
}

var scortO = 0;
var scortU = 0;

function comparer(_choixOrdi, _choixUtilisateur) {

  if(_choixUtilisateur == _choixOrdi) {
    afficheur.sendMessage("Il y a égalité.</br>L'ordinateur a choisi " + _choixOrdi);
  }
  else if((_choixUtilisateur == "pierre" && _choixOrdi == "ciseaux") || (_choixUtilisateur == "feuille" && _choixOrdi == "pierre") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "feuille")) {
    afficheur.sendMessage("Vous avez gagné.</br>L'ordinateur a choisi " + _choixOrdi);
    scortU++;
  }
  else if((_choixUtilisateur == "feuille" && _choixOrdi == "ciseaux") || (_choixUtilisateur == "piere" && _choixOrdi == "feuille") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "pierre")) {
    afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + _choixOrdi);
    scortO++;
  }

}

var afficheur = new Afficheur(document.querySelector("#statut-jeu")); // création de l'objet qui va modifier le texte du résultat du jeu

function FchoixOrdi() {
  var choixOrdi = Math.floor(Math.random() * 51);

  if (choixOrdi < 20) {
    choixOrdi = "pierre";
  }
  else if(choixOrdi > 20 && choixOrdi < 40) {
    choixOrdi = "feuille";
  }
  else if(choixOrdi > 40) {
    choixOrdi = "ciseaux";
  }
  return choixOrdi;
}

function FchoixUtilisateur(_choixUtilisateur) {

  if(_choixUtilisateur == "pierre") {
    _choixUtilisateur = "pierre";
  }
  else if(_choixUtilisateur == "feuille") {
    _choixUtilisateur = "feuille";
  }
  else if(_choixUtilisateur == "ciseaux") {
    _choixUtilisateur = "ciseaux";
  }
  return _choixUtilisateur;
}

function main() {

  // déclaration de notre tableau pions qui va contenir l'ensemble des boutons
  var tabchoixUtilisateur = document.querySelectorAll("#block-jeu button"); // la méthode va selectionner tous les boutons présent dans la div block-jeu et les retourner dans notre tableau pions

  var finJeu = 0;

  for(var i = 0, taille = tabchoixUtilisateur.length; i < taille; i++){

    afficheur.sendMessage("Le jeu peut commencer. choisissez un objet"); // modification du message + choix du joueur

    tabchoixUtilisateur[i].addEventListener("click", function(){

      choixUtilisateur = this.id;

      var choixU = FchoixUtilisateur(choixUtilisateur);
      var choixO = FchoixOrdi();
      comparer(choixO, choixU);

      finJeu++;

      if(finJeu >= 5){
        afficheur.sendMessage("Le jeu est fini</br>Ordi : " + scortO + "</br>Joueur : " + scortU);
        return;
      }
    });
  }
}

main();
