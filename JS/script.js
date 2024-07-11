$(".opennav").click(function(){
    $(".navside").css("left","0");
    $(".opennav").css("left","280px")
})
$(".closemark").click(function(){
    $(".navside").css("left","-270px");
    $(".opennav").css("left","10px")

})
$(".sildes h3").click(function(){
    $(this).next().slideToggle();
    $(".sildes p").not($(this).next()).slideUp();
})

$("textarea").keyup(function(){
    let length=$(this).val().length;
    if (100-length==0){
        $(".num").text("your available character finished")
    }else{
        $(".num").text(100-length)
    }
})