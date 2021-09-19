/*
    Author(s): Spencer DeMera, 
    Auhtors Contact(s): spencer.demera@csu.fullerton.edu,
    Description: This file provides all of the logic for our ant AI, ant controls, and grid controls.
    Wihtin are all necessary functions for ant animation.

    function setup() // P5 Setup Fcn, must be called for Anim to work.
    function move_bot( ) // Move the bot in new direction & update color.
    function get_rgb( cpix ) // Get RGB integer color at canvas pixel pos.
    function paint_cell_interior( cell ) // Paint grid-cell insides, with pre-set color.
    function draw_bot( ) // Convert bot pos to grid pos & draw bot cell.
    function draw_update()  // Update our display, move & draw bot cell.
    function draw()  // P5 Frame Anim-draw Fcn, Called for Every Frame at Frame-rate.
    function keyPressed( ) // P5 fcn, called for every keypress.
    function set_bot_pos( ) // Update bot cell pos based on mouse's canvas pixel pos.
    function mousePressed( ) // P5 fcn, called for every mouse-press.
*/

var g_canvas = { cell_size: 10, wid:60, hgt: 40 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

function setup() // P5 Setup Fcn, must be called for Anim to work.
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 10, 50, 'white', 'blue' ); // Calls fcn in another (loaded) file.
}

var g_bot = { dir:0, x:20, y:20, color:100 }; // Dir is 0..3 clock, w 0 up.
var g_box = { t:1, hgt:39, l:1, wid:59 }; // Box in which bot can move.

