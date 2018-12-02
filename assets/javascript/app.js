$("#startGame").on("click", function(event) {
    $("#startGame").hide();
    clock();
    generateHTML();

});

$("body").on("click", ".answer", function(event) {
    event.preventDefault();
    selectedAnswer = $(this).text();
    if (selectedAnswer === correctArray[counter]) {
        clearInterval(time);
        correctAnswer();
    } else {
        clearInterval(time);
        wrongAnswer();
    }
});

function clock() {
    time = setInterval(thirty, 1000);

    function thirty() {
        if (timerCounter === 0) {
            clearInterval(time);
            questionTimeout();
        }
        if (timerCounter > 0) {
            timerCounter--;
        }
        $(".timer").html(timerCounter);
    }
}

function generateHTML() {
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>" + questionsArray[counter] +
        "</h3><h3 class='answer'>A. " + answersArray[counter][0] +
        "</h3><h3 class='answer'>B. " + answersArray[counter][1] + "</h3><h3 class='answer'>C. " +
        answersArray[counter][2] + "</h3><h3 class='answer'>D. " + answersArray[counter][3] + "</h3>";
    $(".gameDiv").html(gameHTML);
};

function correctAnswer() {
    correctNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>Correct! The answer is: " +
        correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function wrongAnswer() {
    incorrectNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>Incorrect! The answer is: " +
        correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function questionTimeout() {
    notAnsweredNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>You ran out of time!</h3>" +
        "<h3>The correct answer is: " + correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function endOfGame() {
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>All done, here's how you did!</h3>" +
        "<h3 class='summary-correct'>Correct Answers: " + correctNum +
        "</h3><h3>Wrong Answers: " + incorrectNum + "</h3><h3>Unanswered: " +
        notAnsweredNum + "</h3>";
    $(".gameDiv").html(gameHTML);
}

function wait() {
    if (counter < 2) {
        counter++;
        generateHTML();
        clock();
    } else {
        endOfGame();
    }
}

var questionsArray = [
    "A Wild Fig tree in South Africa has roots reaching how many feet deep, making it the deepest in the world?",
    "Which has been most recently observed as the world's fastest growing tree?",
    "Which of these species of trees has poisonous bark and sap?"

];
var answersArray = [
    ["80", "150", "400", "600"],
    ["Sequoia", "Russian Olive", "Chestnut", "Albizia"],
    ["Manchineel", "Honeylocust", "Dogwood", "Crabapple"],
];
var correctArray = [
    "B. 150",
    "D. Albizia",
    "A. Manchineel"
];
var correctNum = 0;
var incorrectNum = 0;
var notAnsweredNum = 0;
var counter = 0;
var time = 0;
var timerCounter = 30;
