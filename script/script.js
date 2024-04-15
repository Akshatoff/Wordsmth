const heading = document.getElementById("heading");


function fadeIn(element) {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 2000,
    });
  
    timeline.add({
      targets: element,
      opacity: [0, 1],
      translateY: [-100, 0],
    });
  
    timeline.play();
  }
  
window.addEventListener("load", () => {
    setTimeout(() => {
        fadeIn("#heading");
      }, 1000);
}) 

  

new fullpage("#fullpage", {
    autoScrolling:true,
    navigation: false,
    anchors:['homesec', 'aboutsec', 'productsec', 'teamsec'],
    lockAnchors:true,
    licenseKey: 'gplv3-license',
})

$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });

