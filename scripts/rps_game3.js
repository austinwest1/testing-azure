"use strict";

function rpsGame3()
{
    // midCol = "<h1>Wins: " + game2Wins + "</h1>";
    // midCol += "<h1>CPU Wins: " + game2CPUwins + "</h1><br />"
    midCol =  "<div id='col2-1'>hi</div>";

    //displays number of wins


    // var CPUThrows = ["rockButton", "rockButton", "rockButton", 
    //                 "paperButton", "paperButton", "paperButton", 
    //                 "scissorsButton", "scissorsButton", "scissorsButton"];

    // var CPUGuess = Math.floor(Math.random() * 9);

    var cpuChoice = getCpuChoice();
    checkCPUGuess();

    midCol += cpuChoice;
    document.getElementById("col2").innerHTML = midCol;

    if (cpuChoice === "rockButton")
    {
        styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length-1].insertRule(
             "input#cpuRockButton { \
                border: 2px solid rgba(255, 0, 0, 0.7); \
             }", 0);
    }
    else if (cpuChoice === "paperButton")
    {
        styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length-1].insertRule(
             "input#cpuPaperButton { \
                border: 2px solid rgba(255, 0, 0, 0.7); \
             }", 0);
    }
    else if (cpuChoice === "scissorsButton")
    {
        styles = document.createElement("style");
        document.head.appendChild(styles);
        document.styleSheets[document.styleSheets.length-1].insertRule(
             "input#cpuScissorsButton { \
                border: 2px solid rgba(255, 0, 0, 0.7); \
             }", 0);
    }

    var choices = document.getElementsByClassName("userButtons3");
    for (var i = 0; choices.length; i++)
    {
        choices[i].onclick = getResults;
    }
    
    // for (var i = 0; i < 10; i++)
    // {

    // }
}