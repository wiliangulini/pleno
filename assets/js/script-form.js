function sair() {
    location.href="index.html";
}
function prox() {
    document.getElementById("ul_next").style.display = "flex";
}
function remove() {
    var next =  document.getElementById("next");
    if(next.classList.contains("disabled")) {
        next.classList.remove("disabled");
        $("#link").attr("href", "sala-espera.php");
    } 
   
}
