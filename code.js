var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a72244de-5099-4649-bec5-45e76fa1b825","71edb4e4-92ec-474b-ba3f-ead4335e22c4","93725ebe-f8cd-4a47-abe6-4b74e100b8a2","4a0c91dc-1bbf-46eb-ad42-0bd606423e53","c15983a6-ca79-477f-92d0-fbd816e74d7e","fa5b3e0d-e676-4b0f-8114-f2d98efeacec"],"propsByKey":{"a72244de-5099-4649-bec5-45e76fa1b825":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7PSF36qcGfg8wjbeeIn7g.rto3LxYmv2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a72244de-5099-4649-bec5-45e76fa1b825.png"},"71edb4e4-92ec-474b-ba3f-ead4335e22c4":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"},"93725ebe-f8cd-4a47-abe6-4b74e100b8a2":{"name":"ore_ruby_1","frameCount":1,"frameSize":{"x":128,"y":128},"looping":true,"frameDelay":2,"categories":["obstacles"],"jsonLastModified":"2020-07-16 22:29:51 UTC","pngLastModified":"2020-01-29 19:49:19 UTC","version":"fhb60UTSxElfkmU4M1zpY1cW.tttCvnt","sourceUrl":"assets/api/v1/animation-library/gamelab/fhb60UTSxElfkmU4M1zpY1cW.tttCvnt/category_obstacles/ore_ruby.png","sourceSize":{"x":128,"y":128},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/fhb60UTSxElfkmU4M1zpY1cW.tttCvnt/category_obstacles/ore_ruby.png"},"4a0c91dc-1bbf-46eb-ad42-0bd606423e53":{"name":"lollipop_red_1","frameCount":1,"frameSize":{"x":70,"y":70},"looping":true,"frameDelay":2,"categories":["obstacles"],"jsonLastModified":"2020-07-16 22:29:50 UTC","pngLastModified":"2020-01-29 19:49:17 UTC","version":"xLzntuAyLD7vALcovRb2LIcED8k0EUNI","sourceUrl":"assets/api/v1/animation-library/gamelab/xLzntuAyLD7vALcovRb2LIcED8k0EUNI/category_obstacles/lollipop_red.png","sourceSize":{"x":70,"y":70},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/xLzntuAyLD7vALcovRb2LIcED8k0EUNI/category_obstacles/lollipop_red.png"},"c15983a6-ca79-477f-92d0-fbd816e74d7e":{"name":"powerupGreen_1","frameCount":1,"frameSize":{"x":34,"y":33},"looping":true,"frameDelay":2,"categories":["gameplay"],"jsonLastModified":"2020-07-16 22:29:34 UTC","pngLastModified":"2020-01-29 19:48:55 UTC","version":"a_.5cQjsq6VgvoloxllcgNS9syNGYSUx","sourceUrl":"assets/api/v1/animation-library/gamelab/a_.5cQjsq6VgvoloxllcgNS9syNGYSUx/category_gameplay/powerupGreen.png","sourceSize":{"x":34,"y":33},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/a_.5cQjsq6VgvoloxllcgNS9syNGYSUx/category_gameplay/powerupGreen.png"},"fa5b3e0d-e676-4b0f-8114-f2d98efeacec":{"name":"bunny2_1","frameCount":2,"frameSize":{"x":152,"y":193},"looping":true,"frameDelay":15,"categories":["animals","characters"],"jsonLastModified":"2020-07-16 22:27:08 UTC","pngLastModified":"2020-01-29 19:47:53 UTC","version":"eTqcjcNHgbXfP5vdIU5k86CP8HIQhqys","sourceUrl":"assets/api/v1/animation-library/gamelab/eTqcjcNHgbXfP5vdIU5k86CP8HIQhqys/category_animals/bunny2.png","sourceSize":{"x":304,"y":193},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/eTqcjcNHgbXfP5vdIU5k86CP8HIQhqys/category_animals/bunny2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bg = createSprite(200, 200, 400, 400);
bg.setAnimation("farm_land_1");

var yes = createSprite(200, 380, 30, 30);
yes.shapeColor = "red";
yes.setAnimation("bunny2_1");
yes.scale = 0.21;
var no = createSprite(200, 390, 200, 10);
no.visible = false;


var obstaclesGroup = createGroup();
var sawsGroup = createGroup();
var obstacles1Group = createGroup();
var bg2 = createSprite(200, 200, 400, 400);
bg2.shapeColor = "black";
var restart = createSprite(200, 250, 50, 30);
restart.setAnimation("powerupGreen_1");
function draw() {
  background("white");
if(gameState == PLAY){

obstacle1();
obstacle2();
yes.y = 380;
if(keyDown("space")){
  yes.y = yes.y-100;
}
if(keyDown("up")){
  yes.y = yes.y-200;
}

if(collided(yes, no)){
  no.shapeColor = "blue";
}
bg2.visible = false;
restart.visible = false;



if(World.frameCount>150&&World.frameCount<250){
    strokeWeight(5);
for (var j = 70; j < 200; j=j+20) {
     line(100, j, 100, j+10);
  }
  
  textSize(20);
  text("press this to jump higher", 110, 200);
  
}

console.log(yes.y)
console.log(World.frameCount);
bg.velocityX = -5;
bg.scale = 1.5;
if(bg.x<100){
  bg.x = 200;
}
saws();
}
if(yes.isTouching(sawsGroup)||yes.isTouching(obstaclesGroup)||yes.isTouching(obstacles1Group)){
  yes.y = 250;
  bg2.visible = true;
  gameState = END;
}

  sawsGroup.setDepthEach(bg2.depth) ;
  bg2.depth = bg2.depth+1;

  bg2.depth = restart.depth;
  restart.depth = restart.depth+1;

if(gameState == END){
  restart.visible = true;
  
  if(mousePressedOver(restart)){
    gameState = PLAY;
    sawsGroup.destroyEach();
    obstaclesGroup.destroyEach();
    obstacles1Group.destroyEach();

  }
}


  drawSprites();
  
if(gameState == END){
  textFont("courier new")
  textSize(20);
  fill("red");
  text("GAME OVER", 150, 180);
  fill("green");
  text("Restart", 160, 285);
}
if(World.frameCount<140){
  textFont("courier new")
  fill("black");
  textSize(20);
  text("press 'space' to jump high", 60, 200);
  text("press 'up arrow' to jump higher", 10, 235);
  
}
}



function collided(ob1, ob2){
if(ob1.y == ob2.y-ob2.height){
  return true;
}
else {
  return false;
}
  
  
}
function saws(){
  if(World.frameCount%100 == 0){
  var saw = createSprite(400, 390, 20, 20);
  saw.setAnimation("animation_4");
  saw.velocityX = -5;
  saw.lifetime = 80;
  sawsGroup.add(saw);
  }
}
function obstacle1(){
  if(World.frameCount%300 == 0){
    var obs = createSprite(400, 350, 30, 30);
    obs.setAnimation("ore_ruby_1");
    obs.scale = 0.5;
    obs.velocityX = -4;
    obs.lifetime = 100;
    obstaclesGroup.add(obs);
  }
}
function obstacle2(){
  if(World.frameCount%220 == 0){
    var obs1 = createSprite(400, 250, 30, 30);
    obs1.setAnimation("lollipop_red_1");
    obs1.scale = 0.5;
    obs1.velocityX = -4;
    obs1.lifetime = 100;
    obstacles1Group.add(obs1);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
