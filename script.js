var cpuwin = ["0", "0", "0"];
var playerwin = ["x", "x", "x"];
var line0 = [1, 1, 1];
var line1 = [1, 1, 1];
var line2 = [1, 1, 1];
var line3 = [1, 1, 1];
var line4 = [1, 1, 1];
var line5 = [1, 1, 1];
var line6 = [1, 1, 1];
var line7 = [1, 1, 1];
var square0 = 1;
var square1 = 1;
var square2 = 1;
var square3 = 1;
var square4 = 1;
var square5 = 1;
var square6 = 1;
var square7 = 1;
var square8 = 1;
var randomsquare = 100;
var playermoves = [];
var cpumoves = [];


function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function cpumove() {
    randomsquare = Math.floor(Math.random() * 8);
    if ((cpumoves.length == 0) && (square4 == 1)) {document.getElementById("04").textContent=["0"];
    line1.splice(1, 1, "0");
    line4.splice(1, 1, "0");
    line6.splice(1, 1, "0");
    line7.splice(1, 1, "0");
    square4 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 0) && (square0 == 1)) {document.getElementById("00").textContent=["0"];
    line0.splice(0, 1, "0");
    line3.splice(0, 1, "0");
    line6.splice(0, 1, "0");
    square0 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 1) && (square1 == 1)) {document.getElementById("01").textContent=["0"];
    line0.splice(1, 1, "0");
    line4.splice(0, 1, "0");
    square1 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 2) && (square2 == 1)) {document.getElementById("02").textContent=["0"];
    line0.splice(2, 1, "0");
    line5.splice(0, 1, "0");
    line7.splice(0, 1, "0");
    square2 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 3) && (square3 == 1)) {document.getElementById("03").textContent=["0"];
    line1.splice(0, 1, "0");
    line3.splice(1, 1, "0");
    square3 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 4) && (square4 == 1)) {document.getElementById("04").textContent=["0"];
    line1.splice(1, 1, "0");
    line4.splice(1, 1, "0");
    line6.splice(1, 1, "0");
    line7.splice(1, 1, "0");
    square4 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 5) && (square5 == 1)) {document.getElementById("05").textContent=["0"];
    line1.splice(2, 1, "0");
    line5.splice(1, 1, "0");
    square5 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 6) && (square6 == 1)) {document.getElementById("06").textContent=["0"];
    line3.splice(2, 1, "0");
    line2.splice(0, 1, "0");
    line7.splice(2, 1, "0");
    square6 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 7) && (square7 == 1)) {document.getElementById("07").textContent=["0"];
    line2.splice(1, 1, "0");
    line4.splice(2, 1, "0");
    square7 = "0";
    cpumoves.push("1");
    three();}
    else if ((randomsquare == 8) && (square8 == 1)) {document.getElementById("08").textContent=["0"];
    line5.splice(2, 1, "0");
    line2.splice(2, 1, "0");
    line6.splice(2, 1, "0");
    square8 = "0";
    cpumoves.push("1");
    three();}
    else cpumove();

}

function three() {
    if (arraysEqual(line0, playerwin)) {document.getElementById("test").textContent=["win!"];}
    else if (arraysEqual(line1, playerwin)) {document.getElementById("test").textContent=["win!"];}
    else if (arraysEqual(line2, playerwin)) {document.getElementById("test").textContent=["win!"];}
    else if (arraysEqual(line3, playerwin)) {document.getElementById("test").textContent=["win!"];}
    else if (arraysEqual(line4, playerwin)) {document.getElementById("test").textContent=["win!"];}
    else if (arraysEqual(line5, playerwin)) {document.getElementById("test").textContent=["win!"];}
    else if (arraysEqual(line6, playerwin)) {document.getElementById("test").textContent=["win!"];}
    else if (arraysEqual(line7, playerwin)) {document.getElementById("test").textContent=["win!"];}
    else if (arraysEqual(line0, cpuwin)) {document.getElementById("test").textContent=["lose!"];}
    else if (arraysEqual(line1, cpuwin)) {document.getElementById("test").textContent=["lose!"];}
    else if (arraysEqual(line2, cpuwin)) {document.getElementById("test").textContent=["lose!"];}
    else if (arraysEqual(line3, cpuwin)) {document.getElementById("test").textContent=["lose!"];}
    else if (arraysEqual(line4, cpuwin)) {document.getElementById("test").textContent=["lose!"];}
    else if (arraysEqual(line5, cpuwin)) {document.getElementById("test").textContent=["lose!"];}
    else if (arraysEqual(line6, cpuwin)) {document.getElementById("test").textContent=["lose!"];}
    else if (arraysEqual(line7, cpuwin)) {document.getElementById("test").textContent=["lose!"];}
}

document.getElementById("00").onclick = function playermoved0() {
    document.getElementById("00").textContent=["x"];
    line0.splice(0, 1, "x");
    line3.splice(0, 1, "x");
    line6.splice(0, 1, "x");
    square0 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };

document.getElementById("01").onclick = function playermoved1() {
    document.getElementById("01").textContent=["x"];
    line0.splice(1, 1, "x");
    line4.splice(0, 1, "x");
    square1 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };

document.getElementById("02").onclick = function playermoved2() {
    document.getElementById("02").textContent=["x"];
    line0.splice(2, 1, "x");
    line5.splice(0, 1, "x");
    line7.splice(0, 1, "x");
    square2 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };

document.getElementById("03").onclick = function playermoved3() {
    document.getElementById("03").textContent=["x"];
    line1.splice(0, 1, "x");
    line3.splice(1, 1, "x");
    square3 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };

document.getElementById("04").onclick = function playermoved4() {
    document.getElementById("04").textContent=["x"];
    line1.splice(1, 1, "x");
    line4.splice(1, 1, "x");
    line6.splice(1, 1, "x");
    line7.splice(1, 1, "x");
    square4 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };

document.getElementById("05").onclick = function playermoved5() {
    document.getElementById("05").textContent=["x"];
    line1.splice(2, 1, "x");
    line5.splice(1, 1, "x");
    square5 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };

document.getElementById("06").onclick = function playermoved6() {
    document.getElementById("06").textContent=["x"];
    line3.splice(2, 1, "x");
    line2.splice(0, 1, "x");
    line7.splice(2, 1, "x");
    square6 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };

document.getElementById("07").onclick = function playermoved7() {
    document.getElementById("07").textContent=["x"];
    line2.splice(1, 1, "x");
    line4.splice(2, 1, "x");
    square7 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };

document.getElementById("08").onclick = function playermoved8() {
    document.getElementById("08").textContent=["x"];
    line5.splice(2, 1, "x");
    line2.splice(2, 1, "x");
    line6.splice(2, 1, "x");
    square8 = "x";
    three();
    cpumove();
    playermoves.push("1");
    };


