class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this.canvas = new Canvas(canvasElement);
        this.mathHelper = new MathHelper;
        this.question = new Question;
        this.player = new Player;
        this.highscore = new Highscore;
        this.introText = new IntroText;
        this.startScreen = new StartScreen;
        this.europeScreen = new EuropeScreen;
        this.countryScreen = new CountryScreen;
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
    const spelletje = new Game();
    spelletje.gameLoop();
}
class Mapview {
    constructor() {
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
        buttonElement.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, this.getCenter().X, this.getCenter().Y);
            this.writeTextToCanvas("Play", 20, this.getCenter().X, this.getCenter().Y, "black", "center");
        });
        this.canvas.addEventListener("click", (event) => {
            if (event.x > this.getCenter().X && event.x < this.getCenter().X) {
                if (event.y > this.getCenter().Y && event.y < this.getCenter().Y) {
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
    constructor() {
        super();
    }
    draw() {
    }
}
class EuropeScreen extends Mapview {
    constructor() {
        super();
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
    }
    draw() {
    }
}
//# sourceMappingURL=app.js.map