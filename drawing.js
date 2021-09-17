/*
    Author(s): Spencer DeMera
    Auhtors Contact(s): spencer.demera@csu.fullerton.edu
    Description: This file creates the outline of our ant grid via row and column drawings. This file also 
    draws the numbereds for the gird lines on both the X and Y axises. This also is the physical canvas of the 
    entire ant and controls.
*/

function drawGrid(rminor, rmajor, rstroke, rfill) {
    stroke(rstroke);
    fill(rfill);
    let size = gridCanvas.cellSize;
    let width = gridCanvas.wid * size;
    let height = gridCanvas.hgt * size;

    for (var x = 0; x < width; x+=rminor) {
        let bigLinep = (x % rmajor == 0);
        let lineWeight = 1;
        if (bigLinep) { 
            lineWeight = 2;
        }

        strokeWeight( lineWeight );
        line( x, 0, x, height );
        strokeWeight( 1 );
    } // draws x-axis of grid

    for (var y = 0; y < width; y+=rminor) {
        let bigLinep = (y % rmajor == 0);
        let lineWeight = 1;
        if (bigLinep) {
            lineWeight = 2;
        }

        strokeWeight( lineWeight );
        line( 0, y, width, y );
        strokeWeight( 1 );
    } // draws y-axis of grid
}