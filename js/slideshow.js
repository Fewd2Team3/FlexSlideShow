$(function() {
    $("img").css("display","none");
    $("img:nth-of-type(1)").css("display","block");

    $('img').on("click", function(){ 
        $(this).css("display","none");
        $(this).next().fadeIn("slow");
        if ($(this).next().length === 0) {
            $("img:nth-of-type(1)").fadeIn("slow");    
        }

    });
    

    $("li#1").on("click", function() {
        $("img").css("display","none");
        $("img:nth-of-type(1)").fadeIn("slow");
    });

    $("li#2").on("click", function() {
        $("img").css("display","none");
        $("img:nth-of-type(2)").fadeIn("slow");
    });

    $("li#3").on("click", function() {
        $("img").css("display","none");
        $("img:nth-of-type(3)").fadeIn("slow");
    });

    $("li#4").on("click", function() {
        $("img").css("display","none");
        $("img:nth-of-type(4)").fadeIn("slow");
    });

    $("li#5").on("click", function() {
        $("img").css("display","none");
        $("img:nth-of-type(5)").fadeIn("slow");
    });


});







