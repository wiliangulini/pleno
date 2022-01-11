$(document).ready(function() {

    //upload
    let readUrl = function(input) {
        if(input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                $("#img").attr('src', e.target.result);
                $("#upload").attr('value', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#upload").on('change',function(){
     readUrl(this);
    });
    $("#img").click(function() {
        let btn = $("#upload");
        btn.trigger('click');
    });

});
