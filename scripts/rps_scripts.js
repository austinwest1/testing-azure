"use strict";

//build game 1
var game1Button = document.getElementById("game1");
game1Button.onmousedown = buildGame1;

//build game 2
var game2Button = document.getElementById("game2");
game2Button.onmousedown = buildGame2;

//build game 3
var game3Button = document.getElementById("game3");
game3Button.onmousedown = buildGame3;

//stores cpu choice
var cpuChoice = getCpuChoice();

//counts number of wins in game 1
var game1Wins = 0;
var game1CPUwins = 0;
var gameCount = 0;

//counts number of wins in game 2
var game2Wins = 0;
var game2CPUwins = 0;

//game 3 wins
var game3Wins = 0;
var game3CPUwins = 0;

var balance = 100;
var betAmt = 0;

var midCol;

var strat;  //strategy in order to win

var styles;

var CPURockAmount = 2;
var CPUPaperAmount = 0;
var CPUScissorsAmount = 0;

function rpsGame1() {
    midCol = "<h1>Wins: " + game1Wins + "</h1>";
    midCol += "<h1>CPU Wins: " + game1CPUwins + "</h1>"


    //displays number of wins
    document.getElementById("col2").innerHTML = midCol;

    var choices = document.getElementsByClassName("userButtons");
    for (var i = 0; i < choices.length; i++) {
        choices[i].onclick = setBackground;
    }

    for (var i = 0; i < choices.length; i++) {
        choices[i].onclick = getResults;
    }

    if (gameCount === 5) {
        if (game1Wins > game1CPUwins) {
            alert("You Win!")
        }
        else {
            alert("CPU Wins!");
        }
    }
}

function rpsGame2() {
    midCol = "<h1>Wins: " + game2Wins + "</h1>";
    midCol += "<h1>CPU Wins: " + game2CPUwins + "</h1><br />"
    midCol += "<h1 id='strat'>" + strat + " in order to win</h1>";
    midCol += "<div id='col2-1'></div>";

    //displays number of wins
    document.getElementById("col2").innerHTML = midCol;

    if (cpuChoice === "rockButton") {
        styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpuRockButton { \
                border: 2px solid rgba(255, 0, 0, 0.7); \
             }", 0);
    }
    else if (cpuChoice === "paperButton") {
        styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpuPaperButton { \
                border: 2px solid rgba(255, 0, 0, 0.7); \
             }", 0);
    }
    else if (cpuChoice === "scissorsButton") {
        styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpuScissorsButton { \
                border: 2px solid rgba(255, 0, 0, 0.7); \
             }", 0);
    }

    var choices = document.getElementsByClassName("userButtons2");
    for (var i = 0; choices.length; i++) {
        choices[i].onclick = getResults2;
    }
}

function rpsGame3() {
    midCol = "<div id='col2-1'></div>";
    midCol += "<h2>Wins: " + game3Wins + "</h2>";
    midCol += "<h2>CPU Wins: " + game3CPUwins + "</h2><br />"
    midCol += "<h1>Balance: $" + balance + "</h1>"

    var check = checkCPUGuess(cpuChoice);

    midCol += "<h2>How much would you like to bet?</h2> \
                <input type='button' class='betButtons' id='10button', value='$10' /> \
                <input type='button' class='betButtons' id='20button', value='$20' /> \
                <input type='button' class='betButtons' id='50button', value='$50' /> \
                <input type='button' class='betButtons' id='100button', value='$100' />";

    document.getElementById("col2").innerHTML = midCol;

    var betButtons = document.getElementsByClassName("betButtons");
    for (var i = 0; i < betButtons.length; i++) {
        betButtons[i].onclick = function (e) {
            if (e.target.id === "10button") {
                betAmt = 10;
                midCol += "<h1>Betting: $" + betAmt + "</h1>";
                document.getElementById("col2").innerHTML = midCol;
            }
            else if (e.target.id === "20button") {
                betAmt = 20;
                midCol += "<h1>Betting: $" + betAmt + "</h1>";
                document.getElementById("col2").innerHTML = midCol;
            }
            else if (e.target.id === "50button") {
                betAmt = 50;
                midCol += "<h1>Betting: $" + betAmt + "</h1>";
                document.getElementById("col2").innerHTML = midCol;
            }
            else if (e.target.id === "100button") {
                betAmt = 100;
                midCol += "<h1>Betting: $" + betAmt + "</h1>";
                document.getElementById("col2").innerHTML = midCol;
            }
        };
    }

    var choices = document.getElementsByClassName("userButtons3");
    for (var i = 0; choices.length; i++) {
        choices[i].onclick = getResults3;
    }
}

