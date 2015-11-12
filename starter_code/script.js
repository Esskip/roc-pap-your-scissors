var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var random= Math.floor((Math.random()*9)+1);
    if(random<4) {
        return "rock";
    } else if (random<7) {
       return "paper";
    } else {
        return "scissors";
    }
    
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    // userValue = 'rock', 'paper', 'scissors'
    // if(userValue < 4) { //rock
    //     if(aiValue < 7) { //paper
    //         return aiValue;
    //     }else if (aiValue < 10){ //sis
    //         return userValue;
    //         }
            
    //     if(userValue < 7 ) { //paper
    //         if(aiValue < 10) { //sciss
    //             return userValue;
    //             } else if (aiValue <4) { //rock
    //             return userValue;
    //             }
                
    //             if (userValue < 10) { //sciss
    //                 if(aiValue < 4) { //rock
    //                     return userValue;
    //                     } else if (aiValue < 7) { //paper
    //                     return uservalue;
    //                     }
    //                 }
    //         }
    //     }
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    console.log('USER', userValue);
    var aiValue = getAISelection();
    console.log('AI', aiValue);


    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
   console.log('HELLO WORLD');
    $('.token').on('click', function(event) {
        console.log(event.target);
        evaluate(event);
    })
});
