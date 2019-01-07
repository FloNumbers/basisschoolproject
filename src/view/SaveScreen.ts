class SaveScreen {
    private canvas: Canvas
    private saveImage: HTMLImageElement
    private listeners: Array<(event: MouseEvent) => void> = [];

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = new Canvas(canvas)
        this.saveImage = new Image()
        this.saveImage.src = './assets/images/Wereldbol.png'
    }

    public draw() {
        for (let index = 0; index < 3; index++) {
            if (localStorage.getItem(`Player${index + 1}`)) {
                this.canvas.writeTextToCanvas(JSON.parse(localStorage.getItem(`Player${index + 1}`)).name, 75, this.canvas.getWidth() * (0.25 * (index + 1)), this.canvas.getHeight() * 0.75, "black", "center", "Pristina")
            } else {
                this.canvas.writeTextToCanvas(`Speler ${index + 1}`, 75, this.canvas.getWidth() * (0.25 * (index + 1)), this.canvas.getHeight() * 0.75, "black", "center", "Pristina")
            }
        }
        for (let index = 1; index <= 3; index++) {
            this.canvas.writeImageToCanvas('./assets/images/Wereldbol.png', this.canvas.getWidth() * (0.25 * index) - this.saveImage.width / 4, this.canvas.getCenter().Y - this.saveImage.height / 3, this.saveImage.width / 2, this.saveImage.height / 2)
        }
        this.clickHandler()
    }

    private removeButtons() {
        this.listeners.forEach(e => {
            window.removeEventListener('click', e);
        });
    }

    private clickHandler() {
        for (let index = 0; index < 3; index++) {
            let loadSaveFile = (event: MouseEvent) => {
                if (event.x > this.canvas.getWidth() * (0.25 * (index + 1)) - this.saveImage.width / 4 && event.x < this.canvas.getWidth() * (0.25 * (index + 1)) + this.saveImage.width / 4) {
                    if (event.y > this.canvas.getCenter().Y - this.saveImage.height / 3 && event.y < this.canvas.getCenter().Y - this.saveImage.height / 3 + this.saveImage.height / 2) {
                        if (this.canvas.getColor(event.x, event.y, 1, 1, 3) !== 0) {
                            if (localStorage.getItem(`Player${index + 1}`)) {
                                PlayerHandler.loadPlayer(index + 1)
                                ScreenSwitch.draw('europeScreen')
                            } else {
                                PlayerHandler.createSaveFile(index + 1)
                                ScreenSwitch.draw('startScreen')
                            }
                            this.removeButtons()
                        }
                    }
                }
            }
            this.listeners.push(loadSaveFile)
            window.addEventListener('click', loadSaveFile)
        }
    }
}