function checkCPUGuess(cpuGuess) {

    if (cpuGuess === "rockButton" && CPURockAmount === 2) {
        return cpuGuess;
        rpsGame3();
    }
    else if (cpuGuess === "paperButton" && CPUPaperAmount === 2) {
        return cpuGuess;
        rpsGame3();
    }
    else if (cpuGuess === "scissorsButton" && CPUScissorsAmount === 2) {
        return cpuGuess;
        rpsGame3();
    }
}

function timer() {
    var time = new Date().getTime() + 60000
    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = time - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
    }, 1000);
}


function setBackground(e) {
    var styles = document.createElement("style");
    document.head.appendChild(styles);
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "input#" + e.target.id + "{ \
                border: 2px solid rgba(255, 0, 0, 0.7); \
            }", 0);
}

function getResults(e) {
    //round is a tie
    if (e.target.id === cpuChoice) {
        document.getElementById("col2").innerHTML = "<h1>It's a Tie!</h1><input type='button' id='nextRound' value='Next Round' />";

        var styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpu" + cpuChoice + "{ \
                    border: 2px solid rgba(255, 0, 0, 0.7); \
                }", 0);

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame1();
        }

        getCpuChoice();     //gets a new cpu choice
    }
    //user wins
    else if (e.target.id === "rockButton" && cpuChoice === "scissorsButton" || e.target.id === "paperButton" && cpuChoice === "rockButton" ||
        e.target.id === "scissorsButton" && cpuChoice === "paperButton") {
        game1Wins++;
        gameCount++;
        document.getElementById("col2").innerHTML = "<h1>You Win!</h1><input type='button' id='nextRound' value='Next Round' />";
        // document.getElementById("col2").innerHTML = "<h1>Wins: " + wins + "</h1>";

        var styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpu" + cpuChoice + "{ \
                    border: 2px solid rgba(255, 0, 0, 0.7); \
                }", 0);

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame1();
        }

        getCpuChoice();
    }
    //CPU wins
    else {
        game1CPUwins++;
        gameCount++;
        document.getElementById("col2").innerHTML = "<h1>You Lose!</h1><input type='button' id='nextRound' value='Next Round' />";

        var styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpu" + cpuChoice + "{ \
                    border: 2px solid rgba(255, 0, 0, 0.7); \
                }", 0);

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame1();
        }

        getCpuChoice();
    }
}

