$(document).ready(function() {
    $("#go").on("click", function() {
        $("#card").css("display","none");
        $("#card_four").css("display","flex");
        $("#p1").addClass("normal");
        $("#p1").removeClass("mark");
        $("#p2").removeClass("normal");
        $("#p2").addClass("mark");
    });
    /*$("#go2").on("click", function() {
        $("#card_two").css("display","none");
        $("#card_three").css("display","flex");
        $("#p2").addClass("normal");
        $("#p2").removeClass("mark");
        $("#p3").removeClass("normal");
        $("#p3").addClass("mark");
    });
    $("#go3").on("click", function() {
        $("#card_three").css("display","none");
        $("#card_four").css("display","flex");
        $("#p3").addClass("normal");
        $("#p3").removeClass("mark");
        $("#p4").removeClass("normal");
        $("#p4").addClass("mark");
    });*/
    $("#go4").on("click", function() {
        $("#card_four").css("display","none");
        $("#card_six").css("display","flex");
        $("#p4").addClass("normal");
        $("#p4").removeClass("mark");
        $("#p5").removeClass("normal");
        $("#p5").addClass("mark");
    });
    /*$("#go5").on("click", function() {
        $("#card_five").css("display","none");
        $("#card_six").css("display","flex");
        $("#modal").css("background-image","url(assets/images/modal/05–1@2x.webp)");
        $("#modal").css("background-position","top");
        $("#modal").css("background-size","cover");
        $("#p5").addClass("normal");
        $("#p5").removeClass("mark");
        $("#p6").removeClass("normal");
        $("#p6").addClass("mark");
    });*/
});