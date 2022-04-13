//Classes
let introScreens;
let symptomsScreen;
let patientOne;
let patientTwo;
let patientThree;
let diagnosisScreen;

//Variables
let screen;
let changeCounter, changeCounter2, changeCounter3;
let patientsLevel2;
let patientsLevel3;
let score;



//Level images
let level1, level2, level3;

function setup() {
  createCanvas(1280, 720);

  //Calling classes
  introScreens = new StartScreens();
  symptomsScreen = new SymptomsScreen();
  patientOne = new PatientLevelOne();
  patientTwo = new PatientLevelTwo();
  patientThree = new PatientLevelThree();
  diagnosisScreen = new DiagnosisScreen();

  //Variables
  this.screen = 0;
  this.changeCounter = 0;
  this.changeCounter2 = 0;
  this.changeCounter3 = 0;
  this.book = false;
  this.patientsLevel2 = 0;
  this.patientsLevel3 = 0;

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
      //introScreens.draw();
      patientOne.draw();
      this.timer();
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
      //Doctors office
      switch (this.patientsLevel2) {
        case 0:
          patientTwo.drawPatient1();
          break;
        case 1:
          patientTwo.drawPatient2();
          break;
      }
      //General things
      patientTwo.draw();

      //Book
      showBook();
      break;
    //Level 3 screen
    case 6:
      this.changeCounter3++;
      image(level3, 0, 0, 1280, 720);
      break;
    //Patients on level 3
    case 7:
      //Doctors office
      switch (this.patientsLevel2) {
        case 0:
          patientThree.drawPatient1();
          break;
        case 1:
          patientThree.drawPatient2();
          break;
        case 2:
          patientThree.drawPatient3();
          break;
      }

      //General things
      patientThree.draw();

      //Book
      showBook();
      break;
    //Diagnosis screen
    case 8: 
      diagnosisScreen.draw();
      break;
    //Final screen
    case 9:
      break;
  }

  //Check for changes in classes
  switchBetweenClasses();
  levelScreens();
  diagnosisScreens();
  showBookPlay();
}

function timer() {

  this.totalTime = millis(); //start timer
  this.timeLimit = 10; //time limit 5min
  this.gameTime = 0; // amount of time playing
  this.end = false;

  gameTime = int(totalTime/ 1000); //convert to seconds and int
  

  fill(72, 72, 72)
  textSize(18);
  text(convertSeconds(timeLimit - gameTime), 725, 85);

}

function convertSeconds(s) {
  let min = floor(s / 60);
  let sec = s % 60;
  return nf(min, 2) + ':' + nf(sec, 2);
}

function timeIt() {
  gameTime = int((millis() - totalTime) / 1000); //convert to seconds and int
  if (gameTime > 30) {
    end = true; //Signal the rest of the code to end the timer
  }
  return gameTime; //stop running this function once the timer reaches 30
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
    case 5:
      switch (this.patientsLevel2) {
        case 0:
          patientTwo.clickPatient1();
          break;
        case 1:
          patientTwo.clickPatient2();
          break;
      }
      patientTwo.clicked();
      symptomsScreen.clickedPlay();
      break;
    case 7:
      switch (this.patientsLevel3) {
        case 0:
          patientThree.clickPatient1();
          break;
        case 1:
          patientThree.clickPatient2();
          break;
        case 1:
          patientThree.clickPatient3();
          break;
      }
      patientThree.clicked();
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

}

function levelScreens() {
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
}

function diagnosisScreens(){
  //DIAGNOSIS FROM GAME
  //Make diagnosis during game
  if (patientOne.isClickDiagnosis() && this.book == false) {
    this.screen = 8;
    diagnosisScreen.setNextScreen(4);
  }

  //For patient 1 in level 2
  if (patientTwo.isClickDiagnosis() == 1  && this.book == false) {
    this.screen = 8;
    this.patientsLevel2 = 1;
    diagnosisScreen.setNextScreen(5);
  }

  if (patientTwo.isClickDiagnosis() == 2  && this.book == false) {
    this.screen = 8;
    diagnosisScreen.setNextScreen(6);
  }

  //For patient 1 in level 3
  if (patientThree.isClickDiagnosis() == 1 && this.book == false) {
    this.screen = 8;
    this.patientsLevel2 = 1;
    diagnosisScreen.setNextScreen(7);
  }

  if (patientThree.isClickDiagnosis() == 1 && this.book == false) {
    this.screen = 8;
    this.patientsLevel2 = 2;
    diagnosisScreen.setNextScreen(7);
  }

  if (patientThree.isClickDiagnosis() == 1 && this.book == false) {
    this.screen = 8;
    diagnosisScreen.setNextScreen(9);
  }

  //Switch screens after diagnosis
  if (diagnosisScreen.isAnswered()) {
    this.screen = diagnosisScreen.getNextScreen();
  }
}

function showBookPlay() {
  //SHOWING BOOK DURING GAME
  if (patientOne.isClickBook()) {
    this.book = true;
  }

  if (patientTwo.isClickBook()) {
    this.book = true;
  }

  if (patientThree.isClickBook) {
    this.book = true;
  }

  //Close book during game
  if (symptomsScreen.isCloseClicked()) {
    this.book = false;
  }
}

function showBook(){
  if (this.book) {
    symptomsScreen.drawPlay();
  }
}

function addScore() {
  
}


