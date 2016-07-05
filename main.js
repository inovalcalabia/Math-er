var renderer = PIXI.autoDetectRenderer(160, 144);
 
// Set the background color of the renderer to a baby-blue'ish color
renderer.backgroundColor = 0x3498db;
 
// Append the renderer to the body of the page
document.body.appendChild(renderer.view);
 
// Create the main stage for your display objects
var stage = new PIXI.Container();
 
// Add our image as a sprite
var goose = new PIXI.Sprite.fromImage('bunny.png');
 
// Set the anchor in the center of our sprite 
goose.anchor.x = 0.5;
goose.anchor.y = 0.5;
 
// Position our goose in the center of the renderer
goose.position.x = renderer.width / 2;
goose.position.y = renderer.height / 2;
 
// Add the goose to the stage
stage.addChild(goose);
 
// Start animating
animate();
 
function animate() {
    requestAnimationFrame(animate);
 
    // Rotate our goose clockwise
    goose.rotation += 0.1;
 
    // Rotate our goose counter-clockwise
    // goose.rotation -= 0.1;
 
    // Render our container
    renderer.render(stage);
}