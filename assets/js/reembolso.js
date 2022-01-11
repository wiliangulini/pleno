function next() {
    if(document.getElementById("number").value > 0) {
        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "flex";
    } else {
        alert("Preencher o campo 'Valor a reembolsar' e tente novamente.")
    }
}

document.getElementById("motivo").addEventListener("click", function() {
    let radio0 = document.getElementById("radio0");
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    
    if(radio0.checked || radio1.checked || radio2.checked) {
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "flex";
        console.log("checou");
    } else {
        console.log("error");
    }
});