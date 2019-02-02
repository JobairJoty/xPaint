// Application Details
var name = "xPaint";
var version = "1.0";
var author = "jobair";

// Canvas and other constants
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


// Application constants

var defaultColor = "black";
var brushSize = 10;

var defaultPencil = "circle";

var mouseDown = false;
var mouseX = null;
var mouseY = null;


// Color Buttons
var lineButton = document.getElementById("lineButton");
var circleButton = document.getElementById("circleButton");

// ColorManager constants
var colorPattleSelector = document.getElementById("colorPattleSelector");
var defaultColorPattle = "x";
var activeColorPattle = "x";

// Tools constants
