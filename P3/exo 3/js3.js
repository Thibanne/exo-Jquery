$(function(){
  var numbrand = Math.floor(Math.random()*100);
  var coup = 0;
  $("#score").click(function() {
    var number=$("#player").val();
    coup++;
    if (number > numbrand) {
      $("#resultat").text("Trop grand !");
    }
    else if (number < numbrand) {
      $("#resultat").text("Trop petit !");
    }
    else {
      $("#resultat").text("BRAVO ! Trouvé en "+coup+" coups");
    }
  });
});
