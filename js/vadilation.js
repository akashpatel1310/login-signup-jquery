$(document).ready(function(){
    $("#login-form").validate({
        rules:{
            Lemail:{
                required: true,
            }
        },
        messages:{
            Lemail:{
                required:"enter something"
            }
        }
    });
});
