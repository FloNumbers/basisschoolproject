class Game {
    constructor(canvas) {
        const canvasElement = document.getElementById("canvas");
        this.canvas = new Canvas(canvasElement);
        this.mathHelper = new MathHelper;
        this.question = new Question;
        this.player = new Player;
        this.highscore = new Highscore;
        this.introText = new IntroText;
        this.startScreen = new StartScreen;
        this.europeScreen = new EuropeScreen(canvas);
        this.countryScreen = new CountryScreen(canvas);
        this.shopScreen = new ShopScreen;
    }
    draw() {
        this.startScreen.draw();
        this.europeScreen.draw();
        this.countryScreen.draw();
        this.shopScreen.draw();
    }
    gameLoop() {
        window.setInterval(() => this.draw(), 1000 / 60);
    }
}
window.addEventListener("load", init);
function init() {
    const spelletje = new Game(document.getElementById('canvas'));
    spelletje.gameLoop();
}
class Mapview {
    constructor(canvas) {
        this.canvas = new Canvas(canvas);
    }
}
class Highscore {
}
class IntroText {
}
class Player {
    constructor() {
    }
}
class Question {
}
class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
    }
    writeTextToCanvas(text, fontSize, xCoordinate, yCoordinate, color = "white", alignment = "center") {
        this.ctx.font = `${fontSize}px Arial`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    writeImageToCanvas(src, xCoordinate, yCoordinate) {
        const image = new Image();
        image.src = src;
        image.onload = () => {
            this.ctx.drawImage(image, xCoordinate, yCoordinate);
        };
    }
    getWidth() {
        return this.canvas.width;
    }
    getHeight() {
        return this.canvas.height;
    }
    getCenter() {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };
    }
    clearScreen() {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    writeButtonToCanvas() {
        let buttonElement = document.createElement("img");
        buttonElement.src = "./assets/images/buttonYellow.png";
        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, this.getCenter().X - 111, this.getCenter().Y - 30);
            this.writeTextToCanvas("START!", 35, this.getCenter().X, this.getCenter().Y, "black", "center");
        });
        this.canvas.addEventListener("click", (event) => {
            if (event.x > this.getCenter().X - 111 && event.x < this.getCenter().X + 111) {
                if (event.y > this.getCenter().Y - 30 && event.y < this.getCenter().Y + 30) {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                }
            }
        });
    }
}
class MathHelper {
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class CountryScreen extends Mapview {
    constructor(canvas) {
        super(canvas);
    }
    draw() {
    }
}
class EuropeScreen extends Mapview {
    constructor(canvas) {
        super(canvas);
    }
    draw() {
    }
}
class ShopScreen {
    constructor() {
    }
    draw() {
    }
}
class StartScreen {
    constructor() {
        const canvasElement = document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
        this.canvas.writeButtonToCanvas();
    }
    draw() {
        this.canvas.writeTextToCanvas('Waar is deze geschiedenis?', 100, this.canvas.getWidth() / 2, this.canvas.getHeight() / 6, 'black', 'center');
    }
}
//# sourceMappingURL=app.js.map