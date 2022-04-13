class PatientLevelTwo {
    constructor(){
        //Loading background images
        this.patient2 = loadImage('../images/patient2.jpg');
        this.patient3 = loadImage('../images/patient3.jpg');

        //Patients variable
        this.patient = 0;

        //Questions patient 1
        this.questions1 = [];
        //Add question to list
        this.questions1.push(new Question(404, 63, '../images/level2/question1.png', 5));
        this.questions1.push(new Question(472, 63, '../images/level2/question2.png', 0));
        this.questions1.push(new Question(541, 63, '../images/level2/question3.png', 5));
        this.questions1.push(new Question(606, 63, '../images/level2/question4.png', 0));

        //Questions patient 1
        this.questions2 = [];
        //Questions patient 2
        this.questions2.push(new Question(404, 63, '../images/level2/question5.png', 0));
        this.questions2.push(new Question(472, 63, '../images/level2/question6.png', 5));
        this.questions2.push(new Question(541, 63, '../images/level2/question7.png', 5));
        this.questions2.push(new Question(606, 63, '../images/level2/question8.png', 5));

        //Answers patient 1
        this.answers1 = [];
        //Add answers1 to the list
        this.answers1.push(new Answer('../images/level2/answer1.png'));
        this.answers1.push(new Answer('../images/level2/answer2.png'));
        this.answers1.push(new Answer('../images/level2/answer3.png'));
        this.answers1.push(new Answer('../images/level2/answer4.png'));

        //Answers patient 2
        this.answers2 = [];
        //Answers patient 2
        this.answers2.push(new Answer('../images/level2/answer5.png'));
        this.answers2.push(new Answer('../images/level2/answer6.png'));
        this.answers2.push(new Answer('../images/level2/answer7.png'));
        this.answers2.push(new Answer('../images/level2/answer8.png'));

        //Buttons
        this.diagnosisBtn = loadImage('../images/diagnosis_btn.png');
        this.bookBtn = loadImage('../images/book_btn.png');
        this.sides1 = 110;
        this.sides2 = 110;

        //Variables
        this.firstClick = false;
        this.firstClick2 = false;
        this.chosenQ;
        this.chosenQ2;
        this.clickBook = false;
        this.clickDiagnosis = 0;
        this.score = 0;
        this.patient1Checked = false;
        this.patientsChecked = false;
    }

    draw(){
        imageMode(CORNER);
        //Transitioning between patients
        switch (this.patient) {
            case 0:
                image(this.patient2, 0, 0, 1280, 720);

                //Draw questions
                for (let index = 0; index < this.questions1.length; index++) {
                     this.questions1[index].draw();    
                }

                //Draw answers
                if (this.firstClick) {
                    this.answers1[this.chosenQ].draw(); 
                }
                break;
            case 1:
                image(this.patient3, 0, 0, 1280, 720);

                //Draw questions
                for (let index = 0; index < this.questions2.length; index++) {
                    this.questions2[index].draw();    
               }

               //Draw answers
               if (this.firstClick2) {
                   this.answers2[this.chosenQ2].draw(); 
               }
                break;
        }

        //Drawing buttons
        imageMode(CENTER);
        image(this.diagnosisBtn, 1205, 80, this.sides1, this.sides1);
        image(this.bookBtn, 1205, 200, this.sides2, this.sides2);
        this.hover();

        //Drawing score
        fill(255);
        rect(640, 25, 180, 75, 10);
        noStroke();
        fill(72, 72, 72);
        textSize(16);
        text('PUNTAJE: ' + this.score, 655, 55);
        text('TIEMPO: ', 655, 85);

    }

    hover() {
        //Diagnosis button
        if (dist(mouseX, mouseY, 1205, 80) < 100) {
            this.sides1 = 130;
        } else {this.sides1 = 110;}

        //Book button
        if (dist(mouseX, mouseY, 1205, 200) < 100) {
            this.sides2 = 130;
        } else {this.sides2 = 110;}
    }

    clicked() {
        switch (this.patient) {
            case 0:
                //When clicking on questions patient 1
                for (let index = 0; index < this.questions1.length; index++) {
                    if (this.questions1[index].clicked()) {
                        //Make sure that the index variable isnt null and then asign value
                        this.firstClick = true;
                        this.chosenQ = index; 
                        
                        //Add points
                        this.score += this.questions1[index].getPoints();

                        //Hide question
                        this.questions1[index].setClick(true);
                    }
                } 
                break;
            case 1:
                //When clicking on questions patient 2
                for (let index = 0; index < this.questions2.length; index++) {
                    if (this.questions2[index].clicked()) {
                        //Make sure that the index variable isnt null and then asign value
                        this.firstClick2 = true;
                        this.chosenQ2 = index; 
                        
                        //Add points
                        this.score += this.questions2[index].getPoints();

                        //Hide question
                        this.questions2[index].setClick(true);
                    }
                } 
                break;
        }

        ///When clicking on diagnosis button
        if (dist(mouseX, mouseY, 1205, 80) < 100) {
            this.clickDiagnosis++;
        } 

        //When clicking on symptoms book
        if (dist(mouseX, mouseY, 1205, 200) < 100) {
            this.clickBook = true;
        }
    }

    isClickBook() {
        return this.clickBook;
    }

    isClickDiagnosis() {
        return this.clickDiagnosis;
    }

    isPatientsChecked() {
        return this.patientsChecked;
    }

    setPatient(patient) {
        this.patient = patient;
    }

    setClickDiagnosis(clickDiagnosis) {
        this.clickDiagnosis = clickDiagnosis;
    }
}