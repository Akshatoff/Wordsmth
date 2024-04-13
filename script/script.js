new fullpage("#fullpage", {
    autoScrolling:true,
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Home', 'About', "Product"],

})

$(".option").click(function(){
   $(".option").removeClass("active");
   $(this).addClass("active");
   
});
