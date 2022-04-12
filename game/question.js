class Question {
    constructor(y, height, img, points){
        //Question image variables
        this.x = 125;
        this.y = y;
        this.width = 385;
        this.height = height;

        //Points added to final score
        this.points = points;

        //Loading question image
        this.img = loadImage(img);

        //If clicked, hide
        this.click = false;
    }

    draw() {
        //Question image
        if (this.click == false) {
            image(this.img, this.x, this.y, this.width, this.height);
        }
    }

    clicked() {
        if (mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.height) {
            return true;
        } else {
            return false;
        }
    }

    getPoints() {
        return this.points;
    }

    setClick(click) {
        this.click = click;
    }
}