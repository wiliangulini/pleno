

//verificaçao do tamanho das palavras do tema
let green = document.getElementById("green");
let green1 = document.getElementById("green1");
let green2 = document.getElementById("green2");
let green3 = document.getElementById("green3");

if(screen.width > 768) {

  if(green.innerHTML.split(" ").length >= 2) {
    green.style.width = "35%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(green1.innerHTML.split(" ").length >= 2) {
    green1.style.width = "35%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(green2.innerHTML.split(" ").length >= 2) {
    green2.style.width = "35%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(green3.innerHTML.split(" ").length >= 2) {
    green3.style.width = "35%";
  } else {
    console.log("apenas uma palavra");
  }

} 
else if(screen.width < 768) {

  if(green.innerHTML.split(" ").length >= 2) {
    green.style.width = "66%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(green1.innerHTML.split(" ").length >= 2) {
    green1.style.width = "66%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(green2.innerHTML.split(" ").length >= 2) {
    green2.style.width = "66%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(green3.innerHTML.split(" ").length >= 2) {
    green3.style.width = "66%";
  } else {
    console.log("apenas uma palavra");
  }

}


//dias arrow 
$("#date button.owl-next span, #date button.owl-prev span").html("<i></i>");
$("#date button.owl-next span i").addClass("fas fa-chevron-right");
$("#date button.owl-prev span i").addClass("fas fa-chevron-left");

// dias check
$(".input1").on("click", function() {
  $(".label1").addClass("checkedlabel");
  $(".label2, .label3, .label4, .label5, .label6, .label7").removeClass("checkedlabel");
});
$(".input2").on("click", function() {
  $(".label2").addClass("checkedlabel");
  $(".label1, .label3, .label4, .label5, .label6, .label7").removeClass("checkedlabel");
});
$(".input3").on("click", function() {
  $(".label3").addClass("checkedlabel");
  $(".label2, .label1, .label4, .label5, .label6, .label7").removeClass("checkedlabel");
});
$(".input4").on("click", function() {
  $(".label4").addClass("checkedlabel");
  $(".label2, .label3, .label1, .label5, .label6, .label7").removeClass("checkedlabel");
});
$(".input5").on("click", function() {
  $(".label5").addClass("checkedlabel");
  $(".label2, .label3, .label4, .label1, .label6, .label7").removeClass("checkedlabel");
});
$(".input6").on("click", function() {
  $(".label6").addClass("checkedlabel");
  $(".label2, .label3, .label4, .label5, .label1, .label7").removeClass("checkedlabel");
});
$(".input7").on("click", function() {
  $(".label7").addClass("checkedlabel");
  $(".label2, .label3, .label4, .label5, .label6, .label1").removeClass("checkedlabel");
});

//horas arrow 
$("#hora button.owl-next span, #hora button.owl-prev span").html("<i></i>");
$("#hora button.owl-next span i").addClass("fas fa-chevron-right");
$("#hora button.owl-prev span i").addClass("fas fa-chevron-left");

// horas check
$(".input9").on("click", function() {
  $(".label9").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label13, .label14, .label15, .label16, .label17, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input10").on("click", function() {
  $(".label10").addClass("checkedlabel");
  $(".label9, .label11, .label12, .label13, .label14, .label15, .label16, .label17, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input11").on("click", function() {
  $(".label11").addClass("checkedlabel");
  $(".label10, .label9, .label12, .label13, .label14, .label15, .label16, .label17, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input12").on("click", function() {
  $(".label12").addClass("checkedlabel");
  $(".label10, .label11, .label9, .label13, .label14, .label15, .label16, .label17, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input13").on("click", function() {
  $(".label13").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label9, .label14, .label15, .label16, .label17, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input14").on("click", function() {
  $(".label14").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label13, .label9, .label15, .label16, .label17, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input15").on("click", function() {
  $(".label15").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label13, .label14, .label9, .label16, .label17, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input16").on("click", function() {
  $(".label16").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label13, .label14, .label15, .label9, .label17, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input17").on("click", function() {
  $(".label17").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label13, .label14, .label15, .label16, .label9, .label18, .label19, .label20").removeClass("checkedlabel");
});
$(".input18").on("click", function() {
  $(".label18").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label13, .label14, .label15, .label16, .label17, .label9, .label19, .label20").removeClass("checkedlabel");
});
$(".input19").on("click", function() {
  $(".label19").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label13, .label14, .label15, .label16, .label17, .label18, .label9, .label20").removeClass("checkedlabel");
});
$(".input20").on("click", function() {
  $(".label20").addClass("checkedlabel");
  $(".label10, .label11, .label12, .label13, .label14, .label15, .label16, .label17, .label18, .label19, .label9").removeClass("checkedlabel");
});

/* mobile temas 

//verificaçao do tamanho das palavras do tema
let grey6 = document.getElementById("grey6");
let grey7 = document.getElementById("grey7");
let grey8 = document.getElementById("grey8");
let grey9 = document.getElementById("grey9");
let grey10 = document.getElementById("grey10");

if(grey6.innerHTML.split(" ").length >= 2) {
  grey6.style.width = "160%";
} else {
  console.log("apenas uma palavra");
}

if(grey7.innerHTML.split(" ").length >= 2) {
  grey7.style.width = "160%";
} else {
  console.log("apenas uma palavra");
}

if(grey8.innerHTML.split(" ").length >= 2) {
  grey8.style.width = "160%";
} else {
  console.log("apenas uma palavra");
}

if(grey9.innerHTML.split(" ").length >= 2) {
  grey9.style.width = "160%";
} else {
  console.log("apenas uma palavra");
}

if(grey10.innerHTML.split(" ").length >= 2) {
  grey10.style.width = "160%";
} else {
  console.log("apenas uma palavra");
}*/

// trocar estrela 

let starYellow = document.getElementById("starYellow");
let starYellow1 = document.getElementById("starYellow1");
let starYellow2 = document.getElementById("starYellow2");
let starYellow3 = document.getElementById("starYellow3");
let starYellow4 = document.getElementById("starYellow4");

starYellow.addEventListener("click", function() {
  if(starYellow.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starYellow.webp") {

    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  } else if(starYellow.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starWhite.webp") {

    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  }
});

starYellow1.addEventListener("click", function() {
  if(starYellow1.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starYellow.webp") {

    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  } else if(starYellow1.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starWhite.webp") {

    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  }
});


starYellow2.addEventListener("click", function() {
  if(starYellow2.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starYellow.webp") {

    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  } else if(starYellow2.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starWhite.webp") {

    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  }
});


starYellow3.addEventListener("click", function() {
  if(starYellow3.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starYellow.webp") {

    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  } else if(starYellow3.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starWhite.webp") {

    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  }
});


starYellow4.addEventListener("click", function() {
  if(starYellow4.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starYellow.webp") {

    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");
    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starWhite.webp");

  } else if(starYellow4.getAttribute("src") == "assets/images/psicologos/perfil-psicologos/starWhite.webp") {

    starYellow4.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow1.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow2.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");
    starYellow3.setAttribute("src","assets/images/psicologos/perfil-psicologos/starYellow.webp");

  }
});

// coluna fixa 

let col = document.querySelector("#col");

if(screen.width > 768) {
  window.addEventListener("scroll", function() {
    if(window.scrollY < 470) {
      col.style.opacity = 0;
    } else if(window.scrollY > 470) {
      col.style.opacity = 1;
    }

    if(window.scrollY > 3124) {
        col.style.top = "8%";
    } else if(window.scrollY < 3100) {
        col.style.top = "26%";
    }
  });
  
}

$('#date, #hora').carousel({
  pause: true,
  interval: false
});