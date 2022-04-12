//Classes
let introScreens;

//Variables
let screen;

function setup() {
  createCanvas(1280, 720);

  //Calling classes
  introScreens = new StartScreens();

  //Variables
  this.screen = 0;
}

function draw() {
  background(220);

  //Switch between class screens
  switch (this.screen) {
    //Start screens
    case 0:
      introScreens.draw();
      introScreens.hover();
      break;
    //Symptoms screen
    case 1:
      
      break;
  }

  switchBetweenClasses();
  
}

function mousePressed() {
  switch (this.screen) {
    //Start screens clicks
    case 0:
      introScreens.clicked();
      break;
    case 1:
      
      break;
  }

}

function switchBetweenClasses() {
  //Start screen to symptoms
  if (introScreens.getScreenClicked()) {
    this.screen = 1;
  }
}

