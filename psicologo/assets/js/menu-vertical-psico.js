let home = document.getElementById('home');
let homeImg = document.querySelector('#home img');

let perfil = document.getElementById('perfil');
let perfilImg = document.querySelector('#perfil img');

let agenda = document.getElementById('agenda');
let agendaImg = document.querySelector('#agenda img');

let consultas = document.getElementById('consultas');
let consultasImg = document.querySelector('#consultas img');

let pagamentos = document.getElementById('pagamentos');
let pagamentosImg = document.querySelector('#pagamentos img');


let sair = document.getElementById('sair');
let sairImg = document.querySelector('#sair img');

let blog = document.getElementById('blog');
let blogImg = document.querySelector('#blog img');

let qmSomos = document.getElementById('qmSomos');
let qmSomosImg = document.querySelector('#qmSomos img');

let spotify = document.getElementById('spotify');
let spotifyImg = document.getElementById('spotifyImg');

//home hover
home.addEventListener('mouseover', () => {
  homeImg.setAttribute('src','../assets/images/menu-vertical/white-icon/home.webp');
});
home.addEventListener('mouseout', () => {
  homeImg.setAttribute('src','../assets/images/menu-vertical/home.webp');
});

//perfil hover
perfil.addEventListener('mouseover', () => {
  perfilImg.setAttribute('src','../assets/images/menu-vertical/white-icon/meuPerfil.webp');
});
perfil.addEventListener('mouseout', () => {
  perfilImg.setAttribute('src','../assets/images/menu-vertical/meuPerfil.webp');
});

//perfil hover
agenda.addEventListener('mouseover', () => {
  agendaImg.setAttribute('src','../assets/images/menu-vertical/white-icon/minhasConsultas.webp');
});
agenda.addEventListener('mouseout', () => {
  agendaImg.setAttribute('src','assets/images/menu-vertical/agenda.webp');
});

//consultas hover
consultas.addEventListener('mouseover', () => {
  consultasImg.setAttribute('src','../assets/images/menu-vertical/white-icon/minhasConsultas.webp');
});
consultas.addEventListener('mouseout', () => {
  consultasImg.setAttribute('src','../assets/images/menu-vertical/minhasConsultas.webp');
});

//consultas hover
pagamentos.addEventListener('mouseover', () => {
  pagamentosImg.setAttribute('src','../assets/images/menu-vertical/white-icon/pagamentos.webp');
});
pagamentos.addEventListener('mouseout', () => {
  pagamentosImg.setAttribute('src','../assets/images/menu-vertical/pagamentos.webp');
});


//sair hover
sair.addEventListener('mouseover', () => {
  sairImg.setAttribute('src','../assets/images/menu-vertical/white-icon/sair.webp');
});
sair.addEventListener('mouseout', () => {
  sairImg.setAttribute('src','../assets/images/menu-vertical/sair.webp');
});

//blog hover
blog.addEventListener('mouseover', () => {
  blogImg.setAttribute('src','../assets/images/menu-vertical/white-icon/acesseBlog.webp');
});
blog.addEventListener('mouseout', () => {
  blogImg.setAttribute('src','../assets/images/menu-vertical/acesseBlog.webp');
});

//quem somos hover
qmSomos.addEventListener('mouseover', () => {
  qmSomosImg.setAttribute('src','../assets/images/menu-vertical/white-icon/qmSomos.webp');
});
qmSomos.addEventListener('mouseout', () => {
  qmSomosImg.setAttribute('src','../assets/images/menu-vertical/qmSomos.webp');
});

//spotify hover 
spotify.addEventListener('mouseover', () => {
  spotifyImg.setAttribute('src','../assets/images/menu-vertical/white-icon/spotify-green.webp');
});
spotify.addEventListener('mouseout', () => {
  spotifyImg.setAttribute('src','../assets/images/menu-vertical/spotify.webp');
});

//menu toggle

let menu = document.getElementById('menuIcon');
let menuVertical = document.getElementById('menu-vertical');
let header = document.getElementById('header');
let mvGreen = document.querySelector('.menuVertical.green');
let txtSpotify = document.querySelector('.menuVertical.spotify .txt');
let txtSpotify2 = document.querySelector('#spotify p.h5');
let spotifyDiv = document.getElementById("spotify");

