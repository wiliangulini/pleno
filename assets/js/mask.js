$(document).ready(function(){
    $("#money, #money2").inputmask('decimal', {
    'prefix': 'R$ ',
    'alias': 'numeric',
    'groupSeparator': ',',
    'autoGroup': true,
    'digits': 0,
    'radixPoint': "",
    'digitsOptional': false,
    'allowMinus': false,
    'placeholder': ''
});
});

$(document).ready(function() {
    $("#credito").on("click", function() {
        $("#collapseInter2").hide();
        $("#collapseInter").show();
    });

    $("#debito").on("click", function() {
        $("#collapseInter").hide();
        $("#collapseInter2").show();
    });
});