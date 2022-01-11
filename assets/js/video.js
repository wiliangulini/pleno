$("#imgVideo").on("click", function() {
    $("#imgVideo").css("display","none");
    $("#imgVideoZ").css("display","block");
});
$("#imgVideoZ").on("click", function() {
    $("#imgVideoZ").css("display","none");
    $("#imgVideo").css("display","block");
});

$("#micro").on("click", function() {
    $("#micro").css("display","none");
    $("#microZ").css("display","block");
});
$("#microZ").on("click", function() {
    $("#microZ").css("display","none");
    $("#micro").css("display","block");
});


$("#label4").on("click", function() {
    let checkbox = $("#4");

    if(checkbox.is(":checked")) {
        $("#label4").addClass("checkedlabel");
    } else {
        $("#label4").removeClass("checkedlabel");
    }
});
$("#label3").on("click", function() {
    let checkbox = $("#3");

    if(checkbox.is(":checked")) {
        $("#label3").addClass("checkedlabel");
    } else {
        $("#label3").removeClass("checkedlabel");
    }
}); 
$("#label2").on("click", function() {
    let checkbox = $("#2");

    if(checkbox.is(":checked")) {
        $("#label2").addClass("checkedlabel");
    } else {
        $("#label2").removeClass("checkedlabel");
    }
});
$("#label1").on("click", function() {
    let checkbox = $("#1");

    if(checkbox.is(":checked")) {
        $("#label1").addClass("checkedlabel");
    } else {
        $("#label1").removeClass("checkedlabel");
    }
});
$("#label0").on("click", function() {
    let checkbox = $("#0");

    if(checkbox.is(":checked")) {
        $("#label0").addClass("checkedlabel");
    } else {
        $("#label0").removeClass("checkedlabel");
    }
});   


document.getElementById("copy").addEventListener("click", function() {
    document.getElementById("txt").select();
    document.execCommand('copy');
});

document.getElementById("fechar").addEventListener("click", function() {
    document.getElementById("mid").style.display = "none";
});