
if($(window).width() > 768) {

  //video
  $("#btnVideo").on("click", function() {
    if($("#video").css("display") == "none") {

      $("#video").css("display","flex");
      $("#mid, #bottom, #sobre").css("display","none");

    } else if($("#video").css("display") == "flex") {

      $("#video").css("display","none");
      $("#mid, #bottom").css("display","flex");

    }
  });

  
  $("#faClose").on("click", () => {

    $("#video").css("display","none");
    $("#mid, #bottom").css("display","flex");
    
  });

  //sobre
  $("#btnSobre").on("click", function() {
    if($("#sobre").css("display") == "none") {
      $("#sobre").css("display","flex");
      $("#video, #mid, #bottom").css("display","none");
    } else if($("#sobre").css("display") == "flex") {
      $("#sobre").css("display","none");
      $("#mid, #bottom").css("display","flex");
    }
  });

  $("#faClose1").on("click", function() {
    $("#sobre").css("display","none");
    $("#mid, #bottom").css("display","flex");
  });
  
} else if($(window).width() < 768) {

  //video
  $("#btnVideo").on("click", function() {
    if($("#video").css("display") == "none") {
      $("#video").css("display","flex");
      $("#mid, #bottomMob, #sobre").css("display","none");
    } else if($("#video").css("display") == "flex") {
      $("#video").css("display","none");
      $("#mid, #bottomMob").css("display","flex");
    }
  });

  $("#faClose").on("click", function() {
    $("#video").css("display","none");
    $("#mid, #bottomMob").css("display","flex");
  });

  //sobre
  $("#btnSobre").on("click", function() {
    if($("#sobre").css("display") == "none") {
      $("#sobre").css("display","flex");
      $("#video, #mid, #bottomMob").css("display","none");
    } else if($("#sobre").css("display") == "flex") {
      $("#sobre").css("display","none");
      $("#mid, #bottomMob").css("display","flex");
    }
  });

  $("#faClose1").on("click", function() {
    $("#sobre").css("display","none");
    $("#mid, #bottomMob").css("display","flex");
  });

}


//verificaÃ§ao do tamanho das palavras do tema
let grey1 = document.getElementById("grey1");
let grey2 = document.getElementById("grey2");
let grey3 = document.getElementById("grey3");
let grey4 = document.getElementById("grey4");
let grey5 = document.getElementById("grey5");

if(screen.width > 1500) {
  if(grey1.innerHTML.split(" ").length >= 2) {
    grey1.style.width = "145%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey2.innerHTML.split(" ").length >= 2) {
    grey2.style.width = "145%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey3.innerHTML.split(" ").length >= 2) {
    grey3.style.width = "145%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey4.innerHTML.split(" ").length >= 2) {
    grey4.style.width = "145%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey5.innerHTML.split(" ").length >= 2) {
    grey5.style.width = "145%";
  } else {
    console.log("apenas uma palavra");
  }
} 
else if(screen.width > 1339) {
  if(grey1.innerHTML.split(" ").length >= 2) {
    grey1.style.width = "270%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey2.innerHTML.split(" ").length >= 2) {
    grey2.style.width = "270%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey3.innerHTML.split(" ").length >= 2) {
    grey3.style.width = "270%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey4.innerHTML.split(" ").length >= 2) {
    grey4.style.width = "270%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey5.innerHTML.split(" ").length >= 2) {
    grey5.style.width = "270%";
  } else {
    console.log("apenas uma palavra");
  }
}
else if(screen.width < 1370) {
  if(grey1.innerHTML.split(" ").length >= 2) {
    grey1.style.width = "157%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey2.innerHTML.split(" ").length >= 2) {
    grey2.style.width = "157%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey3.innerHTML.split(" ").length >= 2) {
    grey3.style.width = "157%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey4.innerHTML.split(" ").length >= 2) {
    grey4.style.width = "157%";
  } else {
    console.log("apenas uma palavra");
  }
  
  if(grey5.innerHTML.split(" ").length >= 2) {
    grey5.style.width = "157%";
  } else {
    console.log("apenas uma palavra");
  }
}

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
$(".input8").on("click", function() {
  $(".label8").addClass("checkedlabel");
  $(".label2, .label3, .label4, .label5, .label6, .label1").removeClass("checkedlabel");
});

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

