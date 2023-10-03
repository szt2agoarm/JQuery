//$(document).ready(function(){
$(function () {
    console.log("KÉSZ");
    $(".show-hide").click(function () {
        $(".piros").toggle(1000);   //milisecond-ban megadva
        console.log($(this).html());
        if ($(this).html() == "Hide") {
            $(this).html("Show");
        }else {
            $(this).html("Hide");
        }
    });
    $(".fadein-out").click(function () {
        $(".kek").fadeToggle(1000);
    })
    $(".piros").mouseover(function(){
        $(this).css("width", "300px");
    })
    $(".piros").mouseleave(function(){
        $(this).css("width", "100px")
    })

    $("input[type=reset]").on("click", function(){
        location.reload();  //Az oldal újra töltése
    })

    $("input[type-range]").change(function(){

    })

    $(".kek").mouseover(function(){
        $(this).addClass("pink")
        $(this).removeClass("kek")
    });

    $(".kek").mouseleave(function(){
        $(this).addClass("kek")
        $(this).removeClass("pink")
    });

    $("body").append("<ol></ol>")
    for (let i = 0; i < 5; i++) {
        $("ol").append(`<li>${i}</li>`)
        
    }
});