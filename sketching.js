/*
    Author(s): Spencer DeMera, Edmond Tongyou, Joshua Elmer, Kevin La, Abhinav Arora
    Auhtors Contact(s): spencer.demera@csu.fullerton.edu, tongyouedmond@csu.fullerton.edu, joshuaelmer@csu.fullerton.edu, abhinavarora14799@csu.fullerton.edu
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

var g_canvas = { cell_size:10, wid:60, hgt: 40 }; // JS Global var, w canvas size info.
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

var g_bot = { dir:0, x:30, y:20, color:"100" }; // Dir is 0..3 clock, w 0 up.
var g_box = { t:1, hgt:39, l:1, wid:59 }; // Box in which bot can move.
var flag = true;
var counter = 0;

function move_bot( ) // Move the bot in new direction & update color.
{
    let random_color = 0;
    let facing = g_bot.dir;
    if (counter === 0)
    {
        random_color = (round (3 * random( )));
        flag = true;
    }
    else if (counter > 0 && g_bot.color === "FFFF00")
    {
        facing = 2;
        flag = false;
    }
    else
    {
        random_color = (round (4 * random( )));
        flag = true;
    }

    if (flag === true)
    {
        switch (random_color)
        {
            // Turn Left, black
            case 0 : 
            {   
                g_bot.color = "0000000"; 
                ++counter; 
                facing = 0;
                break; 
            }
            
            // Turn Right, blue
            case 1 : 
            { 
                g_bot.color = "0000FF"; 
                ++counter; 
                facing = 1; 
                break;
            }
            
            // Turn Right, red
            case 2 : 
            { 
                g_bot.color = "ff0000"; 
                ++counter; 
                facing = 1; 
                break; 
            }
            // Go Straight + CD, yellow
            case 3 : 
            { 
                g_bot.color = "FFFF00"; 
                facing = 2; 
                break; 
            }
        }
    }


    // dy -> -1 = N
    // dy -> 1 = S
    // dx -> -1 = W
    // dx -> 1 = E
    // N -> 0
    // S -> 1
    // E -> 2
    // W -> 3
    // 12 states
    let dx = 0;
    let dy = 0;
    let dir = g_bot.dir;
    switch (g_bot.dir)
    {
        // North
        case 0 :
        {   
            // Straight
            if(facing === 2)
            {
                dy = -1;
                --counter;
            }

            // Turn Right, Face East
            else if(facing === 1)
            {
                dx = 1;
                dir = 2;
            }

            // Turn Left, Face West
            else
            {
                dx = -1;
                dir = 3;
            }
            break; 
        }

        // South
        case 1 : 
        { 
            // Straight
            if(facing === 2)
            {
                dy = 1;
                --counter;
            }

            // Turn Right, Face West
            else if(facing === 1)
            {
                dx = -1;
                dir = 3;
            }

            // Turn Left, Face East
            else
            {
                dx = 1;
                dir = 2;
            }
            break;
        }

        // East
        case 2 :
        {
            // Straight
            if(facing === 2)
            {
                dx = 1;
                --counter;
            }

            // Turn Right, Face South
            else if(facing === 1)
            {
                dy = 1;
                dir = 1;
            }

            // Turn Left, Face North
            else
            {
                dy = -1;
                dir = 0;
            }
            break;
        }        

        // West
        case 3 : 
        { 
            // Straight
            if(facing === 2)
            {
                dx = -1;
                --counter;
            }

            // Turn Right, Face North
            else if(facing === 1)
            {
                dy = -1;
                dir = 0;
            }

            // Turn Left, Face South
            else
            {
                dy = 1;
                dir = 1;
            }
            break;
        }


    }


    let x = (dx + g_bot.x + g_box.wid) % g_box.wid; // Move-x.  Ensure positive b4 mod.
    let y = (dy + g_bot.y + g_box.hgt) % g_box.hgt; // Ditto y.
    g_bot.x = x; // Update bot x.
    g_bot.y = y;
    g_bot.dir = dir;
    //console.log( "bot x,y,dir,clr = " + x + "," + y + "," + dir + "," +  color );
}

function paint_cell_interior( cell ) // Paint grid-cell insides, with pre-set color.
{ // Skip cell 1-pixel border, just paint insides.
    // Cell needs slots .x, .y, (canvas pixel coords) and .cell_size (in pixels);
    let sz = cell.cell_size;
    let x_in = 1 + (cell.x * sz); // Interior is one pixel inside cell, from top-left.
    let y_in = 1 + (cell.y * sz);
    let wid = sz -2; // Get width inside cell walls.
    rect( x_in, y_in, wid, wid );
}

function draw_bot() // Convert bot pos to grid pos & draw bot cell.
{
    let sz = g_canvas.cell_size;
    let x_in = 1+ g_bot.x*sz; // Set x one pixel inside the sz-by-sz cell.
    let y_in = 1+ g_bot.y*sz;
    let cpix = { x:x_in, y:y_in }; // cell-interior pixel pos, new obj.
    // Set drawing color for cell interior (fill) to bot's current painting color.
    // Fill 'color': its a keystring, or a hexstring like "#5F", etc.  See P5 docs.
    fill( "#" + g_bot.color ); // Concat string, auto-convert the number to string.
    //console.log( "x_in,y_in = " + x + "," + y );

    // Paint the cell.
    let cell = { x:g_bot.x, y:g_bot.y, cell_size:sz }; // new obj.
    paint_cell_interior( cell );
}

function draw_update()  // Update our display, move & draw bot cell.
{
    //console.log( "g_frame_cnt = " + g_frame_cnt );
    move_bot( );
    draw_bot( );
}

function draw() // P5 Frame Anim-draw Fcn, Called for Every Frame at Frame-rate.
{
    ++g_frame_cnt; // Count each P5 frame-draw request.
    if (0 == g_frame_cnt % g_frame_mod) // Skip most frames.
    {
        if (!g_stop) draw_update(); // Draw bot only if it is moving.
    }
}

function keyPressed( ) // P5 fcn, called for every keypress.
{ // Any keypress, we don't distinguish.  See P5 docs for using keys.
    g_stop = ! g_stop; // Toggle the bot move-paint on/off.
}

function set_bot_pos( ) // Update bot cell pos based on mouse's canvas pixel pos.
{  //  Req's cell-to-pixel tranlation.
    let x = mouseX;  // Get P5 mouse canvas pixel coords.
    let y = mouseY;
    //console.log( "mouse x,y = " + x + "," + y );
    // Convert canvas coords to the "fatter" grid-cell coords.
    let sz = g_canvas.cell_size;
    let gridx = round( (x-0.5) / sz );
    let gridy = round( (y-0.5) / sz );
    //console.log( "grid x,y = " + gridx + "," + gridy );
    //console.log( "box wid,hgt = " + g_box.wid + "," + g_box.hgt );
    g_bot.x = gridx + g_box.wid; // Ensure its positive.
    //console.log( "bot x = " + g_bot.x );
    g_bot.x %= g_box.wid; // Wrap to fit grid-box.
    g_bot.y = gridy + g_box.hgt;
    //console.log( "bot y = " + g_bot.y );
    g_bot.y %= g_box.hgt; // Wrap to fit grid-box.
    //console.log( "bot x,y = " + g_bot.x + "," + g_bot.y );
}

function mousePressed( ) // P5 fcn, called for every mouse-press.
{
    set_bot_pos( );
    draw_bot( );
}