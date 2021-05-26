var form



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form()




}

function draw() {
  background("brown");  
  form.display();
  drawSprites();
}