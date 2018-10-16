$(document).keydown(function(e) {
// dimention de "l'ecran"
WinWidth = $(document).width();
WinHeight = $(document).height();
  // reconnaissance des touches
  switch (e.which) {
    case 37: // LEFT
      //console.log("key "+e.which);
      $("#block").css({left: "-=10"});
    break;
    case 39: // RIGHT
      //console.log("key "+e.which);
      $("#block").css({left: "+=10"});
    break;
    case 38: // UP
      //console.log("key "+e.which);
      $("#block").css({top: "-=10"});
    break;
    case 40: // DOWN
      //console.log("key "+e.which);
      $("#block").css({top: "+=10"});
    break;
  }
  // création de la hitbox
  posXStart = Number(parseInt($("#block").css("left")));
  posXStop =   posXStart+Number(parseInt($("#block").css("width")));
  posYStart =  Number(parseInt($("#block").css("top")));
  posYStop =   posYStart+Number(parseInt($("#block").css("height")));
  // Système de téléportation
  // console.log("WINX: "+WinWidth+"\n block: "+posXStart);
  // console.log("WINY: "+WinHeight+"\n block: "+posYStart);
  if( posXStop > WinWidth){
    $("#block").css({left: "0"});
  }
  if( posYStop > WinHeight){
    $("#block").css({top: "0"});
  }
  if( posXStart < 0){
    var newPosX = (  WinWidth-Number(parseInt($("#block").css("width")))  );
    $("#block").css({left: newPosX+"px"});
  }
  if( posYStart < 0){
    var newPosY = (  WinHeight-Number(parseInt($("#block").css("height")))  );
    $("#block").css({top: newPosY+"px"});
  }


})
// bravo vous pouvez bouger un bloc
