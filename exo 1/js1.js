// Définition des valeur de victoire/défaite
var gagner = 0,perdu = 0,egalite = 0;
// début de la fonction
$(function() {
  // fonction pour l'aléatoire de l'ordi
  function choiceOfComputer(){
    // Définir une valeur entre 0 et 2
    var shiFuMi = parseInt(Math.random()*3);
    // faire correspondre les valeurs à des "mots"
    switch (shiFuMi) {
      case 0:
        return "Pierre"
        break;
      case 1:
        return "Feuille"
        break;
      case 2:
        return "Ciseaux"
        break;
    }
  }
  // définie et calcul du nombre de victoire
  var gagner = function (message){
    alert(message);
    window.gagner++;
    $("#gagner").text(window.gagner) ;
  }
  // définie et calcul du nombre de défaite
  var perdu = function(message){
    alert(message);
    window.perdu++;
    $("#perdu").text(window.perdu) ;
  }
  // définie et calcul du nombre d'égalité
  var egalite = function (message){
    alert(message);
    window.egalite++;
    $("#egalite").text(window.egalite) ;
  }
  // Activation de la fonction au click
  $("#btnSelectChoice").on("click", function() {
    // Prend la valeur choisi par le joueur
    var playerChoice = $("#selectShiFuMi").val();
    // et celle prise par l'ordi
    var computerChoice =  choiceOfComputer();
    // Pour savoir ce qu'a pris l'ordi
    console.log("choix ordi: "+computerChoice)
    // Si égalité
    if( computerChoice == playerChoice ){
      egalite("égalité");
      return false;
    }
    // boucle fin forEach
    //
    // lie les tableaux par leurs valeurs respectives (de Pierre on attent la réponse Feuille)
    var tab1 = ["Feuille", "Ciseaux", "Pierre"];
    ["Pierre", "Feuille", "Ciseaux"].forEach(function(element, index) {
      // Voir ce qu'il y a dans l'index
      //console.log(element+", "+index);
      if( computerChoice == element ){
        // selon la réponse des tableaux,, si true = gagné, si false = perdu
        playerChoice == tab1[index] ? gagner("gagné") : perdu("perdu");
      }
    });
    // return false;
// --------------------------------------------------------------------------------//
    // // condition ternaire
    // if( computerChoice == "Pierre" ){
    //   // si feuille(?) = true(gagné) : false(perdu);
    //   playerChoice == "Feuille" ? alert("gagné") : alert("perdu");
    // }
    // if( computerChoice == "Feuille" ){
    //   // si Ciseaux(?) = true(gagné) : false(perdu);
    //   playerChoice == "Ciseaux" ? alert("gagné") : alert("perdu");
    // }
    // if( computerChoice == "Ciseaux" ){
    //   // si Pierre(?) = true(gagné) : false(perdu);
    //   playerChoice == "Pierre" ? alert("gagné") : alert("perdu");
    // }
// --------------------------------------------------------------------------------//
    // // version optimisé if
    //
    // si l'ordi choisi pierre
    // if( computerChoice == "Pierre" ){
      // if( playerChoice == "Feuille" ){
      //   alert("gagné");
      // }else if( playerChoice == "Ciseaux" ){
      //   alert("perdu");
      // }
    // }
    // si l'ordi chhoisi feuille
    // if( computerChoice == "Feuille" ){
      // if( playerChoice == "Pierre" ){
      //   alert("perdu")
      // }else if( playerChoice == "Ciseaux" ){
      //   alert("gagné")
      // }
    // }
    // si l'ordi chhoisi Ciseaux
    // if( computerChoice == "Ciseaux" ){
      // if( playerChoice == "Pierre" ){
      //   alert("gagné")
      // }else if( playerChoice == "Feuille" ){
      //   alert("perdu")
      // }
    // }
// --------------------------------------------------------------------------------//
    // version longue mais compréhensible
    //
    // if (playerChoice.val() == "Pierre" && computerChoice == "Pierre") {
    //   alert("égalité");
    // } else if (playerChoice.val() == "Feuille" && computerChoice == "Pierre"){
    //   alert("gagné");
    // } else if (playerChoice.val() == "Ciseaux" && computerChoice == "Pierre"){
    //   alert("perdu");
    // }
    //
    // if (playerChoice.val() == "Pierre" && computerChoice == "Feuille") {
    //   alert("perdu");
    // } else if (playerChoice.val() == "Feuille" && computerChoice == "Feuille"){
    //   alert("égalité");
    // } else if (playerChoice.val() == "Ciseaux" && computerChoice == "Feuille"){
    //   alert("gagné");
    // }
    //
    // if (playerChoice.val() == "Pierre" && computerChoice == "Ciseaux") {
    //   alert("gagné");
    // } else if (playerChoice.val() == "Feuille" && computerChoice == "Ciseaux"){
    //   alert("perdu");
    // } else if (playerChoice.val() == "Ciseaux" && computerChoice == "Ciseaux"){
    //   alert("égalité");
    // }
// --------------------------------------------------------------------------------//
    // calcul du pourcentage de Victoire
    //
    // Si le joueur à plus de 0 et l'ordi aussi ...
    if( window.gagner > 0 && window.perdu > 0){
      //  ... alors ecrire le pourcentage de victoire
      $("#winPlayer").text( parseInt( ( 100 / ((window.gagner+window.perdu)/window.gagner) ) ) );
      // sinon si la valeur de victoire du joueur est 0 est que l'ordi a 1 ou plus afficher 0%
    }else if ( window.gagner == 0 && window.perdu > 0){
      $("#winPlayer").text(0);
      // sinon si la valeur de victoire du joueur est de 1 ou plus et que l'ordi est à 0 alors afficher 100%
    }else if ( window.gagner > 0 && window.perdu == 0){
      $("#winPlayer").text(100);
    }
  });
});
