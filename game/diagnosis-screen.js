class DiagnosisScreen {
    constructor() {
        //Loading image
        this.background = loadImage('../images/diagnosis_screen.jpg');

        //Diagnosis/answers - array to save the answers
        this.diagnosis = [];

        //Diagnosis squares array
        this.squares = [];
        this.squares.push(new Diagnosis(605, 340, "Faringitis"));
        this.squares.push(new Diagnosis(605, 395, "Sinusitis"));
        this.squares.push(new Diagnosis(605, 445, "Alergia"));
        this.squares.push(new Diagnosis(605, 500, "Neumonía"));
        this.squares.push(new Diagnosis(775, 340, "Bronquitis"));
        this.squares.push(new Diagnosis(775, 395, "Gastritis"));
        this.squares.push(new Diagnosis(775, 445, "Intoxicación"));
        this.squares.push(new Diagnosis(775, 500, "Embarazo"));
        this.squares.push(new Diagnosis(945, 340, "Vertigo"));
        this.squares.push(new Diagnosis(945, 395, "Infección de oído"));

        //Variables
        this.answered = false;
        this.nextScreen;
    }

    draw() {
        //Background
        imageMode(CORNER);
        image(this.background, 0, 0, 1280, 720);

        //Options
        for (let index = 0; index < this.squares.length; index++) {
            this.squares[index].draw();
        }
    }

    clicked() {
        for (let index = 0; index < this.squares.length; index++) {
            if (this.squares[index].isClicked()) {
                this.diagnosis.push(this.squares[index].getSickness());
                this.answered = true;
            } 
        }
    }

    isAnswered(){
        return this.answered;
    }

    setAnswered(answered) {
        this.answered = answered;
    }

    setNextScreen(nextScreen) {
        this.nextScreen = nextScreen;
    }

    getNextScreen() {
        return this.nextScreen;
    }

    getDiagnosis() {
        return this.diagnosis;
    }
}