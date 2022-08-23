var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["83e61622-bfd9-4eab-8ab8-d038ff5b9d83","db4b712f-bdca-4c38-bc20-25a390dee235","461d27f6-d12b-456d-8de9-b0c4aaaba6ed","178a7b1c-1c04-447a-8b9d-1dd827893e84","4baa75f6-4d4a-41c0-b901-e9255ff2f250"],"propsByKey":{"83e61622-bfd9-4eab-8ab8-d038ff5b9d83":{"name":"carro1","sourceUrl":null,"frameSize":{"x":30,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"17_v24WRNgzIPoyNBu_Vl4bqcw_nqFiW","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/83e61622-bfd9-4eab-8ab8-d038ff5b9d83.png"},"db4b712f-bdca-4c38-bc20-25a390dee235":{"name":"carr02","sourceUrl":null,"frameSize":{"x":30,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"VMvMB.f6kCrmqjQ4dXNNxmk74WpUsIi4","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":65},"rootRelativePath":"assets/db4b712f-bdca-4c38-bc20-25a390dee235.png"},"461d27f6-d12b-456d-8de9-b0c4aaaba6ed":{"name":"carro3","sourceUrl":null,"frameSize":{"x":30,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"0aGplsZq4Lo_Tw3ikMXBbk6vF.rZ4fUb","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/461d27f6-d12b-456d-8de9-b0c4aaaba6ed.png"},"178a7b1c-1c04-447a-8b9d-1dd827893e84":{"name":"carro4","sourceUrl":null,"frameSize":{"x":30,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"U3ht3bKInur6M8HEQ4JGevMBcox2bedW","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/178a7b1c-1c04-447a-8b9d-1dd827893e84.png"},"4baa75f6-4d4a-41c0-b901-e9255ff2f250":{"name":"niño","sourceUrl":null,"frameSize":{"x":20,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"0hmCLu0xOtQBCPOD.hZdfcjGWOC3PaMm","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":40},"rootRelativePath":"assets/4baa75f6-4d4a-41c0-b901-e9255ff2f250.png"}}};
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

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,80,420,3);
  boundary2 = createSprite(190,300,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
sam.setAnimation("niño");
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
car1.setAnimation("carro1");
;
  car2 = createSprite(215,130,10,10);
car2.shapeColor = "red";
car2.setAnimation("carr02");
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
car3.setAnimation("carro3");
;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
car4.setAnimation("carro4");
  
  
  car1.velocityY = 3;
  car2.velocityY = 3;
  car3.velocityY = -3;
  car4.velocityY = -3;
 

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  sam.bounceOff(boundary1);
  sam.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    sam.x = sam.x + 4;
  }
  if(keyDown("left")){
    sam.x = sam.x - 4;
  }
  if(keyDown("up")){
    sam.y = sam.y-4;
  }
  if(keyDown("down")){
    sam.y = sam.y+4;
  }
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
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
