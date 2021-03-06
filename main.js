var renderer = PIXI.autoDetectRenderer(480, 800);
 
// Set the background color of the renderer to a baby-blue'ish color
renderer.backgroundColor = 0x3498db;
 
// Append the renderer to the body of the page
document.body.appendChild(renderer.view);
 
// Create the main stage for your display objects
var stage = new PIXI.Container();
 
// Add our image as a sprite
var goose = new PIXI.Sprite.fromImage('bunny.png');
 goose.interactive = true;
 goose.width += 70;
 goose.height += 100;
// Set the anchor in the center of our sprite 
goose.anchor.x = 0.5;
goose.anchor.y = 0.5;
 
// Position our goose in the center of the renderer
goose.position.x = renderer.width / 2;
goose.position.y = renderer.height / 2 + 250;
 goose
    .on('touchstart', onButtonDown);
    
function onButtonDown()
{
  console.log("asdf");
}
// Add the goose to the stage
stage.addChild(goose);

var text = new PIXI.Text("1", {font:"50px Arial", fill:"gray"});
stage.addChild(text);
text.anchor.set(0.5, 0.5);
text.position.x = renderer.width / 2;
text.position.y = 200;

var timerTF = new PIXI.Text("0",{font:"50px Arial", fill:"gray"});
stage.addChild(timerTF);
timerTF.anchor.set(0.5,0.5);
timerTF.position.y = 130;
timerTF.position.x = 70;
//newMC.pivot("Center");
//newMC.position.x = 20;
//newMC.position.y = 20;
// Start animating

animate();
var rocks = [];
for(i = 0; i < 4; i++){
  var rock = new PIXI.Sprite.fromImage('assets/rock.png');
  stage.addChild(rock);
  rock.width = 100;
  rock.height = 100;
  rock.position.y = 10;
  rock.position.x = 10 + (i * 120);
  rock.interactive = true;
  rocks.push(rock);
  
  var tunnel = new PIXI.Sprite.fromImage('assets/tunnel.png');
  stage.addChild(tunnel);
  tunnel.width = 100;
  tunnel.height = 150;
  tunnel.position.y = 700;
  tunnel.position.x = 20 + (i * 115);
  tunnel.interactive = true;
  tunnel
    .on('touchstart', moveGoose);
}


function moveGoose()
{
  goose.position.x = this.position.x + 50;
}

var speed = 1;

function changeTF()
{
  
    var rand1 = Math.floor(Math.random () * 10);
    var rand2 = Math.floor(Math.random () * 10);
    var rand3 = Math.floor(Math.random () * 10);
    
    text.text = rand1 + operator(2) + rand2 + operator(2) + rand3;
    console.log(eval(text.text));
    
}

function animate() {
    
 timerCountdown();
 timerTF.text = getSecond() + ":" + getMilli();
 if(getSecond() < 1 && getMilli() < 1)
 {
   for(i = 0;i <rocks.length;i++){
     TweenLite.to(rocks[i].position, 1.2, {y: 600,onComplete:complete});
   }
   changeTF();
 }
    requestAnimationFrame(animate);
    //newMC.animate();
    // Rotate our goose clockwise
 
    // Rotate our goose counter-clockwise
    // goose.rotation -= 0.1;
 
    // Render our container
    renderer.render(stage);
}
function complete()
{
  for(i = 0;i <rocks.length;i++){
    rocks[i].y = 10;
   }
}