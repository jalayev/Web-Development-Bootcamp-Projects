
var userClickedPattern = [];
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level;

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  level++;
  $("h1").text("Level " + level);
  return randomNumber;
}

function playSound(name) {

  var btnSound = new Audio(name); //construction function
  btnSound.play();
}

function animatePress(currentColour) {

  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function animateNextLevel(delay = 800) {

  setTimeout(() => {
    var randomChosenColour = buttonColours[nextSequence()];
    gamePattern.push(randomChosenColour); // also updates pattern of randomly chosen colours
    $("." + randomChosenColour).fadeOut(150).fadeIn(150);
    playSound("sounds/" + randomChosenColour + ".mp3")
  }, delay);
}

function startTheGame() {

  document.addEventListener("keydown", function() { //initiate the game

    $("body").removeClass("game-over");
    level = 0;
    animateNextLevel(100);

    $(".btn").on("click", function(e) { // sets the colours clicked by user to the array in push order
      // only after a player pressed key for the 1st time
      var userChosenColour = e.target.id;
      userClickedPattern.push(userChosenColour);
      playSound("sounds/" + userChosenColour + ".mp3");
      animatePress(userChosenColour);

      for (var i = 0; i < userClickedPattern.length; i++) {

        if (userClickedPattern[i] !== gamePattern[i]) {

          $("body").addClass("game-over");

          $(".btn").off("click");
          var wrongSound = new Audio("sounds/wrong.mp3");
          wrongSound.play();
          gamePattern = [];
          userClickedPattern = [];
          $("h1").text("Game Over, Press Any Key to Restart");
          startTheGame();
        } else if (i === gamePattern.length - 1) {
          userClickedPattern = [];
          animateNextLevel();
        }
      }

    });

  }, {once: true});
}

startTheGame();
