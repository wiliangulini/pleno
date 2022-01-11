let home = document.getElementById('home');
let homeImg = document.querySelector('#home img');

let perfil = document.getElementById('perfil');
let perfilImg = document.querySelector('#perfil img');

let consultas = document.getElementById('consultas');
let consultasImg = document.querySelector('#consultas img');

let pagamentos = document.getElementById('pagamentos');
let pagamentosImg = document.querySelector('#pagamentos img');

let convenio = document.getElementById('convenio');
let convenioImg = document.querySelector('#convenio img');

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

//convenio hover
convenio.addEventListener('mouseover', () => {
  convenioImg.setAttribute('src','../assets/images/menu-vertical/white-icon/convenio.webp');
});
convenio.addEventListener('mouseout', () => {
  convenioImg.setAttribute('src','../assets/images/menu-vertical/convenio.webp');
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
  // convenio   
  convenio.addEventListener('mouseover', () => {
    convenio.classList.add('itemHover');
    document.querySelector('#convenio .img').classList.add('itemImg');
    document.querySelector('#convenio span').classList.add('itemSpan');
    document.querySelector('#convenio a').style.justifyContent = 'space-between';
  });
  convenio.addEventListener('mouseout', () => {
    convenio.classList.remove('itemHover');
    document.querySelector('#convenio .img').classList.remove('itemImg');
    document.querySelector('#convenio span').classList.remove('itemSpan');
    document.querySelector('#convenio a').style.justifyContent = 'flex-start';
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

  convenio.addEventListener('mouseover', () => {
    convenio.style.background = "#2EA68D";
    document.querySelector('#convenio a span').style.color = '#FFF';
  });
  convenio.addEventListener('mouseout', () => {
    convenio.style.background = '#FFF';
    document.querySelector('#convenio a span').style.color = '#2EA68D';
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