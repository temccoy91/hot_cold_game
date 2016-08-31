$(document).ready(function(){
/*
** all of your javascirpt code is inside the $(document).ready(function(){}
** so that we can make sure the page is loaded */

var COMPUTER_CHOICE = null;
var NUM_GUESSES = null;
var GAME_OVER = false;
var comNum;
var winLose;

$(".new").click(startNewGame);

/*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
  $(".overlay").fadeOut(1000);
  });

  /*
    ** guess button pressed; get guess from text field
    */
    $("#guessButton").click(function(event){

    // call preventDefault method so the onload method is not called again
    event.preventDefault();

    console.log("guess button down");

    if (comNum === null)
    {
    alert ("Please press new game button to get started");
    return;
    }

    if (GAME_OVER)
    {
    startNewGame();
    }

    var guess = $('#userGuess').val();

    // make sure guess is a whole number and within 1-100
    if (guess != null && ((guess % 1)==0) && (guess > 0 && guess < 101))
    {
    NUM_GUESSES++;

    $("#count").text(NUM_GUESSES);

    console.log("num guess is " + NUM_GUESSES);
    console.log("guess is " + guess);

    // add guess to guess list
    $("#guessList").append("<li>" + guess + "</li>");

    compareGuess (guess);
    }
    else
    {
    alert("invalid guess. Please enter a whole number betwee 1 and 100");
    }

});


 function randomComputerGuess(){

 comNum = Math.floor((Math.random()*101)+1);
 COMPUTER_CHOICE = comNum;
 return COMPUTER_CHOICE;

};


function win(){
    winLose = "You Matched the number!!";
    $("#feedback").text(winLose);

}

/*
** process user's guess
*/
/*
** process user's guess
*/
function compareGuess(guess)
{
var diff = Math.abs(COMPUTER_CHOICE-guess);

if(guess == COMPUTER_CHOICE){
 win();
}
else if (diff<=10 && diff != 0){
    $("#feedback").text("You are Hot!!"); } else if (diff<=20){
    $("#feedback").text("You are warm"); } else if (diff<=30){
    $("#feedback").text("You are cool"); } else if (diff<=40){
    $("#feedback").text("You are cold"); } else{
    $("#feedback").text("ICE COLD");
}

/*
** The computer has already picked a random number between 1 and 100. The player has entered a guess which is passed
** into this funciton as a parameter. Compare the computers random number with the players guess. You will then give
** feedback back to the user if the guess is close or not. If the guess is right on, you will tell the user so. If
** the guess is within 5, tell them they are very hot, within 10 they are hot, within 20 - warm, within 30 cool,
** within 40 - cold, more than 40 - ICE cold. Feedback goes into the "feedback" component. Hint: you will need another
** function from the Javascript Math ojbect */


}


/*
** start new game
*/
function startNewGame()
{
COMPUTER_CHOICE = randomComputerGuess(); console.log ("starting new game; computer choice is: " + COMPUTER_CHOICE); console.log(comNum); console.log(COMPUTER_CHOICE);


NUM_GUESSES = 0;
GAME_OVER = false;

$("#count").text(NUM_GUESSES);
$("#feedback").text("Make your guess!");

$("#userGuess").val("Enter your guess!");

// clear previous game guess list if any $("ul.guessBox li").remove();

}

/*
    ** clear text entry to get reay for new user guess
    */
    $('#userGuess').mouseenter(function() {

    console.log ("user guess mouse enter");
    $("#userGuess").val("");

});


});


