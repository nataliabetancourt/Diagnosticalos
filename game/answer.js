class Answer {
    constructor(img) {
        //Image variables
        this.x = 685;
        this.y = 490;
        this.width = 570;
        this.height = 280;

        //Loading answer image
        this.img = loadImage(img);
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }
}