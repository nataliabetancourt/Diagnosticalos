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
        this.wBtn = 180;
        this.hBtn = 60;

        //Close button
        this.closeBtn = loadImage('../images/close.png');
        this.closeClicked = false;
    }

    draw() {
        imageMode(CORNER);
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
            image(this.continueBtn, 1085, 640, this.wBtn, this.hBtn);
        }

        this.hover();
    }

    //Showing book during game play
    drawPlay() {
        imageMode(CORNER);
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

        //Close button
        image(this.closeBtn, 45, 40, 40, 40);
    }

    //Animation for continue button
    hover() {
        if (mouseX > 1085 && mouseX < 1265 && mouseY > 640 && mouseY < 700 && this.btnCounter > 300) {
            this.wBtn = 190;
            this.hBtn = 65;
        } else {
            this.wBtn = 180;
            this.hBtn = 60;
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

    clickedPlay() {
        //Arrows page 1
        this.arrows(0, 1, 2);

        //Arrows page 2
        this.arrows(1, 2, 0);

        //Arrows page 3
        this.arrows(2, 0, 1);

        //Close button clicked
        if (mouseX > 45 && mouseX < 95 && mouseY > 40 && mouseY < 80) {
            this.closeClicked = true;
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

    isContinueClicked() {
        return this.continueClicked;
    }

    isCloseClicked() {
        return this.closeClicked;
    }
}