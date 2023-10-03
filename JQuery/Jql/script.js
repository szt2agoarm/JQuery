//$(document).ready(function(){
$(function(){
console.log('KÉSZ')
$(".egy").click(function(){
    $(".piros").toggle(400)
    console.log($(this).html())
    if($(this).html() == "Hide"){
       $(this).html() == "Show"
    }else{
        $(this).html() == "Hide"
    }
})
$(".fadein-out").click(function () {
    $(".kek").fadeToggle(1000)
})

$("..piros").mouseover(function () {
    $(".piros").css("width", "300px")
})
$(".piros").mouseleave(function () {
    $(".piros").css("width", "200px")
})

$("input[type=reset]").on("click", function(){
    console.log("rezső")
    location.reload()
})
})

