//The symptoms screen
class SymptomsScreen {
    constructor() {
        //Loading book pages
        this.page1 = loadImage('../images/symptoms1.jpg');
        this.page2 = loadImage('../images/symptoms2.jpg');
        this.page3 = loadImage('../images/symptoms3.jpg');

        //Screen variable
        this.screen = 0;
        this.screenRight = 0;
        this.screenLeft = 0;

        //Continue button
        this.continueBtn = loadImage('../images/continue_btn.png');
        this.showBtn = false;
        this.btnCounter = 0;
        this.continueClicked = false;
    }

    draw() {
        //Transitioning between book pages
        switch (this.screen) {
            case 0:
                image(this.page1, 0, 0, 1280, 720);
                break;
            case 1:
                image(this.page2, 0, 0, 1280, 720);
                break;
            case 2:
                image(this.page3, 0, 0, 1280, 720);
                break;
        }

        //Show continue button, regardless of screen, after a couple of seconds
        this.btnCounter++;
        if (this.btnCounter > 300) {
            image(this.continueBtn, 1085, 640, 180, 60);
        }
    }

    clicked() {
        //Arrows page 1
        this.arrows(0, 1, 2);

        //Arrows page 2
        this.arrows(1, 2, 0);

        //Arrows page 3
        this.arrows(2, 0, 1);

        //Continued button clicked
        if (mouseX > 1085 && mouseX < 1265 && mouseY > 640 && mouseY < 700 && this.btnCounter > 300) {
            this.continueClicked = true;
        }
    }

    arrows(onScreen, rightScreen, leftScreen) {
        //Right arrow
        if (dist(mouseX, mouseY, 980, 605) < 40 && this.screen === onScreen) {
            this.screenRight++;
            if (this.screenRight === 2) {
                this.screen = rightScreen;
                this.screenRight = 0;
            }
        }

        //Left arrow
        if (dist(mouseX, mouseY, 230, 605) < 40 && this.screen === onScreen) {
            this.screenLeft++;
            if (this.screenLeft === 2) {
                this.screen = leftScreen;
                this.screenLeft = 0;
            }
        }
    }

    getContinueClicked() {
        return this.continueClicked;
    }
}