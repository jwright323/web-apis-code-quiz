// Vairables are declared here for timer, score, questions, and local storagex
let i = 0;
let score = 0;
let newTime = 99;
const timer = document.querySelector("#time");
const newMessage = document.querySelector("#message");
let localScores;
let scoreList = [];
const firstChoice = document.getElementById("firstChoice");
const secondChoice = document.getElementById("secondChoice");
const thirdChoice = document.getElementById("thirdChoice");
const fourthChoice = document.getElementById("fourthChoice");
// Timer and Time up prompt
function setTime() {
    var timerInterval = setInterval(function () {
        newTime--;
        timer.textContent = "Timer " + newTime;
        if (newTime === 0) {
            clearInterval(timerInterval);
            alert("Time's Up");
            questionEnder();
        }
        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
};
// When time is up or user has answered all the questions, display the score and prompt to user to submit their name in HighScore or Play again.
function questionEnder() {
    const inputScore = document.createElement("h1");
    const inputTag = document.createElement("input");
    const submitButton = document.createElement("button");
    const playAgainButton = document.createElement("button");
    score += newTime;
    if (score <= 0 ) {
        score = 0;
    };
    document.getElementById("question").textContent = "Sorry, Game Over";
    firstChoice.remove();
    secondChoice.remove();
    thirdChoice.remove();
    fourthChoice.remove();
    document.body.children[1].appendChild(inputScore);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score is " + score;
    document.getElementById("score").setAttribute("class", "row");
    document.getElementById("score").setAttribute("class", "text-center");
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    document.getElementsByTagName("input")[0].placeholder = "Enter initials";
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);    
    submitButton.addEventListener("click", function (event) {    
        event.preventDefault();     
        var highScoreText = new Object();   
        highScoreText.name = inputTag.value.trim(); 
        highScoreText.newScore = score;     
        saveScores(highScoreText);   
        window.location.href = "index.html";    
    });  
};

//Displays questions
function questionInit() {
    firstChoice.hidden = false;
    secondChoice.hidden = false;
    thirdChoice.hidden = false;
    fourthChoice.hidden = false;
    document.getElementById("startButton").hidden = true;
    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("firstChoice").textContent = questions[i]["choices"][0];
        document.getElementById("secondChoice").textContent = questions[i]["choices"][1];
        document.getElementById("thirdChoice").textContent = questions[i]["choices"][2];
        document.getElementById("fourthChoice").textContent = questions[i]["choices"][3];
    }
};
// Local Storage - Need to verify functionality
function saveScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
};
document.getElementById("startButton").addEventListener("click", questionInit);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    newMessage.textContent = "";
});
// Show correct or wrong and subtracts time
firstChoice.hidden = true;
secondChoice.hidden = true;
thirdChoice.hidden = true;
fourthChoice.hidden = true;
document.getElementById("firstChoice").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        newMessage.textContent = "You are right";
        score++;
    }
    else {
        newMessage.textContent = "Sorry, that's not right";
        newTime -= 5;
    }
    i++;
    questionInit();
});
document.getElementById("secondChoice").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        newMessage.textContent = "You are right";
        score++;
    }
    else {
        newMessage.textContent = "Sorry, that's not right";
        newTime -= 5;
    }
    i++;
    questionInit();
});
document.getElementById("thirdChoice").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        newMessage.textContent = "You are right";
        score++;
    }
    else {
        newMessage.textContent = "Sorry, that's not right";
        newTime -= 5;
    }
    i++;
    questionInit();
});
document.getElementById("fourthChoice").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        newMessage.textContent = "You are right";
        score++;
    }
    else {
        newMessage.textContent = "Sorry, that's not right";
        newTime -= 5;
    }
    i++;
    questionInit();
});