$(document).ready(function() {

    //upload
    var readUrl = function(input) {
        if(input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $("#img").attr('src', e.target.result);
                $("#upload").attr('value', e.target.result);
                salva_imagem_heroi();
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#upload").on('change',function(){
     readUrl(this);
    });
    $("#img").click(function() {
        var btn = $("#upload");
        btn.trigger('click');
    });

    $(".action").css('bottom','0px');
});

$(document).ready(function() {

    //upload1
    var readUrl = function(input) {
        if(input.files && input.files[0]) {

            var reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function(e1) {
                $("#img1").attr('src',e1.target.result);
            }
        }
    }
    $("#upload1").on('change',function() {
        readUrl(this);
    });
    $("#img1").click(function() {
        var btn1 = $("#upload1");
        btn1.trigger('click');
    });

});

$(document).ready(function() {

    //upload2
    var readUrl = function(input) {
        if(input.files && input.files[0]) {

            var reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function(e2) {
                $("#img2").attr('src',e2.target.result);
            }
        }
    }
    $("#upload2").on('change',function() {
        readUrl(this);
    });
    $("#img2").click(function() {
        var btn2 = $("#upload2");
        btn2.trigger('click');
    });
});
