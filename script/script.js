new fullpage("#fullpage", {
    autoScrolling:true,
    navigation: false,
})

$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });

