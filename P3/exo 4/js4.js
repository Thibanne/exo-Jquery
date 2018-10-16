$(function(){
  var size = 10;
  var sizemax = 100;
  var sizeorigin = 10;
  $("#one").click(function(){
    if (size >= sizemax) {
      $("#square").css("background-color", "black");
      size = 0;
    }
    $("#square").css("background-color", "white");
    size=size+10;
    $("#square").css("height", size+"px");
  });
  $("#two").click(function(){
    $("#square").css("background-color", "red");
  });
  $("#three").click(function(){
    $("#square").css("background-color", "green");
  });
  $("#four").click(function(){
    $("#square").hide();
  });
  $("#five").click(function(){
    $("#square").show();
  });
});
