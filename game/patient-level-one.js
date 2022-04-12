class PatientLevelOne {
    constructor() {
        //Loading background image
        this.patient1 = loadImage('../images/patient1.jpg');

        //Questions
        this.questions = [];
        //Add question to list
        this.questions.push(new Question(404, 63, '../images/level1/question1.png', 0));
        this.questions.push(new Question(472, 63, '../images/level1/question2.png', 5));
        this.questions.push(new Question(541, 63, '../images/level1/question3.png', 5));
        this.questions.push(new Question(606, 63, '../images/level1/question4.png', 0));

        //Answers 
        this.answers = [];
        //Add answers to the list
        this.answers.push(new Answer('../images/level1/answer1.png'));
        this.answers.push(new Answer('../images/level1/answer2.png'));
        this.answers.push(new Answer('../images/level1/answer3.png'));
        this.answers.push(new Answer('../images/level1/answer4.png'));

        //Buttons
        this.diagnosisBtn = loadImage('../images/diagnosis_btn.png');
        this.bookBtn = loadImage('../images/book_btn.png');
        this.sides1 = 110;
        this.sides2 = 110;

        //Variables
        this.firstClick = false;
        this.chosenQ;
        this.clickBook = false;
        this.clickDiagnosis = false;
        this.score = 0;
    }

    draw() {
        //Background image
        imageMode(CORNER);
        image(this.patient1, 0, 0, 1280, 720);

        //Draw questions
        for (let index = 0; index < this.questions.length; index++) {
            this.questions[index].draw();    
        }

        //Draw answers
        if (this.firstClick) {
            this.answers[this.chosenQ].draw(); 
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
        //When clicking on questions
        for (let index = 0; index < this.questions.length; index++) {
            if (this.questions[index].clicked()) {
                //Make sure that the index variable isnt null and then asign value
                this.firstClick = true;
                this.chosenQ = index; 
                
                //Add points
                this.score += this.questions[index].getPoints();
                
                //Remove question
                this.questions.splice(index, 1);
            }
        }

        ///When clicking on diagnosis button
        if (dist(mouseX, mouseY, 1205, 80) < 100) {
            this.clickDiagnosis = true;
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
}