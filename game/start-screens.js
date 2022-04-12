//All the start up screens
class StartScreens {
    constructor(){
        //Loading background images
        this.firstScreen = loadImage('../images/start_screen.jpg');
        this.secondScreen = loadImage('../images/intro.jpg');
        this.thirdScreen = loadImage('../images/instructions.jpg');

        //Loading button images
        this.startBtn = loadImage('../images/start_btn.png');
        this.continueBtn = loadImage('../images/continue_btn.png');

        //Screen variable
        this.screen = 0;
        this.screenClicked = false;
        this.screenSwitch = 0;

        //Buttons
        this.showBtn = false;
        this.btnCounter = 0;

        //Buttons bigger
        this.wStart = 250;
        this.hStart = 80;

        this.wCon = 250;
        this.hCon = 80;

        this.wCon2 = 250;
        this.hCon2 = 80;
    }

    draw(){
        imageMode(CORNER);
        //Transition between screens
        switch (this.screen) {
            case 0:
                image(this.firstScreen, 0, 0, 1280, 720);
                image(this.startBtn, 820, 385, this.wStart, this.hStart);
                break;
            case 1:
                image(this.secondScreen, 0, 0, 1280, 720);

                //Button counter
                this.btnCounter++;
                if (this.btnCounter > 300) {
                    image(this.continueBtn, 885, 565, this.wCon, this.hCon);
                }
                break;
            case 2:
                image(this.thirdScreen, 0, 0, 1280, 720);

                //Button counter
                this.btnCounter++;
                if (this.btnCounter > 300) {
                    image(this.continueBtn, 885, 565, this.wCon2, this.hCon2); 
                }
                break;
        }

        this.hover();
    }

    //Animation, kinda
    hover() {
        //Start button
        if (this.mouse(820, 1070, 385, 465) && this.screen === 0) {
            this.wStart = 280;
            this.hStart = 90;
        } else {
            this.wStart = 250;
            this.hStart = 80;
        }

        //Continue button 1
        if (this.mouse(885, 1135, 565, 640) && this.screen === 1) {
            this.wCon = 280;
            this.hCon = 90;
        } else {
            this.wCon = 250;
            this.hCon = 80;
        }

        //Continue button 1
        if (this.mouse(885, 1135, 565, 640) && this.screen === 2) {
            this.wCon2 = 280;
            this.hCon2 = 90;
        } else {
            this.wCon2 = 250;
            this.hCon2 = 80;
        }
    }

    //When clicking on buttons, switch screens
    clicked() {
        //Start button to switch to introduction screen
        if (this.mouse(820, 1070, 385, 465) && this.screen === 0) {
            this.screen = 1;
        }

        //Continue button to switch to instructions screen
        if (this.mouse(885, 1135, 565, 640) && this.screen === 1) {
            this.screen = 2;
            this.btnCounter = 0;
        }

        //Continue button to switch to symptoms screen
        if (this.mouse(885, 1135, 565, 640) && this.screen === 2) {
            this.btnCounter = 0;
            this.screenSwitch++;
            if (this.screenSwitch === 2) {
                this.screenClicked = true;
                this.screenSwitch = 0;
            }
        }
    }

    //Condition for dimensions
    mouse(x1, x2, y1, y2) {
        if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
            return true;
        } else {
            return false;
        }
    }

    isScreenClicked() {
        return this.screenClicked;
    }
}