
var platform, platformGroup;
var mario;

function preload()
{

}

function setup() 
{
  createCanvas(displayWidth, 700);

  mario = new Player();
  platformGroup = new Group();

  var xDistance = 0;
  var gap;
  for(var i = 0; i<20; i++)
  {
    platform = new Platform(xDistance);
    platformGroup.add(platform.spt);
    gap = random(100, 150);
    xDistance = xDistance + platform.sptW + gap;
  }
}

function draw() 
{
  background('skyblue');
  
  translate(-mario.spt.x + width/2, 0);

  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("right"))
  {
    mario.moveForward();
  }

  if(keyDown("left"))
  {
    mario.moveBackward();
  }

  if(keyDown("up"))
  {
    mario.jump();
  }

  drawSprites();
}










