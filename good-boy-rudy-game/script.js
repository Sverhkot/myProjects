$(document).ready(function(){

  var firebaseConfig = {
    apiKey: "AIzaSyAXYcdRVFUZe-QcaFUAqy5P1xzbBYJuksQ",
    authDomain: "scary-cat.firebaseapp.com",
    projectId: "scary-cat",
    storageBucket: "scary-cat.appspot.com",
    messagingSenderId: "197955266656",
    appId: "1:197955266656:web:3301b8a56edf1e466abb05"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  $(".game").css("display", "none");
  $("#over").css("display", "none");
  $(".play").css("display", "block");
 
  $(".btn-warning").css("display", "none");

  if(localStorage.getItem('user') !== ''){
    $(".form-control").val(JSON.parse(localStorage.getItem('user')));
  } 

  if($(".form-control").val() === ''){
    $("#focus").focus();
  } 

  let userName, userScore, table;
  let leaderboard = {};
  function getRating(){
    db.collection("rating").get().then((querySnapshot) => {
      console.log('get raying')
      querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          userName = doc.id;
          userScore = +(doc.data().score);
          leaderboard[userName] = userScore;
          // console.log(leaderboard)
          
      });
    });
  }
  function showLiderTable(leaderboard){
    console.log("start")

    let sortedArr = [];
    for(let key in leaderboard){
      sortedArr.push([key, leaderboard[key]]); 
    } 
    sortedArr.sort(function(a, b) {
      return b[1] - a[1];
    });
  
    for(let i = 0; i < sortedArr.length; i++){
      table += `<tr><td>${sortedArr[i][0]}: </td><td>${sortedArr[i][1]}</td></tr>`;
      $("table").html(table); 
      $("best-result").html("Best result: ")
  }
    console.log("end");
  };
  
  getRating();
    // Add a new document in collection "cities"
 
  let dog = $("#dog");
  let score = 0;
  let newUser;
  function startGame(){
    $(".play").css("display", "none");
    $(".game").css("display", "block");
    $("#over").css("display", "none");
    
    newUser = $(".form-control").val();
    localStorage.setItem('user', JSON.stringify(newUser));
    if (newUser === ''){
      alert("Write your name in fucking form!!!");
      $(".game").css("display", "none");
      $("#over").css("display", "none");
      $(".play").css("display", "block");
      
    }
  };

  $(".try-again").click(function (e) {
    location.reload();
    startGame();
      $("#over").css("display", "none");
      $(".btn-warning").css("display", "none");
      $(".won").css("display", "none");
      
      score = 0;
      $(".your-score").html("");
      $(".your-score").html(newUser + ", your score: " + score);
      
  });

  $(".btn").click(function (e) {
    startGame();
  });
  
  $("body").keypress(function (e) {
    if(e.keyCode == '13'){
      startGame();
      $("#over").css("display", "none");
      $(".btn-warning").css("display", "none");
      $(".won").css("display", "none");
      score = 0;
      $(".your-score").html(newUser + ", your score: " + score);
    }
  });

  let ulitka = $("#ulitka");
  function jump(){
    if(dog.hasClass("jump") === false){
        dog.addClass("jump");
    } 
    
    setTimeout( function(){
        dog.removeClass("jump")
    },800)
    
  };
  
  $(document).keypress(function (e){  
    if(e.keyCode === 32){
      jump();
    }
      
  });
  $(document).keydown(function (e){  
    jump();
    
      // score = score + 1;
      // $(".your-score").html("your score: " + score);
      
      
  });

      ulitka.on('animationiteration', () => {
        console.log('Animation ended');
        score = score + 1;
      $(".your-score").html(newUser + ", your score: " + score);
      
      });

  let isAlive = setInterval(function(){
    let dogTop = parseInt(dog.css("top"));
    let ulitkaLeft = parseInt(ulitka.css("left"));
  
    if(ulitkaLeft < 80 && ulitkaLeft > 0 && dogTop ===  270){
      $(".game").css("display", "none");
      $("#over").css("display", "block");
      $(".btn-warning").css("display", "block");
      $(".game-over").css("display", "block");
      console.log(11111)
  
      console.log(newUser)
      if(leaderboard[newUser] < score || leaderboard[newUser] === undefined){
        console.log('ins')
        leaderboard[newUser] = score;
        db.collection("rating").doc(newUser).set({
          score: score,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      }
    
      showLiderTable(leaderboard);
      
    }

    
  },10);
  
  
});