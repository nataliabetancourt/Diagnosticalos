class Diagnosis {
    constructor(x, y, sickness){
        //Square variables
        this.x = x;
        this.y = y;
        this.sides = 30;
        this.color = color(158, 171, 243);

        //Information
        this.sickness = sickness;
    }

    draw() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.sides, this.sides, 5);

        this.hover();
    }

    hover() {
        if (mouseX > this.x && mouseX < this.x+this.sides && mouseY > this.y && mouseY < this.y+this.sides) {
            this.color = color(236, 56, 11);
        } else {
            this.color = color(158, 171, 243);
        }
    }

    isClicked() {
        if (mouseX > this.x && mouseX < this.x+this.sides && mouseY > this.y && mouseY < this.y+this.sides) {
            this.color = color(236, 56, 11);
            return true;
        } else {
            return false;
        }
    }

    getSickness() {
        return this.sickness;
    }
}