// mobile temas 

//verificaÃ§ao do tamanho das palavras do tema
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


if(grey10.innerHTML.split(" ").length >= 2) {
  grey10.style.width = "160%";
} else {
  console.log("apenas uma palavra");
}


//funçoes pra abrir e fechar os filtros
let show_hide = () => {

  if(filter.style.display == "none") {
    
    filter.style.opacity = 0;
    filter.style.display = "flex";
    setTimeout(() =>{
      filter.style.opacity = 0.25;
    }, 100);
    setTimeout(() =>{
      filter.style.opacity = 0.5;
    }, 150);
    setTimeout(() =>{
      filter.style.opacity = 0.75;
    }, 200);
    setTimeout(() => {
      filter.style.opacity = 1;
    }, 250); 

  } else if(filter.style.display == "flex") {

    filter.style.opacity = 1;
    setTimeout(() =>{
      filter.style.opacity = 0.75;
    }, 100);
    setTimeout(() =>{
      filter.style.opacity = 0.5;
    }, 150);
    setTimeout(() =>{
      filter.style.opacity = 0.25;
    }, 200);
    setTimeout(() => {
      filter.style.opacity = 0;
      filter.style.display = "none";
    }, 250);  

  }
}

let closeX = () => {

  if(close.getAttribute("src") == "assets/images/psicologos/arrowDown.webp") {
    close.style.opacity = 1;
    setTimeout(() => {
      close.style.opacity = 0.75;
    }, 50);
    setTimeout(() => {
      close.style.opacity = 0.5;
    }, 70);
    setTimeout(() => {
      close.style.opacity = 0.25;
    }, 100);
    setTimeout(() => {
      close.setAttribute("src","assets/images/psicologos/close.webp");
      close.style.opacity = 0;
    }, 140);
    setTimeout(() => {
      close.style.opacity = 0.25;
    }, 170);
    setTimeout(() => {
      close.style.opacity = 0.5;
    }, 200);
    setTimeout(() => {
      close.style.opacity = 0.75;
    }, 235);
    setTimeout(() => {
      close.style.opacity = 1;
    }, 275);
  } else if(close.getAttribute("src") == "assets/images/psicologos/close.webp") {
    close.style.opacity = 1;
    setTimeout(() => {
      close.style.opacity = 0.75;
    }, 50);
    setTimeout(() => {
      close.style.opacity = 0.5;
    }, 70);
    setTimeout(() => {
      close.style.opacity = 0.25;
    }, 100);
    setTimeout(() => {
      close.setAttribute("src","assets/images/psicologos/arrowDown.webp");
      close.style.opacity = 0;
    }, 140);
    setTimeout(() => {
      close.style.opacity = 0.25;
    }, 170);
    setTimeout(() => {
      close.style.opacity = 0.5;
    }, 200);
    setTimeout(() => {
      close.style.opacity = 0.75;
    }, 235);
    setTimeout(() => {
      close.style.opacity = 1;
    }, 275);
  }
}

let downTems = () => {
  
  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrowTema.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrowTema.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrowTema.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrowTema.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrowTema.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrowTema.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrowTema.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrowTema.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}