let mv1 = document.querySelector('.menuVertical p.h5');
let mv2 = document.querySelector('.menuVertical.two p.h5');
let mv_two = document.querySelector('.menuVertical.two');

let DesktopMenu = () => {
  menu.addEventListener('click', () => {
    if(menuVertical.classList.contains('opened') == true) {

      document.querySelector('.main-content').style.marginLeft = '70px';
     
      
      menuVertical.classList.remove('opened');
      menuVertical.classList.add('closed');
      header.classList.remove('headerOpened');
      header.classList.add('headerClosed');
      mvGreen.style.display = 'none';
      txtSpotify.style.display = 'none';
      txtSpotify2.style.display = 'none';
      spotifyDiv.style.justifyContent = 'center';
      spotifyDiv.style.width = '70%';
      //remover span ao add closed
      document.querySelectorAll('.item a span').forEach((span) => {
        span.classList.add('spaNone');
      });
      //spotify menu-vertical closed
      mv1.style.display = 'none';
      mv2.style.display = 'none';
      mv_two.style.marginTop = '30%';
      document.querySelectorAll('.item a .img').forEach((el) => {
        el.style.justifyContent = 'center'; 
        el.style.width = '100%';
        el.style.display = 'flex';
      });
      document.querySelector('.menuVertical.spotify').style.display = 'flex';
      document.querySelector('.menuVertical.spotify').style.justifyContent = 'center';

      //imagem logoPMob
      setTimeout(() => {
        document.querySelector('.navbar-brand img').setAttribute('src','../assets/images/menu-vertical/logoPMob.webp');
        document.querySelector('.navbar-brand img').classList.add('w-100');
      }, 250);
      
      //padding menu li.item
      document.querySelectorAll('.menu .item').forEach((p) => {
        p.style.padding = '15% 8%';
        document.querySelector('#menu-vertical .menu-vertical').style.marginTop = '20%';
      });

      
    } else {
      document.querySelector('.main-content').style.marginLeft = '250px';
      
      menuVertical.classList.remove('closed');
      menuVertical.classList.add('opened');
      header.classList.add('headerOpened');
      header.classList.remove('headerClosed');
      
      // spotify
      setTimeout(() => {
        mvGreen.style.display = 'flex';
        txtSpotify.style.display = 'block';
        txtSpotify2.style.display = 'block';
        spotifyDiv.style.justifyContent = 'flex-start';
        spotifyDiv.style.width = '100%';

        // remover spaNone
        document.querySelectorAll('.item a span').forEach((span) => {
          span.classList.remove('spaNone');
        });

        mv1.style.display = 'block';
        mv2.style.display = 'block';
        mv_two.style.marginTop = '0%';
        document.querySelectorAll('.item a .img').forEach((el) => {
          el.style.justifyContent = 'flex-start'; 
          el.style.width = '17%';
        });
        document.querySelector('.menuVertical.spotify').style.display = 'block';
      }, 175);
      document.querySelector('.navbar-brand img').setAttribute('src','../assets/images/menu-vertical/logoPleno.webp');
      document.querySelector('.navbar-brand img').classList.remove('w-100');

      //padding menu li.item
      document.querySelectorAll('.menu .item').forEach((p) => {
        p.style.padding = '4% 8%';
        document.querySelector('#menu-vertical .menu-vertical').style.marginTop = '8%';
        if(screen.width < 1370 &&  screen.width > 1024) {
          p.style.padding = '1.5% 8%';
          document.querySelector('#menu-vertical .menu-vertical').style.marginTop = '4%';
        }
      });

      
    }
  });
}

let MobileMenu = () => {
  header.classList.remove('headerOpened');
  menuVertical.classList.remove('opened');
  menuVertical.classList.add('closedMob');

  menu.addEventListener('click', () => {
    
    if(menuVertical.classList.contains('openedMob') == true) {    

      menuVertical.style.opacity = '1';
      setTimeout(() => {
        menuVertical.style.opacity = '.75';
      }, 30);
      setTimeout(() => {
        menuVertical.style.opacity = '.5';
      }, 70);
      setTimeout(() => {
        menuVertical.style.opacity = '.25';
      }, 110);
      setTimeout(() => {
        menuVertical.style.opacity = '0';
        menuVertical.classList.remove('openedMob');  
        menuVertical.classList.add('closedMob');
      }, 150);
      
    } else {
      
      menuVertical.classList.remove('closedMob');

      menuVertical.style.opacity = '0';
      menuVertical.classList.add('openedMob');
      setTimeout(() => {
        menuVertical.style.opacity = '.25';
      }, 30);
      setTimeout(() => {
        menuVertical.style.opacity = '.5';
      }, 70);
      setTimeout(() => {
        menuVertical.style.opacity = '.75';
      }, 110);
      setTimeout(() => {
        menuVertical.style.opacity = '1';
      }, 150);
    
    }
  });
}

