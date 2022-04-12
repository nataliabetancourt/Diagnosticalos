//Classes
let introScreens;
let symptomsScreen;

//Variables
let screen;

function setup() {
  createCanvas(1280, 720);

  //Calling classes
  introScreens = new StartScreens();
  symptomsScreen = new SymptomsScreen();

  //Variables
  this.screen = 1;
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
      symptomsScreen.draw();
      break;
  }

  //Check for changes in classes
  switchBetweenClasses();
}

function mousePressed() {
  switch (this.screen) {
    //Start screens clicks
    case 0:
      introScreens.clicked();
      break;
    //Symptoms screen clicks
    case 1:
      symptomsScreen.clicked();
      break;
    case 2:

      break;
  }

}

function switchBetweenClasses() {
  //Start screen to symptoms
  if (introScreens.getScreenClicked()) {
    this.screen = 1;
  }

  //Symptoms screen to level screen
  if (symptomsScreen.getContinueClicked()) {
    this.screen = 2;
  }
}

