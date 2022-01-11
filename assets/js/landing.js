window.onload = function() {
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.getElementById("ulMob").style.display == 'flex') {
            document.getElementById("ulMob").style.display = 'none';
        } else {
            document.getElementById("ulMob").style.display = 'flex';
        }
    });
    
};

if(screen.width < 768) {
    document.getElementById("desktop").setAttribute("src","landing-page-new/image/mobile/autoestima.webp");
    document.getElementById("conversas").setAttribute("src","landing-page-new/image/mobile/conversas.webp");
    document.getElementById("pSocial").setAttribute("src","landing-page-new/image/mobile/prova_social.webp");
    document.getElementById("fundo").setAttribute("style","background-image: url('landing-page-new/image/mobile/fundo_mobile.webp');");
}
