/*
    Author(s): Spencer DeMera, Edmond Tongyou, Joshua Elmer, Kevin La, Abhinav Arora
    Auhtors Contact(s): spencer.demera@csu.fullerton.edu, tongyouedmond@csu.fullerton.edu, joshuaelmer@csu.fullerton.edu, kevinla56@csu.fullerton.edu, abhinavarora14799@csu.fullerton.edu
    Description: This file provides all of the logic for our sorting algorithms as well as printing the results.
    Wihtin are all necessary functions for ant animation.
*/
    
var g_canvas = { cell_size:10, wid:65, hgt:50 }; // JS Global var, w canvas size info.
var g_input; // My input box.
var g_button; // Button for my input box.

var array = []; // array for all input hexadecimal string
var len = 16; // array length
array.length = len; // set array length


var insertion_arr = array.split("");
var insertion_index1 = 0;
var insertion_index2 = -1;

var selection_arr = array.split("");
var poresort_arr = array.split("");
var merge_arr = array.split("");
var quick_arr = array.split("");

var ctr = 0;

function setup() // P5 Setup Fcn, must be called for Anim to work.
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 20, 20, 'white', 'blue' ); // Calls fcn in another (loaded) file.

    // Setup input-box for input and a callback fcn when button is pressed.
    g_input_1 = createInput(); // Create an input box, editable.
    g_input_1.position( 50, 30 ); // Put box on page.
    g_button_1 = createButton( "Submit" ); // Create button to help get input data.
    g_button_1.position( 50 + 176, 30 ); // Put button on page.
    g_button_1.mousePressed( retrieve_input ); // Hook button press to callback fcn.
}

// Callback to get Input-box data.
function retrieve_input()
{
    var data = g_input_1.value(); // Get data from Input box.
    console.log( "data = " + data ); // Show data in F12 Console output.
}

// draw algos per pass and printing
function draw_algos() 
{
    while(flag)
    {
        insertionPass();
        selectionPass();
        porePass();
        mergePass();
        quickPass();
        newString();
    }
}

// prints passes of each algo after pause
function insertionPass() 
{
    while (insertion_index1 < insertion_arr.length())
    {
        var current = insertion_arr[insertion_index1];
        while (insertion_index2 >= 0 && insertion_arr[insertion_index2] > current)
        {
            insertion_arr[insertion_index2 + 1] = insertion_arr[insertion_index2];
            insertion_index2 = insertion_index2 - 1;
        }
        insertion_arr[insertion_index2 + 1] = current;
        insertion_index1++;
        insertion_index2++;

        break;
    }
}

// prints passes of each algo after pause
function selectionPass() 
{
    
}

// prints passes of each algo after pause
function porePass() 
{
    
}

// prints passes of each algo after pause
function mergePass() 
{
    
}

// prints passes of each algo after pause
function quickPass() 
{
    
}

// merge function for mergeSort
function merge() 
{

}

// swap function for partitioning
function swap() 
{

}

// function for partitioning
function partition() 
{

}

// adds new hexadecimal string input to array
function newString()
{

}

// display algo name titles
function displayAlgoTitles()
{

}

// displays algo arrays
function displayArr()
{

}