if(screen.width >= 1024) {
  
  DesktopMenu();

} 
else if(screen.width <= 1023) {
 
  MobileMenu();


}


if(menuVertical.classList.contains('opened') == true) {

  // hover ao passar o mouse nos icones do menu-vertical qndo esta com 70px
  // inicio    
  home.addEventListener('mouseover', () => {
    home.classList.add('itemHover');
    document.querySelector('#home .img').classList.add('itemImg');
    document.querySelector('#home span').classList.add('itemSpan');
    document.querySelector('#home a').style.justifyContent = 'space-between';
  });
  home.addEventListener('mouseout', () => {
    home.classList.remove('itemHover');
    document.querySelector('#home .img').classList.remove('itemImg');
    document.querySelector('#home span').classList.remove('itemSpan');
    document.querySelector('#home a').style.justifyContent = 'flex-start';
  });
  // meu perfil   
  perfil.addEventListener('mouseover', () => {
    perfil.classList.add('itemHover');
    document.querySelector('#perfil .img').classList.add('itemImg');
    document.querySelector('#perfil span').classList.add('itemSpan');
    document.querySelector('#perfil a').style.justifyContent = 'space-between';
  });
  perfil.addEventListener('mouseout', () => {
    perfil.classList.remove('itemHover');
    document.querySelector('#perfil .img').classList.remove('itemImg');
    document.querySelector('#perfil span').classList.remove('itemSpan');
    document.querySelector('#perfil a').style.justifyContent = 'flex-start';
  });
  // agenda   
  agenda.addEventListener('mouseover', () => {
    agenda.classList.add('itemHover');
    document.querySelector('#agenda .img').classList.add('itemImg');
    document.querySelector('#agenda span').classList.add('itemSpan');
    document.querySelector('#agenda a').style.justifyContent = 'space-between';
  });
  agenda.addEventListener('mouseout', () => {
    agenda.classList.remove('itemHover');
    document.querySelector('#agenda .img').classList.remove('itemImg');
    document.querySelector('#agenda span').classList.remove('itemSpan');
    document.querySelector('#agenda a').style.justifyContent = 'flex-start';
  });
  // consultas   
  consultas.addEventListener('mouseover', () => {
    consultas.classList.add('itemHover');
    document.querySelector('#consultas .img').classList.add('itemImg');
    document.querySelector('#consultas span').classList.add('itemSpan');
    document.querySelector('#consultas a').style.justifyContent = 'space-between';
  });
  consultas.addEventListener('mouseout', () => {
    consultas.classList.remove('itemHover');
    document.querySelector('#consultas .img').classList.remove('itemImg');
    document.querySelector('#consultas span').classList.remove('itemSpan');
    document.querySelector('#consultas a').style.justifyContent = 'flex-start';
  });
  // pagamentos   
  pagamentos.addEventListener('mouseover', () => {
    pagamentos.classList.add('itemHover');
    document.querySelector('#pagamentos .img').classList.add('itemImg');
    document.querySelector('#pagamentos span').classList.add('itemSpan');
    document.querySelector('#pagamentos a').style.justifyContent = 'space-between';
  });
  pagamentos.addEventListener('mouseout', () => {
    pagamentos.classList.remove('itemHover');
    document.querySelector('#pagamentos .img').classList.remove('itemImg');
    document.querySelector('#pagamentos span').classList.remove('itemSpan');
    document.querySelector('#pagamentos a').style.justifyContent = 'flex-start';
  });
  // sair   
  sair.addEventListener('mouseover', () => {
    sair.classList.add('itemHover');
    document.querySelector('#sair .img').classList.add('itemImg');
    document.querySelector('#sair span').classList.add('itemSpan');
    document.querySelector('#sair a').style.justifyContent = 'space-between';
  });
  sair.addEventListener('mouseout', () => {
    sair.classList.remove('itemHover');
    document.querySelector('#sair .img').classList.remove('itemImg');
    document.querySelector('#sair span').classList.remove('itemSpan');
    document.querySelector('#sair a').style.justifyContent = 'flex-start';
  });
  // blog   
  blog.addEventListener('mouseover', () => {
    blog.classList.add('itemHover');
    document.querySelector('#blog .img').classList.add('itemImg');
    document.querySelector('#blog span').classList.add('itemSpan');
    document.querySelector('#blog a').style.justifyContent = 'space-between';
  });
  blog.addEventListener('mouseout', () => {
    blog.classList.remove('itemHover');
    document.querySelector('#blog .img').classList.remove('itemImg');
    document.querySelector('#blog span').classList.remove('itemSpan');
    document.querySelector('#blog a').style.justifyContent = 'flex-start';
  });
  // qmSomos   
  qmSomos.addEventListener('mouseover', () => {
    qmSomos.classList.add('itemHover');
    document.querySelector('#qmSomos .img').classList.add('itemImg');
    document.querySelector('#qmSomos span').classList.add('itemSpan');
    document.querySelector('#qmSomos a').style.justifyContent = 'space-between';
  });
  qmSomos.addEventListener('mouseout', () => {
    qmSomos.classList.remove('itemHover');
    document.querySelector('#qmSomos .img').classList.remove('itemImg');
    document.querySelector('#qmSomos span').classList.remove('itemSpan');
    document.querySelector('#qmSomos a').style.justifyContent = 'flex-start';
  });
} 
else {

  home.addEventListener('mouseover', () => {
    home.style.background = "#2EA68D";
    document.querySelector('#home a span').style.color = '#FFF';
    
  });
  home.addEventListener('mouseout', () => {
    home.style.background = '#FFF';
    document.querySelector('#home a span').style.color = '#2EA68D';
  });

  perfil.addEventListener('mouseover', () => {
    perfil.style.background = "#2EA68D";
    document.querySelector('#perfil a span').style.color = '#FFF';
  });
  perfil.addEventListener('mouseout', () => {
    perfil.style.background = '#FFF';
    document.querySelector('#perfil a span').style.color = '#2EA68D';
  });

  agenda.addEventListener('mouseover', () => {
    agenda.style.background = "#2EA68D";
    document.querySelector('#agenda a span').style.color = '#FFF';
  });
  agenda.addEventListener('mouseout', () => {
    agenda.style.background = '#FFF';
    document.querySelector('#agenda a span').style.color = '#2EA68D';
  });

  consultas.addEventListener('mouseover', () => {
    consultas.style.background = "#2EA68D";
    document.querySelector('#consultas a span').style.color = '#FFF';
  });
  consultas.addEventListener('mouseout', () => {
    consultas.style.background = '#FFF';
    document.querySelector('#consultas a span').style.color = '#2EA68D';
  });

  pagamentos.addEventListener('mouseover', () => {
    pagamentos.style.background = "#2EA68D";
    document.querySelector('#pagamentos a span').style.color = '#FFF';
  });
  pagamentos.addEventListener('mouseout', () => {
    pagamentos.style.background = '#FFF';
    document.querySelector('#pagamentos a span').style.color = '#2EA68D';
  });


  consultas.addEventListener('mouseover', () => {
    sair.style.background = "#2EA68D";
    document.querySelector('#sair a span').style.color = '#FFF';
  });
  consultas.addEventListener('mouseout', () => {
    sair.style.background = '#FFF';
    document.querySelector('#sair a span').style.color = '#2EA68D';
  });

  blog.addEventListener('mouseover', () => {
    blog.style.background = "#2EA68D";
    document.querySelector('#blog a span').style.color = '#FFF';
  });
  blog.addEventListener('mouseout', () => {
    blog.style.background = '#FFF';
    document.querySelector('#blog a span').style.color = '#2EA68D';
  });

  qmSomos.addEventListener('mouseover', () => {
    qmSomos.style.background = "#2EA68D";
    document.querySelector('#qmSomos a span').style.color = '#FFF';
  });
  qmSomos.addEventListener('mouseout', () => {
    qmSomos.style.background = '#FFF';
    document.querySelector('#qmSomos a span').style.color = '#2EA68D';
  });

}

