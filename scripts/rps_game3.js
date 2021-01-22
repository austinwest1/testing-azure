"use strict";

function rpsGame3() {

    midCol = "<div id='col2-1'>hi</div>";

    //displays number of wins


    var cpuChoice = getCpuChoice();
    checkCPUGuess();

    midCol += cpuChoice;
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

    var choices = document.getElementsByClassName("userButtons3");
    for (var i = 0; choices.length; i++) {
        choices[i].onclick = getResults;
    }

}