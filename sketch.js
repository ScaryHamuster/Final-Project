let colorPicker;
let c = null;
let prevPosition = {x:0, y:0};
let lineWidth = 10; 
let brushSizeText = null;


function setup() {
  c = color(255,255,255);
  createCanvas(600, 600);
  colorPicker = createColorPicker('black');
  colorPicker.position(600,0);
  background(255);
  prevPosition = {x:mouseX, y:mouseY};
  
  let buttonPlus = createButton('Size+');
  
  buttonPlus.mousePressed(() => {
    lineWidth++;
  });
  
  let buttonMinus = createButton('Size-');
  
  buttonMinus.mousePressed(()=>{
    lineWidth--;
  });
  
  let buttonClear = createButton('Clear');
  
  buttonClear.mousePressed(() => {
    background(255);
  });
}



function draw() { 
  c = colorPicker.color();
  if(mouseIsPressed) {
    pencilTool();
  }
  prevPosition = {x:mouseX, y:mouseY};
}

function pencilTool() {
  if (c != null){
    strokeWeight(lineWidth);
    stroke(c);
  }
  line(prevPosition.x, prevPosition.y, mouseX, mouseY);
}

function eraseTool() {
  
}

function brushTool() {
  
}

function penTool() {
  
}
