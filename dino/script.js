$(document).ready(function(){
  let dino = $("#dino");
  let cactus = $("#cactus");
  function jump(){
    if(dino.hasClass("jump") === false){
        dino.addClass("jump");
    } 
    
    setTimeout( function(){
        dino.removeClass("jump")
    },300)
    
  };
  
  $(document).keydown(function (e){
    jump();
  });
  let isAlive = setInterval(function(){
    let dinoTop = parseInt(dino.css("top"));
    let cactusLeft = parseInt(cactus.css("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("game over")
    }
  },10)
});
//  let isAlive = setInterval(() => {
//      let dinoTop = parseInt(dino.css("top", value));
//  }, interval);