let downEsp = () => {
  
  if(down_e.style.display == "none") {
    
    down_e.style.opacity = 0;
    down_e.style.display = "block";
    setTimeout(() =>{
      down_e.style.opacity = 0.25;
      arrowEsp.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() => {
      down_e.style.opacity = 0.5;
      arrowEsp.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down_e.style.opacity = 0.75;
      arrowEsp.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down_e.style.opacity = 1;
      arrowEsp.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down_e.style.display == "block") {

    down_e.style.opacity = 1;
    setTimeout(() => {
      down_e.style.opacity = 0.75;
      arrowEsp.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down_e.style.opacity = 0.5;
      arrowEsp.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down_e.style.opacity = 0.25;
      arrowEsp.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down_e.style.opacity = 0;
      arrowEsp.style.transform = "rotate(0deg)";
      down_e.style.display = "none";
    }, 250);  

  }
}
let downVal = () => {
  
  if(down_val.style.display == "none") {
    
    down_val.style.opacity = 0;
    down_val.style.display = "block";
    setTimeout(() => {
      down_val.style.opacity = 0.25;
      arrowVal.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() => {
      down_val.style.opacity = 0.5;
      arrowVal.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down_val.style.opacity = 0.75;
      arrowVal.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down_val.style.opacity = 1;
      arrowVal.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down_val.style.display == "block") {

    down_val.style.opacity = 1;
    setTimeout(() =>{
      down_val.style.opacity = 0.75;
      arrowVal.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() => {
      down_val.style.opacity = 0.5;
      arrowVal.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down_val.style.opacity = 0.25;
      arrowVal.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down_val.style.opacity = 0;
      arrowVal.style.transform = "rotate(0deg)";
      down_val.style.display = "none";
    }, 250);  

  }
}
let downGen = () => {
  
  if(down_gen.style.display == "none") {
    
    down_gen.style.opacity = 0;
    down_gen.style.display = "block";
    setTimeout(() =>{
      down_gen.style.opacity = 0.25;
      arrowGen.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down_gen.style.opacity = 0.5;
      arrowGen.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down_gen.style.opacity = 0.75;
      arrowGen.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down_gen.style.opacity = 1;
      arrowGen.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down_gen.style.display == "block") {

    down_gen.style.opacity = 1;
    setTimeout(() =>{
      down_gen.style.opacity = 0.75;
      arrowGen.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down_gen.style.opacity = 0.5;
      arrowGen.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down_gen.style.opacity = 0.25;
      arrowGen.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down_gen.style.opacity = 0;
      arrowGen.style.transform = "rotate(0deg)";
      down_gen.style.display = "none";
    }, 250);  

  }
}

//animaÃ§ao filter ao clicar
let filtros = document.getElementById("filtros");
let filter = document.getElementById("filter");
let arrow = document.getElementById("arrow");
let arrowTema = document.getElementById("arrowTema");
let arrowEsp = document.getElementById("arrowEsp");
let arrowVal = document.getElementById("arrowVal");
let arrowGen = document.getElementById("arrowGen");
let pes = document.getElementById("pes");
let close = document.getElementById("close");
let down = document.querySelector(".down");
let down_e = document.querySelector(".down.esp");
let down_val = document.querySelector(".down.val");
let down_gen = document.querySelector(".down.gen");

if(screen.width >= 768) {
   //abrir fechar filtros 
  filtros.addEventListener("click", () => {
    show_hide();
    closeX();
  });

  document.querySelector(".ls-select.temas p.txt").addEventListener("click", () => {
    downTems();
  });

  document.querySelector(".ls-select.especialidade p.txt").addEventListener("click", () => {
    downEsp();
  });

  document.querySelector(".ls-select.value p.txt").addEventListener("click", () => {
    downVal();
  });

  document.querySelector(".ls-select.genero p.txt").addEventListener("click", () => {
    downGen();
  });

}

// funçoes click;
  //temas
let radiocontainer = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("temas").innerHTML = txt;
  downTems();
}

  //especialidade
let radiocontainer1 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("especialidades").innerHTML = txt;
  downEsp();
}

  //valores
let radiocontainer2 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("value").innerHTML = txt;
  downVal();
}
  //genero
let radiocontainer3 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("genero").innerHTML = txt;
  downGen();
}

//mobile @media js
if(screen.width < 768) {

  document.getElementById("inputGroup-sizing-lg").innerHTML = `<img src='assets/images/nossos-psicologos/match.png' id='filterMobile' />`;


  let remover = () => {
    pes.innerHTML = `<div class='input-group-prepend' id='filtros'>
    <span class='input-group-text d-flex justify-content-center align-items-center' id='inputGroup-sizing-lg'><img src='assets/images/nossos-psicologos/match.png' id='filterMobile' /></span>
  </div>
  <input type='text' id='place' class='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-lg' placeholder='Escreva oque deseja procurar:'>
  <div id='arrow' class='input-group-append'>
    <span class='input-group-text d-flex justify-content-center align-items-center' id='inputGroup-sizing-lg1'><img id='arrowGreen' src='assets/images/nossos-psicologos/pesquisa.webp' alt='pesquisa' /></span>
  </div>`;
  } 

  let inserir = () => {
    pes.innerHTML = `<div class='pesInt'><p id='pgreen'>Filtros</p><div id='imgs'><img src='assets/images/nossos-psicologos/closeGreen.webp' id='closeGreen' /></div></div>`;
    pes.style.backgroundColor = "#FFF";
    pes.style.boxShadow = "0px 0px 2px rgba(0, 0, 0, 0.3)";
    pes.style.borderRadius = "6px";
  }

  pes.addEventListener("click", () => {
     
    if(filter.style.display == "none") {
      
      filter.style.opacity = 0;
      filter.style.display = "flex";
      inserir();
      pes.style.opacity = 0;
      setTimeout(() =>{
        filter.style.opacity = 0.25;
        pes.style.opacity = 0.25;
      }, 100);
      setTimeout(() =>{
        filter.style.opacity = 0.5;
        pes.style.opacity = 0.5;
      }, 150);
      setTimeout(() =>{
        filter.style.opacity = 0.75;
        pes.style.opacity = 0.75;
      }, 200);
      setTimeout(() => {
        filter.style.opacity = 1;
        pes.style.opacity = 1;
      }, 250); 

    } else if(filter.style.display == "flex") {

      filter.style.opacity = 1;
      remover();
      pes.style.opacity = 0;
      setTimeout(() =>{
        filter.style.opacity = 0.75;
        pes.style.opacity = 0.25;
      }, 100);
      setTimeout(() =>{
        filter.style.opacity = 0.5;
        pes.style.opacity = 0.5;
      }, 150);
      setTimeout(() =>{
        filter.style.opacity = 0.25;
        pes.style.opacity = 0.75;
      }, 200);
      setTimeout(() => {
        filter.style.opacity = 0;
        filter.style.display = "none";
        pes.style.opacity = 1;
      }, 250);  

    } 
    
  });

  document.querySelector(".ls-select.temas p.txt").addEventListener("click", () => {
    downTems();
  });

  document.querySelector(".ls-select.especialidade p.txt").addEventListener("click", () => {
    downEsp();
  });

  document.querySelector(".ls-select.value p.txt").addEventListener("click", () => {
    downVal();
  });

  document.querySelector(".ls-select.genero p.txt").addEventListener("click", () => {
    downGen();
  });

} else if(screen.width > 768) {
  
  document.getElementById("inputGroup-sizing-lg").innerHTML = `Filtros<img src="assets/images/nossos-psicologos/arrowDown.webp" id="close">`;

}

let headerInside = () => {
  document.getElementById("navbarNavDropdown").innerHTML = "<ul class='navbar-nav'><li class='nav-item active'><a class='nav-link' href='#'>Inicio</a></li><li class='nav-item'><a class='nav-link' href='#'>Indique um amigo</a></li><li class='nav-item'><a class='nav-link' href='#'>Dúvidas</a></li><li class='nav-item'><a class='nav-link' href='#'><img src='assets/images/users/avatar-1.jpg' alt='avatar' /></a></li></ul>";
}

let carouselDate  = () => {
  document.querySelector("#date .carousel-inner").innerHTML = `
  <div class="carousel-item active">
    <div class="control d-flex justify-content-between">
      <div class="item">
        <label class="day label1">
          <input type='radio' name='day' class='input1' value='Domingo - 17/06' />
          <p>Domingo</p>
          <p>17/06</p>
        </label>
      </div>
      <div class="item">
        <label class="day label2">
          <input type='radio' name='day' class='input2' value='Segunda - 18/06' />
          <p>Segunda</p>
          <p>18/06</p>
        </label>
      </div>
      <div class="item">
        <label class="day label3">
          <input type='radio' name='day' class='input3' value='Terça - 19/06' />
          <p>Terça</p>
          <p>19/06</p>
        </label>
      </div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="control d-flex justify-content-between">
      <div class="item">
        <label class="day label4">
          <input type='radio' name='day' class='input4' value='Quarta - 20/06' />
          <p>Quarta</p>
          <p>20/06</p>
        </label>
      </div>
      <div class="item">
        <label class="day label5">
          <input type='radio' name='day' class='input5' value='Quinta - 21/06' />
          <p>Quinta</p>
          <p>21/06</p>
        </label>
      </div>
      <div class="item">
        <label class="day label6">
          <input type='radio' name='day' class='input6' value='Sexta - 22/06' />
          <p>Sexta</p>
          <p>22/06</p>
        </label>
      </div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="control d-flex justify-content-between">
      <div class="item">
        <label class="day label7">
          <input type='radio' name='day' class='input7' value='Sábado - 23/06' />
          <p>Sábado</p>
          <p>23/06</p>
        </label>
      </div>
      <div class="item">
        <label class="day label8">
          <input type='radio' name='day' class='input8' value='Domingo - 24/06' />
          <p>Domingo</p>
          <p>24/06</p>
        </label>
      </div>
      <div class="item">
        <label class="day label9">
          <input type='radio' name='day' class='input9' value='Segunda - 25/06' />
          <p>Segunda</p>
          <p>25/06</p>
        </label>
      </div>
    </div>
  </div>
  `;
}

let carouselHour = () => {
  document.querySelector('#hora .carousel-inner').innerHTML = `
    <div class="carousel-item active">
      <div class="control d-flex justify-content-between">
        <div class="item">
          <label class="hour label9">
            <input type="radio" name="hour" class="input9" value="09:00" />
            <p>09:00</p>
          </label>
        </div>
        <div class="item">
          <label class="hour label10">
            <input type="radio" name="hour" class="input10" value="10:00" />
            <p>10:00</p>
          </label>
        </div>
        <div class="item">
          <label class="hour label11">
            <input type="radio" name="hour" class="input11" value="11:00" />
            <p>11:00</p>
          </label>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="control d-flex justify-content-between">
        <div class="item">
          <label class="hour label12">
            <input type="radio" name="hour" class="input12" value="12:00" />
            <p>12:00</p>
          </label>
        </div>
        <div class="item">
          <label class="hour label13">
            <input type="radio" name="hour" class="input13" value="13:00" />
            <p>13:00</p>
          </label>
        </div>
        <div class="item">
          <label class="hour label14">
            <input type="radio" name="hour" class="input14" value="14:00" />
            <p>14:00</p>
          </label>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="control d-flex justify-content-between">
        <div class="item">
          <label class="hour label15">
            <input type="radio" name="hour" class="input15" value="15:00" />
            <p>15:00</p>
          </label>
        </div>
        <div class="item">
          <label class="hour label16">
            <input type="radio" name="hour" class="input16" value="16:00" />
            <p>16:00</p>
          </label>
        </div>
        <div class="item">
          <label class="hour label17">
            <input type="radio" name="hour" class="input17" value="17:00" />
            <p>17:00</p>
          </label>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="control d-flex justify-content-between">
        <div class="item">
          <label class="hour label18">
            <input type="radio" name="hour" class="input18" value="18:00" />
            <p>18:00</p>
          </label>
        </div>
        <div class="item">
          <label class="hour label19">
            <input type="radio" name="hour" class="input19" value="19:00" />
            <p>19:00</p>
          </label>
        </div>
        <div class="item">
          <label class="hour label20">
            <input type="radio" name="hour" class="input20" value="20:00" />
            <p>20:00</p>
          </label>
        </div>
      </div>
    </div>
  `;
}
// carousel nossos psicologos data e hora
if(screen.width < 768) {
  carouselDate();
  carouselHour();
}

$('#date, #hora').carousel({
  pause: true,
  interval: false
});