// ls-select

let downEarly = () => {
    
  let arrow = document.getElementById('arrow');
  let down = document.getElementById('down');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

let downEnd = () => {
    
  let arrow = document.getElementById('arrow2');
  let down = document.getElementById('down2');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

let downDay = () => {
    
  let arrow = document.getElementById('arrow3');
  let down = document.getElementById('down3');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

let downInterval = () => {
    
  let arrow = document.getElementById('arrow4');
  let down = document.getElementById('down4');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

let downIntervalEnd = () => {
    
  let arrow = document.getElementById('arrow5');
  let down = document.getElementById('down5');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

// compromissos pessoais
let dateCard2 = () => {
    
  let arrow = document.getElementById('arrow6');
  let down = document.getElementById('down6');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}


let hourCard2 = () => {
    
  let arrow = document.getElementById('arrow7');
  let down = document.getElementById('down7');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

let hourEndCard2 = () => {
    
  let arrow = document.getElementById('arrow8');
  let down = document.getElementById('down8');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

// agendamento 

let dateCard3 = () => {
    
  let arrow = document.getElementById('arrow9');
  let down = document.getElementById('down9');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

let hourCard3 = () => {
    
  let arrow = document.getElementById('arrow10');
  let down = document.getElementById('down10');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

let hourEndCard3 = () => {
    
  let arrow = document.getElementById('arrow11');
  let down = document.getElementById('down11');

  if(down.style.display == "none") {
    
    down.style.opacity = 0;
    down.style.display = "block";
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 1;
      arrow.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down.style.display == "block") {

    down.style.opacity = 1;
    setTimeout(() =>{
      down.style.opacity = 0.75;
      arrow.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down.style.opacity = 0.5;
      arrow.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down.style.opacity = 0.25;
      arrow.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down.style.opacity = 0;
      arrow.style.transform = "rotate(0deg)";
      down.style.display = "none";
    }, 250);  

  }
}

// funçoes click;
let radiocontainer = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day").innerHTML = txt;
  downEarly();
}
document.querySelector(".ls-select.early").addEventListener("click", () => {
  downEarly();
});

let radiocontainer2 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day2").innerHTML = txt;
  downEnd();
}
document.querySelector(".ls-select.end").addEventListener("click", () => {
  downEnd();
});

let radiocontainer3 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day3").innerHTML = txt;
  downDay();
}
document.querySelector(".ls-select.day").addEventListener("click", () => {
  downDay();
});

let radiocontainer4 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day4").innerHTML = txt;
  downInterval();
}
document.querySelector(".ls-select.interval").addEventListener("click", () => {
  downInterval();
});

let radiocontainer5 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day5").innerHTML = txt;
  downIntervalEnd();
}
document.querySelector(".ls-select.intervalEnd").addEventListener("click", () => {
  downIntervalEnd();
});
// compromisso pessoais
let radiocontainer6 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day6").innerHTML = txt;
  dateCard2();
}
document.querySelector(".ls-select.compromise").addEventListener("click", () => {
  dateCard2();
});

let radiocontainer7 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day7").innerHTML = txt;
  hourCard2();
}
document.querySelector(".ls-select.compromise_two").addEventListener("click", () => {
  hourCard2();
});

let radiocontainer8 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day8").innerHTML = txt;
  hourEndCard2();
}
document.querySelector(".ls-select.compromise_three").addEventListener("click", () => {
  hourEndCard2();
});

// agendamento

let radiocontainer9 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day9").innerHTML = txt;
  dateCard3();
}
document.querySelector(".ls-select.agendamento").addEventListener("click", () => {
  dateCard3();
});

let radiocontainer10 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day10").innerHTML = txt;
  hourCard3();
}
document.querySelector(".ls-select.agendamento_two").addEventListener("click", () => {
  hourCard3();
});

let radiocontainer11 = (elmnt) => {
  let n = elmnt.id;
  let txt = document.getElementById(n).innerText;
  document.getElementById("day11").innerHTML = txt;
  hourEndCard3();
}
document.querySelector(".ls-select.agendamento_three").addEventListener("click", () => {
  hourEndCard3();
});



if(screen.width < 768) {
  //header 
  
  let nvFoto = document.getElementById('nvFoto');
  let nav_mob = document.getElementById('nav_mob');
  
  nvFoto.addEventListener('click', () => {
    if(nav_mob.style.display === 'block') {
      nav_mob.style.display = 'none';
    } else {
      nav_mob.style.display = 'block';
    }
  });
  
}