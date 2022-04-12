//Classes
let introScreens;
let symptomsScreen;
let patientOne;
let diagnosisScreen;

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
  patientOne = new PatientLevelOne();
  diagnosisScreen = new DiagnosisScreen();

  //Variables
  this.screen = 3;
  this.changeCounter = 0;
  this.changeCounter2 = 0;
  this.changeCounter3 = 0;
  this.book = false;

  //Loading level images
  level1 = loadImage('../images/level1.jpg');
  level2 = loadImage('../images/level2.jpg');
  level3 = loadImage('../images/level3.jpg');

}

function draw() {
  imageMode(CORNER);
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
    //Level 1 screen
    case 2:
      this.changeCounter++;
      image(level1, 0, 0, 1280, 720);
      break;
    //Patient on level 1
    case 3:
      //Doctors office
      patientOne.draw();

      //Book
      showBook();
      break;
    //Level 2 screen
    case 4:
      this.changeCounter2++;
      image(level2, 0, 0, 1280, 720);
      break;
    //Patients on level 2
    case 5:
      
      break;
    //Level 3 screen
    case 6:
      break;
    //Patients on level 3
    case 7:
      break;
    //Diagnosis screen
    case 8: 
      diagnosisScreen.draw();
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
    //Patient level 1
    case 3:
      patientOne.clicked();
      symptomsScreen.clickedPlay();
      break;
    case 8:
      diagnosisScreen.clicked();
      break;
  }
}

function switchBetweenClasses() {
  //Start screen to symptoms
  if (introScreens.isScreenClicked()) {
    this.screen = 1;
  }

  //Symptoms screen to level screen
  if (symptomsScreen.isContinueClicked()) {
    this.screen = 2;
  }

  //LEVEL SCREENS
  //Switch to next level after a couple of seconds
  if (this.changeCounter > 100 && this.screen === 2) {
    this.screen = 3;
  }
  
  if (this.changeCounter2 > 100) {
    this.screen = 5;
  }

  //Switch to next level after a couple of seconds
  if (this.changeCounter3 > 100 && this.screen === 6) {
    this.screen = 7;
  }

  //DIAGNOSIS FROM GAME
  //Make diagnosis during game
  if (patientOne.isClickDiagnosis() && this.book == false) {
    this.screen = 8;
    diagnosisScreen.setNextScreen(4);
  }

  //SHOWING BOOK DURING GAME
  //Show book during game
  if (patientOne.isClickBook()) {
    this.book = true;
  }

  //Close book during game
  if (symptomsScreen.isCloseClicked()) {
    this.book = false;
  }

  //Switch screens after diagnosis
  if (diagnosisScreen.isAnswered()) {
    this.screen = diagnosisScreen.getNextScreen();
  }
}

function showBook(){
  if (this.book) {
    symptomsScreen.drawPlay();
  }
}