function getResults2(e) {
    //lose case WIN
    if (strat === "lose" && cpuChoice === "rockButton" && e.target.id === "scissorsButton" ||
        strat === "lose" && cpuChoice === "paperButton" && e.target.id === "rockButton" ||
        strat === "lose" && cpuChoice === "scissorsButton" && e.target.id === "paperButton") {
        game2Wins++;
        document.getElementById("col2").innerHTML = "<h1>You Win!</h1><input type='button' id='nextRound' value='Next Round' />";

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame2();
        }
        getCpuChoice();
    }
    //tie case WIN
    else if (strat === "tie" && cpuChoice === "rockButton" && e.target.id === "rockButton" ||
        strat === "tie" && cpuChoice === "paperButton" && e.target.id === "paperButton" ||
        strat === "tie" && cpuChoice === "scissorsButton" && e.target.id === "scissorsButton") {
        game2Wins++;
        document.getElementById("col2").innerHTML = "<h1>You Win!</h1><input type='button' id='nextRound' value='Next Round' />";

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame2();
        }
        getCpuChoice();
    }
    //win case WIN
    else if (strat === "win" && cpuChoice === "rockButton" && e.target.id === "paperButton" ||
        strat === "win" && cpuChoice === "paperButton" && e.target.id === "scissorsButton" ||
        strat === "win" && cpuChoice === "scissorsButton" && e.target.id === "rockButton") {
        game2Wins++;
        document.getElementById("col2").innerHTML = "<h1>You Win!</h1><input type='button' id='nextRound' value='Next Round' />";

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame2();
        }
        getCpuChoice();
    }
    //lose case LOSE
    else if (strat === "lose" && cpuChoice === "rockButton" && (e.target.id === "paperButton" || e.target.id === "rockButton") ||
        strat === "lose" && cpuChoice === "paperButton" && (e.target.id === "scissorsButton" || e.target.id === "paperButton") ||
        strat === "lose" && cpuChoice === "scissorsButton" && (e.target.id === "rockButton" || e.target.id === "scissorsButton")) {
        game2CPUwins++;
        document.getElementById("col2").innerHTML = "<h1>You Lose!</h1><input type='button' id='nextRound' value='Next Round' />";

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame2();
        }
        getCpuChoice();
    }
    //tie case LOSE
    else if (strat === "tie" && cpuChoice === "rockButton" && (e.target.id === "paperButton" || e.target.id === "scissorsButton") ||
        strat === "tie" && cpuChoice === "paperButton" && (e.target.id === "rockButton" || e.target.id === "scissorsButton") ||
        strat === "tie" && cpuChoice === "scissorsButton" && (e.target.id === "rockButton" || e.target.id === "paperButton")) {
        game2CPUwins++;
        document.getElementById("col2").innerHTML = "<h1>You Lose!</h1><input type='button' id='nextRound' value='Next Round' />";

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame2();
        }
        getCpuChoice();
    }
    //win case LOSE
    else if (strat === "win" && cpuChoice === "rockButton" && (e.target.id === "scissorsButton" || e.target.id === "rockButton") ||
        strat === "win" && cpuChoice === "paperButton" && (e.target.id === "rockButton" || e.target.id === "paperButton") ||
        strat === "win" && cpuChoice === "scissorsButton" && (e.target.id === "paperButton" || e.target.id === "scissorsButton")) {
        game2CPUwins++;
        document.getElementById("col2").innerHTML = "<h1>You Lose!</h1><input type='button' id='nextRound' value='Next Round' />";

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame2();
        }
        getCpuChoice();
    }
}

function getResults3(e) {
    //round is a tie
    if (e.target.id === cpuChoice) {
        document.getElementById("col2").innerHTML = "<h1>It's a Tie!</h1><input type='button' id='nextRound' value='Next Round' />";

        var styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpu" + cpuChoice + "{ \
                    border: 2px solid rgba(255, 0, 0, 0.7); \
                }", 0);

        alert("Bet amount is doubled!");
        betAmt *= 2;

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame3();
        }

        getCpuChoice();     //gets a new cpu choice
    }
    //user wins
    else if (e.target.id === "rockButton" && cpuChoice === "scissorsButton" || e.target.id === "paperButton" && cpuChoice === "rockButton" ||
        e.target.id === "scissorsButton" && cpuChoice === "paperButton") {
        game3Wins++;
        gameCount++;
        document.getElementById("col2").innerHTML = "<h1>You Win!</h1><input type='button' id='nextRound' value='Next Round' />";
        // document.getElementById("col2").innerHTML = "<h1>Wins: " + wins + "</h1>";

        var styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpu" + cpuChoice + "{ \
                    border: 2px solid rgba(255, 0, 0, 0.7); \
                }", 0);

        balance += betAmt;

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame3();
        }

        getCpuChoice();
    }
    //CPU wins
    else {
        game3CPUwins++;
        gameCount++;
        document.getElementById("col2").innerHTML = "<h1>You Lose!</h1><input type='button' id='nextRound' value='Next Round' />";

        var styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length - 1].insertRule(
            "input#cpu" + cpuChoice + "{ \
                    border: 2px solid rgba(255, 0, 0, 0.7); \
                }", 0);

        balance -= betAmt;
        if (balance <= 0) {
            alert("You're out of money!");
            return;
        }

        document.getElementById("nextRound").onclick = function () {
            resetGame(styles);
            rpsGame3();
        }

        getCpuChoice();
    }
}


