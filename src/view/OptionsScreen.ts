class OptionsScreen {
    private canvas: Canvas;
    private listeners: Array<(event: MouseEvent) => void> = [];

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas = new Canvas(canvasElement);
    }

    public draw() {
        this.canvas.writeTextToCanvas('Optiescherm', 125, this.canvas.getWidth() / 2, this.canvas.getHeight() / 4.2, PlayerHandler.getFontColor(), 'center', 'Old English Text MT')
        this.writeLettertypesToCanvas();
        this.writeTextColourToCanvas();
        this.writeDifficultyToCanvas();
        this.letterType1Button();
        this.letterType2Button();
        this.letterType3Button();
        this.letterType4Button();
        this.letterType5Button();
        this.letterStyle1Button();
        this.letterStyle2Button();
        this.letterStyle3Button();
        this.letterStyle4Button();
        this.letterStyle5Button();
        this.difficultyNormalButton();
        this.difficultyHardButton();
        this.canvas.writeButtonToCanvas('./assets/images/back-button.png', this.canvas.getCenter().X + 610, this.canvas.getCenter().Y + 300, " ", 35, this.canvas.getCenter().X, this.canvas.getCenter().Y, 'black', 'center', 'ariel');
        this.optionButton();
    }

    public writeLettertypesToCanvas() {
        this.canvas.writeTextToCanvas('Lettertype:', 50, this.canvas.getWidth() / 2, this.canvas.getHeight() / 3, PlayerHandler.getFontColor(), 'center', PlayerHandler.getFontStyle());
        // this.canvas.writeButtonToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 - 615, this.canvas.getHeight() / 2.5, 'Pristina', 30, this.canvas.getWidth() / 2 - 510, this.canvas.getHeight() / 2.33, PlayerHandler.getFontColor(), 'center', 'Pristina ');
        this.canvas.writeButtonAndStrokeTextToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 - 615, this.canvas.getHeight() / 2.5, 'Pristina', 30, this.canvas.getWidth() / 2 - 510, this.canvas.getHeight() / 2.33, PlayerHandler.getFontColor(), 'center', 'Pristina', 'black');
        this.canvas.writeButtonAndStrokeTextToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 - 370, this.canvas.getHeight() / 2.5, 'Old English Text MT', 20, this.canvas.getWidth() / 2 - 260, this.canvas.getHeight() / 2.33, PlayerHandler.getFontColor(), 'center', 'Old English Text MT', 'black');
        this.canvas.writeButtonAndStrokeTextToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 - 111, this.canvas.getHeight() / 2.5, 'Arial', 30, this.canvas.getWidth() / 2, this.canvas.getHeight() / 2.33, PlayerHandler.getFontColor(), 'center', 'Arial', 'black');
        this.canvas.writeButtonAndStrokeTextToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 + 141, this.canvas.getHeight() / 2.5, 'Times New Roman', 25, this.canvas.getWidth() / 2 + 250, this.canvas.getHeight() / 2.36, PlayerHandler.getFontColor(), 'center', 'Times New Roman', 'black');
        this.canvas.writeButtonAndStrokeTextToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 + 393, this.canvas.getHeight() / 2.5, 'Comic Sans MS', 25, this.canvas.getWidth() / 2 + 505, this.canvas.getHeight() / 2.33, PlayerHandler.getFontColor(), 'center', 'Comic Sans MS', 'black');
    }
    public writeTextColourToCanvas() {
        this.canvas.writeTextToCanvas('Tekstkleur:', 50, this.canvas.getWidth() / 2, this.canvas.getHeight() / 1.8, PlayerHandler.getFontColor(), 'center', PlayerHandler.getFontStyle());
        this.canvas.writeButtonToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 - 615, this.canvas.getHeight() / 1.5 - 39, 'Zwart', 30, this.canvas.getWidth() / 2 - 510, this.canvas.getHeight() / 1.53, 'black', 'center', PlayerHandler.getFontStyle());
        this.canvas.writeButtonAndStrokeTextToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 - 363, this.canvas.getHeight() / 1.5 - 39, 'Wit', 30, this.canvas.getWidth() / 2 - 260, this.canvas.getHeight() / 1.53, 'white', 'center', PlayerHandler.getFontStyle(), 'black');
        this.canvas.writeButtonToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 - 111, this.canvas.getHeight() / 1.5 - 39, 'Blauw', 30, this.canvas.getWidth() / 2, this.canvas.getHeight() / 1.53, 'DarkTurquoise', 'center', PlayerHandler.getFontStyle());
        this.canvas.writeButtonToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 + 141, this.canvas.getHeight() / 1.5 - 39, 'Roze', 30, this.canvas.getWidth() / 2 + 250, this.canvas.getHeight() / 1.53, 'DeepPink', 'center', PlayerHandler.getFontStyle());
        this.canvas.writeButtonToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 + 393, this.canvas.getHeight() / 1.5 - 39, 'Groen', 30, this.canvas.getWidth() / 2 + 500, this.canvas.getHeight() / 1.53, 'lime', 'center', PlayerHandler.getFontStyle());
    }
    public writeDifficultyToCanvas() {
        this.canvas.writeTextToCanvas('Moeilijkheidgraad:', 50, this.canvas.getWidth() / 2, this.canvas.getHeight() / 1.25, PlayerHandler.getFontColor(), 'center', PlayerHandler.getFontStyle());
        this.canvas.writeButtonAndStrokeTextToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 - 242, this.canvas.getHeight() / 1.1 - 39, 'Makkelijk', 30, this.canvas.getWidth() / 2 - 135, this.canvas.getHeight() / 1.1 - 10, PlayerHandler.getFontColor(), 'center', PlayerHandler.getFontStyle(), 'black');
        this.canvas.writeButtonAndStrokeTextToCanvas('./assets/images/buttonYellow.png', this.canvas.getWidth() / 2 + 20, this.canvas.getHeight() / 1.1 - 39, 'Moeilijk', 30, this.canvas.getWidth() / 2 + 125, this.canvas.getHeight() / 1.1 - 10, PlayerHandler.getFontColor(), 'center', PlayerHandler.getFontStyle(), 'black');
    }

    private removeButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }

    public letterType1Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X - 615 && event.x < this.canvas.getCenter().X - 393) {
                if (event.y > this.canvas.getHeight() / 2.5 && event.y < this.canvas.getHeight() / 2.5 + 39) {

                    // lettertype 1
                    PlayerHandler.setFontStyle('Pristina')
                    console.log('Pristina is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public letterType2Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X - 363 && event.x < this.canvas.getCenter().X - 141) {
                if (event.y > this.canvas.getHeight() / 2.5 && event.y < this.canvas.getHeight() / 2.5 + 39) {

                    // lettertype 2
                    PlayerHandler.setFontStyle('Old English Text MT')
                    console.log('Old English Text MT is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public letterType3Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X - 111 && event.x < this.canvas.getCenter().X + 111) {
                if (event.y > this.canvas.getHeight() / 2.5 && event.y < this.canvas.getHeight() / 2.5 + 39) {

                    // lettertype 3
                    PlayerHandler.setFontStyle('Arial')
                    console.log('Arial is gedrukt');
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public letterType4Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 141 && event.x < this.canvas.getCenter().X + 363) {
                if (event.y > this.canvas.getHeight() / 2.5 && event.y < this.canvas.getHeight() / 2.5 + 39) {

                    // lettertype 4
                    PlayerHandler.setFontStyle('Times New Roman')
                    console.log('Times New Roman is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public letterType5Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 393 && event.x < this.canvas.getCenter().X + 615) {
                if (event.y > this.canvas.getHeight() / 2.5 && event.y < this.canvas.getHeight() / 2.5 + 39) {

                    // lettertype 5
                    PlayerHandler.setFontStyle('Comic Sans MS')
                    console.log('Comic Sans MS is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }

    public letterStyle1Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X - 615 && event.x < this.canvas.getCenter().X - 393) {
                if (event.y > this.canvas.getHeight() / 1.5 - 39 && event.y < this.canvas.getHeight() / 1.5) {

                    // Tekstkleur 1
                    PlayerHandler.setFontColor('Black')
                    console.log('Tekstkleur ZWART is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public letterStyle2Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X - 363 && event.x < this.canvas.getCenter().X - 141) {
                if (event.y > this.canvas.getHeight() / 1.5 - 39 && event.y < this.canvas.getHeight() / 1.5) {

                    // Tekstkleur 2
                    PlayerHandler.setFontColor('White')
                    console.log('Tekstkleur WIT is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public letterStyle3Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X - 111 && event.x < this.canvas.getCenter().X + 111) {
                if (event.y > this.canvas.getHeight() / 1.5 - 39 && event.y < this.canvas.getHeight() / 1.5) {

                    // Tekstkleur 3
                    PlayerHandler.setFontColor('DarkTurquoise')
                    console.log('Tekstkleur BLAUW is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public letterStyle4Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 141 && event.x < this.canvas.getCenter().X + 363) {
                if (event.y > this.canvas.getHeight() / 1.5 - 39 && event.y < this.canvas.getHeight() / 1.5) {

                    // Tekstkleur 4
                    PlayerHandler.setFontColor('DeepPink')
                    console.log('Tekstkleur ROZE is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public letterStyle5Button() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 393 && event.x < this.canvas.getCenter().X + 615) {
                if (event.y > this.canvas.getHeight() / 1.5 - 39 && event.y < this.canvas.getHeight() / 1.5) {

                    // Tekstkleur 5
                    PlayerHandler.setFontColor('Lime')
                    console.log('Tekstkleur GROEN is gedrukt');
                    this.removeButtons();
                    ScreenSwitch.draw('optionsScreen')
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }

    public difficultyNormalButton() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getWidth() / 2 - 242 && event.x < this.canvas.getCenter().X - 20) {
                if (event.y > this.canvas.getHeight() / 1.1 - 39 && event.y < this.canvas.getHeight() / 1.1) {

                    // difficulty normal
                    console.log('Makkelijk is gedrukt');
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
    public difficultyHardButton() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 20 && event.x < this.canvas.getCenter().X + 242) {
                if (event.y > this.canvas.getHeight() / 1.1 - 39 && event.y < this.canvas.getHeight() / 1.1) {

                    // difficulty hard
                    console.log('Moelijk is gedrukt');
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }

    public optionButton() {
        let startListener = (event: MouseEvent) => {
            if (event.x > this.canvas.getCenter().X + 610 && event.x < this.canvas.getCenter().X + 685) {
                if (event.y > this.canvas.getCenter().Y + 300 && event.y < this.canvas.getCenter().Y + 375) {

                    ScreenSwitch.drawPrevious();
                    this.removeButtons();
                }
            }
        }
        this.listeners.push(startListener)
        window.addEventListener('click', startListener)
    }
}