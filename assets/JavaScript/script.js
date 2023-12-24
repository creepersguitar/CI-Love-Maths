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

function runGame() {

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