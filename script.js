$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.home .navbar .nav').addClass("sticky");
        }else{
            $('.home .navbar .nav').removeClass("sticky");
        }
    })
});