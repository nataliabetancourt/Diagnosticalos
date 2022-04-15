class ResultsScreens {
    constructor() {
        
        this.correctAnswers= [
            "Vertigo",
            "Faringitis",
            "Sinusitis",
            "Bronquitis",
            "Infección de oído",
            "Gastritis"
        ] 
        this.background = loadImage('../images/puntajefinal.png');
    }

    preload(){
        this.font = loadFont('../assets/Outfit-Regular.ttf')
    }

    draw() {
        image(this.background, 0, 0, 1280, 720);
    }

    drawResults(array, puntaje){

        let diagnosisArray = array;
        textFont(this.font);
        textSize(23);

        let result;

        for (let index = 0; index < diagnosisArray.length; index++) {

            if (diagnosisArray[index] === this.correctAnswers[index]) {
                result="Correcto";
                fill(0,255,0);
            }else{
                result="Incorrecto";
                fill(255,0,0);
            }
            text(result, 850, 312+(index*44));
        }

        fill(0);
        text(puntaje, 786, 598);

    }

    endActivity(){
        if (mouseX > 195 && mouseX < 394 && mouseY > 594 && mouseY < 650) {
            console.log("FINISH");
            finish();
        }
    }
}