function getCpuChoice() {
    var cpuNum = Math.random();

    if (cpuNum < 0.33) {
        cpuChoice = "rockButton";
        CPURockAmount++;
    }
    else if (cpuNum <= 0.67 && cpuNum >= 0.33) {
        cpuChoice = "paperButton";
        CPUPaperAmount++;
    }
    else if (cpuNum > 0.67) {
        cpuChoice = "scissorsButton";
        CPUScissorsAmount++;
    }

    var stratNum = Math.random();
    if (stratNum < 0.33) {
        strat = "lose";
    }
    else if (stratNum <= 0.67 && stratNum >= 0.33) {
        strat = "win";
    }
    else {
        strat = "tie";
    }

    return cpuChoice;
}

function resetGame(styles) {
    //removes the style sheet created to outline in red
    styles.remove();
}

function buildGame1() {
    var HTMLString1 = "<div id='divHead'><h1>CPU</h1></div> \
    <input type='image' class='buttons' id='cpurockButton' src='images/rock.jpg' /> \
    <input type='image' class='buttons' id='cpupaperButton' src='images/paper.jpg' /> \
    <input type='image' class='buttons' id='cpuscissorsButton' src='images/scissors.jpg' />";
    document.getElementById("col1").innerHTML = HTMLString1;

    var HTMLString2 = "<div id='divHead'><h1>YOU</h1></div> \
    <input type='image' class='userButtons' id='rockButton' src='images/rock.jpg' /> \
    <input type='image' class='userButtons' id='paperButton' src='images/paper.jpg' /> \
    <input type='image' class='userButtons' id='scissorsButton' src='images/scissors.jpg' />";
    document.getElementById("col3").innerHTML = HTMLString2;

    // resetGame();
    rpsGame1();
}

function buildGame2() {
    var HTMLString1 = "<div id='divHead'><h1>CPU</h1></div> \
    <input type='image' class='buttons' id='cpuRockButton' src='images/rock.jpg' /> \
    <input type='image' class='buttons' id='cpuPaperButton' src='images/paper.jpg' /> \
    <input type='image' class='buttons' id='cpuScissorsButton' src='images/scissors.jpg' />";
    document.getElementById("col1").innerHTML = HTMLString1;

    var HTMLString2 = "<div id='divHead'><h1>YOU</h1></div> \
    <input type='image' class='userButtons2' id='rockButton' src='images/rock.jpg' /> \
    <input type='image' class='userButtons2' id='paperButton' src='images/paper.jpg' /> \
    <input type='image' class='userButtons2' id='scissorsButton' src='images/scissors.jpg' />";
    document.getElementById("col3").innerHTML = HTMLString2;

    //clears the scoreboard
    midCol = "";
    document.getElementById("col2").innerHTML = midCol;
    game2Wins = 0;
    game2CPUwins = 0;

    var stratNum = Math.random();
    if (stratNum < 0.33) {
        strat = "lose";
    }
    else if (stratNum <= 0.67 && stratNum >= 0.33) {
        strat = "win";
    }
    else {
        strat = "tie";
    }

    //45 second countdown clock
    var count = 45, timer = setInterval(function () {
        document.getElementById("col2-1").innerHTML = "<h1>" + count-- + "</h1>";
        if (count < -1) {
            clearInterval(timer);
            alert("Time's Up! How many did you get?");
            document.getElementById("col2-1").innerHTML = "<input type='button' id='playAgain' value='Play Again?' />"
            document.getElementById("playAgain").onclick = buildGame2;
        }
    }, 1000);
    rpsGame2();
}

function buildGame3() {
    var HTMLString1 = "<div id='divHead'><h1>CPU</h1></div> \
    <input type='image' class='buttons' id='cpuRockButton' src='images/rock.jpg' /> \
    <input type='image' class='buttons' id='cpuPaperButton' src='images/paper.jpg' /> \
    <input type='image' class='buttons' id='cpuScissorsButton' src='images/scissors.jpg' />";
    document.getElementById("col1").innerHTML = HTMLString1;

    var HTMLString2 = "<div id='divHead'><h1>YOU</h1></div> \
    <input type='image' class='userButtons3' id='rockButton' src='images/rock.jpg' /> \
    <input type='image' class='userButtons3' id='paperButton' src='images/paper.jpg' /> \
    <input type='image' class='userButtons3' id='scissorsButton' src='images/scissors.jpg' />";
    document.getElementById("col3").innerHTML = HTMLString2;

    //clears the scoreboard
    midCol = "";
    document.getElementById("col2").innerHTML = midCol;
    game2Wins = 0;
    game2CPUwins = 0;

    rpsGame3();
}
