$(document).ready(function(){
    //on load show login as active
    $(".login-form").show();
    $(".register-form").hide();
    $("#login-btn").addClass('active')
    $("#register-btn").removeClass('active')
    //on btn click show login/register (toggle)
    $("#login-btn").click(function(){
        $(".login-form").show();
        $(".register-form").hide();
        $("#login-btn").addClass('active')
        $("#register-btn").removeClass('active')
    });
    $("#register-btn").click(function(){
        $(".login-form").hide();
        $(".register-form").show();
        $("#register-btn").addClass('active')
        $("#login-btn").removeClass('active')
    });
});