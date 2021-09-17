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

var gridCanvas = { cellSize: 10, wid:60, hgt: 40 };

function setup() {
    let size = gridCanvas.cellSize;
    let width = size * gridCanvas.wid;
    let height = size * gridCanvas.hgt;
    createCanvas(width, height);
    drawGrid( 10, 50, 'white', 'blue' );
}