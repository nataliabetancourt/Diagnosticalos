//Classes
let introScreens;
let symptomsScreen;

//Variables
let screen;
let changeCounter;

//Level images
let level1, level2, level3;

function setup() {
  createCanvas(1280, 720);

  //Calling classes
  introScreens = new StartScreens();
  symptomsScreen = new SymptomsScreen();

  //Variables
  this.screen = 1;
  this.changeCounter = 0;

  //Loading level images
  level1 = loadImage('../images/level1.jpg');
  level2 = loadImage('../images/level2.jpg');
  level3 = loadImage('../images/level3.jpg');

}

function draw() {
  background(220);

  //Switch between class screens
  switch (this.screen) {
    //Start screens
    case 0:
      introScreens.draw();
      break;
    //Symptoms screen
    case 1:
      symptomsScreen.draw();
      break;
    case 2:
      this.changeCounter++;
      image(level1, 0, 0, 1280, 720);
      break;
    case 3:
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

  //Switch to next level after a couple of seconds
  if (this.changeCounter > 100 && this.screen === 2) {
    this.screen = 3;
  }
}

