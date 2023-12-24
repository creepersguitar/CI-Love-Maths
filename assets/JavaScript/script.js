// wait for DOM to finish loading game
// get the button elements and adding event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})
/**
 * Main game loop when script is first loaded
 * and after answer is processed
 */
function runGame() {

    // creates 2 random numbers between 1-25
    let num1 = Math.floor(Math.random * 25) + 1;
    let num2 = Math.floor(Math.random * 25) + 1;
}
function checkAnswer() {

}
function calcCorrectAnswer() {

}
function incScore() {

}
function incWrongAnswer() {

}
function displayAddQuestion() {

}
function displayMinusQuestion() {

}
function displayTimesQuestion() {

}

// challenge to do by myself
function displayDivideQuestion() {

}