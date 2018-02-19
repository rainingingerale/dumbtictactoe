var cpuwin = ["o", "o", "o"];
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
var end = 0;
var block1 = [1, "x", "x"];
var block2 = ["x", 1, "x"];
var block3 = ["x", "x", 1];

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function tie() {
    if((playermoves.length + cpumoves.length) == 9){
    document.getElementById("test").textContent=["Tie game!"]
    var end = 1;
    };
}

function cpumove() {

    randomsquare = Math.floor(Math.random() * 8); // randomly pick a square
    if((playermoves.length + cpumoves.length) == 9) end = 1;
    else if (end == 1) return; // if game has ended STOP

    else if ((cpumoves.length == 0) && (square4 == 1)) {document.getElementById("s04").textContent=["o"];
    line1.splice(1, 1, "o");
    line4.splice(1, 1, "o");
    line6.splice(1, 1, "o");
    line7.splice(1, 1, "o");
    square4 = "o";
    cpumoves.push("1");
    three();
    tie();}

    // will the computer block line 0?
    else if (arraysEqual(line0, block1))  {document.getElementById("s00").textContent=["o"];
    line0.splice(0, 1, "o");
    line3.splice(0, 1, "o");
    line6.splice(0, 1, "o");
    square0 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line0, block2))  {document.getElementById("s01").textContent=["o"];
    line0.splice(1, 1, "o");
    line4.splice(0, 1, "o");
    square1 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line0, block3))  {document.getElementById("s02").textContent=["o"];
    line0.splice(2, 1, "o");
    line5.splice(0, 1, "o");
    line7.splice(0, 1, "o");
    square2 = "o";
    cpumoves.push("1");
    three();
    tie();}

    // will the computer block line 1?
    else if (arraysEqual(line1, block1))  {document.getElementById("s03").textContent=["o"];
    line1.splice(0, 1, "o");
    line3.splice(1, 1, "o");
    square3 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line1, block2))  {document.getElementById("s04").textContent=["o"];
    line1.splice(1, 1, "o");
    line4.splice(1, 1, "o");
    line6.splice(1, 1, "o");
    line7.splice(1, 1, "o");
    square4 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line1, block3))  {document.getElementById("s05").textContent=["o"];
    line1.splice(2, 1, "o");
    line5.splice(1, 1, "o");
    square5 = "o";
    cpumoves.push("1");
    three();
    tie();}

    // will the computer block line 2?
    else if (arraysEqual(line2, block1))  {document.getElementById("s06").textContent=["o"];
    line3.splice(2, 1, "o");
    line2.splice(0, 1, "o");
    line7.splice(2, 1, "o");
    square6 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line2, block2))  {document.getElementById("s07").textContent=["o"];
    line2.splice(1, 1, "o");
    line4.splice(2, 1, "o");
    square7 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line2, block3))  {document.getElementById("s08").textContent=["o"];
    line5.splice(2, 1, "o");
    line2.splice(2, 1, "o");
    line6.splice(2, 1, "o");
    square8 = "o";
    cpumoves.push("1");
    three();
    tie();}

    // will the computer block line 3?
    else if (arraysEqual(line3, block1))  {document.getElementById("s00").textContent=["o"];
    line0.splice(0, 1, "o");
    line3.splice(0, 1, "o");
    line6.splice(0, 1, "o");
    square0 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line3, block2))  {document.getElementById("s03").textContent=["o"];
    line1.splice(0, 1, "o");
    line3.splice(1, 1, "o");
    square3 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line3, block3))  {document.getElementById("s06").textContent=["o"];
    line3.splice(2, 1, "o");
    line2.splice(0, 1, "o");
    line7.splice(2, 1, "o");
    square6 = "o";
    cpumoves.push("1");
    three();
    tie();}

    // will the computer block line 4?
    else if (arraysEqual(line4, block1))  {document.getElementById("s01").textContent=["o"];
    line0.splice(1, 1, "o");
    line4.splice(0, 1, "o");
    square1 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line4, block2))  {document.getElementById("s04").textContent=["o"];
    line1.splice(1, 1, "o");
    line4.splice(1, 1, "o");
    line6.splice(1, 1, "o");
    line7.splice(1, 1, "o");
    square4 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line4, block3))  {document.getElementById("s07").textContent=["o"];
    line2.splice(1, 1, "o");
    line4.splice(2, 1, "o");
    square7 = "o";
    cpumoves.push("1");
    three();
    tie();}

    // will the computer block line 5?
    else if (arraysEqual(line5, block1))  {document.getElementById("s02").textContent=["o"];
    line0.splice(2, 1, "o");
    line5.splice(0, 1, "o");
    line7.splice(0, 1, "o");
    square2 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line5, block2))  {document.getElementById("s05").textContent=["o"];
    line1.splice(2, 1, "o");
    line5.splice(1, 1, "o");
    square5 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line5, block3))  {document.getElementById("s08").textContent=["o"];
    line5.splice(2, 1, "o");
    line2.splice(2, 1, "o");
    line6.splice(2, 1, "o");
    square8 = "o";
    cpumoves.push("1");
    three();
    tie();}

    // will the computer block line 6?
    else if (arraysEqual(line6, block1))  {document.getElementById("s00").textContent=["o"];
    line0.splice(0, 1, "o");
    line3.splice(0, 1, "o");
    line6.splice(0, 1, "o");
    square0 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line6, block2))  {document.getElementById("s04").textContent=["o"];
    line1.splice(1, 1, "o");
    line4.splice(1, 1, "o");
    line6.splice(1, 1, "o");
    line7.splice(1, 1, "o");
    square4 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line6, block3))  {document.getElementById("s08").textContent=["o"];
    line5.splice(2, 1, "o");
    line2.splice(2, 1, "o");
    line6.splice(2, 1, "o");
    square8 = "o";
    cpumoves.push("1");
    three();
    tie();}

    // will the computer block line 7?
    else if (arraysEqual(line7, block1))  {document.getElementById("s02").textContent=["o"];
    line0.splice(2, 1, "o");
    line5.splice(0, 1, "o");
    line7.splice(0, 1, "o");
    square2 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line7, block2))  {document.getElementById("s04").textContent=["o"];
    line1.splice(1, 1, "o");
    line4.splice(1, 1, "o");
    line6.splice(1, 1, "o");
    line7.splice(1, 1, "o");
    square4 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if (arraysEqual(line7, block3))  {document.getElementById("s06").textContent=["o"];
    line3.splice(2, 1, "o");
    line2.splice(0, 1, "o");
    line7.splice(2, 1, "o");
    square6 = "o";
    cpumoves.push("1");
    three();
    tie();}

    else if ((randomsquare == 0) && (square0 == 1)) {document.getElementById("s00").textContent=["o"];
    line0.splice(0, 1, "o");
    line3.splice(0, 1, "o");
    line6.splice(0, 1, "o");
    square0 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((randomsquare == 1) && (square1 == 1)) {document.getElementById("s01").textContent=["o"];
    line0.splice(1, 1, "o");
    line4.splice(0, 1, "o");
    square1 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((randomsquare == 2) && (square2 == 1)) {document.getElementById("s02").textContent=["o"];
    line0.splice(2, 1, "o");
    line5.splice(0, 1, "o");
    line7.splice(0, 1, "o");
    square2 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((randomsquare == 3) && (square3 == 1)) {document.getElementById("s03").textContent=["o"];
    line1.splice(0, 1, "o");
    line3.splice(1, 1, "o");
    square3 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((randomsquare == 4) && (square4 == 1)) {document.getElementById("s04").textContent=["o"];
    line1.splice(1, 1, "o");
    line4.splice(1, 1, "o");
    line6.splice(1, 1, "o");
    line7.splice(1, 1, "o");
    square4 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((randomsquare == 5) && (square5 == 1)) {document.getElementById("s05").textContent=["o"];
    line1.splice(2, 1, "o");
    line5.splice(1, 1, "o");
    square5 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((randomsquare == 6) && (square6 == 1)) {document.getElementById("s06").textContent=["o"];
    line3.splice(2, 1, "o");
    line2.splice(0, 1, "o");
    line7.splice(2, 1, "o");
    square6 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((randomsquare == 7) && (square7 == 1)) {document.getElementById("s07").textContent=["o"];
    line2.splice(1, 1, "o");
    line4.splice(2, 1, "o");
    square7 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((randomsquare == 8) && (square8 == 1)) {document.getElementById("s08").textContent=["o"];
    line5.splice(2, 1, "o");
    line2.splice(2, 1, "o");
    line6.splice(2, 1, "o");
    square8 = "o";
    cpumoves.push("1");
    three();
    tie();}
    else if ((square0 != 1) &&
             (square1 != 1) &&
             (square2 != 1) &&
             (square3 != 1) &&
             (square4 != 1) &&
             (square5 != 1) &&
             (square6 != 1) &&
             (square7 != 1) &&
             (square8 != 1))
             return;

    else cpumove();

}

function three() {
    if (arraysEqual(line0, playerwin)) {document.getElementById("test").textContent=["You win!"];
    end = 1;}
    else if (arraysEqual(line1, playerwin)) {document.getElementById("test").textContent=["You win!"];
    end = 1;}
    else if (arraysEqual(line2, playerwin)) {document.getElementById("test").textContent=["You win!"];
    end = 1;}
    else if (arraysEqual(line3, playerwin)) {document.getElementById("test").textContent=["You win!"];
    end = 1;}
    else if (arraysEqual(line4, playerwin)) {document.getElementById("test").textContent=["You win!"];
    end = 1;}
    else if (arraysEqual(line5, playerwin)) {document.getElementById("test").textContent=["You win!"];
    end = 1;}
    else if (arraysEqual(line6, playerwin)) {document.getElementById("test").textContent=["You win!"];
    end = 1;}
    else if (arraysEqual(line7, playerwin)) {document.getElementById("test").textContent=["You win!"];
    end = 1;}
    else if (arraysEqual(line0, cpuwin)) {document.getElementById("test").textContent=["You lose!"];
    end = 1;}
    else if (arraysEqual(line1, cpuwin)) {document.getElementById("test").textContent=["You lose!"];
    end = 1;}
    else if (arraysEqual(line2, cpuwin)) {document.getElementById("test").textContent=["You lose!"];
    end = 1;}
    else if (arraysEqual(line3, cpuwin)) {document.getElementById("test").textContent=["You lose!"];
    end = 1;}
    else if (arraysEqual(line4, cpuwin)) {document.getElementById("test").textContent=["You lose!"];
    end = 1;}
    else if (arraysEqual(line5, cpuwin)) {document.getElementById("test").textContent=["You lose!"];
    end = 1;}
    else if (arraysEqual(line6, cpuwin)) {document.getElementById("test").textContent=["You lose!"];
    end = 1;}
    else if (arraysEqual(line7, cpuwin)) {document.getElementById("test").textContent=["You lose!"];
    end = 1;}
}

document.getElementById("s00").onclick = function playermoved0() {
    if (end == 1) return;
    if (square0 != 1) return;
    else
    document.getElementById("s00").textContent=["x"];
    line0.splice(0, 1, "x");
    line3.splice(0, 1, "x");
    line6.splice(0, 1, "x");
    square0 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };

document.getElementById("s01").onclick = function playermoved1() {
    if (end == 1) return;
    if (square1 != 1) return;
    else
    document.getElementById("s01").textContent=["x"];
    line0.splice(1, 1, "x");
    line4.splice(0, 1, "x");
    square1 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };

document.getElementById("s02").onclick = function playermoved2() {
    if (end == 1) return;
    if (square2 != 1) return;
    else
    document.getElementById("s02").textContent=["x"];
    line0.splice(2, 1, "x");
    line5.splice(0, 1, "x");
    line7.splice(0, 1, "x");
    square2 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };

document.getElementById("s03").onclick = function playermoved3() {
    if (end == 1) return;
    if (square3 != 1) return;
    else
    document.getElementById("s03").textContent=["x"];
    line1.splice(0, 1, "x");
    line3.splice(1, 1, "x");
    square3 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };

document.getElementById("s04").onclick = function playermoved4() {
    if (end == 1) return;
    if (square4 != 1) return;
    else
    document.getElementById("s04").textContent=["x"];
    line1.splice(1, 1, "x");
    line4.splice(1, 1, "x");
    line6.splice(1, 1, "x");
    line7.splice(1, 1, "x");
    square4 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };

document.getElementById("s05").onclick = function playermoved5() {
    if (end == 1) return;
    if (square5 != 1) return;
    else
    document.getElementById("s05").textContent=["x"];
    line1.splice(2, 1, "x");
    line5.splice(1, 1, "x");
    square5 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };

document.getElementById("s06").onclick = function playermoved6() {
    if (end == 1) return;
    if (square6 != 1) return;
    else
    document.getElementById("s06").textContent=["x"];
    line3.splice(2, 1, "x");
    line2.splice(0, 1, "x");
    line7.splice(2, 1, "x");
    square6 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };

document.getElementById("s07").onclick = function playermoved7() {
    if (end == 1) return;
    if (square7 != 1) return;
    else
    document.getElementById("s07").textContent=["x"];
    line2.splice(1, 1, "x");
    line4.splice(2, 1, "x");
    square7 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };

document.getElementById("s08").onclick = function playermoved8() {
    if (end == 1) return;
    if (square8 != 1) return;
    else
    document.getElementById("s08").textContent=["x"];
    line5.splice(2, 1, "x");
    line2.splice(2, 1, "x");
    line6.splice(2, 1, "x");
    square8 = "x";
    three();
    cpumove();
    playermoves.push("1");
    tie();
    };


