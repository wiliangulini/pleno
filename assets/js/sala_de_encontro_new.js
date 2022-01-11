$(document).ready(function() {
  $("#go1").on("click", function() {
      $("#zero").css("display","none");
      $("#one").css("display","flex");
  });
  $("#go").on('click', function() {
      $("#two").css("display","flex");
      $("#one").css("display", "none");
  });
  $("#go25").on('click', function() {
      $("#dois5").css("display","flex");
      $("#two").css("display", "none");
  });
  $("#go3").on('click', function() {
      $("#five").css("display","flex");
      $("#dois5").css("display", "none");
  });
 
    $("#go5").on('click', function() {
        $("#seis").css("display","flex");
        $("#five").css("display", "none");
        $("#time").css("display","flex");
        $(".progress").css("display","flex"); 
    });
  

  $("#search").on("click", function() {
      $("#esp2").css("display","none");
      $("#md4").css("display","block");
      $("#margin").css("margin","3% 0")
  });

  $("#close").on("click", function() {
      $("#low").css("display","none");
  });
  
});


if(document.getElementById("last").style.display == "flex") {
  document.getElementById("seis").style.display = "none";
}

function sumir() {
  document.getElementById("form").style.display = "none";
}

/*function enviar() {
  if(document.getElementById("textarea").value == "") {
      alert("preencha o campo antes de enviar!!!");
  } else if(document.getElementById("textarea").value.length > 3) {
      sumir();
  }
}*/

function clickRadio(elmnt) {
  var n, i, x;
  n = elmnt.id;
  for (i = 0; i < 9; i++) {
      x = document.getElementById("label" + i);
      if (x) {x.className = x.className.replace(" checkedlabel", "");}
  }
  document.getElementById("label" + n).className += " checkedlabel";
  }
